import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
const MapContainer = () => {
  const mapStyles = {   
    position: "relative",
    top: "5%",     
    height: "90%",
    width: "30%"}
    const locations = [
        {
        name: "location1",
        location:{
            lat: -34.58818014285715,
            lng: -58.5097898367347
        }
        }
    ]
  
  const defaultCenter = {
    lat: -34.58818014285715 , lng: -58.5097898367347
  }
  
  return (
     <LoadScript
       googleMapsApiKey='AIzaSyC00R3ArU4o0de-Sa8gnJl94ewoIjNiayM'>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}>
              {
                  locations.map(item => {
                    return (
                    <Marker key={item.name} position={item.location}/>
                    )
                  })
              }
          </GoogleMap>
     </LoadScript>
  )
}
export default MapContainer;