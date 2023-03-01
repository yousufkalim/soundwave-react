import React, { FC } from 'react';
import Loading from '../../assets/1487.gif';

const Spinner: FC = () => {
  return (
    <div
      className="absolute w-full h-[100vh] z-50 top-0 bottom-0"
      style={{ backgroundColor: 'rgba(0, 0, 0, .2)', backdropFilter: 'blur(5px)' }}
    >
      <div className="relative h-full w-full">
        <img className="absolute left-50 inset-2/4" src={Loading} alt="Loading" />
      </div>
    </div>
  );
};

export default Spinner;
