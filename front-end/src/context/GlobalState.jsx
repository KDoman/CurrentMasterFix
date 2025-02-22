import { createContext, useState, useLayoutEffect } from "react";
import { getCurrentUser } from "../api_utils/api";

export const GlobalStates = createContext();

export const GlobalStatesProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(null); // token
  const [query, setQuery] = useState({ location: "", proffesion: "" }); // wyszukiwanie
  const [loggedAccount, setLoggedAccount] = useState(null); // zalogowany użytkownik
  const [isLoading, setIsLoading] = useState(true); // Stan ładowania danych użytkownika
  const [allUsers, setAllUsers] = useState([]);

  useLayoutEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await getCurrentUser();
        setLoggedAccount(response.data);
        setIsLoggedIn(loggedAccount);
      } catch (error) {
        console.error("Błąd pobierania danych użytkownika", error);
      } finally {
        setIsLoading(false);
      }
    }
  

    fetchUserData();
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
        allUsers,
        setAllUsers,
      }}
    >
      {children}
    </GlobalStates.Provider>
  );
};
