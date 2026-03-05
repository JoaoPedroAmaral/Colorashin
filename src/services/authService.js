import api from "./api";

/**
 * POST /api/auth/register
 * @param {{ email: string, password: string }} credentials
 */
export async function registerUser({ email, password }) {
  const { data } = await api.post("/api/auth/register", { email, password });
  return data;
}

/**
 * POST /api/auth/login
 * @param {{ email: string, password: string }} credentials
 * @returns {{ token: string, userId?: string }}
 */
export async function loginUser({ email, password }) {
  const { data } = await api.post("/api/auth/login", { email, password });
  return data;
}
