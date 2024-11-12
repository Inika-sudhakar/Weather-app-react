import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import Weather from "./components/currentLocation";
import MapPage from "./components/Map";
import AboutPage from "./components/AboutPage";
import WeatherForecast from './components/WeatherForecast';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Weather />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/weather-forecast" element={<WeatherForecast />} />
        
      </Routes>
    </Router>
  );
}

export default App;