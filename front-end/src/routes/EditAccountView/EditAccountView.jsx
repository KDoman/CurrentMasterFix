import "./EditAccountView.scss";
import CROSS_SVG from "../../assets/Cross.svg";
import { Link, useNavigate } from "react-router-dom";
import { CategorySelect } from "../../components/CategorySelect";
import { useContext, useState } from "react";
import { GlobalStates } from "../../context/GlobalState";
import { editUserInfo } from "../../api_utils/api";
import { useGetStatusFromResponse } from "../../hooks/useGetStatusFromResponse";
import { Alert } from "../../components/Alert";
import DEFAULT_AVATAR from "../../assets/Person.svg";
import { ConvertFileToBase64Format } from "../../helpers/ConvertFileToBase64Format";
import { MapEditPin } from "../../components/MapEditPin";

export const EditAccountView = () => {
  const { loggedAccount, setLoggedAccount } = useContext(GlobalStates);
  const [name, setName] = useState(loggedAccount?.name);
  const [surname, setSurname] = useState(loggedAccount?.surname);
  const [city, setCity] = useState(loggedAccount?.city);
  const [phone, setPhone] = useState(loggedAccount?.phone);
  const [email, setEmail] = useState(loggedAccount?.email);
  const [professionArray, setProfessionArray] = useState(
    loggedAccount?.professions
  );
  const [position, setPosition] = useState({
    lat: loggedAccount?.latitude || null,
    lng: loggedAccount?.longitude || null,
  });
  const [aboutMe, setAboutMe] = useState(loggedAccount?.aboutMe);
  const [avatar, setAvatar] = useState(loggedAccount?.avatar);
  const { isError, setIsError, isSuccess, setIsSuccess } =
    useGetStatusFromResponse();
  const navigate = useNavigate();

  const onFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        const base64 = await ConvertFileToBase64Format(file);
        setAvatar(base64);
      } catch (error) {
        console.error("Błąd konwersji pliku:", error);
      }
    }
  };

  const onSaveClick = async () => {
    try {
      const updateUser = await editUserInfo(
        name,
        surname,
        city,
        professionArray,
        aboutMe,
        avatar,
        position.lat,
        position.lng,
        phone,
        email
      );

      setLoggedAccount(updateUser.data);
      setIsSuccess("Zaktualizowano dane");
      setTimeout(() => {
        navigate("/account");
      }, 1000);
    } catch {
      setIsError("Operacja nieudana");
    }
  };

  const resetAvatar = () => {
    setAvatar(DEFAULT_AVATAR);
  };

  return (
    <div
      className={`edit_account_view ${
        loggedAccount?.isSpecialist && "full_view_height"
      }`}
    >
      <div className="edit_form">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="entry_form">
            <Link to="/account">
              <img src={CROSS_SVG} alt="" />
            </Link>
            <h1>Edytuj informacje</h1>
          </div>
          <div className="box">
            <label htmlFor="file" className="file_label">
              Zmień zdjęcie
            </label>
            <input
              type="file"
              id="file"
              name="file"
              className="input_file"
              onChange={(e) => onFileChange(e)}
            />
          </div>
          <div className="box">
            <button className="reset_img_button" onClick={resetAvatar}>
              Zresetuj zdjęcie
            </button>
          </div>
          <div className="box img">
            <div className="box_img">
              <img src={avatar || DEFAULT_AVATAR} className="avatar" />
            </div>
            <p className="avatar_info">Zalecany współczynnik proporcji 1:1</p>
          </div>
          <div className="box">
            <label htmlFor="name">Imię</label>
            <input
              type="text"
              id="name"
              name="name"
              defaultValue={loggedAccount?.name}
              onChange={(e) => setName(e.target.value.trim())}
            />
          </div>
          <div className="box">
            <label htmlFor="surname">Nazwisko</label>
            <input
              type="text"
              id="surname"
              name="surname"
              defaultValue={loggedAccount?.surname}
              onChange={(e) => setSurname(e.target.value.trim())}
            />
          </div>
          <div className="box">
            <label htmlFor="city">Miasto</label>
            <input
              type="text"
              id="city"
              name="city"
              defaultValue={loggedAccount?.city}
              onChange={(e) => setCity(e.target.value.trim())}
            />
          </div>
          <div className="box">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              defaultValue={loggedAccount?.email}
              onChange={(e) => setEmail(e.target.value.trim())}
            />
            <div className="box">
              <label htmlFor="phone">Telefon</label>
              <input
                type="tel"
                maxLength={9}
                id="phone"
                name="phone"
                defaultValue={loggedAccount?.phone}
                onChange={(e) => setPhone(e.target.value.trim())}
              />
            </div>
          </div>
          {!loggedAccount?.isSpecialist ? (
            <div className="box">
              <Alert isError={isError}>{isError}</Alert>
              <Alert isSuccess={isSuccess}>{isSuccess}</Alert>
            </div>
          ) : (
            <div className="box">
              <CategorySelect
                professionArray={professionArray}
                setProfessionArray={setProfessionArray}
              />
              <div className="box textarea_div">
                <p>O mnie:</p>
                <textarea
                  onChange={(e) => setAboutMe(e.target.value)}
                  value={aboutMe}
                >
                  {loggedAccount?.aboutMe}
                </textarea>
              </div>
              <div className="box">
                <MapEditPin position={position} setPosition={setPosition} />
              </div>
              <Alert isError={isError}>{isError}</Alert>
              <Alert isSuccess={isSuccess}>{isSuccess}</Alert>
            </div>
          )}
          <button onClick={onSaveClick}>Zapisz</button>
        </form>
      </div>
    </div>
  );
};
