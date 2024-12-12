import "./EditAccountView.scss";
import CROSS_SVG from "../../assets/Cross.svg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export const EditAccountView = () => {
  const navigate = useNavigate();

  const onSaveClick = () => {
    navigate("/account");
  };

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

          <div className="categories_box">
            <label htmlFor="categories">Specjalizacje</label>
            <select
              id="categories"
              multiple
              size="7"
              onChange={handleCategoryChange}
            >
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
          </div>
          <button onClick={onSaveClick}>Zapisz</button>
        </form>
      </div>
    </div>
  );
};
