import React, { FC } from 'react';
import Logo from '../../assets/Logo.svg';
import { ReactComponent as HeaderCart } from '../../assets/HeaderCart.svg';
import { Badge } from '@mui/material';
import { Fade as Hamburger } from 'hamburger-react';

interface HeaderProps {
  cartItemsLength?: number;
  setOpen?: (value: boolean) => void;
  setCross: (value: boolean) => void;
  cross: boolean;
}

const index: FC<HeaderProps> = ({ cartItemsLength, setOpen, setCross, cross }) => {
  const handleIconClick = (targetRedirect: string, SelectedIcon: string): void => {
    SelectedIcon === 'logo'
      ? window.location.assign(targetRedirect)
      : SelectedIcon === 'cart' && window.location.pathname === '/cart'
      ? window.location.assign(targetRedirect)
      : setOpen?.(true);
  };

  return (
    <>
      <div className="w-full h-[65px] hbr:min-h-[5.2rem] bg-black flex items-center justify-between hbr:py-[1.4rem] hbr:px-[1.3rem] px-[0.4rem] py-[20.5px] ">
        <div className="hbr:hidden block ">
          <Hamburger
            color="#ffff"
            direction="right"
            toggled={cross}
            onToggle={setCross}
            size={24}
          />
        </div>
        <div>
          <img
            src={Logo}
            className="cursor-pointer w-[150px]  md:w-[200px]"
            alt=""
            onClick={() => {
              handleIconClick('https://www.walltonez.com/', 'logo');
            }}
          />
          {/* <Logo onClick={handleLogoClick} className="cursor-pointer w-[40%] sm:w-auto" /> */}
        </div>
        <div className="hbr:block hidden font-[Basic] font-semibold text-center">
          <div className="text-center leading-1.5 text-[15px]">
            <div className="px-[2em]">
              <ul className="flex text-white">
                <li>
                  <a
                    className="hover:after:bg-white relative after:absolute after:w-[calc(100%-2.4em)] after:bottom-0 after:left-1/2 after:translate-x-[-50%] after:h-[2px] after:bg-transparent py-[0.5em] px-[1.2em]"
                    href="https://www.walltonez.com/"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    className="relative after:absolute after:w-[calc(100%-2.4em)] after:bottom-0 after:left-1/2 after:translate-x-[-50%] after:h-[2px] after:bg-white py-[0.5em] px-[1.2em]"
                    href="/"
                  >
                    Create
                  </a>
                </li>
                <li className="group relative ">
                  <a
                    className="z-30 relative hover:after:bg-white relative after:absolute after:w-[calc(100%-2.4em)] after:bottom-0 after:left-1/2 after:translate-x-[-50%] after:h-[2px] after:bg-transparent py-[0.5em] px-[1.2em] cursor-pointer"
                    aria-haspopup="true"
                  >
                    About
                  </a>
                  <ul className="group-hover:opacity-100 group-hover:visible group-hover:max-h-[75vh] group-hover:transition-opacity group-hover:transition-visible group-hover:duration-400 absolute top-full left-[1.2em] invisible opacity-0 transition-none bg-black block py-[20px] px-[15px] border-t-[20px] border-black max-w-[350px] max-h-0 overflow-y-auto overflow-x-hidden z-10">
                    <li className="flex leading-10 text-left	w-full min-w-[190px] ">
                      <a
                        className="px-[0.5em] hover:opacity-70"
                        href="https://www.walltonez.com/pages/about"
                      >
                        Who We Are
                      </a>
                    </li>
                    <li className="flex leading-10 text-left	w-full min-w-[190px]">
                      <a
                        className="px-[0.5em] hover:opacity-70"
                        href="https://www.walltonez.com/pages/sustainability"
                      >
                        Sustainabilty
                      </a>
                    </li>
                    <li className="flex leading-10 text-left	w-full min-w-[190px]">
                      <a
                        className="px-[0.5em] hover:opacity-70"
                        href="https://www.walltonez.com/pages/our-quality"
                      >
                        Our Quality
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    className="z-30 hover:after:bg-white relative after:absolute after:w-[calc(100%-2.4em)] after:bottom-0 after:left-1/2 after:translate-x-[-50%] after:h-[2px] after:bg-transparent py-[0.5em] px-[1.2em]"
                    href="https://www.walltonez.com/pages/reviews"
                  >
                    Reviews
                  </a>
                </li>
                <li>
                  <a
                    className="hover:after:bg-white relative after:absolute after:w-[calc(100%-2.4em)] after:bottom-0 after:left-1/2 after:translate-x-[-50%] after:h-[2px] after:bg-transparent py-[0.5em] px-[1.2em]"
                    href="https://www.walltonez.com/blogs/blogs"
                  >
                    Blog
                  </a>
                </li>
                <li className="group relative ">
                  <a
                    className="z-30 relative hover:after:bg-white relative after:absolute after:w-[calc(100%-2.4em)] after:bottom-0 after:left-1/2 after:translate-x-[-50%] after:h-[2px] after:bg-transparent py-[0.5em] px-[1.2em] cursor-pointer"
                    aria-haspopup="true"
                  >
                    Help
                  </a>
                  <ul className="group-hover:opacity-100 group-hover:visible group-hover:max-h-[75vh] group-hover:transition-opacity group-hover:transition-visible group-hover:duration-400 absolute top-full left-[1.2em] invisible opacity-0 transition-none bg-black block py-[20px] px-[15px] border-t-[20px] border-black max-w-[350px] max-h-0 overflow-y-auto overflow-x-hidden z-10">
                    <li className="flex leading-10 text-left	w-full min-w-[190px] ">
                      <a
                        className="px-[0.5em] hover:opacity-70"
                        href="https://www.walltonez.com/pages/frequently-asked-questions"
                      >
                        FAQs
                      </a>
                    </li>
                    <li className="flex leading-10 text-left	w-full min-w-[190px]">
                      <a
                        className="px-[0.5em] hover:opacity-70"
                        href="https://www.walltonez.com/pages/contact-us"
                      >
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <span className="text-white font-bold hidden md:text-lg md:block">
          <i>{HeaderTitle}</i>
        </span> */}
        {/* < div className="flex items-center justify-center gap-4 hbr:w-[210px] bg-red-500" > */}
        {/* <button
            className="bg-white w-18 py-1 px-2 text-[10px] sm:w-32 sm:py-3 sm:text-sm rounded-md font-medium"
            onClick={handleReturnToStore}
          >
            Return to Store
          </button> */}

        <Badge
          badgeContent={cartItemsLength}
          color="error"
          className="z-2 mr-[10px] mt-[7px] hbr:w-[210px] flex justify-end"
        >
          <HeaderCart
            className="cursor-pointer w-19 sm:w-15 md:w-17"
            onClick={() => {
              handleIconClick('/cart', 'cart');
            }}
          />
        </Badge>
      </div>
      {/* </div > */}
    </>
  );
};

export default index;
