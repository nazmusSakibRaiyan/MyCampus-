@echo off
title BRAC University Connect - Start All Services
color 0B

echo =========================================
echo   STARTING ALL BRAC CONNECT SERVICES
echo =========================================
echo.

REM Check MongoDB
echo Checking MongoDB...
sc query MongoDB >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ MongoDB not installed! Run setup.bat first.
    pause
    exit /b 1
)

net start MongoDB >nul 2>&1

echo ✅ MongoDB ready
echo.

echo Starting Backend Server in new window...
start "BRAC Backend Server" cmd /k "cd /d \"D:\BRAC\project\Campus Connect Suite\brac-university-connect\backend\" && npm run dev"

echo.
echo Waiting 5 seconds for backend to initialize...
timeout /t 5 /nobreak >nul

echo Starting Mobile App in new window...
start "BRAC Mobile App" cmd /k "cd /d \"D:\BRAC\project\Campus Connect Suite\brac-university-connect\mobile\" && npx expo start"

echo.
echo =========================================
echo        ALL SERVICES STARTED!
echo =========================================
echo.
echo Backend Server: http://localhost:5000
echo Mobile App: Check the Expo window for QR code
echo.
echo Test Credentials:
echo Student: john.doe@g.bracu.ac.bd / password123
echo Faculty: dr.rahman@bracu.ac.bd / password123
echo Admin: super.admin@bracu.ac.bd / admin123
echo.
echo Press any key to close this window...
pause >nul
