import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './WeatherForecast.css';

const WeatherForecast = () => {
    const [city, setCity] = useState('Coimbatore');
    const [weatherData, setWeatherData] = useState(null);
    const [forecastData, setForecastData] = useState(null);
    const [searchInput, setSearchInput] = useState('');

    const API_KEY = 'cad3a83931bca13b9ecdb428308cb571';

    const fetchWeatherData = async (cityName) => {
        try {
            const weatherResponse = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
            );
            setWeatherData(weatherResponse.data);

            const forecastResponse = await axios.get(
                `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}&units=metric`
            );
            setForecastData(forecastResponse.data);
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    };

    useEffect(() => {
        fetchWeatherData(city);
    }, [city]);

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchInput.trim() !== '') {
            setCity(searchInput);
            setSearchInput('');
        }
    };

    const getDayOfWeek = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { weekday: 'long' });
    };

    return (
        <div className="weather-forecast">
            <form onSubmit={handleSearch} className="search-bar">
                <input
                    type="text"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    placeholder="Enter city name"
                />
                <button type="submit">Search</button>
            </form>

            {weatherData && (
                <div className="current-weather">
                    <div className="weather-card">
                        <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="weather icon" />
                        <h3>{weatherData.weather[0].description}</h3>
                        <p>{Math.round(weatherData.main.temp)}°C</p>
                        <p>Humidity: {weatherData.main.humidity}%</p>
                        <p>Wind Speed: {weatherData.wind.speed} m/s</p>
                    </div>
                </div>
            )}
            <div className="weekly-forecast">
                <h2>This Week</h2>
                <div className="forecast-cards">
                    {forecastData && forecastData.list.map((forecast, index) => (
                        index % 8 === 0 && (
                            <div key={index} className="forecast-card">
                                <h3>{getDayOfWeek(forecast.dt_txt)}</h3>
                                <img src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`} alt="weather icon" />
                                <p>{forecast.weather[0].description}</p>
                                <p>{Math.round(forecast.main.temp_max)}°C / {Math.round(forecast.main.temp_min)}°C</p>
                            </div>
                        )
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WeatherForecast;
