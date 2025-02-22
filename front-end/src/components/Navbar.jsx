import "./navbar.scss";
import MASTERFIX_LOGO from "../assets/Master_fix_logo.png";
import MENU_ICON from "../assets/menu.png";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GlobalStates } from "../context/GlobalState";
import PERSON_SVG from "../assets/Person.svg";
import { logoutUser } from "../api_utils/api";

export const Navbar = () => {
  const { setLoggedAccount, loggedAccount, isLoggedIn, setIsLoggedIn } =
    useContext(GlobalStates);

  const [isHambOpen, setIsHambOpen] = useState(false);

  const logOut = () => {
    logoutUser();
    setIsLoggedIn(null);
    setLoggedAccount(null);
  };

  const closeHambMenu = () => {
    setIsHambOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isHambOpen) {
        setIsHambOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isHambOpen]);

  return (
    <nav>
      <div className="left">
        <img src={MASTERFIX_LOGO} className="logo" alt="Master Fix logo" />
        <Link to={"/"}>Strona główna</Link>
        <Link to={"/aboutUs"}>Firma</Link>
        <Link to={"/contact"}>Kontakt</Link>
      </div>
      <div className="right">
        {!isLoggedIn ? (
          <>
            <Link to={"/login"}>Zaloguj się</Link>
            <Link to={"/signUp"}>
              <span className="sign-up">Zarejestruj się</span>
            </Link>
          </>
        ) : (
          <>
            <Link to="/account">
              <div className="logged_in_div">
                <img src={loggedAccount?.avatar || PERSON_SVG} alt="" />
              </div>
            </Link>
            <Link onClick={logOut} to={"/"}>
              <span className="sign-up">Wyloguj</span>
            </Link>
          </>
        )}

        <div className="menuIcon">
          <img
            src={MENU_ICON}
            alt="Menu icon"
            onClick={() => setIsHambOpen((prev) => !prev)}
          />
        </div>

        <div className={isHambOpen ? "menu active" : "menu"}>
          <Link to={"/"} onClick={closeHambMenu}>
            Strona główna
          </Link>
          <Link to={"/aboutUs"} onClick={closeHambMenu}>
            Firma
          </Link>
          <Link to={"/contact"} onClick={closeHambMenu}>
            Kontakt
          </Link>
          {!isLoggedIn ? (
            <>
              <Link to={"/login"} onClick={closeHambMenu}>
                Zaloguj się
              </Link>
              <Link to={"/signUp"} onClick={closeHambMenu}>
                <span className="sign-up">Zarejestruj się</span>
              </Link>
            </>
          ) : (
            <>
              <Link to="/account">
                <div className="logged_in_div active">
                  <p>Ustawienia konta</p>
                </div>
              </Link>
              <Link onClick={logOut} role="button" className="special">
                Wyloguj
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};
