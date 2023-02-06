/* eslint-disable array-callback-return */
import React, { FC } from 'react';
import Modal from '@mui/material/Modal';
import { Box } from '@mui/system';
import { ReactComponent as CrossIcon } from '../assets/CrossIcon.svg';
import { ReactComponent as CartIcon } from '../assets/cart.svg';
import PosterImage from '../assets/posterIcons/template2.svg';
import CartPosterDetails from '../components/CartPosterDetails';

interface OrdersArrProps {
  id: string;
  posterImage: string;
  AlbumName: string;
  SingerName: string;
  size: string;
  frame: string;
}

interface CartModalProps {
  open: boolean;
  handleClose: () => void;
}

const CartModal: FC<CartModalProps> = ({ open, handleClose }) => {
  const style = {
    position: 'absolute' as const,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: 24,
    border: 'none',
    p: 4,
  };

  const orders = [
    {
      id: '1',
      posterImage: PosterImage,
      AlbumName: 'StarBoy',
      SingerName: 'The Weeknd',
      size: '16X20',
      frame: 'No Frame (Poster only)',
    },
    {
      id: '2',
      posterImage: PosterImage,
      AlbumName: 'StarBoy',
      SingerName: 'The Weeknd',
      size: '18X22',
      frame: 'No Frame (Poster only)',
    },
    {
      id: '3',
      posterImage: PosterImage,
      AlbumName: 'StarBoy',
      SingerName: 'The Weeknd',
      size: '16X20',
      frame: 'No Frame (Poster only)',
    },
  ];

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style} className="bg-white w-[29%] outline-none h-[85%] overflow-hidden">
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-[#454238]">
            <i>Cart</i>
          </span>
          <CrossIcon onClick={handleClose} className="cursor-pointer w-5" />
        </div>
        <div className="h-[64%] overflow-scroll">
          {orders.map((item: OrdersArrProps) => (
            <CartPosterDetails
              key={item.id}
              posterImage={item.posterImage}
              AlbumName={item.AlbumName}
              SingerName={item.SingerName}
              size={item.size}
              frame={item.frame}
            />
          ))}
        </div>
        <div className="flex items-center justify-between text-sm py-2 font-semibold">
          <span>Order value</span>
          <span>$120.00</span>
        </div>
        <div className="flex items-center justify-between text-sm py-2 font-semibold">
          <span>Shipping</span>
          <span>0.00</span>
        </div>
        <div className="flex items-center justify-between text-sm py-3 border-t-[1px] font-semibold">
          <span>Sub Total</span>
          <span>$120.00</span>
        </div>

        <div className="py-2 flex flex-col gap-2">
          <button className="bg-black py-3 text-white text-sm rounded-lg font-semibold flex items-center justify-center">
            <CartIcon />
            &nbsp; &nbsp;CHECKOUT
          </button>
          <button className="bg-white py-3 text-black text-sm rounded-lg font-semibold border-[1px] border-black">
            View Cart
          </button>
        </div>
      </Box>
    </Modal>
  );
};
export default CartModal;
