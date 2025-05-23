import "./SearchBar.scss";
import SEARCH_ICON from "../assets/Search_icon.svg";
import { useContext } from "react";
import { GlobalStates } from "../context/GlobalState";
import { useNavigate } from "react-router-dom";

export const SearchBar = () => {
  const navigate = useNavigate();
  const { query, setQuery } = useContext(GlobalStates);
  const onClickButton = () => {
    navigate("/list");
  };

  return (
    <div className="search_bar">
      <div className="type">
        <button className="active">Wyszukaj fachowca</button>
      </div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          name="location"
          id="location"
          placeholder="Miasto"
          onChange={(e) => setQuery({ ...query, location: e.target.value })}
        />
        <select
          onChange={(e) => setQuery({ ...query, proffesion: e.target.value })}
          defaultValue={"select"}
        >
          <option hidden className="first-select" value="select">
            Wybierz
          </option>
          <option value="Elektryk">Elektryk</option>
          <option value="Hydraulik">Hydraulik</option>
          <option value="Malarz">Malarz</option>
          <option value="Złota rączka">Złota rączka</option>
          <option value="Mechanik">Mechanik</option>
          <option value="Stolarz">Stolarz</option>
          <option value="Ogrodnik">Ogrodnik</option>
        </select>
        <div className="search_button_div">
          <button className="search_button" onClick={onClickButton}>
            <img src={SEARCH_ICON} alt="Ikonka lupy" />
          </button>
        </div>
      </form>
    </div>
  );
};
