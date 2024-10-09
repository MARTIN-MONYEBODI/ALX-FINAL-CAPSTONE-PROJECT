import React from 'react';

function WeatherCard({ data }) {
  return (
    <div className="text-center mb-4">
      <div className="text-xl">{data.name}</div>
      <div className="text-6xl font-bold">
        {data.main ? `${data.main.temp.toFixed()}°F` : null}
      </div>
      <div className="text-lg">
        {data.weather ? data.weather[0].main : null}
      </div>
    </div>
  );
}

export default WeatherCard;