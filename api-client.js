// Pasumai AgriScan - Frontend API Client
// Connects UI to the FastAPI Backend Server on http://127.0.0.1:8000/api

const PasumaiAPI = {
  // If served directly from backend, use relative path; otherwise use default backend port 8000
  baseUrl: window.location.origin.includes('8000') ? '/api' : 'http://127.0.0.1:8000/api',
  isBackendConnected: false,

  async checkHealth() {
    try {
      const res = await fetch(`${this.baseUrl}/health`, { signal: AbortSignal.timeout(2000) });
      if (res.ok) {
        this.isBackendConnected = true;
        this.updateBackendStatusUI(true);
        return true;
      }
    } catch (e) {
      this.isBackendConnected = false;
      this.updateBackendStatusUI(false);
    }
    return false;
  },

  updateBackendStatusUI(connected) {
    const badge = document.getElementById('backend-status-badge');
    if (!badge) return;
    if (connected) {
      badge.innerHTML = `<span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>⚡ Backend API: Online (Port 8000)`;
      badge.className = 'px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1.5';
    } else {
      badge.innerHTML = `⚡ Backend API: Offline (Using Local Mode)`;
      badge.className = 'px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center gap-1.5';
    }
  },

  async scanImageFile(file, cropId = 'all') {
    if (this.isBackendConnected) {
      try {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('crop_id', cropId);

        const res = await fetch(`${this.baseUrl}/scan/upload`, {
          method: 'POST',
          body: formData
        });

        if (res.ok) {
          const data = await res.json();
          return data.analysis;
        }
      } catch (err) {
        console.warn('Backend scan upload failed, using local processor fallback:', err);
      }
    }

    // Local client-side fallback
    return AgriScanner.scanImage(file, cropId);
  },

  async scanBase64(base64Data, cropId = 'all') {
    if (this.isBackendConnected) {
      try {
        const res = await fetch(`${this.baseUrl}/scan/base64`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ image_base64: base64Data, crop_id: cropId })
        });

        if (res.ok) {
          const data = await res.json();
          return data.analysis;
        }
      } catch (err) {
        console.warn('Backend base64 scan failed, using local processor:', err);
      }
    }

    // Local fallback
    const img = new Image();
    await new Promise(resolve => {
      img.onload = resolve;
      img.src = base64Data;
    });
    return AgriScanner.scanImage(img, cropId);
  },

  async getFieldMap(lat = 10.7870, lon = 79.1378) {
    if (this.isBackendConnected) {
      try {
        const res = await fetch(`${this.baseUrl}/field/map?lat=${lat}&lon=${lon}`);
        if (res.ok) return await res.json();
      } catch (e) {
        console.warn('Using local field map data');
      }
    }
    return null;
  },

  async triggerDroneScan(lat = 10.7870, lon = 79.1378) {
    if (this.isBackendConnected) {
      try {
        const res = await fetch(`${this.baseUrl}/field/drone-scan?lat=${lat}&lon=${lon}`, { method: 'POST' });
        if (res.ok) return await res.json();
      } catch (e) {
        console.warn('Using local drone simulation');
      }
    }
    return null;
  },

  async getWeather(lat = 10.7870, lon = 79.1378) {
    if (this.isBackendConnected) {
      try {
        const res = await fetch(`${this.baseUrl}/weather?lat=${lat}&lon=${lon}`);
        if (res.ok) return await res.json();
      } catch (e) {
        console.warn('Falling back to direct Open-Meteo fetch');
      }
    }
    return FarmWeather.fetchWeather(lat, lon);
  },

  async calculateDosage(params) {
    if (this.isBackendConnected) {
      try {
        const res = await fetch(`${this.baseUrl}/calculator`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            area: params.area,
            unit: params.unit,
            equipment: params.sprayMethod,
            dose_per_liter: params.dosePerLiter,
            cost_per_kg_or_l: params.productCostPerKgOrL
          })
        });
        if (res.ok) return await res.json();
      } catch (e) {
        console.warn('Using local dosage calculation');
      }
    }
    return DosageCalculator.calculate(params);
  },

  async getHistory() {
    if (this.isBackendConnected) {
      try {
        const res = await fetch(`${this.baseUrl}/history`);
        if (res.ok) {
          const data = await res.json();
          return data.history;
        }
      } catch (e) {
        console.warn('Using local storage history');
      }
    }
    return JSON.parse(localStorage.getItem('pasumai_history') || '[]');
  },

  async saveHistory(record) {
    // Save to local storage first
    const existing = JSON.parse(localStorage.getItem('pasumai_history') || '[]');
    existing.unshift(record);
    localStorage.setItem('pasumai_history', JSON.stringify(existing.slice(0, 30)));

    // Sync to SQLite backend if connected
    if (this.isBackendConnected) {
      try {
        await fetch(`${this.baseUrl}/history`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(record)
        });
      } catch (e) {
        console.warn('Failed to sync history to backend SQLite database');
      }
    }
  },

  async deleteHistory(scanId) {
    let existing = JSON.parse(localStorage.getItem('pasumai_history') || '[]');
    existing = existing.filter(item => item.id !== scanId);
    localStorage.setItem('pasumai_history', JSON.stringify(existing));

    if (this.isBackendConnected) {
      try {
        await fetch(`${this.baseUrl}/history/${scanId}`, { method: 'DELETE' });
      } catch (e) {
        console.warn('Failed to delete history on backend');
      }
    }
  },

  // User Authentication Endpoints
  async register(userData) {
    if (this.isBackendConnected) {
      try {
        const res = await fetch(`${this.baseUrl}/auth/register`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(userData)
        });
        const data = await res.json();
        if (!res.ok) {
          throw new Error(data.detail || 'Registration failed');
        }
        return data;
      } catch (err) {
        throw err;
      }
    }
    // Offline local fallback handled by auth.js
    return null;
  },

  async login(username, password) {
    if (this.isBackendConnected) {
      try {
        const res = await fetch(`${this.baseUrl}/auth/login`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, password })
        });
        const data = await res.json();
        if (!res.ok) {
          throw new Error(data.detail || 'Invalid credentials');
        }
        return data;
      } catch (err) {
        throw err;
      }
    }
    // Offline local fallback handled by auth.js
    return null;
  },

  async getProfile(userId) {
    if (this.isBackendConnected) {
      try {
        const res = await fetch(`${this.baseUrl}/auth/me?user_id=${encodeURIComponent(userId || '')}`);
        if (res.ok) {
          const data = await res.json();
          return data.user;
        }
      } catch (err) {
        console.warn('Failed to fetch user profile from backend');
      }
    }
    return null;
  },

  async logout() {
    if (this.isBackendConnected) {
      try {
        await fetch(`${this.baseUrl}/auth/logout`, { method: 'POST' });
      } catch (e) {}
    }
    return { success: true };
  }
};
