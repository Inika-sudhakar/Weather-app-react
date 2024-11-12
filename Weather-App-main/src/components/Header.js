import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">
          <h1>WeatherApp</h1>
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/weather-forecast">Forecast</Link></li>
          <li><Link to="/map">Map</Link></li>
          <li><Link to="/about">About</Link></li>
          
          
         

        </ul>
      </nav>
    </header>
  );
}

export default Header;
