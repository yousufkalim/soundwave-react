import React, { FC } from 'react';
import { ReactComponent as Logo } from '../../assets/Logo.svg';
import { ReactComponent as HeaderCart } from '../../assets/HeaderCart.svg';
import { useNavigate, useLocation } from 'react-router-dom';
import { Badge } from '@mui/material';

interface HeaderProps {
  HeaderTitle: string;
  cartItemsLength?: number;
  setOpen?: (value: boolean) => void;
}

const index: FC<HeaderProps> = ({ HeaderTitle, cartItemsLength, setOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleOpen = (): void => {
    setOpen?.(true);
  };

  const handleLogoClick = (): void => {
    navigate('/');
  };
  const handleReturnToStore = (): void => {
    window.location.assign('https://www.walltonez.com/');
  };

  return (
    <>
      <div className="w-full h-[5.2rem] bg-black flex items-center justify-between py-[1.4rem] px-[1.3rem] ">
        {/* <div> */}
        {/* <img src={Logo} className="cursor-pointer w-[40%] sm:w-auto md:w-[200px] md:max-w-[190px]" alt="" onClick={handleLogoClick} /> */}
        <Logo onClick={handleLogoClick} className="cursor-pointer w-[40%] sm:w-auto" />
        {/* </div> */}
        {/* <div className='px-[2em]'>
          <ul className='flex text-white font-[14.4px]'>
            <li>
              <a className='py-[0.5em] px-[1.2em]' href="">Home</a>
            </li>
            <li>
              <a className='py-[0.5em] px-[1.2em]' href="">Create</a>
            </li>
            <li>
              <a className='py-[0.5em] px-[1.2em]' href="">About</a>
            </li>
            <li>
              <a className='py-[0.5em] px-[1.2em]' href="">Reviews</a>
            </li>
            <li>
              <a className='py-[0.5em] px-[1.2em]' href="">Blog</a>
            </li>
            <li>
              <a className='py-[0.5em] px-[1.2em]' href="">Help</a>
            </li>
          </ul>
        </div> */}
        <span className="text-white font-bold hidden md:text-lg md:block">
          <i>{HeaderTitle}</i>
        </span>
        <div className="flex items-center justify-center gap-4">
          <button
            className="bg-white w-18 py-1 px-2 text-[10px] sm:w-32 sm:py-3 sm:text-sm rounded-md font-medium"
            onClick={handleReturnToStore}
          >
            Return to Store
          </button>
          {location.pathname !== '/cart' ? (
            <Badge badgeContent={cartItemsLength} color="error" className="z-2">
              <HeaderCart className="cursor-pointer w-9 sm:w-15 md:w-17" onClick={handleOpen} />
            </Badge>
          ) : (
            ''
          )}
        </div>
      </div>
    </>
  );
};

export default index;
