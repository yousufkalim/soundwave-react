import React, { FC } from 'react';
import Loading from '../../assets/spinner.gif';

const Spinner: FC = () => {
  return (
    <div
      className="absolute h-screen w-full z-50"
      style={{ backgroundColor: 'rgba(255, 255, 255, .15)', backdropFilter: 'blur(5px)' }}
    >
      <div className="relative h-full w-full">
        <img className="absolute left-50 inset-2/4" src={Loading} alt="Loading" />
      </div>
    </div>
  );
};

export default Spinner;
