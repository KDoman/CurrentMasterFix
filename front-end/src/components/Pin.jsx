import { Marker, Popup } from "react-leaflet";
import "./Pin.scss";
import { Link } from "react-router-dom";
import { Label } from "./Label";
import PERSON_SVG from "../assets/Person.svg";

export const Pin = ({ item }) => {
  return (
    <Marker position={[item.latitude || 0, item.longitude || 0]}>
      <Popup>
        <div className="popup_container">
          <img
            src={item.avatar || PERSON_SVG}
            alt={`Zdjęcie użytkownika ${item.name} ${item.surname}`}
          />
          <div className="popup_text">
            {item.name} {item.surname}
            <div className="proffesions_div">
              {item.professions.map((prof) => (
                <Label key={prof}>{prof}</Label>
              ))}
            </div>
            <Link to={`/list/${item._id}`}>
              <button className="popup_button">Sprawdź</button>
            </Link>
          </div>
        </div>
      </Popup>
    </Marker>
  );
};
