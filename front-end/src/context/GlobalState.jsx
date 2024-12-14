import { createContext, useLayoutEffect, useState } from "react";

export const GlobalStates = createContext();

export const GlobalStatesProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(null); // token
  const [query, setQuery] = useState({ location: "", proffesion: "" }); //wyszukiwanie
  const [loggedAccount, setLoggedAccount] = useState({}); // zalogowany użytkownik
  const [listData, setListData] = useState([]); // lista fachowców

  useLayoutEffect(() => {
    setIsLoggedIn(document.cookie);
  }, []);

  return (
    <GlobalStates.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        query,
        setQuery,
        loggedAccount,
        setLoggedAccount,
        listData,
        setListData,
      }}
    >
      {children}
    </GlobalStates.Provider>
  );
};
