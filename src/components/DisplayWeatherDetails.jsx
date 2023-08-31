import React from 'react';

const DisplayWeatherDetails = ({
  data: {
    tempInC,
    tempInF,
    humidity,
    windSpeed,
    weatherCondition,
    icon,
    cityName,
    country,
  },
}) => {
  return (
    <div className='lg:w-1/4 py-5 flex justify-center lg:flex-col lg:items-center space-y-10 lg:h-[437px]'>
      <div className='grid grid-cols-2 lg:grid-cols-1'>
        <div>{`City: ${cityName}`}</div>
        <div>{`Country: ${country}`}</div>
        <div>{`Temp. (in F): ${tempInF}`}</div>
        <div>{`Temp. (in C): ${tempInC}`}</div>
        <div>{`Humidity: ${humidity}`}</div>
        <div>{`Wind-speed: ${windSpeed}`}</div>
        <div className=''>{`Weather: ${weatherCondition}`}</div>
      </div>
      <div className='flex justify-center items-center'>
        <div className=''>
          <img src={icon} alt='Icon for weather-condition' />
        </div>
      </div>
    </div>
  );
};

export default DisplayWeatherDetails;
