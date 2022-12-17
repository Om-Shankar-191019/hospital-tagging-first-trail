import React,{ useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import L from 'leaflet';

const icon = L.icon({
    iconUrl:'./placeholder.png',
    iconSize:[38,38],
})

// const position = [51.505, -0.09]
// const position = [25.62369,85.109257]
// const position = [24.313573357893972, 78.44446746114005]
const position = [25.60678236982865, 85.12861992974571]

function ResetCenterView({ singleLocation }){
  // const { singleLocation } = props;
  const map = useMap();

  useEffect(() => {
    if(singleLocation){
      map.setView(
        L.latLng(singleLocation? singleLocation['Latitude*']:position[0] , singleLocation? singleLocation['Longitude*']:position[1]),
        map.getZoom(),
        {
          animate:true
        }
      )
    }
  },[singleLocation]);

  return null;
}

const Map = ({ singleLocation }) => {
  const singleLocationLatLong = [singleLocation? singleLocation['Latitude*']:position[0] , singleLocation? singleLocation['Longitude*']:position[1]]
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

    <ResetCenterView singleLocation={singleLocation} />
  </MapContainer>
  )
}

export default Map