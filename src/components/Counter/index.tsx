import React, { FC } from 'react';
import { ReactComponent as Minus } from '../../assets/minus.svg';
import { ReactComponent as Plus } from '../../assets/Plus.svg';
interface PosterCounterProps {
  counter: number;
  handleDecrement: () => void;
  handleIncrement: () => void;
  size?: string;
}

const PosterCounter: FC<PosterCounterProps> = ({
  counter,
  handleDecrement,
  handleIncrement,
  size,
}) => {
  return (
    <div
      className={
        size === 'lg'
          ? 'flex items-center justify-evenly border-[1px] w-28 rounded-md h-8'
          : size === 'md'
          ? 'flex items-center justify-evenly border-[1px] w-20 rounded-md h-6'
          : 'flex items-center justify-evenly border-[1px] w-16 rounded-md'
      }
    >
      <button disabled={counter === 0} onClick={handleDecrement} className="cursor-pointer">
        <Minus className={size === 'lg' ? 'w-5' : size === 'md' ? 'w-4' : 'w-3'} />
      </button>
      <span
        className={size === 'lg' ? 'text-xl font-semibold' : size === 'md' ? 'text-lg' : 'text-md'}
      >
        {counter}
      </span>
      <button onClick={handleIncrement} className="text-md cursor-pointer">
        <Plus className={size === 'lg' ? 'w-5' : size === 'md' ? 'w-4' : 'w-3'} />
      </button>
    </div>
  );
};

export default PosterCounter;
