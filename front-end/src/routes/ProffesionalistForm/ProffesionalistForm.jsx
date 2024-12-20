import "./ProffesionalistForm.scss";
import FULL_IMG_LOGO from "../../assets/Master_fix_full_logo.png";
import { CategorySelect } from "../../components/CategorySelect";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalStates } from "../../context/GlobalState";
import { makeUserSpecialist } from "../../api_utils/api";
import { useGetStatusFromResponse } from "../../hooks/useGetStatusFromResponse";
import { Alert } from "../../components/Alert";

export const ProffesionalistForm = () => {
  const { loggedAccount, setLoggedAccount } = useContext(GlobalStates);
  const [city, setCity] = useState(loggedAccount?.city || "");
  const [professionArray, setProfessionArray] = useState(
    loggedAccount?.professions || []
  );
  const [aboutMe, setAboutMe] = useState(loggedAccount?.aboutMe || "");
  const { isError, setIsError, isSuccess, setIsSuccess } =
    useGetStatusFromResponse();
  const navigate = useNavigate();

  const onFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const newSpecialist = await makeUserSpecialist(
        city,
        professionArray,
        aboutMe
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
      <div className="left"></div>
      <div className="right"></div>
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
          <button className="submit_button">Dodaj</button>
          {isSuccess && <Alert isSuccess>{isSuccess}</Alert>}
          {isError && <Alert isError>{isError}</Alert>}
        </form>
      </div>
    </div>
  );
};
