import "./LoginPage.scss";
import MASTER_FULL_LOGO from "../../assets/Master_fix_full_logo.png";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { GlobalStates } from "../../context/GlobalState";
import { useNavigate } from "react-router-dom";
import { loginUser, getUsers } from "../../api_utils/api";

export const LoginPage = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const { setLoggedAccount, setIsLoggedIn, setListData } =
    useContext(GlobalStates);

  const onSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Resetuj błędy przed nową próbą logowania

    try {
      // Logowanie użytkownika
      const loggedAccount = await loginUser(login, password);
      setLoggedAccount(loggedAccount);
      setIsLoggedIn(true);

      // Pobranie danych użytkowników po zalogowaniu
      const users = await getUsers();
      setListData(users);

      navigate("/");
    } catch (err) {
      setError(err.message); // Obsługa błędu
    }
  };

  return (
    <div className="login_page_container">
      <div className="left">
        <form onSubmit={onSubmit}>
          <img src={MASTER_FULL_LOGO} alt="Master całe Logo" />
          {error && <p className="error_message">{error}</p>}
          <div className="input_div">
            <label htmlFor="login">Login</label>
            <input
              type="text"
              id="login"
              required
              value={login}
              onChange={(e) => setLogin(e.target.value)}
            />
          </div>
          <div className="input_div">
            <label htmlFor="password">Hasło</label>
            <input
              type="password"
              id="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Link to="/signUp">
            <a className="forgot_password">Nie posiadam konta</a>
          </Link>
          <button type="submit">Zaloguj się</button>
        </form>
      </div>
      <div className="right">
        <img src={MASTER_FULL_LOGO} alt="" />
      </div>
    </div>
  );
};
