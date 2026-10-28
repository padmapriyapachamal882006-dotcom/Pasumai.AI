@echo off
title Pasumai AgriScan - AI Farm Field & Crop Health Scanner
echo ========================================================
echo Starting Pasumai AgriScan Local Server...
echo ========================================================
powershell -ExecutionPolicy Bypass -File "%~dp0serve.ps1"
pause
