import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "./MapEditPin.scss";
import "leaflet/dist/leaflet.css";

export const MapEditPin = ({ position, setPosition }) => {
  const ClickHandler = () => {
    useMapEvents({
      click(e) {
        setPosition(e.latlng);
      },
    });
  };

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
        {position && <Marker position={position}></Marker>}
      </MapContainer>
    </div>
  );
};
