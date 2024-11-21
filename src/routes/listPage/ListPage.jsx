import { Filter } from "../../components/Filter";
import { Card } from "../../components/Card";
import { listData } from "../../data/data";
import "./ListPage.scss";

export const ListPage = () => {
  const data = listData;
  return (
    <div className="list_page">
      <div className="list_container">
        <div className="list_wrapper">
          <Filter />
          {data.map((item) => (
            <Card key={item} item={item} />
          ))}
        </div>
      </div>
      <div className="map_container">Mapa</div>
    </div>
  );
};
