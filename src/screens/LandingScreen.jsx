import React, { useEffect, useState } from 'react';
import Search from '../components/Search';
import Loader from '../components/Loader';
import { Link, useSearchParams } from 'react-router-dom';
import Alert from '../components/Alert';
import DisplayWeatherDetails from '../components/DisplayWeatherDetails';
import Globe from '../components/Globe';

const LandingScreen = () => {
  const [loading, setLoading] = useState(false);
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
      setLoading('true');
      const result = await fetch(URL);
      result.json().then((json) => {
        console.log(json);
        if (json.error) {
          setMessage(json.error.message);
          setWeather({
            cityName: '',
            country: '',
            tempInC: '',
            tempInF: '',
            humidity: '',
            windSpeed: '',
            weatherCondition: '',
            icon: '',
          });
          setLat('');
          setLon('');
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
      setTimeout(() => setMessage(''), 5000);
      setLoading(false);
    };
    if (city) fetchData();
  }, [city]);

  return (
    <>
      <div className='w-full flex justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white h-20 sm:h-24 lg:h-32'>
        <div className='font-extrabold text-3xl sm:text-4xl lg:text-6xl'>
          <Link to='/'>Weather Station Dashboard</Link>
        </div>
      </div>

      <div className='min-h-[582px] sm:min-h-[558px] lg:min-h-[516px]'>
        {message && <Alert>{message}</Alert>}
        <div className='pt-10'>
          <Search url='/' placeholder='Please enter city...' keyword='city' />
        </div>
        <div>
          {city ? (
            <div className='flex flex-col lg:flex-row'>
              <DisplayWeatherDetails data={weather} />
              <Globe lon={lon} lat={lat} />
            </div>
          ) : (
            'Please enter city'
          )}
        </div>
        {loading ? <Loader /> : ''}
      </div>

      <div className='w-full flex justify-center items-center h-8 sm:h-10 lg:h-12 text-base sm:text-xl lg:text-2xl'>
        <div>
          Contact us: @
          <a
            href='mailto:0166621m@gmail.com'
            className='hover:cursor-pointer underline'
          >
            Prashant maurya
          </a>
        </div>
      </div>
    </>
  );
};

export default LandingScreen;
