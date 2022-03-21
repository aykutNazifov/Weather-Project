import "./App.css";
import React, { useState } from "react";
import axios from "axios";

// url -- https://weatherdbi.herokuapp.com/data/weather/${city}

function App() {
  const [weather, setWeather] = useState({});
  const [city, setCity] = useState("");

  const searchWeather = async (e) => {
    if (e.key === "Enter") {
      const response = await axios(
        `https://weatherdbi.herokuapp.com/data/weather/${city}`
      );
      setWeather(response.data);

      /* axios.get(`https://weatherdbi.herokuapp.com/data/weather/${city}`).then((response) => {
        setWeather(response.data)
        console.log(response.data)
      }) */
      setCity("");
    }
  };

  return (
    <div className="App">
      <h1 className="title">Weather App</h1>
      <input
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyPress={searchWeather}
        placeholder="Enter city..."
        type="text"
      />

      {/* <button onClick={searchWeather}>Click</button> */}
      <div className="weather-container">
        <h1 className="region">{weather.region}</h1>

        {weather.currentConditions ? (
          <h3 className="day">{weather.currentConditions.dayhour}</h3>
        ) : null}

        {weather.currentConditions ? (
          <img
            className="iconImg"
            src={weather.currentConditions.iconURL}
            alt="icon"
          ></img>
        ) : null}

        {weather.currentConditions ? (
          <p>{weather.currentConditions.comment}</p>
        ) : null}

        {weather.currentConditions ? (
          <p className="temp">{weather.currentConditions.temp.c} C</p>
        ) : null}

        {weather.currentConditions ? (
          <a
            className="google-search"
            href={weather.data_source}
            target="_blank"
            rel="noreferrer"
          >
            Search in Google
          </a>
        ) : null}
      </div>
    </div>
  );
}

export default App;
