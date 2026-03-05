import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import ArrowNavButton from "../components/ArrowNavButton";
import { useAuth } from "../context/AuthContext";
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
        const booksList = Array.isArray(data) ? data : [];
        setBooks(booksList);
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
        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#e8f5e9] text-[#2e7d32]">
          ✅ Pago
        </span>
      );
    }
    return (
      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-red-50 text-red-500 border border-red-200">
        💳 Aguardando Pagamento
      </span>
    );
  };

  const handleOrderClick = (book) => {
    if (book.statusPay === "PAID") {
      navigate(`/download/${book.id}`);
    }
  };

  return (
    <>
      <NavBar />
      <div className="min-h-screen flex flex-col justify-start items-center gap-8 py-10 pt-[60px] m-auto">
        <div className="w-full flex px-8 items-center justify-evenly mt-40">
          <div>
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
          <div className="bg-white py-3 px-6 rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.6)] flex justify-between items-center w-full transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_25px_rgba(0,0,0,0.15)] cursor-default">
            <div className="my-3 text-start">
              <p className="my-2.5">Total de pedidos</p>
              <h3 className="text-brandPink font-chango m-0 p-0 text-xl">
                {loading ? "..." : books.length}
              </h3>
            </div>
            <div className="text-2xl">🧾</div>
          </div>
          <div className="bg-white py-3 px-6 rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.6)] flex justify-between items-center w-full transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_25px_rgba(0,0,0,0.15)] cursor-default">
            <div className="my-3 text-start">
              <p className="my-2.5">Concluídos</p>
              <h3 className="text-brandPink font-chango m-0 p-0 text-xl">
                {loading ? "..." : completedBooks.length}
              </h3>
            </div>
            <div className="text-2xl">✅</div>
          </div>
          <div className="bg-white py-3 px-6 rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.6)] flex justify-between items-center w-full transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_25px_rgba(0,0,0,0.15)] cursor-default">
            <div className="my-3 text-start">
              <p className="my-2.5">Aguardando Pagamento</p>
              <h3 className="text-brandPink font-chango m-0 p-0 text-xl">
                {loading ? "..." : pendingBooks.length}
              </h3>
            </div>
            <div className="text-2xl">💳</div>
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
            <div className="bg-red-50 border border-red-300 text-red-700 text-sm rounded-lg px-4 py-3">
              ⚠️ {error}
            </div>
          )}

          {!loading && !error && books.length === 0 && (
            <div className="text-center py-12">
              <p className="text-4xl mb-4">📚</p>
              <p className="text-[#666] font-sans text-base">
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
              {books.map((book) => {
                const isPaid = book.statusPay === "PAID";
                const isPayingThis = payingBookId === book.id;

                return (
                  <div
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
                      <span className="text-3xl">{isPaid ? "📖" : "📕"}</span>
                    </div>
                    <div className="flex-1 flex flex-col gap-2 w-full">
                      <div className="flex justify-between items-center w-full">
                        <span className="text-base font-bold text-[#111]">
                          {book.title || `Livro #${book.id}`}
                        </span>
                        {getStatusBadge(book.statusPay)}
                      </div>
                      <div className="flex items-center gap-4 text-[13px] text-[#555] mb-1.5 font-sans flex-wrap">
                        <span>📅 {formatDate(book.createAt)}</span>
                        <span>
                          📄 {book.totalPages} página
                          {book.totalPages !== 1 ? "s" : ""}
                        </span>
                        {book.price != null && (
                          <span className="font-semibold text-[#333]">
                            {formatPrice(book.price)}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2.5 mt-1.5 w-full">
                        {isPaid ? (
                          <Link
                            to={`/download/${book.id}`}
                            onClick={(e) => e.stopPropagation()}
                            className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold cursor-pointer no-underline transition-all duration-200 border-none font-sans bg-[#ffe033] text-[#222] hover:bg-brandYellow hover:-translate-y-0.5"
                          >
                            💹 Baixar PDF
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
                                Gerando pagamento
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
                              "💳 Pagar agora"
                            )}
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
      <Footer />
      <ArrowNavButton />
    </>
  );
}
