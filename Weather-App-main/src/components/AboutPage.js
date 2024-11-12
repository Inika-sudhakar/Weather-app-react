import React from 'react';
import './about.css';

const About = () => {
  return (
    <div className="about-wrapper">
      <div className="about-container">
        <div className="about-content">
          <h1>About Our Weather App</h1>
          <p>
            Welcome to our Weather App! Our application provides you with real-time weather updates, including temperature, humidity, wind speed, and more. Whether you're planning your day or looking for weather forecasts for the week, we've got you covered.
          </p>
          <h2>Features</h2>
          <ul>
            <li>Real-time weather updates for your location</li>
            <li>7-day weather forecasts</li>
            <li>Weather alerts and notifications</li>
            
            <li>Search weather by city</li>
          </ul>
          <h2>Our Mission</h2>
          <p>
            Our mission is to provide accurate and timely weather information to help you plan your day and stay safe. We use reliable data sources and cutting-edge technology to ensure that the information you receive is up-to-date and precise.
          </p>
          <h2>Contact Us</h2>
          <p>
            If you have any questions, feedback, or suggestions, feel free to <a href="mailto:support@weatherapp.com">contact us</a>. We'd love to hear from you!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
