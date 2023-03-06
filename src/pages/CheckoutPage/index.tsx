import React, { FC, useState, useEffect } from 'react';
import Header from '../../components/Header/index';
import PosterInfoCard from '../../components/PosterInfoCard/index';
import { ReactComponent as TitleIcon } from '../../assets/titleIcon.svg';
import { ReactComponent as NoFramePlaceholder } from '../../assets/NoFramePlaceholder.svg';
import { ReactComponent as Cart } from '../../assets/cart.svg';
import { Checkbox } from '@mui/material';
import request from '../../api/request';
import { useNavigate } from 'react-router-dom';
import Spinner from '../../components/Spinner/Spinner';
import { toast } from 'react-toastify';
import { ICart } from '../../types/index';
import { handleCheckout } from '../../utils/common';
import Fade from 'react-reveal/Fade';

interface IResponseSuccess {
  success: boolean;
  cart: ICart;
}

const Checkout: FC = () => {
  const naviagte = useNavigate();
  const [cart, setCart] = useState<ICart>({
    _id: '',
    totalPoster: [],
    totalPrice: 0,
    shippingCost: 0,
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [termsCondition, setTermsCondition] = useState<boolean>(false);
  const getCartData = (cartId: string): void => {
    if (cartId) {
      setLoading(true);
      request<IResponseSuccess>('get', `/cart/${cartId}`)
        .then((res) => {
          setCart(res.data.cart);
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          toast.error(err.response.data.message);
        });
    }
  };
  const handleCreateAnotherPoster = (): void => {
    naviagte('/');
  };
  const handleRemovePoster = (posterId: string): void => {
    const cartId = localStorage.getItem('cartId');
    if (posterId && cartId) {
      // setLoading(true);
      request<IResponseSuccess>('patch', `/cart/deletePoster/${cartId}`, { posterId })
        .then(() => {
          getCartData(cartId);
          toast.success('Poster removed from cart');
        })
        .catch((err) => {
          // setLoading(false);
          toast.error(err.response.data.message);
        });
    }
  };
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
      totalPrice: isAdd ? cart?.totalPrice + unitPrice : cart?.totalPrice - unitPrice,
    };

    updateCartQuantity(id, updatedCart, isAdd);
  };
  const updateCartQuantity = (id: string, updatedCart: ICart, isAdd: boolean): void => {
    const updatedPoster = updatedCart.totalPoster.find((item) => item._id === id);
    if (updatedPoster?._id) {
      // setLoading?.(true);
      request('patch', `/cart/changePosterQuantity/${cart._id}`, {
        isAdd,
        posterId: updatedPoster?._id,
        unitPrice: updatedPoster?.unitPrice,
        quantity: updatedPoster.posterQuantity,
      })
        .then(() => {
          setCart(updatedCart);
          // setLoading?.(false);
        })
        .catch((err) => {
          toast.error(err.response.data.message);
        });
    }
  };
  useEffect(() => {
    const cartId = localStorage.getItem('cartId');
    if (cartId) {
      getCartData(cartId);
    }
  }, []);
  const handleTermsCondition = (): void => {
    setTermsCondition(!termsCondition);
  };

  const CartItems =
    cart?.totalPoster?.length > 0
      ? cart?.totalPoster.map((item, index) => (
          <PosterInfoCard
            index={index}
            key={item._id}
            posterImage={item.posterImage}
            albumName={item.albumName}
            singerName={item.singerName}
            size={item.size}
            posterType={item.posterType}
            posterPrice={item?.totalPrice}
            Quantity={item.posterQuantity}
            posterId={item._id}
            handleRemovePoster={handleRemovePoster}
            handleCartQuantity={handleCartQuantity}
            unitPrice={item.unitPrice}
          />
        ))
      : cart?.totalPoster?.length === 0 && (
          <Fade>
            <NoFramePlaceholder />
          </Fade>
        );
  const CartTotalPrice = cart.totalPrice + cart.shippingCost;
  return (
    <div className="relative">
      {loading && <Spinner />}
      <Header HeaderTitle="Checkout" />
      <div className="flex flex-col md:flex-row md:h-[90vh] overflow-hidden">
        <div className="bg-[#fcfcfc] w-full md:w-[60%] 2xl:w-[56%] flex flex-col items-center justify-center gap-5 overflow-scroll">
          {CartItems}
        </div>
        <div className="bg-white w-full md:w-[40%] 2xl:w-[42%] flex items-start justify-center md:justify-start mt-11 md:pl-10 lg:pl-20">
          <div className="w-[85%] sm:w-[65%] md:w-[90%] lg:w-[80%] 2xl:w-[65%] mt-[6%]">
            <div className="w-full flex items-center justify-start mb-1 sm:mb-2">
              <TitleIcon className="w-5 sm:w-15" />
              <span className="ml-2 text-[12px] md:text-sm text-md font-semibold tracking-tight text-black">
                Soundwave Poster
              </span>
            </div>
            <div className="w-full flex items-center justify-start mb-4 sm:mb-7">
              <i className="text-lg sm:text-xl text-[#454238] md:text-2xl lg:text-3xl tracking-tight font-semibold">
                Continue Shopping
              </i>
            </div>
            <div className="mb-1 sm:mb-2">
              <div className="text-[#323334] text-[12px] 2xl:text-[13px] flex items-center justify-between my-2 sm:my-3">
                <span>Order value</span>
                <span className="font-semibold">${cart.totalPrice.toFixed(2)}</span>
              </div>
              <div className="text-[#454238] text-[12px] 2xl:text-[13px] flex items-center justify-between my-2 sm:my-3">
                <span>Shipping</span>
                <span className="font-semibold">${cart.shippingCost}.00</span>
              </div>
              <div className="text-[#454238] text-sm sm:text-md font-bold flex items-center justify-between border-t-[1px] my-4 py-4">
                <span>Sub Total</span>
                <i>{`$ ${cart?.totalPrice ? CartTotalPrice.toFixed(2) : '0'}`}</i>
              </div>
            </div>
            <p className="text-[10px] sm:text-[12px] 2xl:text-[13px] my-2 sm:my-4 text-[#A0A0A0]">
              Your personal data will be used to process your order, support your experience
              throughout this website, and for other purposes described in our
              <span className="font-bold text-black"> privacy policy.</span>
            </p>
            <div className="my-2 sm:my-3">
              <Checkbox
                checked={termsCondition}
                onClick={handleTermsCondition}
                disabled={cart.totalPoster?.length === 0}
                sx={{
                  color: '#D1D1D6',
                  padding: '0px',
                  '&.Mui-checked': {
                    color: '#47B45F',
                  },
                }}
              />
              <span className="text-[10px] sm:text-[12px] 2xl:text-[13px] text-[#A0A0A0] ml-2">
                I have read and agree to the website
                <span className="font-bold text-black"> terms and conditions</span>
              </span>
            </div>
            <div className="flex flex-col gap-3">
              <button
                onClick={() => {
                  handleCheckout(setLoading);
                }}
                disabled={cart.totalPoster?.length === 0 && !termsCondition}
                className={
                  cart.totalPoster.length > 0 && termsCondition
                    ? 'bg-black flex items-center justify-center h-12 rounded-xl cursor-pointer text-white text-[10px] sm:text-[12px] 2xl:text-[13px] font-semibold'
                    : 'bg-[#919B9B] flex items-center justify-center h-12 rounded-xl cursor-pointer text-white text-[10px] sm:text-[12px] 2xl:text-[13px] font-semibold'
                }
              >
                <Cart className="w-4" />
                &nbsp;&nbsp;Checkout
              </button>
              <button
                onClick={handleCreateAnotherPoster}
                className={
                  'flex items-center justify-center h-12 rounded-xl cursor-pointer text-black text-[10px] sm:text-[12px] 2xl:text-[13px] font-semibold border-[1px] border-black'
                }
              >
                {cart.totalPoster.length > 0 ? 'Create Another Poster' : 'Create A Poster'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
