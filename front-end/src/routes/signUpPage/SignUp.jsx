import "./SignUp.scss";
import MASTER_FULL_LOGO from "../../assets/Master_fix_full_logo.png";
import { useState } from "react";
import { useNavigate } from "react-router";

export const SignUp = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  // const onSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const req = fetch("http://localhost:5000/api/signUp", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         login,
  //         password,
  //         name,
  //       }),
  //     });
  //   } catch (err) {
  //     console.error(err.message);
  //   }
  // };

  return (
    <div className="login_page_container">
      <div className="left">
        <form
        //  onSubmit={(e) => onSubmit(e)}
        >
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
        </form>
      </div>
      <div className="right">
        <img src={MASTER_FULL_LOGO} alt="" />
      </div>
    </div>
  );
};
