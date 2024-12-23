import "./ProffesionalistForm.scss";
import FULL_IMG_LOGO from "../../assets/Master_fix_full_logo.png";
import { CategorySelect } from "../../components/CategorySelect";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalStates } from "../../context/GlobalState";
import { makeUserSpecialist } from "../../api_utils/api";
import { useGetStatusFromResponse } from "../../hooks/useGetStatusFromResponse";
import { Alert } from "../../components/Alert";
import { MapEditPin } from "../../components/MapEditPin";

export const ProffesionalistForm = () => {
  const { loggedAccount, setLoggedAccount } = useContext(GlobalStates);
  const [city, setCity] = useState(loggedAccount?.city || "");
  const [professionArray, setProfessionArray] = useState(
    loggedAccount?.professions || []
  );
  const [position, setPosition] = useState(null);
  const [aboutMe, setAboutMe] = useState(loggedAccount?.aboutMe || "");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const { isError, setIsError, isSuccess, setIsSuccess } =
    useGetStatusFromResponse();
  const navigate = useNavigate();

  const onFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const newSpecialist = await makeUserSpecialist(
        city,
        professionArray,
        aboutMe,
        position?.lat,
        position?.lng,
        phone,
        email
      );

      setLoggedAccount(newSpecialist.data);
      setIsSuccess("Zmiana danych powiodła się");
      setTimeout(() => {
        navigate("/");
      }, 1500);
    } catch (error) {
      setIsError(error.message);
    }
  };

  return (
    <div className="proffesionalist_form_container">
      <div className="form_container">
        <img src={FULL_IMG_LOGO} alt="Całe logo Master Fix" />
        <h1>Wypełnij krótki formularz i dodaj siebie do listy fachowców!</h1>
        <form onSubmit={(e) => onFormSubmit(e)}>
          <label htmlFor="city">Miasto</label>
          <input
            type="text"
            name="city"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <CategorySelect
            professionArray={professionArray}
            setProfessionArray={setProfessionArray}
          />
          <label htmlFor="about">Powiedz parę słów o sobie</label>
          <textarea
            id="about"
            rows={20}
            value={aboutMe}
            placeholder="Jestem hydraulikiem z 5 letnim doświadczeniem..."
            onChange={(e) => setAboutMe(e.target.value)}
          ></textarea>
          <label htmlFor="phone">Numer telefonu</label>
          <input
            type="tel"
            name="phone"
            id="phone"
            maxLength={9}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="map">
            Zaznacz preferowaną okolicę, w której chcesz znajdować klientów
          </label>
          <MapEditPin position={position} setPosition={setPosition} id="map" />
          <button className="submit_button">Dodaj</button>
          {isSuccess && <Alert isSuccess>{isSuccess}</Alert>}
          {isError && <Alert isError>{isError}</Alert>}
        </form>
      </div>
    </div>
  );
};
