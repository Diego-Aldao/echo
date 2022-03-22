import React from "react";
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import styled from "styled-components";

const Contenedor = styled(MapContainer)`
  height: 350px;
  width: 100%;
`;

const Mapa = () => {
  return (
    <Contenedor center={[-32.887141, -68.840249]} zoom={16}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[-32.887141, -68.840249]}>
        <Popup>Oficina Echo.</Popup>
      </Marker>
    </Contenedor>
  );
};

export default Mapa;
