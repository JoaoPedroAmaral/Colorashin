import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { CheckCircle, AlertTriangle } from "lucide-react";
import NavBar from "../components/NavBar";

export default function PaymentSuccessPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const status = searchParams.get("status");
  const bookId = searchParams.get("bookId");
  const [countdown, setCountdown] = useState(4);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          navigate("/account");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  const isApproved = status === "approved";

  return (
    <>
      <NavBar />
      <div className="min-h-screen flex flex-col items-center justify-center gap-6 m-auto px-6">
        {isApproved ? (
          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full text-center">
            <div className="flex justify-center mb-4 text-green-500 animate-bounce">
              <CheckCircle size={64} />
            </div>
            <h1 className="text-brandPink font-chango text-3xl mb-4">
              Pagamento Aprovado!
            </h1>
            <p className="text-mainText font-sans text-center text-lg max-w-md">
              Seu livro de colorir está sendo preparado.
              {bookId && (
                <span className="block text-sm text-[#666] mt-2">
                  Pedido #{bookId}
                </span>
              )}
            </p>
          </div>
        ) : (
          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full text-center">
            <div className="flex justify-center mb-4 text-amber-500">
              <AlertTriangle size={64} />
            </div>
            <h1 className="text-red-500 font-chango text-3xl mb-4">
              Pagamento {status || "Pendente"}
            </h1>
            <p className="text-mainText font-sans text-center text-lg max-w-md">
              Verifique o status do seu pedido no histórico.
            </p>
          </div>
        )}

        <p className="text-sm text-[#999] font-sans mt-4">
          Redirecionando para seu histórico em{" "}
          <span className="font-bold text-brandPink">{countdown}s</span>...
        </p>

        <button
          onClick={() => navigate("/account")}
          className="bg-brandPink text-white font-sans border-none py-3 px-8 rounded-lg cursor-pointer text-base font-bold hover:bg-brandPinkDark transition-all duration-300 hover:-translate-y-0.5 mt-2"
        >
          Ir para Meu Histórico
        </button>
      </div>
    </>
  );
}
