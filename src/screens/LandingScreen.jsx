import React, { useEffect, useState, Suspense } from 'react';
import Search from '../components/Search';
import { Link, useSearchParams } from 'react-router-dom';
import Alert from '../components/Alert';
import DisplayWeatherDetails from '../components/DisplayWeatherDetails';
import styled from 'styled-components';
import { Canvas } from '@react-three/fiber';
import Globe from '../components/Globe';
import Header from '../components/Header';
import Footer from '../components/Footer';

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
      <Header />

      <div className=''>
        {/* shows error */}
        {message && <Alert>{message}</Alert>}

        {/* Search bar */}
        <div className='pt-10'>
          <Search url='/' placeholder='Please enter city...' keyword='city' />
        </div>

        <div>
          {weather && weather.country && weather.country.length && (
            <div className='flex flex-col lg:flex-row lg:justify-center lg:items-center'>
              <DisplayWeatherDetails data={weather} />

              <Canvas className='canvas'>
                <Suspense fallback={null}>
                  <Globe lat={lat} lon={lon} city={weather.cityName} />
                </Suspense>
              </Canvas>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  canvas {
    height: 500px;
  }
`;

export default LandingScreen;
