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

  return (
    <>
      <div className="w-full h-20 bg-black flex items-center justify-between px-20">
        <Logo onClick={handleLogoClick} className="cursor-pointer" />
        <span className="text-white text-lg font-bold">
          <i>{HeaderTitle}</i>
        </span>
        <div className="flex items-center justify-center gap-4">
          <button className="bg-white px-4 py-3 text-sm rounded-md  font-medium">
            Return to Store
          </button>
          {location.pathname !== '/cart' ? (
            <Badge badgeContent={cartItemsLength} color="error">
              <HeaderCart className="cursor-pointer" onClick={handleOpen} />
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
