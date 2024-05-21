'use client';

import { useState, useEffect } from 'react';
import { Button } from './ui/Card';
import Searchbar from './Searchbar';

const WeatherCards = () => {
  const [weather, setWeather] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchWeather = async () => {
      if (!searchTerm) return;

      try {
        const response = await fetch(`/api/weather?location=${encodeURIComponent(searchTerm)}`);
        if (!response.ok) {
          throw new Error('Failed to fetch weather data');
        }
        const data = await response.json();
        setWeather([data]); // Wrap the response in an array for consistent handling
      } catch (error) {
        console.error(error.message);
        setWeather(null);
      }
    };

    fetchWeather();
  }, [searchTerm]);

  const handleSearch = (searchValue) => {
    setSearchTerm(searchValue);
  };

  const dynamicBackgroundProp = (e) => {
    if (weather && weather.length > 0) {
      const temp = e.weather.current.temp_c;
      if (temp >= 30) {
        return 'high';
      } else if (temp < 30 && temp >= 20) {
        return 'medium';
      } else if (temp < 20) {
        return 'low';
      }
    }
  };

  return (
    <div>
      <Searchbar onSearch={handleSearch} />
      <div>
        {weather && weather.length > 0 ? (
          <div className='flex flex-wrap max-w-screen-2xl'>
            {weather.map((e, index) => (
              <Button key={index} temp={dynamicBackgroundProp(e)}>
                <h2>{e.weather.location.name}</h2>
                <p>F° {e.weather.current.temp_f}</p>
                <p>C° {e.weather.current.temp_c}</p>
              </Button>
            ))}
          </div>
        ) : (
          <p>There was an error loading weather data, please reload the page.</p>
        )}
      </div>
    </div>
  );
};

export default WeatherCards;
