import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='flex items-center justify-center w-full h-20 text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 sm:h-24 lg:h-32'>
      <div className='text-3xl font-extrabold sm:text-4xl lg:text-6xl'>
        <Link to='/'>Weather Station Dashboard</Link>
      </div>
    </div>
  );
};

export default Header;
