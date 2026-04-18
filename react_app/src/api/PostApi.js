import { api } from "../lib/api";

export const postApi = {
  list: () => api.get("api/post"),
  create: (payload) =>
    api.post("api/post", payload, {
      headers: { "Content-Type": "multipart/form-data" },
    }),
  remove: (id) => api.delete(`api/post/${id}`),
  onePost: (id) => api.get(`api/post/${id}`),
};
