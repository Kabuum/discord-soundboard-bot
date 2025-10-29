@echo off
REM Starts backend and frontend together

echo Starting backend...
start cmd /k "cd backend && npm install && npm start"

echo Starting frontend...
start cmd /k "cd frontend && npm install && npm run dev"

echo All servers started!
pause
