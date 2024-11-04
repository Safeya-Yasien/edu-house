"use client";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import Cookies from "js-cookie";

interface IUserContextType {
  isUserLoggedIn: boolean;
  setIsUserLoggedIn: (value: boolean) => void;
}

export const UserContext = createContext<IUserContextType | undefined>(
  undefined
);

export const useUserContext = () => {
  const userContext = useContext(UserContext);
  if (!userContext) {
    throw new Error("UserContext must be used within a UserProvider");
  }
  return userContext;
};

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(
    () => !!Cookies.get("token")
  );

  useEffect(() => {
    const token = Cookies.get("token");
    setIsUserLoggedIn(!!token);
  }, []);

  return (
    <UserContext.Provider value={{ isUserLoggedIn, setIsUserLoggedIn }}>
      {children}
    </UserContext.Provider>
  );
};
