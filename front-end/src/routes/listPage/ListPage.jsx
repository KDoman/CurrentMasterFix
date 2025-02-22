import { Filter } from "../../components/Filter";
import { Card } from "../../components/Card";
import "./ListPage.scss";
import { Map } from "../../components/Map";
import { Outlet } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { GlobalStates } from "../../context/GlobalState";
import { GetFilteredArrayAndSortedArray } from "../../helpers/GetFilteredArrayAndSortedArray";
import { getUsers } from "../../api_utils/api";
import { LoadingSpinner } from "../../components/LoadingSpinner";

export const ListPage = () => {
  const {
    allUsers,
    setAllUsers,
    isLoading,
    setIsLoading,
    query,
    loggedAccount,
  } = useContext(GlobalStates);

  const [filterBy, setFilterBy] = useState("mark");
  const sortedArray = GetFilteredArrayAndSortedArray(allUsers, query, filterBy);
  const [clickedCardPosition, setClickedCardPosition] = useState(null);

  const filterArray = loggedAccount
    ? sortedArray.filter((specialist) => specialist._id !== loggedAccount._id)
    : sortedArray;

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
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <div className="list_container">
            <div className="list_wrapper">
              <>
                <Outlet />
                <Filter setFilterBy={setFilterBy} />
                {filterArray.length === 0 ? (
                  <p className="not_found">Nie znaleziono fachowców</p>
                ) : (
                  filterArray.map((specialist) => (
                    <Card
                      key={specialist._id}
                      specialist={specialist}
                      setClickedCardPosition={setClickedCardPosition}
                    />
                  ))
                )}
              </>
            </div>
          </div>
          <div className="map_container">
            <Map
              items={filterArray}
              clickedCardPosition={clickedCardPosition}
            />
          </div>
        </>
      )}
    </div>
  );
};
