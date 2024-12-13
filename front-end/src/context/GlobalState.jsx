import { createContext, useEffect, useState } from "react";

export const GlobalStates = createContext();

export const GlobalStatesProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [query, setQuery] = useState({ location: "", proffesion: "" });
  const [loggedAccount, setLoggedAccount] = useState({});

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
