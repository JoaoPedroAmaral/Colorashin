import api from "./api";


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

export async function createCheckoutPreference(bookId) {
  const { data } = await api.post(`/api/checkout/preference?bookId=${bookId}`);
  return data;
}

export async function getDownloadUrl(bookId) {
  const { data } = await api.get(`/api/books/${bookId}/download-url`);
  return data;
}

export async function getUserBooksByUserId(userId) {
  const { data } = await api.get(`/api/books/user/${userId}`);
  return data;
}

export async function getBookById(bookId) {
  const { data } = await api.get(`/api/books/${bookId}`);
  return data;
}
