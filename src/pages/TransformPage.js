import React, { useState } from "react";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ArrowNavButton from "../components/ArrowNavButton";
import LoginModal from "../components/LoginModal";
import { useAuth } from "../context/AuthContext";
import { useBookUpload } from "../hooks/useBookUpload";
import { PlusCircle, AlertTriangle } from "lucide-react";

export default function TransformPage() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [title, setTitle] = useState("");
  const { isAuthenticated, user } = useAuth();
  const { status, uploadProgress, error, uploadAndCheckout, reset } =
    useBookUpload();

  const [showLoginModal, setShowLoginModal] = useState(false);
  const [isLoginMode, setIsLoginMode] = useState(true);

  React.useEffect(() => {
    if (!isAuthenticated) {
      setShowLoginModal(true);
    }
  }, [isAuthenticated]);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files).map((file) => ({
        file,
        preview: URL.createObjectURL(file),
      }));
      setSelectedFiles((prev) => [...prev, ...newFiles]);
    }
  };

  const removeFile = (indexToRemove) => {
    setSelectedFiles((prev) =>
      prev.filter((_, index) => index !== indexToRemove),
    );
  };

  const handleSubmit = async () => {
    if (!isAuthenticated) {
      return;
    }

    if (selectedFiles.length === 0 || !title.trim()) {
      return;
    }

    const calculatedPrice = selectedFiles.length * 1;

    await uploadAndCheckout({
      userId: user.userId,
      title: title.trim(),
      price: calculatedPrice,
      files: selectedFiles.map((f) => f.file),
    });
  };

  const isFormValid = selectedFiles.length > 0 && title.trim();
  const isDisabled = !isAuthenticated || (status !== "idle" && status !== "error");

  const statusMessages = {
    uploading: `Enviando imagens... ${uploadProgress}%`,
    processing: "Gerando pagamento...",
    redirecting: "Redirecionando para o Mercado Pago...",
  };

  return (
    <>
      <NavBar />
      <div className="min-h-[calc(100vh-280px)] flex flex-col items-center pt-[80px] px-4 sm:px-10 pb-10 m-auto text-center sm:text-left">
        <h1 className="text-brandPink font-chango m-0 p-0">
          Crie seu Livro de Colorir
        </h1>
        <p className="m-0 p-0 text-justify font-chango mt-2">
          Envie suas imagens e veja a mágica acontecer!
        </p>

        <div className="w-full max-w-[700px] mt-8 flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row gap-4 w-full">
            <div className="flex-1 text-left">
              <label className="block text-sm font-bold text-[#333] mb-1.5 font-sans">
                Título do Livro
              </label>
              <input
                type="text"
                placeholder="Ex: Animais da Fazenda"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                disabled={isDisabled}
                className="w-full p-3 rounded-lg border-2 border-[#ccc] font-sans text-sm focus:outline-none focus:border-brandPink transition-colors duration-200 disabled:opacity-50"
              />
            </div>
            <div className="w-full sm:w-[180px] text-left">
              <label className="block text-sm font-bold text-[#333] mb-1.5 font-sans">
                Preço Calculado (R$)
              </label>
              <div className="w-full p-3 rounded-lg border-2 border-transparent bg-gray-100 font-sans text-sm font-bold text-gray-700 h-[48px] flex items-center">
                {selectedFiles.length > 0
                  ? `R$ ${(selectedFiles.length * 1).toFixed(2).replace(".", ",")}`
                  : "R$ 0,00"}
              </div>
            </div>
          </div>
        </div>

        <label
          className={`bg-[#f0f0f0] border-4 border-dashed border-[#ccc] p-5 sm:p-[50px] w-full max-w-[700px] shadow-[0_0_10px_rgba(0,0,0,0.1)] text-center transition-all duration-300 font-chango hover:border-brandPink cursor-pointer relative mt-4 rounded-xl flex flex-col items-center justify-center ${isDisabled ? "opacity-50 pointer-events-none" : ""}`}
          htmlFor="fileInput"
        >
          <div className="text-base sm:text-lg flex items-center gap-2">
            <PlusCircle size={24} className="text-brandPink" /> Escolher imagens
          </div>
          <p className="mt-2 text-sm text-[#666] font-sans font-normal">
            Selecione as páginas do seu livro de colorir
          </p>

          {selectedFiles.length > 0 && (
            <div id="imagePreviewContainer" className="mt-5">
              <p className="font-sans font-semibold text-sm">
                Imagens selecionadas: {selectedFiles.length}
              </p>
              <div
                id="previewList"
                className="flex flex-wrap gap-4 justify-center mt-4"
              >
                {selectedFiles.map((fileData, index) => (
                  <div key={index} className="relative w-[100px] h-[100px]">
                    <img
                      src={fileData.preview}
                      alt={`Preview ${index}`}
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        removeFile(index);
                      }}
                      className="absolute -top-2 -right-2 bg-red-600 text-white border-none rounded-full w-6 h-6 cursor-pointer font-bold flex items-center justify-center p-0 hover:bg-red-700 transition-colors"
                    >
                      &times;
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </label>

        <input
          className="hidden"
          type="file"
          id="fileInput"
          accept="image/*"
          multiple
          onChange={handleFileChange}
          disabled={isDisabled}
        />

        {status === "uploading" && (
          <div className="w-full max-w-[700px] mt-4">
            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <div
                className="bg-brandPink h-3 rounded-full transition-all duration-300 ease-out"
                style={{ width: `${uploadProgress}%` }}
              />
            </div>
          </div>
        )}

        {statusMessages[status] && (
          <div className="mt-4 px-6 py-3 bg-[#fff3e0] border border-[#ffcc80] rounded-lg text-[#e65100] font-sans text-sm font-semibold flex items-center gap-2">
            <span className="inline-flex">
              <span className="animate-bounce [animation-delay:-0.3s]">.</span>
              <span className="animate-bounce [animation-delay:-0.15s]">.</span>
              <span className="animate-bounce">.</span>
            </span>
            {statusMessages[status]}
          </div>
        )}

        {error && (
          <div className="mt-4 px-6 py-3 bg-red-50 border border-red-300 rounded-lg text-red-700 font-sans text-sm max-w-[700px] w-full">
            <p className="m-0 font-semibold flex items-center gap-2">
              <AlertTriangle size={18} /> {error}
            </p>
            <button
              onClick={reset}
              className="mt-2 text-sm underline text-red-600 hover:text-red-800 cursor-pointer bg-transparent border-none font-sans"
            >
              Tentar novamente
            </button>
          </div>
        )}

        {!isAuthenticated ? (
          <div className="mt-8 flex flex-col items-center">
            <p className="text-sm text-[#555] font-sans flex items-center gap-2">
              <AlertTriangle size={16} className="text-amber-500" /> Você precisa estar logado para criar um livro.{" "}
            </p>
            <button
              onClick={() => setShowLoginModal(true)}
              className="mt-4 bg-brandPink text-white font-sans border-none py-3 px-8 rounded-lg cursor-pointer text-base font-bold no-underline hover:bg-brandPinkDark transition-all duration-300 hover:-translate-y-0.5"
            >
              Fazer Login
            </button>
          </div>
        ) : (
          <button
            className="bg-brandPink text-white font-sans border-none py-3 px-8 rounded-lg cursor-pointer text-base font-bold no-underline inline-block hover:bg-brandPinkDark mt-8 transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
            id="transformButton"
            onClick={handleSubmit}
            disabled={!isFormValid || isDisabled}
          >
            {status === "idle" || status === "error"
              ? "Criar Livro e Pagar"
              : status === "redirecting"
                ? "Redirecionando..."
                : "Processando..."}
          </button>
        )}
      </div>
      <Footer />
      <ArrowNavButton />

      {showLoginModal && (
        <LoginModal
          isOpen={showLoginModal}
          onClose={() => setShowLoginModal(false)}
          isLoginMode={isLoginMode}
          setIsLoginMode={setIsLoginMode}
        />
      )}
    </>
  );
}
