import { useState, useCallback } from "react";
import { createBook, createCheckoutPreference } from "../services/bookService";

export function useBookUpload() {
  const [status, setStatus] = useState("idle");
  const [uploadProgress, setUploadProgress] = useState(0);
  const [error, setError] = useState(null);
  const [bookId, setBookId] = useState(null);

  const reset = useCallback(() => {
    setStatus("idle");
    setUploadProgress(0);
    setError(null);
    setBookId(null);
  }, []);

  const uploadAndCheckout = useCallback(
    async ({ userId, title, price, files }) => {
      setStatus("uploading");
      setError(null);
      setUploadProgress(0);

      try {
        const bookData = await createBook(
          { userId, title, price, files },
          (percent) => setUploadProgress(percent),
        );

        const createdBookId = bookData.bookId || bookData.id;
        setBookId(createdBookId);
        setStatus("processing");

        const checkoutData = await createCheckoutPreference(createdBookId);

        if (checkoutData.initPoint) {
          setStatus("redirecting");
          setTimeout(() => {
            window.location.href = checkoutData.initPoint;
          }, 600);
        } else {
          throw new Error(
            "Nenhum link de pagamento foi retornado pelo servidor.",
          );
        }
      } catch (err) {
        const message =
          err.response?.data?.message ||
          err.response?.data?.error ||
          err.message ||
          "Ocorreu um erro inesperado. Tente novamente.";
        setError(message);
        setStatus("error");
      }
    },
    [],
  );

  return {
    status,
    uploadProgress,
    error,
    bookId,
    uploadAndCheckout,
    reset,
  };
}
