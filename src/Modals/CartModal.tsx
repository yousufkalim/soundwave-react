/* eslint-disable array-callback-return */
import React, { FC, useEffect } from 'react';
// import Modal from '@mui/material/Modal';
import { Box } from '@mui/system';
import { ReactComponent as CrossIcon } from '../assets/CrossIcon.svg';
import { ReactComponent as NoFramePlaceholder } from '../assets/NoFramePlaceholder.svg';
import { ReactComponent as CartIcon } from '../assets/cart.svg';
import CartPosterDetails from '../components/CartPosterDetails';
import request from '../api/request';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ICart } from '../types/index';
import Slide from 'react-reveal/Slide';
import { handleCheckout } from '../utils/common';
interface CartModalProps {
  open: boolean;
  handleClose: () => void;
  setLoading: (loading: boolean) => void;
  cart: ICart;
  setCart: (cart: ICart) => void;
  getCartData: (value: string) => void;
}

const style = {
  // position: 'absolute' as const,
  // top: '0%',
  // right: '0%',
  // transform: 'translate(-50%, -50%)',
  width: '100%',
  height: '100vh',
  border: 'none',
  p: 4,
};

const CartModal: FC<CartModalProps> = ({
  open,
  handleClose,
  setLoading,
  cart,
  setCart,
  getCartData,
}) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (open) {
      const cartId = localStorage.getItem('cartId');
      if (cartId) {
        getCartData?.(cartId);
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
      setLoading(true);
      request('patch', `/cart/changePosterQuantity/${cart._id}`, {
        isAdd,
        posterId: updatedPoster?._id,
        unitPrice: updatedPoster?.unitPrice,
        quantity: updatedPoster.posterQuantity,
      })
        .then(() => {
          setCart(updatedCart);
          setLoading(false);
        })
        .catch((err) => {
          toast.error(err.response.data.message);
        });
    }
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
            posterType={item.posterType}
            totalPrice={item.totalPrice}
            posterQuantity={item.posterQuantity}
            cartId={cart._id}
            handleCartQuantity={handleCartQuantity}
            getCartData={getCartData}
          />
        ))
      : cart?.totalPoster?.length === 0 && <NoFramePlaceholder className=" w-[80%]" />;
  const cartTotalPrice = cart?.totalPrice + cart.shippingCost;
  return (
    <div
      className="w-full h-full fixed top-0 bottom-0 right-0 left-0 z-40"
      style={{ backgroundColor: 'rgba(0, 0, 0, .2)', backdropFilter: 'blur(5px)' }}
    >
      <div className="w-full h-full relative">
        <div style={{ width: '29%', position: 'absolute', top: '0', right: '0' }}>
          <Slide right duration={400}>
            <Box sx={style} className="bg-white  outline-none overflow-hidden">
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
                    : 'h-[64%] overflow-scroll'
                }
              >
                {CartItems}
              </div>
              <div className="flex items-center justify-between text-sm py-2 font-semibold">
                <span>Order value</span>
                <span>$ {cart.totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex items-center justify-between text-sm py-2 font-semibold">
                <span>Shipping</span>
                <span>${cart?.shippingCost}</span>
              </div>
              <div className="flex items-center justify-between text-sm py-3 border-t-[1px] font-semibold">
                <span>Sub Total</span>
                <span>{`$ ${cart?.totalPrice ? cartTotalPrice.toFixed(2) : '0'}`}</span>
              </div>

              <div className="py-2 flex flex-col gap-2">
                <button
                  onClick={() => {
                    handleCheckout(setLoading);
                  }}
                  className="bg-black py-3 text-white text-sm rounded-lg font-semibold flex items-center justify-center"
                >
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
            {/* </div> */}
          </Slide>
        </div>
      </div>
    </div>
  );
};
export default CartModal;
