import React from "react";
import { useState, useEffect } from "react";
import Tri from "../../Loaders/Triangle";
import WeatherCard from "./WeatherCard";
// import Tri from "../Loaders/Triangle";
// import cold from ".../media/cold-bg.jpeg";

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [main, setMain] = useState(null);
  useEffect(() => {
    const searchNews = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=Jalpaiguri&units=metric&appid=ac0434eb5de8192aa5b74eb65f2aa023`
        );
        const results = await response.json();
        setWeather(results.weather[0]);
        setMain(results.main);
      } catch (error) {
        console.error(error);
      }
    };
    searchNews();
  }, []);
  return (
    <>{weather ? <WeatherCard weather1={weather} main1={main} /> : <Tri />}</>
  );
};

export default Weather;
