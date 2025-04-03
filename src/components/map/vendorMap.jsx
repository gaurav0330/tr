import { GoogleMap, Marker, LoadScriptNext } from "@react-google-maps/api";
import { useMemo } from "react";

const mapContainerStyle = {
  width: "100%",
  height: "100%",
  borderRadius: "8px",
};

export default function VendorMap({ vendors }) {
  const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  // Optimize center calculation using useMemo
  const center = useMemo(() => {
    return vendors.length > 0
      ? { lat: vendors[0].latitude, lng: vendors[0].longitude }
      : { lat: 40.7128, lng: -74.0060 }; // Default: New York
  }, [vendors]);

  return (
    <LoadScriptNext googleMapsApiKey={API_KEY}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={14}
        center={center}
        options={{ disableDefaultUI: false, zoomControl: true }}
      >
        {vendors.map((vendor) => (
          <Marker
            key={vendor.id}
            position={{ lat: vendor.latitude, lng: vendor.longitude }}
            title={vendor.name}
          />
        ))}
      </GoogleMap>
    </LoadScriptNext>
  );
}
