import "./EditAccountView.scss";
import CROSS_SVG from "../../assets/Cross.svg";
import { Link, useNavigate } from "react-router-dom";
import { CategorySelect } from "../../components/CategorySelect";
import { useContext, useState } from "react";
import { GlobalStates } from "../../context/GlobalState";
import { editUserInfo } from "../../api_utils/api";
import { useGetStatusFromResponse } from "../../hooks/useGetStatusFromResponse";
import { Alert } from "../../components/Alert";

export const EditAccountView = () => {
  const { loggedAccount, setLoggedAccount } = useContext(GlobalStates);
  const [name, setName] = useState(loggedAccount.name);
  const [surname, setSurname] = useState(loggedAccount.surname);
  const [city, setCity] = useState(loggedAccount.city);
  const { isError, setIsError, isSuccess, setIsSuccess } =
    useGetStatusFromResponse();
  const navigate = useNavigate();

  const onSaveClick = async () => {
    try {
      const updateUser = await editUserInfo(name, surname, city);
      setLoggedAccount(updateUser.data);
      setIsSuccess("Zaktualizowano dane");
      setTimeout(() => {
        navigate("/account");
      }, 1000);
    } catch {
      setIsError("Operacja nieudana");
    }
  };

  return (
    <div
      className={`edit_account_view ${
        loggedAccount.isSpecialist && "full_view_height"
      }`}
    >
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
            <input
              type="text"
              id="name"
              name="name"
              defaultValue={loggedAccount.name}
              onChange={(e) => setName(e.target.value.trim())}
            />
          </div>
          <div className="box">
            <label htmlFor="surname">Nazwisko</label>
            <input
              type="text"
              id="surname"
              name="surname"
              defaultValue={loggedAccount.surname}
              onChange={(e) => setSurname(e.target.value.trim())}
            />
          </div>
          <div className="box">
            <label htmlFor="city">Miasto</label>
            <input
              type="text"
              id="city"
              name="city"
              defaultValue={loggedAccount.city}
              onChange={(e) => setCity(e.target.value.trim())}
            />
          </div>
          {loggedAccount?.isSpecialist ? (
            <>
              <Alert isError={isError}>{isError}</Alert>
              <Alert isSuccess={isSuccess}>{isSuccess}</Alert>
            </>
          ) : (
            <>
              <CategorySelect />
              <Alert isError={isError}>{isError}</Alert>
              <Alert isSuccess={isSuccess}>{isSuccess}</Alert>
            </>
          )}
          <button onClick={onSaveClick}>Zapisz</button>
        </form>
      </div>
    </div>
  );
};
