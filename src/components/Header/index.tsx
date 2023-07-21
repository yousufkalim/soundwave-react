import React, { FC } from 'react';
import Logo from '../../assets/walltonezLogo.svg';
import { Fade as Hamburger } from 'hamburger-react';
import { ReactComponent as CartLogo } from '../../assets/home/cartLogo.svg';
import ReactPixel from 'react-facebook-pixel';

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
      : ReactPixel.trackCustom('CartClicked', { buttonName: 'CartButton' });
    setOpen?.(true);
  };

  return (
    <>
      <div className="w-full h-[65px] hbr:min-h-[5.25rem] bg-black flex items-center justify-between hbr:py-[1.4rem] hbr:px-[1rem] pl-[0.5rem] pr-[1rem] py-[20.5px] ">
        <div className="hbr:hidden block ">
          <Hamburger
            color="#ffff"
            direction="right"
            toggled={cross}
            onToggle={setCross}
            size={24}
            easing="ease-in"
            distance="lg"
          />
        </div>
        <div>
          <img
            src={Logo}
            className="cursor-pointer w-[160px] mr-[8px] md:mr-[0px] md:w-[210px]"
            alt=""
            onClick={() => {
              handleIconClick('https://www.walltonez.com/', 'logo');
            }}
          />
        </div>
        <div className="hbr:block hidden font-[Basic] font-medium text-center">
          <div className="text-center text-[14.4px]">
            <div className="pl-[1.3em] pr-[2em]">
              <ul className="flex text-white gap-[4.5px] pr-[10px]">
                <li>
                  <a
                    className="hover:after:bg-white relative after:absolute after:w-[calc(100%-2.4em)] after:bottom-[-4px] after:left-1/2 after:translate-x-[-50%] after:h-[2px] after:bg-transparent py-[0.5em] px-[1.2em]"
                    href="https://www.walltonez.com/"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    className="relative after:absolute after:w-[calc(100%-2.4em)] after:bottom-[-4px] after:left-1/2 after:translate-x-[-50%] after:h-[2px] after:bg-white py-[0.5em] px-[1.2em]"
                    href="/"
                  >
                    Create
                  </a>
                </li>
                <li className="group relative ">
                  <a
                    className="z-30 relative hover:after:bg-white after:absolute after:w-[calc(100%-2.4em)] after:bottom-[-4px] after:left-1/2 after:translate-x-[-50%] after:h-[2px] after:bg-transparent py-[0.5em] px-[1.2em] cursor-pointer"
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
                    className="z-30 hover:after:bg-white relative after:absolute after:w-[calc(100%-2.4em)] after:bottom-[-4px] after:left-1/2 after:translate-x-[-50%] after:h-[2px] after:bg-transparent py-[0.5em] px-[1.2em]"
                    href="https://www.walltonez.com/pages/reviews"
                  >
                    Reviews
                  </a>
                </li>
                <li>
                  <a
                    className="hover:after:bg-white relative after:absolute after:w-[calc(100%-2.4em)] after:bottom-[-4px] after:left-1/2 after:translate-x-[-50%] after:h-[2px] after:bg-transparent py-[0.5em] px-[1.2em]"
                    href="https://www.walltonez.com/blogs/blogs"
                  >
                    Blog
                  </a>
                </li>
                <li className="group relative ">
                  <a
                    className="z-30 relative hover:after:bg-white after:absolute after:w-[calc(100%-2.4em)] after:bottom-[-4px] after:left-1/2 after:translate-x-[-50%] after:h-[2px] after:bg-transparent py-[0.5em] px-[1.2em] cursor-pointer"
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
        <div className="z-2 hbr:w-[210px] flex justify-end hbr:mb-[3px]">
          <div
            className="relative cursor-pointer md:h-[38px] md:w-[38px] h-[32px] w-[32px] mxl:mr-[9px]"
            onClick={() => {
              handleIconClick('/cart', 'cart');
            }}
          >
            <CartLogo />
            <div className="text-white absolute top-[40%] hbr:top-[42%] left-[50%] text-[9.3px] font-medium transform translate-x-[-50%] ">
              {cartItemsLength}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
