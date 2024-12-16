import { createContext, useState, useLayoutEffect } from "react";

export const GlobalStates = createContext();

export const GlobalStatesProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(null); // token
  const [query, setQuery] = useState({ location: "", proffesion: "" }); // wyszukiwanie
  const [loggedAccount, setLoggedAccount] = useState(null); // zalogowany użytkownik
  const [isLoading, setIsLoading] = useState(true); // Stan ładowania danych użytkownika
  const [listData, setListData] = useState(null);

  useLayoutEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/currentUser", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        });

        if (!response.ok) {
          throw new Error("Błąd podczas pobierania danych użytkownika");
        }

        const data = await response.json();

        setLoggedAccount(data.data);
      } catch (error) {
        console.error("Błąd pobierania danych użytkownika", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserData();
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
        isLoading,
        setIsLoading,
        listData,
        setListData,
      }}
    >
      {children}
    </GlobalStates.Provider>
  );
};
