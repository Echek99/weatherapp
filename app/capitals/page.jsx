'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/Card';
import Link from 'next/link';

const Capitals = () => {
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        const fetchWeather = async () => {
            const response = await fetch('/api/weather/capitals');
            if (!response.ok) {
                console.error('Failed to fetch weather data');
                return;
            }
            const data = await response.json();
            setWeather(data);
        };
        fetchWeather();
        console.log(weather)
    }, []);

    const dynamicBackgroundProp = (e) => {
        if (weather && weather.length > 1) {
            if (e.weather.current.temp_c >= 30) {
                return 'high'
            } else if (e.weather.current.temp_c < 30 && e.weather.current.temp_c >= 20) {
                return 'medium'
            } else if (e.weather.current.temp_c < 20) {
                return 'low'
            }
        }
    }

    return (
        <div className='justify-center flex items-center min-h-screen flex-col'>
          <h1 className='text-3xl'>CAPITALS OF THE WORLD</h1>
          <Link href="/">HOME</Link>
            <div>
                {weather && weather.length > 0 ?
                    <div className='flex flex-wrap max-w-screen-2xl'>
                        {weather.map((e) => {
                            return (
                                <Button temp={dynamicBackgroundProp(e)}>
                                    <h2>{e.weather.location.name}</h2>
                                    <p>F° {e.weather.current.temp_f}</p>
                                    <p>C° {e.weather.current.temp_c}</p>
                                </Button>
                            )
                        })}
                    </div>
                    :
                    <p>There was an error loading weather data, please reload te page.</p>
                }
            </div>
        </div>
    );
};

export default Capitals;