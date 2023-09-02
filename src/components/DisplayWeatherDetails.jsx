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
    <div className='lg:w-1/2 px-20 lg:pl-36 lg:-pr-10 lg:h-[437px] '>
      <div class='px-4 sm:px-0'>
        <h3 class='text-base font-semibold leading-7 text-gray-900'>
          Weather Details
        </h3>
        <p class='mt-1 max-w-2xl text-sm leading-6 text-gray-500'>
          Note: The city's location is shown by a red spot on the globe.
        </p>
      </div>
      <div class='mt-6 border-t border-gray-100'>
        <dl class='divide-y divide-gray-100'>
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
