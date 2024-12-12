import "./SignUp.scss";
import MASTER_FULL_LOGO from "../../assets/Master_fix_full_logo.png";

export const SignUp = () => {
  return (
    <div className="login_page_container">
      <div className="left">
        <form action="">
          <img src={MASTER_FULL_LOGO} alt="Master całe Logo" />
          <div className="input_div">
            <label htmlFor="login">Login</label>
            <input type="text" id="login" required />
          </div>
          <div className="input_div">
            <label htmlFor="password">Hasło</label>
            <input type="password" name="password" id="password" required />
          </div>
          <div className="input_div">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" required />
          </div>
          <div className="input_div">
            <label htmlFor="name">Imię</label>
            <input type="text" id="name" required />
          </div>
          <button type="submit">Zarejestruj się</button>
        </form>
      </div>
      <div className="right">
        <img src={MASTER_FULL_LOGO} alt="" />
      </div>
    </div>
  );
};
