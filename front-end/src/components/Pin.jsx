import { Marker, Popup } from "react-leaflet";
import "./Pin.scss";
import { Link } from "react-router-dom";
import { Label } from "./Label";

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
            {item.name} {item.surname}
            <div className="proffesions_div">
              {item.professions.map((prof) => (
                <Label key={prof}>{prof}</Label>
              ))}
            </div>
            <Link to={`/list/${item.id}`}>
              <button className="popup_button">Sprawdź</button>
            </Link>
          </div>
        </div>
      </Popup>
    </Marker>
  );
};
