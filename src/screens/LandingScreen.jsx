import React, { useEffect, useState, Suspense } from 'react';
import Search from '../components/Search';
import Loader from '../components/Loader';
import { Link, useSearchParams } from 'react-router-dom';
import Alert from '../components/Alert';
import DisplayWeatherDetails from '../components/DisplayWeatherDetails';
import styled from 'styled-components';
import { Canvas } from '@react-three/fiber';
import AnimatedSphere from '../components/AnimatedSphere';

const LandingScreen = () => {
  const [message, setMessage] = useState('');
  const [weather, setWeather] = useState({
    cityName: '',
    country: '',
    tempInC: '',
    tempInF: '',
    humidity: '',
    windSpeed: '',
    weatherCondition: '',
    icon: '',
  });
  const [lat, setLat] = useState('');
  const [lon, setLon] = useState('');
  let [searchParams, setSearchParams] = useSearchParams();
  const city = searchParams.get('city') || '';
  const API_KEY = '5212c28022ad43ab9b9120418233108';
  const URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`;

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(URL);
      result.json().then((json) => {
        if (json.error) {
          setMessage(json.error.message);
          setTimeout(() => setMessage(''), 5000);
        } else {
          setWeather({
            cityName: json.location.name,
            country: json.location.country,
            tempInF: json.current.temp_f,
            tempInC: json.current.temp_c,
            humidity: json.current.humidity,
            windSpeed: json.current.wind_mph,
            weatherCondition: json.current.condition.text,
            icon: json.current.condition.icon,
          });
          setLat(json.location.lat);
          setLon(json.location.lon);
        }
      });
    };

    if (city) fetchData();
  }, [city]);

  return (
    <Wrapper className='app'>
      <div className='flex items-center justify-center w-full h-20 text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 sm:h-24 lg:h-32'>
        <div className='text-3xl font-extrabold sm:text-4xl lg:text-6xl'>
          <Link to='/'>Weather Station Dashboard</Link>
        </div>
      </div>
      <div className=''>
        {message && <Alert>{message}</Alert>}
        <div className='pt-10'>
          <Search url='/' placeholder='Please enter city...' keyword='city' />
        </div>
        <div>
          {weather && weather.country && weather.country.length && (
            <div className='flex flex-col lg:flex-row lg:justify-center lg:items-center'>
              <DisplayWeatherDetails data={weather} />
              <Canvas className='canvas'>
                <Suspense fallback={null}>
                  <AnimatedSphere lat={lat} lon={lon} city={weather.cityName} />
                </Suspense>
              </Canvas>
            </div>
          )}
        </div>
      </div>

      {/* footer */}
      <div className='flex items-center justify-center w-full h-8 text-base sm:h-10 lg:h-12 sm:text-xl lg:text-2xl'>
        <div>
          Contact us: @
          <a
            href='mailto:0166621m@gmail.com'
            className='underline hover:cursor-pointer'
          >
            Prashant Maurya
          </a>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  canvas {
    height: 500px;
  }
`;

export default LandingScreen;
