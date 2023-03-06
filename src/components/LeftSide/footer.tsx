import React, { FC } from 'react';
import { ReactComponent as Left } from '../../assets/LeftSidePosterFooter/LeftPosterInactive.svg';
import { ReactComponent as Centered } from '../../assets/LeftSidePosterFooter/CenteredPosterInactive.svg';
import { ReactComponent as Right } from '../../assets/LeftSidePosterFooter/RightPosterInactive.svg';
import { IPosterSize } from '../../types/index';
interface FooterProps {
  activeAlignment: string;
  setActiveAlignment: (value: string) => void;
  posterSize: IPosterSize;
}

const Footer: FC<FooterProps> = ({ activeAlignment, setActiveAlignment, posterSize }) => {
  const handleActiveAlignment = (value: string): void => {
    setActiveAlignment(value);
  };
  return (
    <div
      className={`
      bg-white h-12 shadow-xl shadow-gray-600 flex items-center justify-between px-5 scale-[65%] absolute bottom-2
      xs:scale-[80%]
      msm:scale-[85%]
      sm:scale-[95%]
      md:scale-[80%]
      lg:scale-[90%]
      sxl:scale-[95%]
      2xl:scale-[100%]
      `}
      style={{
        width:
          posterSize.value === '12 X 18'
            ? '430px'
            : posterSize.value === '16 X 20'
            ? '440px'
            : posterSize.value === '18 X 24'
            ? '450px'
            : posterSize.value === '20 X 28'
            ? '460px'
            : posterSize.value === '24 X 36'
            ? '470px'
            : posterSize.value === '28 X 40'
            ? '480px'
            : '430px',
      }}
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
