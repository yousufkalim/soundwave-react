import React, { FC, useState, useEffect } from 'react';
import Header from '../../components/Header/index';
import PosterInfoCard from '../../components/PosterInfoCard/index';
import { ReactComponent as TitleIcon } from '../../assets/titleIcon.svg';
import { ReactComponent as NoFramePlaceholder } from '../../assets/NoFramePlaceholder.svg';
import { ReactComponent as Cart } from '../../assets/cart.svg';
import { Checkbox } from '@mui/material';
import request from '../../api/request';
import { useNavigate } from 'react-router-dom';

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
  unitPrice: number;
  totalPrice: number;
  posterImage: string;
  posterQuantity: number;
  _id: string;
}
interface IResponseCart {
  _id: string;
  totalPoster: IResponsePoster[];
  totalPrice: number;
  shippingCost: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
interface IResponseSuccess {
  success: boolean;
  cart: IResponseCart;
}

const Checkout: FC = () => {
  const naviagte = useNavigate();
  const [cartItems, setCartItems] = useState<IResponseCart>();

  const getCartData = (cartId: string): void => {
    if (cartId) {
      request<IResponseSuccess>('get', `/cart/${cartId}`)
        .then((res) => {
          setCartItems(res.data.cart);
        })
        .catch((err) => {
          console.log('Get cart Error ', err.message);
        });
    }
  };

  const handleCreateAnotherPoster = (): void => {
    naviagte('/');
  };

  const handleRemovePoster = (posterId: string): void => {
    const cartId = localStorage.getItem('cartId');
    if (posterId && cartId) {
      request<IResponseSuccess>('patch', `/cart/deletePoster/${cartId}`, { posterId })
        .then((res) => {
          console.log('handleRemovePoster', res.data);
          getCartData(cartId);
        })
        .catch((err) => {
          console.log('Get cart Error ', err.message);
        });
    }
  };

  useEffect(() => {
    const cartId = localStorage.getItem('cartId');
    if (cartId) {
      getCartData(cartId);
    }
  }, []);

  const CartItems =
    cartItems && cartItems?.totalPoster?.length > 0
      ? cartItems?.totalPoster.map((item) => (
          <PosterInfoCard
            posterImage={item.posterImage}
            key={item._id}
            albumName={item.albumName}
            singerName={item.singerName}
            size={item.size}
            frame={item.frame}
            posterPrice={item?.totalPrice}
            Quantity={item.posterQuantity}
            posterId={item._id}
            handleRemovePoster={handleRemovePoster}
          />
        ))
      : cartItems && cartItems?.totalPoster?.length === 0 && <NoFramePlaceholder />;

  return (
    <>
      <Header HeaderTitle="Checkout" />
      <div className="flex h-[85vh]">
        <div className="bg-[#fcfcfc] w-[56%] flex flex-col items-center justify-center gap-5 ">
          {CartItems}
        </div>
        <div className="bg-white w-[44%] flex items-start justify-start mt-14 pl-20">
          <div className="w-[60%]">
            <div className="w-full flex items-center justify-start mb-2">
              <TitleIcon className="mx-2" />
              <span className="text-md font-semibold tracking-tight text-black">
                Soundwave Poster
              </span>
            </div>
            <div className="w-full flex items-center justify-start mb-7">
              <i className="text-[#454238] text-3xl tracking-tight font-semibold">
                Continue Shopping
              </i>
            </div>
            <div className="mb-2">
              <div className="text-[#454238] text-sm flex items-center justify-between my-3">
                <span>Order value</span>
                <i className="font-bold">${cartItems?.totalPrice}.00</i>
              </div>
              <div className="text-[#454238] text-sm flex items-center justify-between my-3">
                <span>Shipping</span>
                <i className="font-bold">${cartItems?.shippingCost}.00</i>
              </div>
              <div className="text-[#454238] text-md font-bold flex items-center justify-between border-t-[1px] my-4 py-4">
                <span>Sub Total</span>
                <i>
                  {cartItems ? `$ ${cartItems?.totalPrice + cartItems?.shippingCost}.00` : `$0.00`}
                </i>
              </div>
            </div>
            <p className="font-light text-sm my-4 text-[#454238]">
              Your personal data will be used to process your order, support your experience
              throughout this website, and for other purposes described in our
              <span className="font-bold"> privacy policy.</span>
            </p>
            <div className="my-3">
              <Checkbox color="success" />
              <span className="font-light text-sm text-[#454238]">
                I have read and agree to the website
                <span className="font-bold"> terms and conditions</span>
              </span>
            </div>
            <div className="flex flex-col gap-3">
              <button
                className={
                  cartItems && cartItems.totalPoster.length > 0
                    ? 'bg-black flex items-center justify-center h-12 rounded-xl cursor-pointer text-white text-sm font-semibold'
                    : 'bg-[#919B9B] flex items-center justify-center h-12 rounded-xl cursor-pointer text-white text-sm font-semibold'
                }
                disabled={cartItems?.totalPoster?.length === 0}
              >
                <Cart className="w-4" />
                &nbsp;&nbsp;Checkout
              </button>
              <button
                onClick={handleCreateAnotherPoster}
                className={
                  'flex items-center justify-center h-12 rounded-xl cursor-pointer text-black text-sm font-semibold border-[1px] border-black'
                }
              >
                {cartItems && cartItems.totalPoster.length > 0
                  ? 'Create Another Poster'
                  : 'Create A Poster'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
