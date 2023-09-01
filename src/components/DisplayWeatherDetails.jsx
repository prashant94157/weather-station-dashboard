import React from 'react';

const DisplayWeatherDetails = ({
  data: {
    tempInC,
    tempInF,
    humidity,
    windSpeed,
    weatherCondition,
    cityName,
    country,
  },
}) => {
  return (
    <div className='lg:w-1/2 px-20 lg:h-[437px] '>
      <div className='mt-6'>
        <dl className='divide-y divide-gray-200'>
          <div className='grid grid-cols-3 gap-4 px-0 py-3'>
            <dt className='text-sm font-medium leading-6 text-gray-900'>
              City
            </dt>
            <dd className='col-span-2 mt-0 text-sm leading-6 text-gray-700'>
              {cityName}
            </dd>
          </div>
          <div className='grid grid-cols-3 gap-4 px-0 py-3'>
            <dt className='text-sm font-medium leading-6 text-gray-900'>
              Country
            </dt>
            <dd className='col-span-2 mt-0 text-sm leading-6 text-gray-700'>
              {country}
            </dd>
          </div>
          <div className='grid grid-cols-3 gap-4 px-0 py-3'>
            <dt className='text-sm font-medium leading-6 text-gray-900'>
              Temp. (in F)
            </dt>
            <dd className='col-span-2 mt-0 text-sm leading-6 text-gray-700'>
              {tempInF}
            </dd>
          </div>
          <div className='grid grid-cols-3 gap-4 px-0 py-3'>
            <dt className='text-sm font-medium leading-6 text-gray-900'>
              Temp. (in C)
            </dt>
            <dd className='col-span-2 mt-0 text-sm leading-6 text-gray-700'>
              {tempInC}
            </dd>
          </div>
          <div className='grid grid-cols-3 gap-4 px-0 py-3'>
            <dt className='text-sm font-medium leading-6 text-gray-900'>
              Humidity
            </dt>
            <dd className='col-span-2 mt-0 text-sm leading-6 text-gray-700'>
              {humidity}
            </dd>
          </div>
          <div className='grid grid-cols-3 gap-4 px-0 py-3'>
            <dt className='text-sm font-medium leading-6 text-gray-900'>
              Wind-speed
            </dt>
            <dd className='col-span-2 mt-0 text-sm leading-6 text-gray-700'>
              {windSpeed}
            </dd>
          </div>
          <div className='grid grid-cols-3 gap-4 px-0 py-3'>
            <dt className='text-sm font-medium leading-6 text-gray-900'>
              Weather
            </dt>
            <dd className='col-span-2 mt-0 text-sm leading-6 text-gray-700'>
              {weatherCondition}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default DisplayWeatherDetails;
