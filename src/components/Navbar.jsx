import "./navbar.scss";
import MASTERFIX_LOGO from "../assets/Master_fix_logo.png";
import MENU_ICON from "../assets/menu.png";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GlobalStates } from "../context/GlobalState";
import PERSON_SVG from "../assets/Person.svg";

export const Navbar = () => {
  const { isLoggedIn } = useContext(GlobalStates);

  const [isHambOpen, setIsHambOpen] = useState(false);

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
        <Link to={"/"}>
          <a>Strona główna</a>
        </Link>
        <Link to={"/aboutUs"}>
          <a>Firma</a>
        </Link>
        <Link to={"/contact"}>
          <a>Kontakt</a>
        </Link>
      </div>
      <div className="right">
        {!isLoggedIn ? (
          <>
            <Link to={"/login"}>
              <a>Zaloguj się</a>
            </Link>
            <Link to={"/signUp"}>
              <a className="sign-up">Zarejestruj się</a>
            </Link>
          </>
        ) : (
          <Link to="/account">
            <div className="logged_in_div">
              <img src={PERSON_SVG} alt="" />
            </div>
          </Link>
        )}

        <div className="menuIcon">
          <img
            src={MENU_ICON}
            alt="Menu icon"
            onClick={() => setIsHambOpen((prev) => !prev)}
          />
        </div>

        <div className={isHambOpen ? "menu active" : "menu"}>
          {!isLoggedIn ? (
            <>
              <Link to={"/login"} onClick={closeHambMenu}>
                <a>Zaloguj się</a>
              </Link>
              <Link to={"/signUp"} onClick={closeHambMenu}>
                <a className="sign-up">Zarejestruj się</a>
              </Link>
            </>
          ) : (
            <Link to="/account">
              <div className="logged_in_div active">
                <p>Ustawienia</p>
                <img src={PERSON_SVG} alt="" />
              </div>
            </Link>
          )}
          <Link to={"/"} onClick={closeHambMenu}>
            <a>Strona główna</a>
          </Link>
          <Link to={"/aboutUs"} onClick={closeHambMenu}>
            <a>Firma</a>
          </Link>
          <Link to={"/contact"} onClick={closeHambMenu}>
            <a>Kontakt</a>
          </Link>
        </div>
      </div>
    </nav>
  );
};
