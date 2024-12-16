import "./SignUp.scss";
import MASTER_FULL_LOGO from "../../assets/Master_fix_full_logo.png";
import { useState } from "react";
import { useNavigate } from "react-router";
import { registerUser } from "../../api_utils/api";
import { Alert } from "../../components/Alert";
import { useGetStatusFromResponse } from "../../hooks/useGetStatusFromResponse";

export const SignUp = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const { isError, setIsError, isSuccess, setIsSuccess } =
    useGetStatusFromResponse();
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser(login, password, name);
      setIsSuccess(true);
      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch {
      setIsError(true);
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
          <div className="input_div">
            <label htmlFor="name">Imię</label>
            <input
              type="text"
              id="name"
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <button type="submit">Zarejestruj się</button>
          {isError && <Alert isError>Błąd podczas rejestracji</Alert>}
          {isSuccess && <Alert isSuccess>Pomyślnie zarejestrowano</Alert>}
        </form>
      </div>
      <div className="right">
        <img src={MASTER_FULL_LOGO} alt="" />
      </div>
    </div>
  );
};
