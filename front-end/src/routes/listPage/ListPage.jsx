import { Filter } from "../../components/Filter";
import { Card } from "../../components/Card";
import { listData } from "../../data/data";
import "./ListPage.scss";
import { Map } from "../../components/Map";
import { Outlet } from "react-router-dom";
import { useContext, useState } from "react";
import { GlobalStates } from "../../context/GlobalState";
import { GetReviewAvg } from "../../helpers/GetReviewAvg";

export const ListPage = () => {
  const { query } = useContext(GlobalStates);
  const [filterBy, setFilterBy] = useState("mark");

  const filteredArray = listData.filter((professional) => {
    const matchesLocation =
      !query.location || professional.city === query.location;
    const matchesProfession =
      !query.proffesion || professional.professions.includes(query.proffesion);

    return matchesLocation && matchesProfession;
  });

  const getRatingCount = (rating) => rating.length;

  const sortedArray = [...filteredArray].sort((a, b) => {
    if (filterBy === "count") {
      return getRatingCount(b.rating) - getRatingCount(a.rating);
    }
    if (filterBy === "mark") {
      const avgA = GetReviewAvg(a.rating);
      const avgB = GetReviewAvg(b.rating);

      return avgB - avgA;
    }
    return 0;
  });

  return (
    <div className="list_page">
      <div className="list_container">
        <div className="list_wrapper">
          <Outlet />
          <Filter setFilterBy={setFilterBy} />
          {sortedArray.length === 0 ? (
            <p className="not_found">Nie znaleziono fachowców</p>
          ) : (
            sortedArray.map((item) => <Card key={item.id} item={item} />)
          )}
        </div>
      </div>
      <div className="map_container">
        <Map items={sortedArray} />
      </div>
    </div>
  );
};
