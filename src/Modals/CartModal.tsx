/* eslint-disable array-callback-return */
import React, { FC, useEffect, useState } from 'react';
import Modal from '@mui/material/Modal';
import { Box } from '@mui/system';
import { ReactComponent as CrossIcon } from '../assets/CrossIcon.svg';
import { ReactComponent as NoFramePlaceholder } from '../assets/NoFramePlaceholder.svg';

import { ReactComponent as CartIcon } from '../assets/cart.svg';
import CartPosterDetails from '../components/CartPosterDetails';
import request from '../api/request';
import { useNavigate } from 'react-router-dom';

interface CartModalProps {
  open: boolean;
  handleClose: () => void;
  setLoading?: (loading: boolean) => void;
}
interface IFrameProps {
  frameType: string;
  selectedFrame: string;
}
interface IPosterSize {
  value: string;
  unit: string;
}
interface IResponsePoster {
  frame: IFrameProps;
  size: IPosterSize;
  albumName: string;
  singerName: string;
  totalPrice: number;
  unitPrice: number;
  posterImage: string;
  posterQuantity: number;
  _id: string;
}
interface IResponseCart {
  success: boolean;
  cart: ICart;
}
interface ICart {
  _id: string;
  totalPoster: IResponsePoster[];
  totalPrice: number;
  shippingCost: number;
}

const CartModal: FC<CartModalProps> = ({ open, handleClose, setLoading }) => {
  const navigate = useNavigate();
  const style = {
    position: 'absolute' as const,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: 24,
    border: 'none',
    p: 4,
  };

  const [cart, setCart] = useState<ICart>({
    _id: '',
    totalPoster: [],
    totalPrice: 0,
    shippingCost: 0,
  });

  useEffect(() => {
    if (open) {
      const cartId = localStorage.getItem('cartId');
      if (cartId) {
        getCartData(cartId);
      }
    }
  }, [open]);

  const handleCartQuantity = (id: string, isAdd: boolean, unitPrice: number): void => {
    const updatedCart = {
      ...cart,
      totalPoster: cart?.totalPoster.map((poster) => {
        if (id === poster._id) {
          if (isAdd) {
            return {
              ...poster,
              posterQuantity: poster.posterQuantity + 1,
              totalPrice: poster.totalPrice + poster.unitPrice,
            };
          }
          return {
            ...poster,
            posterQuantity: poster.posterQuantity - 1,
            totalPrice: poster.totalPrice - poster.unitPrice,
          };
        } else {
          return poster;
        }
      }),
      totalPrice: isAdd ? cart.totalPrice + unitPrice : cart.totalPrice - unitPrice,
    };

    updateCartQuantity(id, updatedCart, isAdd);
  };

  const updateCartQuantity = (id: string, updatedCart: ICart, isAdd: boolean): void => {
    const updatedPoster = updatedCart.totalPoster.find((item) => item._id === id);
    if (updatedPoster?._id) {
      setLoading?.(true);
      request('patch', `/cart/changePosterQuantity/${cart._id}`, {
        isAdd,
        posterId: updatedPoster?._id,
        unitPrice: updatedPoster?.unitPrice,
        quantity: updatedPoster.posterQuantity,
      })
        .then((res) => {
          setCart(updatedCart);
          setLoading?.(false);
        })
        .catch((err) => {
          console.log('Update Error', err);
        });
    }
  };

  const getCartData = (cartId: string): void => {
    setLoading?.(true);
    request<IResponseCart>('get', `/cart/${cartId}`)
      .then((res) => {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        const cart = res.data.cart;
        const data = {
          shippingCost: cart.shippingCost,
          totalPoster: cart.totalPoster,
          totalPrice: cart.totalPrice,
          _id: cart._id,
        };
        setCart(data);
        setLoading?.(false);
      })
      .catch((err) => {
        setLoading?.(false);

        console.log('Get cart Error ', err.message);
      });
  };

  const handleViewCartClick = (): void => {
    navigate('/cart');
  };

  const CartItems =
    cart?.totalPoster?.length > 0
      ? cart?.totalPoster.map((item) => (
          <CartPosterDetails
            key={item?._id}
            id={item?._id}
            posterImage={item.posterImage}
            albumName={item.albumName}
            singerName={item.singerName}
            size={item.size}
            unitPrice={item.unitPrice}
            frame={item.frame}
            totalPrice={item.totalPrice}
            posterQuantity={item.posterQuantity}
            cartId={cart._id}
            handleCartQuantity={handleCartQuantity}
            getCartData={getCartData}
          />
        ))
      : cart?.totalPoster?.length === 0 && <NoFramePlaceholder className=" w-[80%]" />;

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style} className="bg-white w-[29%] outline-none h-[85%] overflow-hidden">
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-[#454238]">
            <i>Cart</i>
          </span>
          <CrossIcon onClick={handleClose} className="cursor-pointer w-5" />
        </div>
        <div
          className={
            cart?.totalPoster?.length === 0
              ? 'h-[64%] overflow-scroll flex items-center justify-center'
              : 'h-[64%] overflow-scroll '
          }
        >
          {CartItems}
        </div>
        <div className="flex items-center justify-between text-sm py-2 font-semibold">
          <span>Order value</span>
          <span>$ {cart.totalPrice}</span>
        </div>
        <div className="flex items-center justify-between text-sm py-2 font-semibold">
          <span>Shipping</span>
          <span>${cart?.shippingCost}</span>
        </div>
        <div className="flex items-center justify-between text-sm py-3 border-t-[1px] font-semibold">
          <span>Sub Total</span>
          <span>{`$ ${cart?.totalPrice ? cart?.totalPrice + cart.shippingCost : '0'}.00`}</span>
        </div>

        <div className="py-2 flex flex-col gap-2">
          <button className="bg-black py-3 text-white text-sm rounded-lg font-semibold flex items-center justify-center">
            <CartIcon />
            &nbsp; &nbsp;CHECKOUT
          </button>
          <button
            onClick={handleViewCartClick}
            className="bg-white py-3 text-black text-sm rounded-lg font-semibold border-[1px] border-black"
          >
            View Cart
          </button>
        </div>
      </Box>
    </Modal>
  );
};
export default CartModal;
