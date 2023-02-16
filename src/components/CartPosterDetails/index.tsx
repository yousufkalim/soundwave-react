import React, { FC, useState } from 'react';
import Counter from '../Counter/index';
import { ReactComponent as DeleteIcon } from '../../assets/DeleteIcon.svg';
import request from '../../api/request';
import { toast } from 'react-toastify';
import { IPosterSize, IFrameProps } from '../../types/index';
import { mediaUrl } from '../../config';
interface CartPosterDetailsProps {
  posterImage: string;
  albumName: string;
  singerName: string;
  size: IPosterSize;
  frame: IFrameProps;
  posterQuantity: number;
  id: string;
  unitPrice: number;
  totalPrice: number;
  cartId: string;
  handleCartQuantity: (id: string, isAdd: boolean, unitPrice: number) => void;
  getCartData: (cartId: string) => void;
}

const CartPosterDetails: FC<CartPosterDetailsProps> = ({
  posterImage,
  albumName,
  singerName,
  size,
  frame,
  id,
  posterQuantity,
  unitPrice,
  totalPrice,
  cartId,
  handleCartQuantity,
  getCartData,
}) => {
  const [counter, setCounter] = useState<number>(0);
  const handleIncrement = (): void => {
    setCounter(counter + 1);
    handleCartQuantity(id, true, unitPrice);
  };

  const handleDecrement = (): void => {
    if (counter < 1) {
      setCounter(1);
    } else {
      setCounter(counter - 1);
      handleCartQuantity(id, false, unitPrice);
    }
  };

  const deletePoster = (): void => {
    request('patch', `/cart/deletePoster/${cartId}`, { posterId: id })
      .then(() => {
        getCartData(cartId);
        toast.success('Poster removed from cart');
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  return (
    <div className="w-full flex justify-between border-[1px] rounded-lg p-3 my-3">
      <div className="w-[25%]">
        <img src={`${mediaUrl}${posterImage}`} className="object-fill w-full" />
      </div>
      <div className="w-[60%] flex flex-col items-start justify-center bg-white">
        <span className="text-lg font-semibold">
          <i>{albumName}</i>
        </span>
        <span className="text-sm font-light">{singerName}</span>
        <span className="text-sm font-light">
          Size
          <span className="text-sm font-semibold"> &quot;{size.value}&quot;</span>
        </span>
        <span className="text-sm font-light">
          Frame <span className="text-sm font-semibold"> {frame.selectedFrame}</span>
        </span>
        <div className="flex items-start justify-start gap-3">
          <Counter
            counter={posterQuantity}
            handleDecrement={handleDecrement}
            handleIncrement={handleIncrement}
          />
          <span className="text-sm font-semibold">$ {totalPrice}</span>
        </div>
      </div>
      <div className="w-[5%] flex flex-col">
        <DeleteIcon onClick={deletePoster} className="cursor-pointer" />
      </div>
    </div>
  );
};

export default CartPosterDetails;
