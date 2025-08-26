const { execSync } = require('child_process');
const fs = require('fs-extra');
const path = require('path');

console.log('🚀 Starting custom deployment...');

// Build the project
console.log('📦 Building project...');
execSync('npm run build', { stdio: 'inherit' });

// Create a temporary directory with a shorter path
const tempDir = path.join(process.cwd(), 'temp-deploy');
if (fs.existsSync(tempDir)) {
  fs.rmSync(tempDir, { recursive: true, force: true });
}
fs.mkdirSync(tempDir);

// Copy build files to temp directory
console.log('📋 Copying build files...');
fs.copySync('build', path.join(tempDir, 'build'));

// Copy build files to root of temp directory for GitHub Pages
console.log('📋 Setting up for GitHub Pages...');
fs.copySync('build', tempDir);

// Remove any README.md or other files that might interfere
console.log('🧹 Cleaning up conflicting files...');
const filesToRemove = ['README.md', '.github', 'src', 'public', 'package.json', 'package-lock.json'];
filesToRemove.forEach(file => {
  const filePath = path.join(tempDir, file);
  if (fs.existsSync(filePath)) {
    if (fs.lstatSync(filePath).isDirectory()) {
      fs.removeSync(filePath);
    } else {
      fs.unlinkSync(filePath);
    }
  }
});

// Change to temp directory
process.chdir(tempDir);

try {
  // Initialize git in temp directory
  console.log('🔧 Initializing git in temp directory...');
  execSync('git init', { stdio: 'inherit' });
  
  // Add remote
  execSync('git remote add origin https://github.com/APS-1234/cleanco.git', { stdio: 'inherit' });
  
  // Add all files
  execSync('git add .', { stdio: 'inherit' });
  
  // Commit
  execSync('git commit -m "Deploy to GitHub Pages"', { stdio: 'inherit' });
  
  // Push to gh-pages branch
  console.log('🚀 Pushing to gh-pages branch...');
  execSync('git push origin HEAD:gh-pages --force', { stdio: 'inherit' });
  
  console.log('✅ Deployment successful!');
} catch (error) {
  console.error('❌ Deployment failed:', error.message);
} finally {
  // Clean up
  process.chdir(process.cwd());
  try {
    if (fs.existsSync(tempDir)) {
      fs.rmSync(tempDir, { recursive: true, force: true });
    }
  } catch (cleanupError) {
    console.log('⚠️  Warning: Could not clean up temp directory:', cleanupError.message);
    console.log('   You can manually delete the temp-deploy folder if needed.');
  }
}
