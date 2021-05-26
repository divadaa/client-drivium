import React, { useEffect, useState } from "react";
import {
  getProfile,
  postLogin,
  postLogout,
  postRegister,
} from "../services/auth";

export const UserContext = React.createContext(null);

export function useUser() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Este useEffect intenta autologearnos al abrir la web
  useEffect(() => {
    getProfile()
      .then((user) => {
        setUser(user);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  async function login(email, password) {
    postLogin(email, password).then((userData) => {
      setUser(userData);
    });
  }

  async function register(body) {
    const userData = await postRegister(body);
    setUser(userData);
  }

  async function logout() {
    postLogout().then(() => setUser(null));
  }

  return { user, loading, login, register, logout };
}
