# 🌾 Pasumai AgriScan (பசுமை அக்ரி ஸ்கேன்) - Full-Stack Edition
### AI-Powered Farm Field Scanner, Crop Disease Detector & Agronomic Advisory System
**Complete Frontend-to-Backend Architecture with FastAPI, SQLite, Leaflet, and Computer Vision**

---

## 🏗️ Full-Stack System Architecture

```
                                  +---------------------------------------+
                                  |    Browser / Mobile PWA (Frontend)    |
                                  |   HTML5 Canvas + Tailwind + Leaflet  |
                                  +-------------------+-------------------+
                                                      |
                                    REST API / JSON   |   CORS Enabled
                                    (Port 8000 /api)  |
                                                      v
+---------------------------------------------------------------------------------------------------+
|                                     FastAPI Backend Server                                        |
+---------------------------------------------------------------------------------------------------+
|  Endpoints (/api):                                                                                |
|    • POST /api/scan/upload    -> Computer Vision Image Segmentation & Bounding Boxes              |
|    • POST /api/scan/base64    -> Multi-Spectral NDVI False-Color Mapping                          |
|    • GET  /api/field/map      -> GeoJSON Field Plots, NDVI Health Heatmaps, Anomaly Markers       |
|    • POST /api/field/drone    -> Autonomous Drone Flight Telemetry & Waypoints                    |
|    • GET  /api/weather        -> Live Open-Meteo Weather & Spray Safety Index                     |
|    • POST /api/calculator     -> Acreage Spray Dosage, Tank Count & Cost Estimator                |
|    • POST /api/wizard         -> Agronomic Symptom Triage Questionnaire Matcher                   |
|    • GET/POST/DEL /api/history-> SQLite Persistent Scan History CRUD                              |
|    • POST /api/auth/register  -> Farmer & Agronomist User Account Registration                    |
|    • POST /api/auth/login     -> Secure Salted-Hash Login & Session Management                    |
|    • GET  /api/auth/me        -> User Profile & Preferred Crop Settings                           |
+---------------------------------------------------------------------------------------------------+
                                                      |
                                                      v
                                        +---------------------------+
                                        |    SQLite Database        |
                                        |   (backend/data/scans.db) |
                                        +---------------------------+
```

---

## 🌟 Full-Stack Features

### 1. 🖥️ Backend Architecture (`backend/`)
- **FastAPI REST API Framework**: High-performance asynchronous Python backend with automatic OpenAPI Swagger documentation at [`http://127.0.0.1:8000/docs`](http://127.0.0.1:8000/docs).
- **Computer Vision Service (`cv_engine.py`)**:
  - Image analysis using Pillow and statistical color segmentation.
  - Excess Green Index (ExG: $2G - R - B$) vegetation vigor calculation.
  - Connected component anomaly clustering producing lesion bounding boxes `[x, y, w, h, score]`.
  - False-color multi-spectral NDVI JPEG generation rendered in base64.
- **SQLite Database (`database.py`)**:
  - Automatically initializes and manages `backend/data/scans.db`.
  - Persists crop name, diagnosed disease, confidence, severity level, thumbnail image, date/time, and treatment status.
- **Microclimate Service (`weather_service.py`)**:
  - Real-time Open-Meteo weather integration.
  - Calculates wind drift hazard, rain wash-off risks, and optimal morning (6:30-9:30 AM) and evening (4:30-6:30 PM) spraying windows.
- **Dosage Calculator Engine**:
  - Computes exact tank count and water liters for 16L Knapsack, 25L Power Sprayer, 10L Drone, and 200L Tractor Boom Sprayers.
- **User Authentication & Farmer Portal (`auth.js` & `endpoints.py`)**:
  - Secure registration and login with SHA-256 salted password hashing.
  - Farmer profile tracking (Name, Phone, Email, District, and Primary Crop).
  - Associates farm scan history with individual farmers and agronomists.

### 2. 🎨 Frontend Architecture (`frontend/`)
- **Farmer & Agronomist Auth Portal**: Interactive Login and Sign Up modal with 1-click demo profiles (Ramanathan - Farmer, Dr. Geetha - Agronomist), show/hide password, and bilingual Tamil/English support.
- **Unified API Client (`api-client.js`)**: Connects to the backend REST API with automatic health checking and fallback capabilities.
- **Live Camera & Photo Viewfinder**: Real-time video stream with autofocus reticle, camera flipping (front/back), and image snapshot scanning.
- **Multi-Spectral Viewport**: Interactive filter switcher (Normal, NDVI False-Color, Chlorosis Yellowing, Necrosis Isolation, and Lesion Edges).
- **Interactive Satellite Map**: Leaflet.js with ESRI satellite tiles, plot polygons, and autonomous drone flyover simulation.
- **Bilingual & Voice Audio Readout**: Full English and **Tamil (தமிழ்)** translation with Text-to-Speech synthesis.
- **Offline PWA**: Service Worker caching for field operations with spotty cellular reception.

---

## 🚀 How to Run the Full-Stack App

### Option A: One-Click Full-Stack Launcher (Recommended)
Double-click [**`run_fullstack.bat`**](file:///c:/Users/BATHMAPRIYA/Desktop/pasumai/run_fullstack.bat) in the project root:
- Automatically starts the **FastAPI Backend Server** on `http://127.0.0.1:8000`.
- Automatically opens your browser pointing to the full-stack app.
- Interactive API Documentation will be available at: [`http://127.0.0.1:8000/docs`](http://127.0.0.1:8000/docs).

### Option B: Run Backend and Frontend Separately

1. **Start the Backend Server**:
   Double-click [**`run_backend.bat`**](file:///c:/Users/BATHMAPRIYA/Desktop/pasumai/run_backend.bat) or run in terminal:
   ```powershell
   cd c:\Users\BATHMAPRIYA\Desktop\pasumai\backend
   python -m uvicorn app.main:app --host 127.0.0.1 --port 8000 --reload
   ```

2. **Open the Frontend**:
   Open [**`frontend/index.html`**](file:///c:/Users/BATHMAPRIYA/Desktop/pasumai/frontend/index.html) in your browser, or visit `http://127.0.0.1:8000/` (served directly by FastAPI).

---

## 📂 Project Directory Structure

```
c:\Users\BATHMAPRIYA\Desktop\pasumai\
├── run_fullstack.bat               # One-click full-stack launcher
├── run_backend.bat                 # Launches FastAPI backend server
├── start.bat                       # Lightweight standalone launcher
├── README.md                       # Comprehensive documentation
│
├── backend/                        # Backend REST API Service
│   ├── requirements.txt            # Python dependencies (fastapi, uvicorn, pillow, requests, etc.)
│   ├── data/
│   │   └── scans.db                # SQLite database for scan records
│   └── app/
│       ├── main.py                 # FastAPI application & static mount
│       ├── api/
│       │   └── endpoints.py        # All REST API route controllers
│       ├── models/
│       │   └── diseases.py         # Agricultural pathology & IPM database
│       └── services/
│           ├── cv_engine.py        # Computer vision & NDVI processing
│           ├── weather_service.py  # Open-Meteo weather integration
│           └── database.py         # SQLite CRUD manager
│
└── frontend/                       # Frontend Web Client
    ├── index.html                  # Master dashboard with API status indicator
    ├── manifest.json               # PWA configuration
    ├── css/
    │   └── style.css               # Styling, laser reticles, and print layouts
    ├── js/
    │   ├── api-client.js           # REST API communication client
    │   ├── app.js                  # Frontend controller & UI state
    │   ├── scanner.js              # Client-side visualization & filters
    │   ├── samples.js              # Synthetic crop leaf specimen generator
    │   ├── field-map.js            # Satellite map & drone scan simulator
    │   ├── weather.js              # Microclimate consumer
    │   ├── calculator.js           # Spray dosage calculator
    │   ├── speech.js               # Voice readout (English & Tamil)
    │   ├── wizard.js               # Symptom diagnostic triage
    │   └── data/
    │       └── diseases.js         # Client-side knowledge base
    └── assets/
        └── icon.svg                # Agricultural application icon
```

---

## 🧪 Interactive API Documentation (Swagger UI)

When the backend is running, open:
- **Swagger UI**: [`http://127.0.0.1:8000/docs`](http://127.0.0.1:8000/docs)
- **ReDoc**: [`http://127.0.0.1:8000/redoc`](http://127.0.0.1:8000/redoc)

You can test all endpoints (`/api/scan/upload`, `/api/field/map`, `/api/weather`, `/api/calculator`, etc.) interactively with sample payloads!
