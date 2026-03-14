import React, { useState, useEffect } from "react";
import { useParams, useSearchParams, Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ArrowNavButton from "../components/ArrowNavButton";
import api from "../services/api";
import { getBookById } from "../services/bookService";
import { AlertTriangle, BookOpen, RefreshCw, Download, ExternalLink } from "lucide-react";

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
        const metadata = await getBookById(bookId);
        setBookData({
          title: metadata.title || `Livro-${bookId}`,
          status: metadata.statusPay,
        });

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

    return () => {
      if (blobUrl) URL.revokeObjectURL(blobUrl);
    };
  }, [bookId]);

  const handleDownload = () => {
    if (!pdfBlobUrl) return;

    const rawTitle = bookData?.title || `livro-colorir-${bookId}`;

    const safeTitle = rawTitle
      .toLowerCase()
      .replaceAll(/[^a-z0-9]/g, "-")
      .replaceAll(/-+/g, "-")
      .replaceAll(/(^-+|-+$)/g, "");

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
          <div className="text-5xl">
            <AlertTriangle size={64} />
          </div>
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
        <div className="w-full flex px-4 md:px-8 flex-col md:flex-row items-center justify-between mt-10 md:mt-20 max-w-[900px]">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h1 className="text-brandPink font-chango text-2xl m-0 p-0 flex items-center justify-center md:justify-start gap-3">
              <BookOpen size={28} /> {bookData?.title || `Livro #${bookId}`}
            </h1>
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

        {loading && (
          <div className="flex flex-col items-center gap-4 mt-8">
            <div className="w-12 h-12 border-4 border-[#ccc] border-t-brandPink rounded-full animate-spin" />
            <p className="text-sm text-[#666] font-sans">
              Baixando PDF do servidor...
            </p>
          </div>
        )}

        {!loading && error && (
          <div className="flex flex-col items-center gap-4 mt-8">
            <div className="flex justify-center mb-4 text-amber-500">
              <AlertTriangle size={64} />
            </div>
            <h1 className="text-red-500 font-chango text-3xl m-0 p-0">{error}</h1>
            <button
              onClick={() => window.location.reload()}
              className="bg-brandPink text-white font-sans border-none py-3 px-6 rounded-lg cursor-pointer text-base font-bold hover:bg-brandPinkDark transition-all duration-300"
            >
              <RefreshCw size={20} className="inline-block mr-2" /> Tentar Novamente
            </button>
          </div>
        )}

        {!loading && !error && pdfBlobUrl && (
          <div className="max-w-[900px] w-full px-5 mx-auto flex flex-col gap-6">
            <div className="flex gap-3 justify-center flex-wrap">
              <button
                onClick={handleDownload}
                className="bg-brandPink text-white border-none py-2.5 px-6 rounded-lg cursor-pointer font-bold font-sans hover:bg-brandPinkDark hover:-translate-y-0.5 transition-all duration-300 w-full md:w-auto shadow-[0_4px_10px_rgba(255,64,129,0.3)] flex items-center justify-center gap-2"
              >
                <Download size={20} /> Baixar PDF
              </button>
              <button
                onClick={handleOpenNewTab}
                className="bg-transparent text-mainText border-2 border-mainText py-2.5 px-6 rounded-lg cursor-pointer font-bold font-sans hover:bg-[#f0f0f0] transition-colors duration-300 w-full md:w-auto flex items-center justify-center gap-2"
              >
                <ExternalLink size={20} /> Abrir em nova aba
              </button>
            </div>

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
