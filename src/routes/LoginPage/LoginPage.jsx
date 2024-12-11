import "./LoginPage.scss";
import MASTER_FULL_LOGO from "../../assets/Master_fix_full_logo.png";
import { Link } from "react-router-dom";
export const LoginPage = () => {
  return (
    <div className="login_page_container">
      <div className="left">
        <form action="">
          <img src={MASTER_FULL_LOGO} alt="Master całe Logo" />
          <div className="input_div">
            <label htmlFor="login">Login</label>
            <input type="text" id="login" />
          </div>
          <div className="input_div">
            <label htmlFor="password">Hasło</label>
            <input type="password" name="password" id="password" />
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
