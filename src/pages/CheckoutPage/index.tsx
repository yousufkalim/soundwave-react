import React, { FC } from 'react';
import Header from '../../components/Header/index';
import PosterInfoCard from '../../components/PosterInfoCard/index';
import { ReactComponent as TitleIcon } from '../../assets/titleIcon.svg';
import { ReactComponent as Cart } from '../../assets/cart.svg';
import { Checkbox } from '@mui/material';
const Checkout: FC = () => {
  return (
    <>
      <Header HeaderTitle="Checkout" />
      <div className="flex h-[85vh]">
        <div className="bg-[#fcfcfc] w-[56%] flex flex-col items-center justify-center gap-5 ">
          <PosterInfoCard />
          <PosterInfoCard />
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
              <div className="text-[#454238] text-sm  flex items-center justify-between my-3">
                <span>Order value</span>
                <i className="font-bold">$120.00</i>
              </div>
              <div className="text-[#454238] text-sm  flex items-center justify-between my-3">
                <span>Shipping</span>
                <i className="font-bold">0.00</i>
              </div>
              <div className="text-[#454238] text-md font-bold flex items-center justify-between border-t-[1px] my-4 py-4">
                <span>Sub Total</span>
                <i>$120.00</i>
              </div>
            </div>
            <p className="font-light text-sm my-4 text-[#454238]">
              Your personal data will be used to process your order, support your experience
              throughout this website, and for other purposes described in our
              <span className="font-bold"> privacy policy.</span>
            </p>
            <div className="my-4 flex items-center justify-start">
              <Checkbox color="success" />
              <span className="font-light text-sm text-[#454238]">
                I have read and agree to the website
                <span className="font-bold"> terms and conditions</span>
              </span>
            </div>
            <div className="flex flex-col gap-3">
              <button
                className={
                  'bg-black flex items-center justify-center h-12 rounded-xl cursor-pointer text-white  text-sm font-semibold'
                }
              >
                <Cart className="w-4" />
                &nbsp;&nbsp;Checkout
              </button>
              <button
                className={
                  'flex items-center justify-center h-12 rounded-xl cursor-pointer text-black text-sm font-semibold border-[1px] border-black'
                }
              >
                Create Another Poster
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
