import { api } from "../lib/api";

export const authApi = {
  register: (payload) => api.post("api/register", payload),
  login: (payload) => api.post("api/login", payload),
  logout: () => api.post("api/logout"),
  user: () => api.get("api/user"),
};
