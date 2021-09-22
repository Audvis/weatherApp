import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
//import 'leaflet/dist/leaflet.css'

const MapView = ({lat, lon, name}) => {
    return ( 
   <>
        <MapContainer center={[lat, lon]} zoom={11} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[lat + .01, lon]}>
          <Popup>
            City of {name} <br /> Weather App.
          </Popup>
        </Marker>
      </MapContainer>
      </>
        );
}
 
export default MapView;

