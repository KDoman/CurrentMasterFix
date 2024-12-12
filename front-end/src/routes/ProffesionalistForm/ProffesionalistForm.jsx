import { useState } from "react";
import "./ProffesionalistForm.scss";
import FULL_IMG_LOGO from "../../assets/Master_fix_full_logo.png";

export const ProffesionalistForm = () => {
  const [professionArray, setProfessionArray] = useState([]);
  const categories = [
    "Elektryk",
    "Hydraulik",
    "Malarz",
    "Złota rączka",
    "Mechanik",
    "Stolarz",
    "Ogrodnik",
  ];

  const handleCategoryChange = (e) => {
    const selectedValue = e.target.value;

    if (selectedValue && !professionArray.includes(selectedValue)) {
      setProfessionArray((prev) => [...prev, selectedValue]);
    }
  };

  const onXClick = (profession) => {
    setProfessionArray((prev) => prev.filter((item) => item !== profession));
  };

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
          <label htmlFor="test">Wybierz kategorię</label>
          <select id="test" multiple size="7" onChange={handleCategoryChange}>
            <option hidden>Wybierz</option>
            {categories.map((profession) => (
              <option
                key={profession}
                value={profession}
                className={
                  professionArray.includes(profession) ? "selected" : ""
                }
              >
                {profession}
              </option>
            ))}
          </select>
          <div className="selected_categories_container">
            <p>Wybrane kategorie:</p>
            <div className="selected-categories">
              {professionArray.map((profession) => (
                <div key={profession} className="selected-category">
                  {profession}
                  <button
                    type="button"
                    className="remove-btn"
                    onClick={() => onXClick(profession)}
                  >
                    ❌
                  </button>
                </div>
              ))}
            </div>
          </div>
          <label htmlFor="about">Powiedz parę słów o sobie</label>
          <textarea id="about" rows={20}></textarea>
          <button className="submit_button">Dodaj</button>
        </form>
      </div>
    </div>
  );
};
