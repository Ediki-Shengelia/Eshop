import { createContext, useEffect, useState } from "react";
import { authApi } from "../api/AuthApi";
export const AuthContext = createContext();
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errData, setErrData] = useState("");
  async function loadUser() {
    const token = localStorage.getItem("token");
    if (!token) return;
    setLoading(true);
    try {
      const res = await authApi.user();
      setUser(res.data);
    } catch (error) {
      localStorage.removeItem("token");
      setUser(null);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    loadUser();
  }, []);

  async function login(payload) {
    setLoading(true);
    setErrData("");
    try {
      const res = await authApi.login(payload);
      localStorage.setItem("token", res.data.token);
      setUser(res.data.user);
      return res.data.user;
    } catch (error) {
      setErrData(error.response?.data);
    } finally {
      setLoading(false);
    }
  }
  async function register(payload) {
    setLoading(true);
    setErrData("");
    try {
      const res = await authApi.register(payload);
      localStorage.setItem("token", res.data.token);
      setUser(res.data.user);
      return res.data.user;
    } catch (error) {
      setErrData(error.response?.data);
    } finally {
      setLoading(false);
    }
  }
  async function logout() {
    setLoading(true);
    setErrData("");
    try {
      await authApi.logout();
    } catch (error) {
      setErrData(error.response?.data);
    } finally {
      setLoading(false);
      localStorage.removeItem("token");
      setUser(null);
    }
  }
  return (
    <AuthContext.Provider
      value={{ user, loading, register, login, logout, errData }}
    >
      {children}
    </AuthContext.Provider>
  );
}
