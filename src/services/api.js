import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:8080",
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
    // Required for ngrok free URLs — without this, ngrok returns
    // an HTML interstitial page instead of your API response
    "ngrok-skip-browser-warning": "true",
  },
});

// ── Request Interceptor: inject JWT token ──────────────────────────
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("jashincolor_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    // Debug: remove this after confirming it works
    console.log(
      `[API] ${config.method?.toUpperCase()} ${config.url}`,
      token ? "✅ Token attached" : "⚠️ No token",
    );
    return config;
  },
  (error) => Promise.reject(error),
);

// ── Response Interceptor: handle 401 globally ──────────────────────
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error(
      `[API] Error ${error.response?.status}:`,
      error.response?.data,
    );
    if (error.response?.status === 401) {
      localStorage.removeItem("jashincolor_token");
      localStorage.removeItem("jashincolor_user");

      // Dispatch a custom event so AuthContext can react
      window.dispatchEvent(new CustomEvent("auth:expired"));
    }
    return Promise.reject(error);
  },
);

export default api;
