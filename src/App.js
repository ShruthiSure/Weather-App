import React from 'react';
import WeatherApp from './WeatherApp';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Weather Now</h1>
        <p>This app displays the current weather based on your location.</p>
      </header>
      <main>
        <WeatherApp />
      </main>
    </div>
  );
}

export default App;
