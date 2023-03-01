import React, { FC, useState } from 'react';
import Counter from '../Counter/index';
import { ReactComponent as RemoveIcon } from '../../assets/blackCrossCircle.svg';
import { IPosterSize } from '../../types/index';
import Slide from 'react-reveal/Slide';
import { mediaUrl } from '../../config';
interface PosterInfoCardProps {
  posterType: string;
  size: IPosterSize;
  albumName: string;
  singerName: string;
  posterPrice: number;
  posterImage: string;
  Quantity: number;
  posterId: string;
  unitPrice: number;
  handleRemovePoster: (value: string) => void;
  handleCartQuantity: (id: string, isAdd: boolean, unitPrice: number) => void;
  index: number;
}
const PosterInfoCard: FC<PosterInfoCardProps> = ({
  posterImage,
  albumName,
  singerName,
  size,
  posterType,
  posterPrice,
  Quantity,
  posterId,
  unitPrice,
  handleRemovePoster,
  handleCartQuantity,
  index,
}) => {
  const [counter, setCounter] = useState<number>(Quantity);
  const [deleted, setDeleted] = useState<boolean>(true);

  const handleIncrement = (): void => {
    setCounter(counter + 1);
    handleCartQuantity(posterId, true, unitPrice);
  };

  const handleDecrement = (): void => {
    if (counter < 1) {
      setCounter(1);
    } else {
      setCounter(counter - 1);
      handleCartQuantity(posterId, false, unitPrice);
    }
  };

  return (
    <Slide left when={deleted} duration={200}>
      <div
        className="w-[90%] sm:w-[78%] h-[28%] flex flex-row rounded-lg outline outline-white hover:outline-2 hover:outline-black relative cursor-pointer"
        style={{ marginTop: index === 0 ? '1.1rem' : '0' }}
      >
        <RemoveIcon
          className="absolute top-[-1rem] right-[-1rem] cursor-pointer w-8 sm:w-12"
          onClick={() => {
            handleRemovePoster(posterId);
            setDeleted(false);
          }}
        />
        <div className="w-[26%] flex items-center justify-center">
          <img
            src={`${mediaUrl}${posterImage}`}
            className="object-cover h-[65%] sm:h-[70%] md:h-[78%]"
          />
        </div>
        <div className="w-[55%] flex flex-col items-start justify-center gap-2 sm:gap-3">
          <div className="flex flex-col items-start justify-center">
            <span className="text-md sm:text-xl md:text-2xl font-semibold">
              <i>{albumName}</i>
            </span>
            <span className="text-[11px] sm:text-sm md:text-md font-light">{singerName}</span>
          </div>
          <div className="flex flex-col items-start justify-center">
            <div className="text-[11px] sm:text-sm md:text-md font-light">
              Size{' '}
              <span className="font-semibold">
                {size.value}
                {size.unit}
              </span>
            </div>
            <div className="text-[11px] sm:text-sm md:text-md font-light">
              Frame <span className="font-semibold">{posterType}</span>
            </div>
          </div>
          <Counter
            size="lg"
            counter={counter}
            handleDecrement={handleDecrement}
            handleIncrement={handleIncrement}
          />
        </div>
        <div className="flex items-end justify-start">
          <i className="text-md sm:text-lg md:text-xl font-semibold pb-3">
            ${posterPrice.toFixed(2)}
          </i>
        </div>
      </div>
    </Slide>
  );
};

export default PosterInfoCard;
