import "./SearchBar.scss";
import SEARCH_ICON from "../assets/Search_icon.svg";
import { useState } from "react";

export const SearchBar = () => {
  const [query, setQuery] = useState({
    type: "fachowiec",
    location: "",
    minDistance: 0,
    maxDistance: 0,
  });

  const typesOfUsers = ["fachowiec", "domownik"];

  return (
    <div className="search_bar">
      <div className="type">
        {typesOfUsers.map((type) => (
          <button
            key={type}
            className={query.type === type ? "active" : ""}
            onClick={() => setQuery({ ...query, type })}
          >
            {type}
          </button>
        ))}
      </div>
      <form>
        <input type="text" name="location" id="location" placeholder="Miasto" />
        <input
          type="number"
          name="maxDistance"
          id="maxDistance"
          placeholder="Max. zasięg"
          min={0}
        />
        <input
          type="number"
          name="minDistance"
          id="minDistance"
          placeholder="Min. zasięg"
          min={0}
        />
        <div className="search_button_div">
          <button className="search_button">
            <img src={SEARCH_ICON} alt="Ikonka lupy" />
          </button>
        </div>
      </form>
    </div>
  );
};
