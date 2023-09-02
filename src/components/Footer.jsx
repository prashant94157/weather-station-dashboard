import React from 'react';

const Footer = () => {
  return (
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
  );
};

export default Footer;
