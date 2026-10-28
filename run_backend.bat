@echo off
title Pasumai AgriScan - FastAPI Backend Server
cd /d "%~dp0backend"
echo ========================================================
echo  🌾 Starting Pasumai AgriScan FastAPI Backend (Port 8000)
echo ========================================================

set PYTHON_EXE=%LOCALAPPDATA%\Programs\Python\Python312\python.exe
if not exist "%PYTHON_EXE%" (
    set PYTHON_EXE=python
)

"%PYTHON_EXE%" -m uvicorn app.main:app --host 127.0.0.1 --port 8000 --reload
pause
