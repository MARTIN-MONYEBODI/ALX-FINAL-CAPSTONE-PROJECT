import React from 'react';

function WeatherDetails({ data }) {
  return (
    data.name && (
      <div className="flex justify-evenly text-center bg-white/20 p-4 rounded-xl">
        <div>
          <p className="font-bold text-2xl">
            {data.main ? `${data.main.feels_like.toFixed()}°F` : null}
          </p>
          <p>Feels Like</p>
        </div>
        <div>
          <p className="font-bold text-2xl">
            {data.main ? `${data.main.humidity}%` : null}
          </p>
          <p>Humidity</p>
        </div>
        <div>
          <p className="font-bold text-2xl">
            {data.wind ? `${data.wind.speed.toFixed()} MPH` : null}
          </p>
          <p>Wind Speed</p>
        </div>
      </div>
    )
  );
}

export default WeatherDetails;