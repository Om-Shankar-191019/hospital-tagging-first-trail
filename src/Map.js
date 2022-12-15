import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import L from 'leaflet';

const icon = L.icon({
    iconUrl:'./placeholder.png',
    iconSize:[38,38],
})

const position = [51.505, -0.09]
const Map = () => {
  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{height:'100%', width:'100%'}}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=xWs0O6g6gFYMZVkMTXSX"
    />
    <Marker position={position} icon={icon}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
  )
}

export default Map