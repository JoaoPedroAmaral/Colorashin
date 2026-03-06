import api from "./api";

/**
 * POST /api/books — Create a new coloring book (multipart upload)
 * @param {{ userId: string, title: string, price: number, files: File[] }}
 * @param {function} onUploadProgress — optional progress callback
 * @returns {{ bookId: string, ... }}
 */
export async function createBook(
  { userId, title, price, files },
  onUploadProgress,
) {
  const formData = new FormData();
  formData.append("userId", userId);
  formData.append("title", title);
  formData.append("price", price);

  files.forEach((file) => {
    formData.append("files", file);
  });

  const { data } = await api.post("/api/books", formData, {
    headers: { "Content-Type": "multipart/form-data" },
    onUploadProgress: onUploadProgress
      ? (progressEvent) => {
          const percent = Math.round(
            (progressEvent.loaded * 100) / (progressEvent.total || 1),
          );
          onUploadProgress(percent);
        }
      : undefined,
  });

  return data;
}

/**
 * POST /api/checkout/preference — Generate Mercado Pago checkout URL
 * @param {string} bookId
 * @returns {{ initPoint: string }}
 */
export async function createCheckoutPreference(bookId) {
  const { data } = await api.post(`/api/checkout/preference?bookId=${bookId}`);
  return data;
}

/**
 * GET /api/books/:bookId/download-url — Retrieve the Cloudinary PDF link
 * @param {string} bookId
 * @returns {{ downloadUrl: string, status: string, ... }}
 */
export async function getDownloadUrl(bookId) {
  const { data } = await api.get(`/api/books/${bookId}/download-url`);
  return data;
}

/**
 * GET /api/books/user/:userId — Retrieve all books for a specific user
 * @param {string|number} userId
 * @returns {Array<{ id, userId, title, createAt, statusPay, totalPages, price }>}
 */
export async function getUserBooksByUserId(userId) {
  const { data } = await api.get(`/api/books/user/${userId}`);
  return data;
}

/**
 * GET /api/books/:bookId — Retrieve a specific book by its ID
 * @param {string|number} bookId
 * @returns {{ id, userId, title, createAt, statusPay, totalPages, price }}
 */
export async function getBookById(bookId) {
  const { data } = await api.get(`/api/books/${bookId}`);
  return data;
}
