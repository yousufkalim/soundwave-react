import React, { FC, useState } from 'react';
// import PosterImage from '../../assets/TempImages/temp1.svg';
import Counter from '../Counter/index';
import { ReactComponent as RemoveIcon } from '../../assets/blackCrossCircle.svg';

interface IFrameProps {
  frameType: string;
  selectedFrame: string;
}

interface IPosterSize {
  value: string;
  unit: string;
}
interface PosterInfoCardProps {
  frame: IFrameProps;
  size: IPosterSize;
  albumName: string;
  singerName: string;
  posterPrice: number;
  posterImage: string;
  Quantity: number;
  posterId: string;
  key: string;
  handleRemovePoster: (value: string) => void;
}
const PosterInfoCard: FC<PosterInfoCardProps> = ({
  posterImage,
  key,
  albumName,
  singerName,
  size,
  frame,
  posterPrice,
  Quantity,
  posterId,
  handleRemovePoster,
}) => {
  const [counter, setCounter] = useState<number>(Quantity);
  const handleIncrement = (): void => {
    setCounter(counter + 1);
  };

  const handleDecrement = (): void => {
    if (counter < 1) {
      setCounter(1);
    } else {
      setCounter(counter - 1);
    }
  };

  return (
    <div
      key={key}
      className="bg-white w-[78%] h-[31%] flex flex-row rounded-lg outline outline-white hover:outline-2 hover:outline-black relative cursor-pointer"
    >
      <RemoveIcon
        className=" absolute top-[-1rem] right-[-1rem] cursor-pointer"
        onClick={() => {
          handleRemovePoster(posterId);
        }}
      />
      <div className="w-[26%] flex items-center justify-center">
        <img src={posterImage} className="object-cover h-[85%]" />
      </div>
      <div className="w-[55%] flex flex-col items-start justify-center gap-2">
        <span className="text-3xl font-semibold">
          <i>{albumName}</i>
        </span>
        <span className="text-md font-light">{singerName}</span>
        <div className="text-md font-light">
          Size{' '}
          <span className="font-semibold">
            {size.value}
            {size.unit}
          </span>
        </div>
        <div className="text-md font-light">
          Frame{' '}
          <span className="font-semibold">
            {frame.frameType} frame ({frame.selectedFrame})
          </span>
        </div>
        <Counter
          size="lg"
          counter={counter}
          handleDecrement={handleDecrement}
          handleIncrement={handleIncrement}
        />
      </div>
      <div className="flex items-end justify-start">
        <i className="text-2xl font-semibold pb-3">${posterPrice}.00</i>
      </div>
    </div>
  );
};

export default PosterInfoCard;
