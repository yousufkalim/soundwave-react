import React, { FC, useState } from 'react';
import { ReactComponent as Logo } from '../../assets/Logo.svg';
import { ReactComponent as HeaderCart } from '../../assets/HeaderCart.svg';
import CartModal from '../../Modals/CartModal';
import { useNavigate, useLocation } from 'react-router-dom';

interface HeaderProps {
  HeaderTitle: string;
  setLoading?: (loading: boolean) => void;
}

const index: FC<HeaderProps> = ({ HeaderTitle, setLoading }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [open, setOpen] = useState(false);

  const handleOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
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
            <HeaderCart className="cursor-pointer" onClick={handleOpen} />
          ) : (
            ''
          )}
        </div>
      </div>
      <CartModal setLoading={setLoading} open={open} handleClose={handleClose} />
    </>
  );
};

export default index;
