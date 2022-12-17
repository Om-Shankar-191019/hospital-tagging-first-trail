import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import L from 'leaflet';

const icon = L.icon({
    iconUrl:'./placeholder.png',
    iconSize:[38,38],
})

// const position = [51.505, -0.09]
const position = [25.62369,85.109257]
const Map = ({ singleLocation }) => {
  const singleLocationLatLong = [singleLocation? singleLocation['Latitude*']:'25.62369' , singleLocation? singleLocation['Longitude*']:'85.109257']
  return (
    <MapContainer center={position} zoom={13}  style={{height:'100%', width:'100%'}} onChange={(e) => console.log(e)}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=xWs0O6g6gFYMZVkMTXSX"
    />
    <Marker position={singleLocationLatLong } icon={icon}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
  )
}

export default Map