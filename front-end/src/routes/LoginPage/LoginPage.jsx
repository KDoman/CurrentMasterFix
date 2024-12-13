import "./LoginPage.scss";
import MASTER_FULL_LOGO from "../../assets/Master_fix_full_logo.png";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { GlobalStates } from "../../context/GlobalState";
export const LoginPage = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const { setLoggedAccount, setIsLoggedIn } = useContext(GlobalStates);

  const logout = () => {
    try {
      const req = fetch("http://localhost:5000/api/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }).then((req) => {
        if (req.ok) {
          setIsLoggedIn(false);
        }
      });
    } catch (error) {}
  };

  const onSubmit = (e) => {
    e.preventDefault();
    try {
      fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ login, password }),
      })
        .then((res) => {
          res.json();
        })
        .then((data) => {
          setLoggedAccount(data);
          setIsLoggedIn(document.cookie);
        });
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="login_page_container">
      <div className="left">
        <form onSubmit={(e) => onSubmit(e)}>
          <img src={MASTER_FULL_LOGO} alt="Master całe Logo" />
          <div className="input_div">
            <label htmlFor="login">Login</label>
            <input
              type="text"
              id="login"
              required
              onChange={(e) => setLogin(e.target.value)}
            />
          </div>
          <div className="input_div">
            <label htmlFor="password">Hasło</label>
            <input
              type="password"
              name="password"
              id="password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Link to="/signUp">
            <a className="forgot_password">Nie posiadam konta</a>
          </Link>
          <button type="submit">Zaloguj się</button>
        </form>
      </div>
      <button onClick={logout}>Logout</button>
      <div className="right">
        <img src={MASTER_FULL_LOGO} alt="" />
      </div>
    </div>
  );
};
