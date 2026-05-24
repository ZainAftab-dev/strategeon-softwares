@echo off
cd /d "%~dp0"
echo Starting Strategeon Softwares website...
if not exist node_modules (
  echo Installing dependencies...
  call npm install
  if errorlevel 1 pause & exit /b 1
)
echo Building production app...
call npm run build
if errorlevel 1 pause & exit /b 1
start "" http://localhost:3000
echo Website running at http://localhost:3000
call npm run start -- -p 3000
pause
