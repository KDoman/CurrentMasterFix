import { useState } from "react";
import "./CategorySelect.scss";
import { proffestionArr } from "../data/proffesions";

export const CategorySelect = () => {
  const [professionArray, setProfessionArray] = useState([]);

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
    <div className="categories_box">
      <label htmlFor="categories">Specjalizacje</label>
      <select id="categories" multiple size="7" onChange={handleCategoryChange}>
        {proffestionArr.map((profession) => (
          <option
            key={profession}
            value={profession}
            className={professionArray.includes(profession) ? "selected" : ""}
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
  );
};
