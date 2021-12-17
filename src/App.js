import React, { useState } from "react";
import "./app.css";
import { AiFillCloud } from "react-icons/ai";
import { FaTemperatureHigh } from "react-icons/fa";
import { fetchWeather } from "./api/fetchWeather";
import { WiHumidity } from "react-icons/wi";
import { BiWind } from "react-icons/bi";
function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState("");

  const search = async (e) => {
    if (e.key === "Enter") {
      const data = await fetchWeather(query);
      setWeather(data);
      setQuery("");
    }
  };
  return (
    <div className="App-container">
      <div className="heading-1">Weather Forcast App</div>
      <input
        type="text"
        className="weather-input"
        value={query}
        placeholder="Please enter city name "
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={search}
      />
      {weather.main && (
        <div>
          <h1>Details of {weather.name} Weather</h1>
          <div className="city-contaier">
            <h2>
              <span>{weather.name}</span>
              <span className="sub-city">{weather.sys.country}</span>
            </h2>
            <div className="city-temp">
              <span className="icon icon-temp">
                <FaTemperatureHigh size={25} />
              </span>
              <span className="text-content">
                {Math.round(weather.main.temp)}
                <sup>&deg;C</sup>
              </span>
            </div>
            <div className="wether-data">
              <span className="icon">
                <AiFillCloud size={30} />
              </span>
              <span className="text-content">
                {weather.weather[0].description}
              </span>
            </div>
            <div className="humidity">
              <span className="icon">
                <WiHumidity size={35} />
              </span>
              <span className="text-content">{weather.main.humidity}</span>
            </div>
            <div className="wind">
              <span className="icon">
                <BiWind />
              </span>
              <span className="text-content">
                {weather.wind.speed}
                <sup>mph</sup>
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
