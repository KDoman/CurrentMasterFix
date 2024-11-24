import { Filter } from "../../components/Filter";
import { Card } from "../../components/Card";
import { listData } from "../../data/data";
import "./ListPage.scss";
import { Map } from "../../components/Map";
import { Outlet } from "react-router-dom";

export const ListPage = () => {
  const data = listData;
  return (
    <div className="list_page">
      <div className="list_container">
        <div className="list_wrapper">
          <Outlet />
          <Filter />
          {data.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="map_container">
        <Map items={data} />
      </div>
    </div>
  );
};
