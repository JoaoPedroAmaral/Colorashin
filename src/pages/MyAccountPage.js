import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import ArrowNavButton from "../components/ArrowNavButton";
import api from "../services/api";
import { useAuth } from "../context/AuthContext";
import { CheckCircle, CreditCard, AlertTriangle, Library, BookOpen, Book, Calendar, FileText, Download } from "lucide-react";
import {
  getUserBooksByUserId,
  createCheckoutPreference,
} from "../services/bookService";

export default function MyAccountPage() {
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [payingBookId, setPayingBookId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
      return;
    }

    const fetchBooks = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getUserBooksByUserId(user.userId);
        let booksList = Array.isArray(data) ? data : [];
        booksList.sort((a, b) => new Date(b.createAt) - new Date(a.createAt));
        setBooks(booksList);
        setCurrentPage(1);
      } catch (err) {
        console.error("Failed to fetch books:", err);
        setError("Não foi possível carregar seus pedidos.");
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, [isAuthenticated, navigate, user]);

  const completedBooks = books.filter((b) => b.statusPay === "PAID");
  const pendingBooks = books.filter((b) => b.statusPay !== "PAID");

  const totalPagesCount = Math.ceil(books.length / itemsPerPage);
  const currentBooks = books.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const handlePay = async (bookId) => {
    setPayingBookId(bookId);
    try {
      const data = await createCheckoutPreference(bookId);
      if (data.initPoint) {
        window.location.href = data.initPoint;
      }
    } catch (err) {
      console.error("Failed to create checkout:", err);
      alert("Erro ao gerar pagamento. Tente novamente.");
      setPayingBookId(null);
    }
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return "—";
    try {
      return new Date(dateStr).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      });
    } catch {
      return dateStr;
    }
  };

  const formatPrice = (price) => {
    if (price == null) return "—";
    return `R$ ${Number(price).toFixed(2).replace(".", ",")}`;
  };

  const getStatusBadge = (statusPay) => {
    if (statusPay === "PAID") {
      return (
        <span className="text-green-600 font-bold bg-green-100 py-1.5 px-3 rounded-[20px] text-xs font-sans inline-flex items-center gap-1.5">
          <CheckCircle size={14} /> Pago
        </span>
      );
    } else {
      return (
        <span className="text-brandPink font-bold bg-[#ffe0ec] py-1.5 px-3 rounded-[20px] text-xs font-sans inline-flex items-center gap-1.5">
          <CreditCard size={14} /> Aguardando Pagamento
        </span>
      );
    }
  };

  const handleOrderClick = (book) => {
    if (book.statusPay === "PAID") {
      navigate(`/download/${book.id}`, { state: { bookTitle: book.title } });
    }
  };

  return (
    <>
      <NavBar />
      
      <div className="min-h-screen flex flex-col justify-start items-center gap-8 py-10 pt-[60px] m-auto">
        <div className="w-full flex flex-col md:flex-row px-4 md:px-8 items-center justify-between mt-10 md:mt-40 max-w-[900px] gap-6 md:gap-0">
          <div className="text-center md:text-left">
            <h2 className="text-[#FF4081] font-chango m-0 p-0 text-2xl">
              {user?.email || "Minha Conta"}
            </h2>
            <p className="mt-2 text-mainText">
              Visualize e gerencie suas transformações
            </p>
          </div>
          <div>
            <Link to="/transform">
              <button
                className="bg-transparent text-mainText border-2 border-mainText py-2 px-4 rounded-md cursor-pointer font-bold font-sans hover:bg-mainText hover:text-mainBg text-base"
                id="newRequestBtn"
              >
                Nova Requisição
              </button>
            </Link>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-12 max-w-[900px] w-full px-5 mx-auto">
          <div className="bg-white p-5 rounded-[15px] shadow-[0_2px_10px_rgba(0,0,0,0.05)] text-center flex-1 min-w-[150px] flex gap-4 items-center justify-center transition-transform hover:-translate-y-[3px]">
            <div className="text-green-500 bg-green-50 w-12 h-12 rounded-full flex items-center justify-center">
              <CheckCircle size={24} />
            </div>
            <div className="text-left">
              <h3 className="m-0 text-3xl font-chango text-mainText">{loading ? "..." : completedBooks.length}</h3>
              <p className="m-0 text-sm font-sans text-brandPink">Pagos</p>
            </div>
          </div>
          <div className="bg-white p-5 rounded-[15px] shadow-[0_2px_10px_rgba(0,0,0,0.05)] text-center flex-1 min-w-[150px] flex gap-4 items-center justify-center transition-transform hover:-translate-y-[3px]">
            <div className="text-brandPink bg-[#ffe0ec] w-12 h-12 rounded-full flex items-center justify-center">
              <CreditCard size={24} />
            </div>
            <div className="text-left">
              <h3 className="m-0 text-3xl font-chango text-mainText">{loading ? "..." : pendingBooks.length}</h3>
              <p className="m-0 text-sm font-sans text-brandPink">Aguardando Pagamento</p>
            </div>
          </div>
          <div className="bg-white p-5 rounded-[15px] shadow-[0_2px_10px_rgba(0,0,0,0.05)] text-center flex-1 min-w-[150px] flex gap-4 items-center justify-center transition-transform hover:-translate-y-[3px]">
            <div className="text-mainText bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center">
              <Library size={24} />
            </div>
            <div className="text-left">
              <h3 className="m-0 text-3xl font-chango text-mainText">{loading ? "..." : books.length}</h3>
              <p className="m-0 text-sm font-sans text-brandPink">Total de pedidos</p>
            </div>
          </div>
        </div>

        {/* Order History */}
        <div className="w-[90%] max-w-[900px] mt-10">
          <h2 className="text-xl font-bold text-[#333] mb-5">
            Histórico de Pedidos
          </h2>

          {loading && (
            <div className="flex justify-center py-12">
              <div className="w-10 h-10 border-4 border-[#ccc] border-t-brandPink rounded-full animate-spin" />
            </div>
          )}

          {error && (
            <div className="flex bg-red-50 p-4 rounded-lg border border-red-200 mb-6 text-red-600 font-sans text-sm m-auto max-w-[800px] items-center gap-2">
              <AlertTriangle size={18} className="shrink-0" /> <span className="m-0">{error}</span>
            </div>
          )}

          {!loading && !error && books.length === 0 && (
            <div className="text-center py-10 bg-[#fafafa] rounded-[15px] border-2 border-dashed border-[#eee] m-auto max-w-[800px] flex flex-col items-center">
              <Library size={48} className="text-[#ccc] mb-4" />
              <p className="font-sans text-mainText text-base m-0">
                Você ainda não tem nenhum pedido.
              </p>
              <Link
                to="/transform"
                className="inline-block mt-4 bg-brandPink text-white font-sans border-none py-3 px-6 rounded-lg text-sm font-bold no-underline hover:bg-brandPinkDark transition-all duration-300"
              >
                Criar meu primeiro livro
              </Link>
            </div>
          )}

          {!loading && !error && books.length > 0 && (
            <div className="flex flex-col gap-5 w-full">
              {currentBooks.map((book) => {
                const isPaid = book.statusPay === "PAID";
                const isPayingThis = payingBookId === book.id;

                return (
                  <button
                    key={book.id}
                    onClick={() => handleOrderClick(book)}
                    className={`bg-white border rounded-2xl p-5 flex flex-col sm:flex-row items-start gap-5 relative shadow-[0_2px_5px_rgba(0,0,0,0.02)] w-full transition-all duration-200 ${
                      isPaid
                        ? "cursor-pointer hover:shadow-[0_8px_20px_rgba(0,0,0,0.1)] hover:-translate-y-1 border-[#e0e0e0] hover:border-brandPink/30"
                        : "cursor-default border-red-100"
                    }`}
                  >
                    <div
                      className={`w-20 h-20 rounded-lg flex items-center justify-center shrink-0 ${
                        isPaid
                          ? "bg-gradient-to-br from-brandPink/10 to-brandYellow/10"
                          : "bg-gradient-to-br from-red-50 to-orange-50"
                      }`}
                    >
                      <span className="text-brandPink">
                        {isPaid ? <BookOpen size={28} /> : <Book size={28} />}
                      </span>
                    </div>
                    <div className="flex-1 flex flex-col gap-2 w-full">
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full gap-2 sm:gap-0">
                        <span className="text-base font-bold text-[#111] break-all">
                          {book.title || `Livro #${book.id}`}
                        </span>
                        <div className="shrink-0">{getStatusBadge(book.statusPay)}</div>
                      </div>
                      <div className="flex items-center gap-4 text-[13px] text-[#555] mb-1.5 font-sans flex-wrap">
                        <span className="flex items-center gap-1.5"><Calendar size={14} /> {formatDate(book.createAt)}</span>
                        <span className="flex items-center gap-1.5">
                          <FileText size={14} /> {book.totalPages} página{book.totalPages !== 1 ? "s" : ""}
                        </span>
                        {book.totalPages != null && (
                          <span className="font-semibold text-[#333]">
                            {formatPrice(book.totalPages * 1)}
                          </span>
                        )}
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-2.5 mt-1.5 w-full">
                        {isPaid ? (
                          <Link
                            to={`/download/${book.id}`}
                            state={{ bookTitle: book.title }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-brandPink text-white border-none py-2 px-5 rounded-[20px] cursor-pointer font-bold font-sans hover:bg-brandPinkDark text-sm transition-all duration-300 shadow-[0_2px_5px_rgba(255,64,129,0.3)] hover:shadow-[0_4px_8px_rgba(255,64,129,0.4)] hover:-translate-y-[2px] w-full sm:w-auto mt-2 sm:mt-0 flex items-center justify-center gap-1.5 whitespace-nowrap"
                          >
                            <Download size={16} /> Baixar PDF
                          </Link>
                        ) : (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handlePay(book.id);
                            }}
                            disabled={isPayingThis}
                            className="flex items-center justify-center gap-2 px-5 py-2 rounded-lg text-sm font-semibold cursor-pointer transition-all duration-200 border-none font-sans bg-brandPink text-white hover:bg-brandPinkDark hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                          >
                            {isPayingThis ? (
                              <>
                                Gerando pagamento{' '}
                                <span className="inline-flex ml-0.5">
                                  <span className="animate-bounce [animation-delay:-0.3s]">
                                    .
                                  </span>
                                  <span className="animate-bounce [animation-delay:-0.15s]">
                                    .
                                  </span>
                                  <span className="animate-bounce">.</span>
                                </span>
                              </>
                            ) : (
                                <><CreditCard size={16} /> Pagar agora</>
                              )}
                          </button>
                        )}
                      </div>
                    </div>
                  </button>
                );
              })}

              {/* Pagination Controls */}
              {totalPagesCount > 1 && (
                <div className="flex justify-center items-center gap-4 mt-8">
                  <button
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className="px-4 py-2 rounded-lg border border-[#ddd] bg-white text-[#333] disabled:opacity-50 disabled:cursor-not-allowed font-sans cursor-pointer hover:bg-gray-50 transition-colors font-bold text-sm"
                  >
                    Anterior
                  </button>
                  <span className="font-sans text-sm text-[#777] font-semibold">
                    Página {currentPage} de {totalPagesCount}
                  </span>
                  <button
                    onClick={() =>
                      setCurrentPage((p) => Math.min(totalPagesCount, p + 1))
                    }
                    disabled={currentPage === totalPagesCount}
                    className="px-4 py-2 rounded-lg border border-[#ddd] bg-white text-[#333] disabled:opacity-50 disabled:cursor-not-allowed font-sans cursor-pointer hover:bg-gray-50 transition-colors font-bold text-sm"
                  >
                    Próxima
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      <Footer />
      <ArrowNavButton />
    </>
  );
}
