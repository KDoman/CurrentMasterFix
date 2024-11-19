import "./navbar.scss";
import MASTERFIX_LOGO from "../assets/Master_fix_logo.png";
import MENU_ICON from "../assets/menu.png";
import { useState } from "react";

export const Navbar = () => {
  const [isHambOpen, setIsHambOpen] = useState(false);
  return (
    <nav>
      <div className="left">
        <img src={MASTERFIX_LOGO} className="logo" alt="Master Fix logo" />
        <a href="/">Strona główna</a>
        <a href="/">Firma</a>
        <a href="/">Kontakt</a>
      </div>
      <div className="right">
        <a href="/">Zaloguj się</a>
        <a href="/" className="sign-up">
          Zarejestruj się
        </a>
        <div className="menuIcon">
          <img
            src={MENU_ICON}
            alt="Menu icon"
            onClick={() => setIsHambOpen((prev) => !prev)}
          />
        </div>
        <div className={isHambOpen ? "menu active" : "menu"}>
          <a href="/">Strona główna</a>
          <a href="/">Firma</a>
          <a href="/">Kontakt</a>
          <a href="/">Zaloguj się</a>
          <a href="/" className="sign-up">
            Zarejestruj się
          </a>
        </div>
      </div>
    </nav>
  );
};
