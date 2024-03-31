import React, { useState, useEffect } from 'react';
function WeatherApp() {
    // State to hold weather data
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(true);
  
    // Fetch weather data based on user's geolocation
    useEffect(() => {
      const fetchWeather = async () => {
        try {
          // Get user's geolocation
          navigator.geolocation.getCurrentPosition(async (position) => {
            const { latitude, longitude } = position.coords;
  
            // Fetch weather data using latitude and longitude
            const apiKey = '754fbfffbb0935fb726b404921c69327';
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;
            const response = await fetch(apiUrl);
            const data = await response.json();
  
            // Set weather state with fetched data
            setWeather(data);
            setLoading(false);
          });
        } catch (error) {
          console.error('Error fetching weather data:', error);
          setLoading(false);
        }
      };
  
      fetchWeather();
    }, []);
  
    return (
      <div className="WeatherApp">
        {loading ? (
          <p>Loading...</p>
        ) : weather ? (
          <div className="weather-info">
            <h2>Current Weather</h2>
            <p>Location: {weather.name}</p>
            <p>Temperature: {weather.main.temp} °C</p>
            <p>Weather: {weather.weather[0].main}</p>
          </div>
        ) : (
          <p>Weather data unavailable</p>
        )}
      </div>
    );
  }
  
  export default WeatherApp;
  