import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Alert from './Alert';

const Search = ({ url, placeholder, keyword }) => {
  const [ttl, setTtl] = useState(new Date('2022-03-25'));
  const [message, setMessage] = useState('');
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    if (search.length) {
      let t = new Date();
      t.setSeconds(t.getSeconds() - 60);

      console.log(t, ttl, ttl < t);
      if (ttl < t) {
        setTtl(new Date());
        navigate(`${url}?${keyword}=${search}`);
      } else {
        setMessage('You can search weather details after 1 min');
        setTimeout(() => setMessage(''), 5000);
      }
    }
  };

  return (
    <div className='flex justify-center w-full'>
      {message && <Alert>{message}</Alert>}
      <form className='w-4/5 lg:w-1/2' onSubmit={onSubmit} method='POST'>
        <label
          htmlFor='default-search'
          className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'
        >
          Search
        </label>
        <div className='relative'>
          <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
            <svg
              className='w-4 h-4 text-gray-500 dark:text-gray-400'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 20 20'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
              />
            </svg>
          </div>
          <input
            type='search'
            id='default-search'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className='block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder={placeholder}
          />
          <button
            type='submit'
            className='text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
