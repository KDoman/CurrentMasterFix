import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "./Map.scss";
import "leaflet/dist/leaflet.css";
import { Pin } from "../components/Pin";
import { useEffect } from "react";

const MapViewUpdater = ({ position }) => {
  const map = useMap();

  useEffect(() => {
    if (position) {
      map.flyTo(position, 16, {
        animate: true,
        duration: 1,
      });
    }
  }, [position, map]);

  return null;
};

export const Map = ({ items, clickedCardPosition }) => {
  return (
    <MapContainer
      center={[52.237049, 21.017532]}
      className="map"
      zoom={12}
      scrollWheelZoom={true}
    >
      <MapViewUpdater position={clickedCardPosition} />
      <TileLayer
        className="actual_map"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {items.map((item) => (
        <Pin
          item={item}
          key={item._id}
          clickedCardPosition={clickedCardPosition}
        />
      ))}
    </MapContainer>
  );
};
