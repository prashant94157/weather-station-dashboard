import React from 'react';

const Globe = ({ lat, lon }) => {
  return (
    <div className='lg:w-3/4'>
      <div>{lat}</div>
      <div>{lon}</div>
    </div>
  );
};

export default Globe;
