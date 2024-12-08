import "./navbar.scss";
import MASTERFIX_LOGO from "../assets/Master_fix_logo.png";
import MENU_ICON from "../assets/menu.png";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isHambOpen, setIsHambOpen] = useState(false);
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
        <Link to={"/login"}>
          <a>Zaloguj się</a>
        </Link>
        <Link to={"/signUp"}>
          <a className="sign-up">Zarejestruj się</a>
        </Link>
        <div className="menuIcon">
          <img
            src={MENU_ICON}
            alt="Menu icon"
            onClick={() => setIsHambOpen((prev) => !prev)}
          />
        </div>
        <div className={isHambOpen ? "menu active" : "menu"}>
          <Link to={"/"}>
            <a>Strona główna</a>
          </Link>
          <Link to={"/aboutUs"}>
            <a>Firma</a>
          </Link>
          <Link to={"/contact"}>
            <a>Kontakt</a>
          </Link>
          <Link to={"/login"}>
            <a>Zaloguj się</a>
          </Link>
          <Link to={"/signUp"}>
            <a className="sign-up">Zarejestruj się</a>
          </Link>
        </div>
      </div>
    </nav>
  );
};
