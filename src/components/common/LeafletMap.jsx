import React from 'react';
import { Box } from '@mui/material';
import { MapContainer, TileLayer } from 'react-leaflet'
import mapStyles from "./styles/MapStyles";

const LeafletMap = () => (
  <Box sx={mapStyles.mapContainer}>
    <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  </Box>
);

export default LeafletMap;
