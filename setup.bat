@echo off
title BRAC University Connect - Complete Setup
color 0A

echo =========================================
echo    BRAC UNIVERSITY CONNECT SETUP
echo =========================================
echo.

echo 1. Setting up Backend...
echo.

cd /d "D:\BRAC\project\Campus Connect Suite\brac-university-connect\backend"

echo Installing backend dependencies...
call npm install
if %errorlevel% neq 0 (
    echo Error installing backend dependencies!
    pause
    exit /b 1
)

echo Building backend...
call npm run build
if %errorlevel% neq 0 (
    echo Error building backend!
    pause
    exit /b 1
)

echo.
echo 2. Setting up Mobile App...
echo.

cd /d "D:\BRAC\project\Campus Connect Suite\brac-university-connect\mobile"

echo Installing mobile dependencies...
call npm install
if %errorlevel% neq 0 (
    echo Error installing mobile dependencies!
    pause
    exit /b 1
)

echo.
echo 3. Checking MongoDB...
echo.

sc query MongoDB >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ MongoDB service not found!
    echo.
    echo Please install MongoDB Community Edition:
    echo 1. Download from: https://www.mongodb.com/try/download/community
    echo 2. Install with default settings
    echo 3. Ensure MongoDB service is running
    echo.
    pause
    exit /b 1
) else (
    echo ✅ MongoDB service found
    net start MongoDB >nul 2>&1
    if %errorlevel% equ 0 (
        echo ✅ MongoDB service started
    ) else (
        echo ✅ MongoDB service already running
    )
)

echo.
echo =========================================
echo         SETUP COMPLETED!
echo =========================================
echo.
echo Next steps:
echo 1. Run 'seed-database.bat' to populate the database
echo 2. Run 'start-backend.bat' to start the API server
echo 3. Run 'start-mobile.bat' to start the mobile app
echo.
echo Or run 'start-all.bat' to start everything at once
echo.

pause
