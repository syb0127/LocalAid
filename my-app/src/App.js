import React from 'react';
import Home from './Home';
import { Routes,Route, BrowserRouter as Router } from 'react-router-dom';
import About from './Components/About';
import MyComponent from './Search';



import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

function App() {
  return (
    
<div className="App">
      <header className="App-header">
        <p>
          Welcome to Our Application
        </p>

      </header>
      <Home></Home>

      <br></br>
      <Marker></Marker>
      <MyComponent></MyComponent>
    </div>
  );
}

export default App;
