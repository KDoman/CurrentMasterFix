import { createContext } from "react";

export const AuthContext = createContext(null);

const AuthContext = ({ children }) => {
  return <AuthContext.Provider>{children}</AuthContext.Provider>;
};
