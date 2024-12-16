import { Filter } from "../../components/Filter";
import { Card } from "../../components/Card";
import "./ListPage.scss";
import { Map } from "../../components/Map";
import { Outlet } from "react-router-dom";
import { useContext, useState } from "react";
import { GlobalStates } from "../../context/GlobalState";
import { GetFilteredArrayAndSortedArray } from "../../helpers/GetFilteredArrayAndSortedArray";
import { listData } from "../../data/data";

export const ListPage = () => {
  const { query } = useContext(GlobalStates);
  const [filterBy, setFilterBy] = useState("mark");
  // const { listData, setListData } = useContext(GlobalStates);
  const sortedArray = GetFilteredArrayAndSortedArray(listData, query, filterBy);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await getUsers();
  //       console.log(res);
  //       setListData(res.data);
  //     } catch (error) {
  //       console.error("Błąd podczas pobierania użytkowników", error.message);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <div className="list_page">
      {console.log(listData)}
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
