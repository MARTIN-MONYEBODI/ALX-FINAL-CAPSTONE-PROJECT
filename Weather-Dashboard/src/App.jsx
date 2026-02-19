import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Search from './components/Search';
import WeatherCard from './components/WeatherCard';
import WeatherDetails from './components/WeatherDetails';

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');
  const [error, setError] = useState('');
  const [recentSearches, setRecentSearches] = useState(() => {
    return JSON.parse(localStorage.getItem('recentSearches')) || [];
  });

  const apiKey = '';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=imperial`;

  const fetchWeather = (city) => {
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`)
      .then((response) => {
        setData(response.data);
        setError('');
        if (!recentSearches.includes(city)) {
          const updatedSearches = [city, ...recentSearches.slice(0, 4)];
          setRecentSearches(updatedSearches);
          localStorage.setItem('recentSearches', JSON.stringify(updatedSearches));
        }
      })
      .catch((err) => {
        setError('City not found. Please try again.');
        setData({});
      });
  };

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      fetchWeather(location);
      setLocation('');
    }
  };

  const manualRefresh = () => {
    if (data.name) fetchWeather(data.name);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (data.name) fetchWeather(data.name);
    }, 60000); //Refresh automatically every 60 seconds

    return () => clearInterval(intervalId);
  }, [data.name]);

  return (
    <div className="w-full h-screen relative bg-black/40 text-white p-4 md:p-6 lg:p-8" >
      
      <div className='flex justify-center'>
        <Search
          location={location}
          setLocation={setLocation}
          searchLocation={searchLocation}
          className='w-full max-w-xs md:max-w-sm lg:max-w-md'
        />
      </div>
      {error && <ErrorMessage message={error} />}

      {/* Recent searches */}
      <div className="text-center mt-8">
        {recentSearches.length > 0 && (
          <div>
            <h3 className="text-xl font-bold">Recent Searches</h3>
            <ul className="flex justify-center space-x-4 mt-2">
              {recentSearches.map((city, index) => (
                <li
                  key={index}
                  className="cursor-pointer text-blue-300 hover:text-blue-500"
                  onClick={() => fetchWeather(city)}
                >
                  {city}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      
      <div className="text-white max-w-[90%] md:max-w-[700px] mx-auto p-4 flex flex-col justify-between relative top-[10%]">
        {data.name && (
          <>
            <WeatherCard data={data} />
            <WeatherDetails data={data} />
            <button
              className="bg-blue-500 text-white py-0 px-0 w-full md:w-auto rounded-full mt-4"
              onClick={manualRefresh}
            >
              Update Temperature
            </button>
          </>
        )}
      </div>
      
    </div>
  );
}

export default App;