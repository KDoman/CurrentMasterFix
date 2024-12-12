import { createContext, useState } from "react";

export const GlobalStates = createContext();

export const GlobalStatesProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [query, setQuery] = useState({ location: "", proffesion: "" });
  const [loggedAccount, setLoggedAccount] = useState({ name: "Kacper" });

  return (
    <GlobalStates.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        query,
        setQuery,
        loggedAccount,
        setLoggedAccount,
      }}
    >
      {children}
    </GlobalStates.Provider>
  );
};
