import React, { FC } from 'react';
import { ReactComponent as DeleteIcon } from '../../assets/DeleteIcon.svg';

interface CartPosterDetailsProps {
  posterImage: string;
  AlbumName: string;
  SingerName: string;
  size: string;
  frame: string;
  key: string;
}

const CartPosterDetails: FC<CartPosterDetailsProps> = ({
  posterImage,
  AlbumName,
  SingerName,
  size,
  frame,
  key,
}) => {
  return (
    <div key={key} className="flex justify-between w-full border-[1px] rounded-lg p-3 my-3">
      <div className="w-[25%]">
        <img src={posterImage} className="object-fill w-full" />
      </div>
      <div className="w-[60%] flex flex-col items-start justify-center bg-white">
        <span className="text-lg font-semibold">
          <i>{AlbumName}</i>
        </span>
        <span className="text-sm font-light">{SingerName}</span>
        <span className="text-sm font-light">
          Size
          <span className="text-sm font-semibold"> &quot;{size}&quot;</span>
        </span>
        <span className="text-sm font-light">
          Frame
          <span className="text-sm font-semibold">{frame}</span>
        </span>
      </div>
      <div className="w-[5%] flex flex-col">
        <DeleteIcon className="cursor-pointer" />
      </div>
    </div>
  );
};

export default CartPosterDetails;
