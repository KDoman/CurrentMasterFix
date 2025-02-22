import { Marker, Popup } from "react-leaflet";
import "./Pin.scss";
import { Link } from "react-router-dom";
import { Label } from "./Label";
import PERSON_SVG from "../assets/Person.svg";
import { useEffect, useRef } from "react";
import MARKER_SVG from '../assets/Marker.svg'
import { Icon } from "leaflet";

export const Pin = ({ item, clickedCardPosition }) => {
  const markerRef = useRef();

  const isActive =
    clickedCardPosition &&
    clickedCardPosition[0] === item.latitude &&
    clickedCardPosition[1] === item.longitude;

  useEffect(() => {
    if (isActive && markerRef.current) {
      markerRef.current.openPopup();
    }
  }, [isActive]);

  const customIcon = new Icon({
    iconUrl: MARKER_SVG,
    iconSize: [40, 40],
    iconAnchor: [20, 40], 
    popupAnchor: [0, -40],
  });

  return (
    <Marker
      position={[item.latitude || 0, item.longitude || 0]}
      ref={markerRef}
      icon={customIcon}
 
    >
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
