import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { cities } from "../config";

const Map = () => {
  return (
    <MapContainer
      center={[49.246292, -123.116226]}
      zoom={10}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>contributors'
      />

      {cities.map((city, i) => {
        return (
          <Marker
            key={i + 1}
            position={city.coordinates}
            draggable={true}
            animate={true}
          >
            <Popup>
              <h2>{city.name}</h2>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default Map;
