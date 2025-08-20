@echo off
echo Seeding BRAC University Connect Database...
echo.

REM Check if MongoDB is running
echo Checking MongoDB service...
sc query MongoDB >nul 2>&1
if %errorlevel% neq 0 (
    echo MongoDB service not found. Please install MongoDB Community Edition.
    echo Download from: https://www.mongodb.com/try/download/community
    pause
    exit /b 1
)

REM Start MongoDB service if not running
net start MongoDB >nul 2>&1
if %errorlevel% equ 0 (
    echo MongoDB service started successfully.
) else (
    echo MongoDB service is already running.
)

echo.
echo Changing to backend directory...
cd /d "D:\BRAC\project\Campus Connect Suite\brac-university-connect\backend"

echo.
echo Building TypeScript...
call npm run build

echo.
echo Running database seeder...
call npx ts-node src/seeders/database-seeder.ts

pause
