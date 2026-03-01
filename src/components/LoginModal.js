import React from "react";

export default function LoginModal({
  isOpen,
  onClose,
  isLoginMode,
  setIsLoginMode,
}) {
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(isLoginMode ? "Login realizado!" : "Cadastro realizado!");
    onClose();
  };

  return (
    <div
      className={`modal-overlay ${isOpen ? "active" : ""}`}
      onClick={(e) => {
        if (e.target.classList.contains("modal-overlay")) onClose();
      }}
    >
      <div className="modal">
        <button className="close-modal" onClick={onClose}>
          &times;
        </button>
        <h2>{isLoginMode ? "Login" : "Cadastro"}</h2>
        <form onSubmit={handleSubmit}>
          {!isLoginMode && <input type="text" placeholder="Nome" required />}
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Senha" required />
          <button type="submit" className="modal-btn">
            {isLoginMode ? "Entrar" : "Criar Conta"}
          </button>
        </form>
        <p className="modal-switch">
          {isLoginMode ? "Não tem conta? " : "Já tem conta? "}
          <span onClick={() => setIsLoginMode(!isLoginMode)}>
            {isLoginMode ? "Registre-se" : "Login"}
          </span>
        </p>
      </div>
    </div>
  );
}
