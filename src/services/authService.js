import api from "./api";


export async function registerUser({ email, password }) {
  const { data } = await api.post("/api/auth/register", { email, password });
  return data;
}

export async function loginUser({ email, password }) {
  const { data } = await api.post("/api/auth/login", { email, password });
  return data;
}
