@echo off
title Pasumai AgriScan - Full Stack (Backend + Frontend)
cd /d "%~dp0"
echo ======================================================================
echo  🌾 Launching Pasumai AgriScan Full-Stack System
echo  Backend: FastAPI REST API on http://127.0.0.1:8000/api
echo  Swagger Docs: http://127.0.0.1:8000/docs
echo  Frontend: http://127.0.0.1:8000/
echo ======================================================================

set PYTHON_EXE=%LOCALAPPDATA%\Programs\Python\Python312\python.exe
if not exist "%PYTHON_EXE%" (
    set PYTHON_EXE=python
)

start "Pasumai AgriScan Backend" "%PYTHON_EXE%" -m uvicorn app.main:app --app-dir "%~dp0backend" --host 127.0.0.1 --port 8000

echo Waiting for backend server to initialize...
timeout /t 2 /nobreak >nul

echo Opening browser at http://127.0.0.1:8000
start http://127.0.0.1:8000
