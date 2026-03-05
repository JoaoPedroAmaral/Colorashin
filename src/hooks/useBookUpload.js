import { useState, useCallback } from "react";
import { createBook, createCheckoutPreference } from "../services/bookService";

/**
 * Custom hook that encapsulates the entire book creation + checkout flow.
 *
 * States: idle → uploading → processing → redirecting → success / error
 */
export function useBookUpload() {
  const [status, setStatus] = useState("idle"); // idle | uploading | processing | redirecting | success | error
  const [uploadProgress, setUploadProgress] = useState(0);
  const [error, setError] = useState(null);
  const [bookId, setBookId] = useState(null);

  const reset = useCallback(() => {
    setStatus("idle");
    setUploadProgress(0);
    setError(null);
    setBookId(null);
  }, []);

  /**
   * Upload images, create the book, and redirect to Mercado Pago checkout.
   * @param {{ userId: string, title: string, price: number, files: File[] }} params
   */
  const uploadAndCheckout = useCallback(
    async ({ userId, title, price, files }) => {
      setStatus("uploading");
      setError(null);
      setUploadProgress(0);

      try {
        // Step 1 — Upload images and create book
        const bookData = await createBook(
          { userId, title, price, files },
          (percent) => setUploadProgress(percent),
        );

        const createdBookId = bookData.bookId || bookData.id;
        setBookId(createdBookId);
        setStatus("processing");

        // Step 2 — Generate Mercado Pago checkout preference
        const checkoutData = await createCheckoutPreference(createdBookId);

        if (checkoutData.initPoint) {
          setStatus("redirecting");
          // Small delay so the user sees "Redirecting..." before the browser navigates
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
