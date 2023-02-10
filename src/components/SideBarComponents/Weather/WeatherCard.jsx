import React from "react";
import coldBg from "../../../media/cold-bg.jpg";
import warmBg from "../../../media/warm-bg.jpg";

const WeatherCard = ({ weather1, main1 }) => {
  return (
    <div className="w-9/10 h-[200px] relative m-6 bg-white rounded-lg shadow-lg overflow-hidden box-border transform flex items-center justify-center">
      {main1.temp < 20 ? (
        <img
          src={coldBg}
          alt="Cold"
          className="w-full h-full object-cover shadow-lg"
        />
      ) : (
        <img
          src={warmBg}
          alt="Warm"
          className="w-full h-full object-cover shadow-lg"
        />
      )}

      <div
        className={`absolute bottom-0 left-0 right-0 p-6 flex flex-col items-center justify-center`}
      >
        <h1 className="font-outline-1">Jalpaiguri</h1>
        <div className="items-center justify-center text-gray-700">
          {main1.temp}°C
        </div>
        <h3 className="text-gray-50">Feels like {main1.feels_like}</h3>
        <div className="items-center justify-center text-gray-50">
          {weather1.main} - {weather1.description}
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
