import "./EditAccountView.scss";
import CROSS_SVG from "../../assets/Cross.svg";
import { Link, useNavigate } from "react-router-dom";
import { CategorySelect } from "../../components/CategorySelect";
import { useContext } from "react";
import { GlobalStates } from "../../context/GlobalState";

export const EditAccountView = () => {
  const { loggedAccount } = useContext(GlobalStates);
  const navigate = useNavigate();

  const onSaveClick = () => {
    navigate("/account");
  };

  return (
    <div className="edit_account_view">
      <div className="edit_form">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="entry_form">
            <Link to="/account">
              <img src={CROSS_SVG} alt="" />
            </Link>
            <h1>Edytuj konto</h1>
          </div>
          <div className="box">
            <label htmlFor="name">Imię</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className="box">
            <label htmlFor="surname">Nazwisko</label>
            <input type="text" id="surname" name="surname" />
          </div>
          <div className="box">
            <label htmlFor="city">Miasto</label>
            <input type="text" id="city" name="city" />
          </div>

          {loggedAccount.isSpecialist && <CategorySelect />}
          <button onClick={onSaveClick}>Zapisz</button>
        </form>
      </div>
    </div>
  );
};
