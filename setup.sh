#!/bin/bash
# Quick setup script for BINI Archives

echo "🎉 Welcome to BINI Blooming Legacy Archive!"
echo ""
echo "Setting up your development environment..."
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 16+ first."
    exit 1
fi

echo "✓ Node.js version: $(node --version)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✓ Dependencies installed successfully!"
    echo ""
    echo "🚀 You can now run:"
    echo "   npm run dev      - Start development server"
    echo "   npm run build    - Build for production"
    echo "   npm run generate - Generate static site"
    echo ""
    echo "📖 Visit http://localhost:3000 after running 'npm run dev'"
    echo ""
    echo "📚 Documentation:"
    echo "   - README.md              - Project overview"
    echo "   - DATA_SCHEMA.md         - Data structure guide"
    echo "   - IMPLEMENTATION_SUMMARY.md - What's been built"
else
    echo "❌ Installation failed. Please check your internet connection."
    exit 1
fi
