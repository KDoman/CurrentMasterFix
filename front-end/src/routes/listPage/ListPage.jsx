import { Filter } from "../../components/Filter";
import { Card } from "../../components/Card";
import "./ListPage.scss";
import { Map } from "../../components/Map";
import { Outlet } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { GlobalStates } from "../../context/GlobalState";
import { GetFilteredArrayAndSortedArray } from "../../helpers/GetFilteredArrayAndSortedArray";
import { getUsers } from "../../api_utils/api";

export const ListPage = () => {
  const { allUsers, setAllUsers, isLoading, setIsLoading, query } =
    useContext(GlobalStates);

  const [filterBy, setFilterBy] = useState("mark");
  const sortedArray = GetFilteredArrayAndSortedArray(allUsers, query, filterBy);
  const [clickedCardPosition, setClickedCardPosition] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    try {
      const fetchData = async () => {
        const users = await getUsers();
        setAllUsers(users.data);
      };
      fetchData();
    } catch (error) {
      setAllUsers([]);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <div className="list_page">
      <div className="list_container">
        <div className="list_wrapper">
          {isLoading ? (
            <p>Ładowanie...</p>
          ) : (
            <>
              <Outlet />
              <Filter setFilterBy={setFilterBy} />
              {sortedArray.length === 0 ? (
                <p className="not_found">Nie znaleziono fachowców</p>
              ) : (
                sortedArray.map((item) => (
                  <Card
                    key={item._id}
                    item={item}
                    setClickedCardPosition={setClickedCardPosition}
                  />
                ))
              )}
            </>
          )}
        </div>
      </div>
      <div className="map_container">
        <Map items={sortedArray} clickedCardPosition={clickedCardPosition} />
      </div>
    </div>
  );
};
