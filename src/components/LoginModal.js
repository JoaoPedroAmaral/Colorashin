import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { AlertCircle, CheckCircle2 } from "lucide-react";

export default function LoginModal({
  isOpen,
  onClose,
  isLoginMode,
  setIsLoginMode,
}) {
  const { login, register, isLoading, error, clearError } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [localMessage, setLocalMessage] = useState(null);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    clearError();
    setLocalMessage(null);

    if (isLoginMode) {
      const result = await login({ email, password });
      if (result.success) {
        setEmail("");
        setPassword("");
        onClose();
      }
    } else {
      const result = await register({ email, password });
      if (result.success) {
        setLocalMessage("Conta criada com sucesso!");
        setEmail("");
        setPassword("");
        // Auto-close after short delay if registration also logs in
        setTimeout(() => onClose(), 1200);
      }
    }
  };

  const handleToggleMode = () => {
    clearError();
    setLocalMessage(null);
    setIsLoginMode(!isLoginMode);
  };

  return (
    <div
      className={`fixed inset-0 w-screen h-screen bg-black/60 z-[2000] opacity-0 transition-opacity duration-300 ${isOpen ? "flex opacity-100 items-center justify-center" : "hidden"}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-mainBg p-[30px] rounded-xl w-[90%] max-w-[400px] relative shadow-[0_10px_30px_rgba(0,0,0,0.3)] text-center transition-transform duration-300 transform scale-100">
        <button
          className="absolute top-2.5 right-3 bg-transparent border-none text-[28px] cursor-pointer text-mainText p-0 w-[30px] h-[30px] flex items-center justify-center transition-colors duration-300 hover:text-brandPink"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="font-chango text-brandPink m-0 p-0 mb-5 text-[28px]">
          {isLoginMode ? "Login" : "Cadastro"}
        </h2>

        {/* Error message */}
        {error && (
          <div className="bg-red-50 border border-red-300 text-red-700 text-sm rounded-lg px-4 py-2.5 mb-4 text-left flex gap-2 items-center">
            <AlertCircle size={18} className="shrink-0" /> {error}
          </div>
        )}

        {/* Success message */}
        {localMessage && (
          <div className="bg-green-50 border border-green-300 text-green-700 text-sm rounded-lg px-4 py-2.5 mb-4 text-left flex gap-2 items-center">
            <CheckCircle2 size={18} className="shrink-0" /> {localMessage}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading}
            className="w-full p-3 mb-3 rounded-md border-2 border-[#ccc] font-sans text-sm focus:outline-none focus:border-brandPink disabled:opacity-50"
          />
          <input
            type="password"
            placeholder="Senha"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isLoading}
            className="w-full p-3 mb-3 rounded-md border-2 border-[#ccc] font-sans text-sm focus:outline-none focus:border-brandPink disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-brandPink text-white border-none rounded-md p-3 font-sans font-bold text-base cursor-pointer transition-all duration-300 hover:bg-brandPinkDark hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
          >
            {isLoading ? (
              <span className="inline-flex items-center gap-1">
                Carregando
                <span className="inline-flex ml-0.5">
                  <span className="animate-bounce [animation-delay:-0.3s]">
                    .
                  </span>
                  <span className="animate-bounce [animation-delay:-0.15s]">
                    .
                  </span>
                  <span className="animate-bounce">.</span>
                </span>
              </span>
            ) : isLoginMode ? (
              "Entrar"
            ) : (
              "Criar Conta"
            )}
          </button>
        </form>
        <p className="mt-[15px] text-sm font-sans">
          {isLoginMode ? "Não tem conta? " : "Já tem conta? "}
          <span
            onClick={handleToggleMode}
            className="text-brandPink cursor-pointer font-bold underline hover:text-brandPinkDark"
          >
            {isLoginMode ? "Registre-se" : "Login"}
          </span>
        </p>
      </div>
    </div>
  );
}
