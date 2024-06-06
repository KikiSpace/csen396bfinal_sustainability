import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./CovidMap.css";

const CovidMap = ({ countries }) => {
  const [geoData, setGeoData] = useState(countries);

  useEffect(() => {
    setGeoData(countries);
  }, [countries]);

  const mapStyle = {
    background: "white",
    weight: 1,
    color: "black",
    fillOpacity: 1,
  };

  const onEachCountry = (country, layer) => {
    const name = country.properties.name;
    const chemicals = country.properties.chemicals
      .map((chem) => `${chem.industry}: ${chem.amount}`)
      .join("<br>");
    layer.bindPopup(`${name}<br>${chemicals}`);
    layer.options.fillColor = country.properties.color;
  };

  return (
    <MapContainer style={{ height: "90vh" }} zoom={6} center={[37.5, -119.5]}>
      {/* <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
      <GeoJSON
        key={JSON.stringify(geoData)} // Force re-render when geoData changes
        style={mapStyle}
        data={geoData}
        onEachFeature={onEachCountry}
      />
    </MapContainer>
  );
};

export default CovidMap;
