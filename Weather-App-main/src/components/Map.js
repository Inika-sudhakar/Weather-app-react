import React, { useEffect, useRef } from "react";
import "./map.css"; // Import the CSS for styling

const MapPage = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (window.google) {
      // Initialize the map
      new window.google.maps.Map(mapRef.current, {
        center: { lat: 10.9740, lng: 76.8977 }, // Set to Coimbatore, Kovaipudur
        zoom: 12,
      });
    }
  }, []);

  return (
    <div className="map-container">
      <h2>Map Page</h2>
      <div id="map" ref={mapRef} className="map"></div>
    </div>
  );
};

export default MapPage;
