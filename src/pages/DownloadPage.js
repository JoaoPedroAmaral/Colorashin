import React, { useState, useEffect } from "react";
import { useParams, useSearchParams, Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ArrowNavButton from "../components/ArrowNavButton";
import api from "../services/api";
import { getBookById } from "../services/bookService";

export default function DownloadPage() {
  const { bookId: paramBookId } = useParams();
  const [searchParams] = useSearchParams();
  const queryBookId = searchParams.get("bookId");
  const bookId = paramBookId || queryBookId;

  const [pdfBlobUrl, setPdfBlobUrl] = useState(null);
  const [bookData, setBookData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!bookId) {
      setLoading(false);
      setError("Nenhum ID de livro fornecido.");
      return;
    }

    let blobUrl = null;

    const fetchPdf = async () => {
      setLoading(true);
      setError(null);
      try {
        // Fetch book metadata first
        const metadata = await getBookById(bookId);
        setBookData({
          title: metadata.title || `Livro-${bookId}`,
          status: metadata.statusPay,
        });

        // Then fetch the PDF blob
        const response = await api.get(`/api/books/${bookId}/download-url`, {
          responseType: "blob",
        });

        const blob = new Blob([response.data], { type: "application/pdf" });
        blobUrl = URL.createObjectURL(blob);
        setPdfBlobUrl(blobUrl);
      } catch (err) {
        console.error("[Download] Failed:", err);
        if (err.response?.status === 404) {
          setError("Livro não encontrado.");
        } else if (err.response?.status === 401) {
          setError("Sessão expirada. Faça login novamente.");
        } else {
          setError("Não foi possível carregar o PDF. Tente novamente.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchPdf();

    // Cleanup blob URL on unmount
    return () => {
      if (blobUrl) URL.revokeObjectURL(blobUrl);
    };
  }, [bookId]);

  const handleDownload = () => {
    if (!pdfBlobUrl) return;

    const rawTitle = bookData?.title || `livro-colorir-${bookId}`;

    // Sanitize the title to make it a valid filename
    const safeTitle = rawTitle
      .toLowerCase()
      .replaceAll(/[^a-z0-9]/g, "-") // replace non-alphanumeric with -
      .replaceAll(/-+/g, "-") // replace multiple - with single -
      .replaceAll(/(^-+|-+$)/g, ""); // trim - from start and end

    const filename = safeTitle
      ? `${safeTitle}.pdf`
      : `livro-colorir-${bookId}.pdf`;

    const link = document.createElement("a");
    link.href = pdfBlobUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  const handleOpenNewTab = () => {
    if (!pdfBlobUrl) return;
    window.open(pdfBlobUrl, "_blank");
  };

  if (!bookId) {
    return (
      <>
        <NavBar />
        <div className="min-h-screen flex flex-col items-center justify-center gap-4 m-auto">
          <div className="text-5xl">⚠️</div>
          <h2 className="text-brandPink font-chango m-0 p-0 text-2xl">
            Nenhum livro selecionado
          </h2>
          <Link
            to="/account"
            className="bg-brandPink text-white font-sans border-none py-3 px-6 rounded-lg text-base font-bold no-underline hover:bg-brandPinkDark transition-all duration-300"
          >
            Voltar para Minha Conta
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <NavBar />
      <div className="min-h-screen flex flex-col justify-start items-center gap-8 py-10 mt-[60px] m-auto">
        {/* Header */}
        <div className="w-full flex px-8 items-center justify-evenly mt-20">
          <div>
            <h2 className="text-brandPink font-chango m-0 p-0 text-2xl">
              📖 {bookData?.title || `Livro #${bookId}`}
            </h2>
            <p className="mt-2 text-mainText">
              {loading
                ? "Carregando seu PDF..."
                : error
                  ? error
                  : "Seu livro está pronto!"}
            </p>
          </div>
          <div className="flex gap-3">
            <Link to="/account">
              <button className="bg-transparent text-mainText border-2 border-mainText py-2 px-4 rounded-md cursor-pointer font-bold font-sans hover:bg-mainText hover:text-mainBg text-base">
                Meus Pedidos
              </button>
            </Link>
          </div>
        </div>

        {/* Loading */}
        {loading && (
          <div className="flex flex-col items-center gap-4 mt-8">
            <div className="w-12 h-12 border-4 border-[#ccc] border-t-brandPink rounded-full animate-spin" />
            <p className="text-sm text-[#666] font-sans">
              Baixando PDF do servidor...
            </p>
          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div className="flex flex-col items-center gap-4 mt-8">
            <div className="text-5xl">⚠️</div>
            <p className="text-red-600 font-sans text-base">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="bg-brandPink text-white font-sans border-none py-3 px-6 rounded-lg cursor-pointer text-base font-bold hover:bg-brandPinkDark transition-all duration-300"
            >
              🔄 Tentar Novamente
            </button>
          </div>
        )}

        {/* PDF Ready */}
        {!loading && !error && pdfBlobUrl && (
          <div className="max-w-[900px] w-full px-5 mx-auto flex flex-col gap-6">
            {/* Action Buttons */}
            <div className="flex gap-3 justify-center flex-wrap">
              <button
                onClick={handleDownload}
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-base font-semibold cursor-pointer transition-all duration-200 border-none font-sans bg-[#ffe033] text-[#222] hover:bg-brandYellow hover:-translate-y-0.5"
              >
                💾 Baixar PDF
              </button>
              <button
                onClick={handleOpenNewTab}
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-base font-semibold cursor-pointer transition-all duration-200 font-sans border-2 border-brandPink bg-white text-brandPink hover:bg-brandPink hover:text-white hover:-translate-y-0.5"
              >
                🔗 Abrir em nova aba
              </button>
            </div>

            {/* Embedded PDF Viewer */}
            <div className="w-full bg-white rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.3)] overflow-hidden">
              <iframe
                src={pdfBlobUrl}
                title={`Livro de Colorir #${bookId}`}
                className="w-full border-none"
                style={{ height: "80vh" }}
              />
            </div>
          </div>
        )}
      </div>
      <Footer />
      <ArrowNavButton />
    </>
  );
}
