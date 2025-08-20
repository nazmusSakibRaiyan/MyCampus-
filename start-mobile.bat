@echo off
echo Starting BRAC University Connect Mobile App...
echo.

echo Changing to mobile app directory...
cd /d "D:\BRAC\project\Campus Connect Suite\brac-university-connect\mobile"

echo.
echo Installing dependencies...
call npm install

echo.
echo Starting Expo development server...
call npx expo start

pause
