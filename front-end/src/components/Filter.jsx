import "./Filter.scss";
import SEARCH_ICON from "../assets/Search_icon.svg";
import { useContext, useState } from "react";
import { GlobalStates } from "../context/GlobalState";
import { proffestionArr } from "../data/proffesions";

export const Filter = ({ setFilterBy }) => {
  const { query, setQuery } = useContext(GlobalStates);
  const [location, setLocation] = useState(query.location);
  const [proffesion, setProffesion] = useState(query.proffesion);
  const [filterSelect, setFilterSelect] = useState("mark");

  const handleSearchClick = () => {
    setQuery({
      location,
      proffesion,
    });
    setFilterBy(filterSelect);
  };

  return (
    <div className="filter">
      <h1>Wyniki wyszukiwania</h1>
      <div className="top">
        <div className="item">
          <label htmlFor="city" className="city">
            Lokalizacja
          </label>
          <input
            name="location"
            id="city"
            list="city_list"
            value={location.toLowerCase()}
            onChange={(e) => setLocation(e.target.value)}
          />
          <datalist id="city_list">
            <option value="Warszawa" />
            <option value="Kraków" />
          </datalist>
        </div>
      </div>
      <div className="bottom">
        <div className="item">
          <label htmlFor="proffesion" className="category">
            Kategoria
          </label>
          <select
            name="proffesion"
            value={proffesion}
            onChange={(e) => setProffesion(e.target.value)}
          >
            <option hidden>Wybierz</option>
            {proffestionArr.map((prof) => (
              <option key={prof} value={prof}>
                {prof}
              </option>
            ))}
          </select>
        </div>
        <div className="item">
          <label htmlFor="sort" className="city">
            Filtruj po
          </label>
          <select onChange={(e) => setFilterSelect(e.target.value)}>
            <option selected value={"mark"}>
              Najwyższa ocena
            </option>
            <option value={"count"}>Najwięcej ocen</option>
          </select>
        </div>
        <div className="button_wrapper">
          <button onClick={handleSearchClick}>
            <img src={SEARCH_ICON} alt="Ikonka symbolizująca lupę" />
          </button>
        </div>
      </div>
    </div>
  );
};
