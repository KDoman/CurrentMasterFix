import "./LoginPage.scss";
import MASTER_FULL_LOGO from "../../assets/Master_fix_full_logo.png";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { GlobalStates } from "../../context/GlobalState";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../api_utils/api";
import { useGetStatusFromResponse } from "../../hooks/useGetStatusFromResponse";
import { Alert } from "../../components/Alert";

export const LoginPage = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const { isError, setIsError, isSuccess, setIsSuccess } =
    useGetStatusFromResponse();
  const navigate = useNavigate();
  const { setLoggedAccount, setIsLoggedIn } = useContext(GlobalStates);

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsError(null);
    try {
      const newLoggedUser = await loginUser(login, password);
      setLoggedAccount(newLoggedUser.data);
      setIsSuccess(true);
      setTimeout(() => {
        setIsLoggedIn(true);
        navigate("/");
      }, 1000);
    } catch (err) {
      setIsError(err.message);
    }
  };

  return (
    <div className="login_page_container">
      <div className="left">
        <form onSubmit={onSubmit}>
          <img src={MASTER_FULL_LOGO} alt="Master całe Logo" />
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
            <span className="forgot_password">Nie posiadam konta</span>
          </Link>
          <button type="submit">Zaloguj się</button>
          {isError && <Alert isError>Błąd podczas logowania</Alert>}
          {isSuccess && <Alert isSuccess>Pomyślnie zalogowano</Alert>}
        </form>
      </div>
      <div className="right">
        <img src={MASTER_FULL_LOGO} alt="" />
      </div>
    </div>
  );
};
