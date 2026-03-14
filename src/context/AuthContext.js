import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import { loginUser, registerUser } from "../services/authService";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [token, setToken] = useState(() =>
    localStorage.getItem("jashincolor_token"),
  );
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("jashincolor_user");
    return saved ? JSON.parse(saved) : null;
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const isAuthenticated = !!token;

  useEffect(() => {
    const handleExpired = () => {
      setToken(null);
      setUser(null);
    };
    window.addEventListener("auth:expired", handleExpired);
    return () => window.removeEventListener("auth:expired", handleExpired);
  }, []);

  const login = useCallback(async ({ email, password }) => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await loginUser({ email, password });
      console.log("[AUTH] Login response:", JSON.stringify(data, null, 2));
      const receivedToken = data.token || data.accessToken;
      const userData = { email, userId: data.userId || data.id };

      localStorage.setItem("jashincolor_token", receivedToken);
      localStorage.setItem("jashincolor_user", JSON.stringify(userData));

      setToken(receivedToken);
      setUser(userData);
      return { success: true };
    } catch (err) {
      const message =
        err.response?.data?.message ||
        err.response?.data?.error ||
        "Erro ao fazer login. Verifique suas credenciais.";
      setError(message);
      return { success: false, message };
    } finally {
      setIsLoading(false);
    }
  }, []);

  const register = useCallback(async ({ email, password }) => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await registerUser({ email, password });

      if (data.token || data.accessToken) {
        const receivedToken = data.token || data.accessToken;
        const userData = { email, userId: data.userId || data.id };

        localStorage.setItem("jashincolor_token", receivedToken);
        localStorage.setItem("jashincolor_user", JSON.stringify(userData));

        setToken(receivedToken);
        setUser(userData);
      }

      return { success: true };
    } catch (err) {
      const message =
        err.response?.data?.message ||
        err.response?.data?.error ||
        "Erro ao criar conta. Tente novamente.";
      setError(message);
      return { success: false, message };
    } finally {
      setIsLoading(false);
    }
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem("jashincolor_token");
    localStorage.removeItem("jashincolor_user");
    setToken(null);
    setUser(null);
    setError(null);
  }, []);

  const clearError = useCallback(() => setError(null), []);

  return (
    <AuthContext.Provider
      value={{
        token,
        user,
        isAuthenticated,
        isLoading,
        error,
        login,
        register,
        logout,
        clearError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
