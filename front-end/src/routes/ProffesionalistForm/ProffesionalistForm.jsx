import "./ProffesionalistForm.scss";
import FULL_IMG_LOGO from "../../assets/Master_fix_full_logo.png";
import { CategorySelect } from "../../components/CategorySelect";

export const ProffesionalistForm = () => {
  return (
    <div className="proffesionalist_form_container">
      <div className="left"></div>
      <div className="right"></div>
      <div className="form_container">
        <img src={FULL_IMG_LOGO} alt="Całe logo Master Fix" />
        <h1>Wypełnij krótki formularz i dodaj siebie do listy fachowców!</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="city">Miasto</label>
          <input type="text" name="city" id="city" />
          <CategorySelect />
          <label htmlFor="about">Powiedz parę słów o sobie</label>
          <textarea id="about" rows={20}></textarea>
          <button className="submit_button">Dodaj</button>
        </form>
      </div>
    </div>
  );
};
