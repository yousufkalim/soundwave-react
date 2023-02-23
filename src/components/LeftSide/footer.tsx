import React, { FC } from 'react';
import { ReactComponent as Left } from '../../assets/LeftSidePosterFooter/LeftPosterInactive.svg';
import { ReactComponent as Centered } from '../../assets/LeftSidePosterFooter/CenteredPosterInactive.svg';
import { ReactComponent as Right } from '../../assets/LeftSidePosterFooter/RightPosterInactive.svg';

interface FooterProps {
  activeAlignment: string;
  setActiveAlignment: (value: string) => void;
}

const Footer: FC<FooterProps> = ({ activeAlignment, setActiveAlignment }) => {
  const handleActiveAlignment = (value: string): void => {
    setActiveAlignment(value);
  };
  return (
    <div
      className={`
      bg-white w-[73%] h-12 shadow-xl shadow-gray-600 flex items-center justify-between px-5
      sm:w-[70%] 
      xmd:w-[60%]
      md:w-[78%]
      lg:w-[71%]
      xl:w-[67%]
      sxl:w-[48%]
      mxl:w-[52%]
      2xl:w-[47%]
      `}
    >
      <div
        className={
          activeAlignment === 'text-left'
            ? 'bg-[#d8d6d6] p-1 md:p-2 rounded-md cursor-pointer'
            : 'hover:bg-[#f8f8f8] p-1 md:p-2 rounded-md cursor-pointer'
        }
        onClick={() => {
          handleActiveAlignment('text-left');
        }}
      >
        <Left />
      </div>
      <div
        className={
          activeAlignment === 'text-center'
            ? 'bg-[#d8d6d6] p-1 md:p-2 rounded-md cursor-pointer'
            : 'hover:bg-[#f8f8f8] p-1 md:p-2 rounded-md cursor-pointer'
        }
        onClick={() => {
          handleActiveAlignment('text-center');
        }}
      >
        <Centered />
      </div>
      <div
        className={
          activeAlignment === 'text-right'
            ? 'bg-[#d8d6d6] p-1 md:p-2 rounded-md cursor-pointer'
            : 'hover:bg-[#f8f8f8] p-1 md:p-2 rounded-md cursor-pointer'
        }
        onClick={() => {
          handleActiveAlignment('text-right');
        }}
      >
        <Right />
      </div>
    </div>
  );
};

export default Footer;
