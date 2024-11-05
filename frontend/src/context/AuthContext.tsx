"use client";
import { ReactNode, useContext, useEffect, useState } from "react";
import { createContext } from "react";
import Cookies from "js-cookie";

interface IAuthContext {
  isAuth: boolean;
  setAuth: (isAuth: boolean) => void;
}

const AuthContext = createContext<IAuthContext | undefined>(undefined);

const useAuthContext = () => {
  const authContext = useContext(AuthContext);
  if (!authContext) {
    throw new Error("useAuthContext must be used within a AuthContextProvider");
  }
  return authContext;
};

const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [isAuth, setAuth] = useState(false);

  useEffect(() => {
    const user = Cookies.get("token");
    setAuth(!!user);
  }, [isAuth]);

  return (
    <AuthContext.Provider value={{ isAuth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContextProvider, useAuthContext };
