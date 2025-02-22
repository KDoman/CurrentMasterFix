import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "./MapEditPin.scss";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import MARKER_SVG from '../assets/Marker.svg';

export const MapEditPin = ({ position, setPosition }) => {
  const ClickHandler = () => {
    useMapEvents({
      click(e) {
        setPosition(e.latlng);
      },
    });
  };

   const customIcon = new Icon({
      iconUrl: MARKER_SVG,
      iconSize: [40, 40],
      iconAnchor: [20, 40], 
      popupAnchor: [0, -40],
    });

  return (
    <div className="edit_map_container">
      <MapContainer
        center={[51, 21]}
        zoom={7}
        className="edit_map"
        scrollWheelZoom={true}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          className="actual_edit_map"
        />
        <ClickHandler />
        {position && <Marker position={position} icon={customIcon}></Marker>}
      </MapContainer>
    </div>
  );
};
