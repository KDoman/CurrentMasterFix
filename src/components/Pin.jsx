import { Marker, Popup } from "react-leaflet";
import "./Pin.scss";
import { Link } from "react-router-dom";

export const Pin = ({ item }) => {
  return (
    <Marker position={[item.latitude, item.longitude]}>
      <Popup>
        <div className="popup_container">
          <img
            src={item.img}
            alt={`Zdjęcie użytkownika ${item.name} ${item.surname}`}
          />
          <div className="popup_text">
            <Link to={`/${item.id}`}>
              {item.name} {item.surname}
            </Link>
          </div>
        </div>
      </Popup>
    </Marker>
  );
};
