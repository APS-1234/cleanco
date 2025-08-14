#!/bin/bash
set -e

echo "Starting build process..."
echo "Node version: $(node --version)"
echo "NPM version: $(npm --version)"

echo "Installing dependencies..."
npm ci

echo "Building the application..."
npm run build

echo "Build completed successfully!"
