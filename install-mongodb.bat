@echo off
title MongoDB Installation Guide
color 0E

echo =========================================
echo    MONGODB INSTALLATION GUIDE
echo =========================================
echo.
echo BRAC University Connect can run in two modes:
echo.
echo 1. MOCK MODE (Currently Running)
echo    - No database required
echo    - Uses in-memory test data
echo    - Perfect for testing and development
echo.
echo 2. FULL DATABASE MODE
echo    - Requires MongoDB installation
echo    - Persistent data storage
echo    - Production-ready setup
echo.
echo =========================================
echo.

echo To install MongoDB Community Edition:
echo.
echo 1. Visit: https://www.mongodb.com/try/download/community
echo 2. Download for Windows
echo 3. Install with default settings
echo 4. Ensure "Install MongoDB as a Service" is checked
echo 5. Complete the installation
echo.
echo After installation:
echo 1. Run "seed-database.bat" to populate test data
echo 2. Restart backend with "npm run dev" in backend folder
echo.
echo =========================================
echo.
echo Current Status: MOCK MODE ACTIVE
echo Backend: http://localhost:5000
echo Mobile App: Check Expo QR code
echo.
echo Press any key to close...
pause >nul
