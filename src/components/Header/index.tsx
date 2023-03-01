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
      <div className="w-full h-20 bg-black flex items-center justify-between px-4 md:px-20">
        <Logo onClick={handleLogoClick} className="cursor-pointer w-[40%] sm:w-[20%]" />
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
              <HeaderCart className="cursor-pointer w-9 sm:w-15" onClick={handleOpen} />
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
