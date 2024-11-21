import "./Filter.scss";
import SEARCH_ICON from "../assets/Search_icon.svg";

export const Filter = () => {
  return (
    <div className="filter">
      <h1>Wyniki wyszukiwania</h1>
      <div className="top">
        <div className="item">
          <label htmlFor="city" className="city">
            Lokalizacja
          </label>
          <input name="city" id="city" list="city_list" />
          <datalist id="city_list">
            <option value="Warszawa" />
            <option value="Kraków" />
          </datalist>
        </div>
      </div>
      <div className="bottom">
        <div className="item">
          <label htmlFor="category" className="category">
            {/* tutaj mapowanie dostępnych kategorii */}
            Kategoria
          </label>
          <select>
            <option>Elektryk</option>
            <option>Mechanik</option>
            <option> Złota rączka</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="max_ditance" className="label">
            Maksymalny dystans
          </label>
          <input type="number" name="max_ditance" id="max_ditance" />
        </div>
        <div className="item">
          <label htmlFor="city" className="city">
            Filtruj po
          </label>
          <select>
            <option>Najwięcej ocen</option>
            <option>Najwyższa ocena</option>
            <option>Nabliżej</option>
          </select>
        </div>
        <div className="button_wrapper">
          <button>
            <img src={SEARCH_ICON} alt="Ikonka symbolizująca lupę" />
          </button>
        </div>
      </div>
    </div>
  );
};
