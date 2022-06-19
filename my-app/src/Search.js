// import React from 'react';
// import Home from './Home';
// import { Routes,Route, BrowserRouter as Router } from 'react-router-dom';
// import {  Box, Heading, Link} from "@chakra-ui/react";
// import Header from "./Components/Header";
// import { useMemo } from "react";
// import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";


// function DisplayMap() {
//     const { isLoaded } = useLoadScript({
//       googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
//     });
  
//     if (!isLoaded) return <div>Loading...</div>;
//     return <SearchMap />;
//   }
  
//   function SearchMap() {
//     const center = useMemo(() => ({ lat: 37, lng: 122 }), []);
  
//     return (

//       <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
//         <Marker position={center} />
//       </GoogleMap>
//     );
//   }
// export default React.memo(DisplayMap)

import React from 'react'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import './Marker.css';

const containerStyle = {
  width: '800px',
  height: '600px'
};

const center = {
  lat: 40.95,
  lng: -101.39
};

function MyComponent() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  })
  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={5}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <Marker position={{ lat: 40.95, lng: -101.39 }} />
        <></>
      </GoogleMap>
  ) : <></>
}

export default React.memo(MyComponent)