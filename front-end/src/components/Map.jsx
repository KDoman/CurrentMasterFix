import { MapContainer, TileLayer } from "react-leaflet";
import "./Map.scss";
import "leaflet/dist/leaflet.css";
import { Pin } from "../components/Pin";

export const Map = ({ items }) => {
  return (
    <MapContainer
      center={[52.237049, 21.017532]}
      className="map"
      zoom={12}
      scrollWheelZoom={true}
    >
      <TileLayer
        className="actual_map"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {items.map((item) => (
        <Pin item={item} key={item._id} />
      ))}
    </MapContainer>
  );
};
