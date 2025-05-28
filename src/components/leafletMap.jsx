import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix default icon paths (for Vite)
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});


const LeafletMap = () => {
  const position = [41.8853, -87.6216]; 

  return (
    <MapContainer
      center={position}
      zoom={3}
      scrollWheelZoom={false}
      style={{ height: "400px", width: "100%", borderRadius: "12px" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          205 North Michigan Avenue, Suite 810<br />
          Chicago, IL 60601, USA
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default LeafletMap;
