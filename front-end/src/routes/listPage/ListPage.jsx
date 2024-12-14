import { Filter } from "../../components/Filter";
import { Card } from "../../components/Card";
import { listData } from "../../data/data";
import "./ListPage.scss";
import { Map } from "../../components/Map";
import { Outlet } from "react-router-dom";
import { useContext, useState } from "react";
import { GlobalStates } from "../../context/GlobalState";
import { GetFilteredArrayAndSortedArray } from "../../helpers/GetFilteredArrayAndSortedArray";

export const ListPage = () => {
  const { query } = useContext(GlobalStates);
  const [filterBy, setFilterBy] = useState("mark");

  const sortedArray = GetFilteredArrayAndSortedArray(listData, query, filterBy);

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
