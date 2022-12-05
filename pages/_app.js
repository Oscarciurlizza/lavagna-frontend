import { useMemo, useState, useEffect } from "react";
import { useRouter } from "next/router";
import AuthContext from "../context/authContext";

import { getToken, removeToken, setToken } from "../api/token";
import jwtDecode from "jwt-decode";

import toast, { Toaster } from "react-hot-toast";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [auth, setAuth] = useState(undefined);
  const [reloadUser, setReloadUser] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = getToken();
    if (token) {
      setAuth({
        token,
        idUser: jwtDecode(token).id,
      });
    } else {
      setAuth(null);
    }
    //Comprobación manual de usuarios.

    setReloadUser(false);
  }, [reloadUser]);

  const handleLogin = (token) => {
    setToken(token);
    setAuth({
      token,
      idUser: jwtDecode(token).id,
    });
  };

  const handleLogout = () => {
    if (auth) {
      removeToken();
      setAuth(null);
      router.push("/");
    }
  };

  const authData = useMemo(
    () => ({
      auth,
      login: handleLogin,
      logout: handleLogout,
      setReloadUser,
    }),
    [auth]
  );

  if (auth === undefined) return null;
  return (
    <AuthContext.Provider value={authData}>
      <Component {...pageProps} />
      <Toaster />
    </AuthContext.Provider>
  );
}

export default MyApp;
