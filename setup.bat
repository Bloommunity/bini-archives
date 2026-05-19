@echo off
REM Quick setup script for BINI Archives (Windows)

echo.
echo 🎉 Welcome to BINI Archives!
echo.
echo Setting up your development environment...
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Node.js is not installed. Please install Node.js 16+ first.
    echo Visit: https://nodejs.org/
    pause
    exit /b 1
)

echo ✓ Node.js version:
node --version
echo.

REM Install dependencies
echo 📦 Installing dependencies...
call npm install

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ✓ Dependencies installed successfully!
    echo.
    echo 🚀 You can now run:
    echo    npm run dev      - Start development server
    echo    npm run build    - Build for production
    echo    npm run generate - Generate static site
    echo.
    echo 📖 Visit http://localhost:3000 after running 'npm run dev'
    echo.
    echo 📚 Documentation:
    echo    - README.md              - Project overview
    echo    - DATA_SCHEMA.md         - Data structure guide
    echo    - IMPLEMENTATION_SUMMARY.md - What's been built
) else (
    echo.
    echo ❌ Installation failed. Please check your internet connection.
    pause
    exit /b 1
)

pause
