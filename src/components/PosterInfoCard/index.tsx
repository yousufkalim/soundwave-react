import React, { FC, useState } from 'react';
import PosterImage from '../../assets/TempImages/temp1.svg';
import Counter from '../Counter/index';
import { ReactComponent as RemoveIcon } from '../../assets/blackCrossCircle.svg';
const PosterInfoCard: FC = () => {
  const [counter, setCounter] = useState<number>(0);
  const handleIncrement = (): void => {
    setCounter(counter + 1);
  };

  const handleDecrement = (): void => {
    setCounter(counter - 1);
  };
  return (
    <div className="bg-white w-[78%] h-[31%] flex flex-row rounded-lg hover:border-[2px] border-black relative cursor-pointer">
      <RemoveIcon className=" absolute top-[-1rem] right-[-1rem] cursor-pointer" />
      <div className="w-[26%] flex items-center justify-center">
        <img src={PosterImage} className="object-cover h-[85%]" />
      </div>
      <div className="w-[55%] flex flex-col items-start justify-center gap-2">
        <span className="text-3xl font-semibold">
          <i>Starboy</i>
        </span>
        <span className="text-md font-light">The Weekend</span>
        <span className="text-md font-light">
          Size
          <span className="text-md font-semibold"> &quot;16 X 20&quot;</span>
        </span>
        <span className="text-md font-light">
          Frame
          <span className="text-md font-semibold"> No Frame (Poster Only)</span>
        </span>
        <Counter
          size="lg"
          counter={counter}
          handleDecrement={handleDecrement}
          handleIncrement={handleIncrement}
        />
      </div>
      <div className="flex items-end justify-start">
        <i className="text-2xl font-semibold pb-3">$120.00</i>
      </div>
    </div>
  );
};

export default PosterInfoCard;
