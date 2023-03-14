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
      className={
        posterSize.value === '12 X 18'
          ? `bg-white h-[9%] shadow-xl shadow-gray-600 flex items-center justify-between px-5 scale-[38%] absolute bottom-16 xs:scale-[40%] msm:scale-[40%] sm:scale-[40%] md:scale-[50%] lg:scale-[50%] sxl:scale-[55%] 2xl:scale-[55%]`
          : posterSize.value === '16 X 20'
          ? `bg-white h-[9%] shadow-xl shadow-gray-600 flex items-center justify-between px-5 absolute bottom-16  scale-[28%] xs:scale-[35%] msm:scale-[35%] sm:scale-[35%] md:scale-[40%] lg:scale-[45%] sxl:scale-[45%] 2xl:scale-[45%]`
          : posterSize.value === '18 X 24'
          ? `bg-white h-[9%] shadow-xl shadow-gray-600 flex items-center justify-between px-5 absolute bottom-16 scale-[25%] xs:scale-[30%] msm:scale-[30%] sm:scale-[30%] md:scale-[35%] lg:scale-[35%] sxl:scale-[35%] 2xl:scale-[40%]`
          : posterSize.value === '20 X 28'
          ? `bg-white h-[9%] shadow-xl shadow-gray-600 flex items-center justify-between px-5 absolute bottom-16 scale-[23%] xs:scale-[25%] msm:scale-[25%] sm:scale-[25%] md:scale-[30%] lg:scale-[30%] sxl:scale-[30%] 2xl:scale-[35%]`
          : posterSize.value === '24 X 36'
          ? `bg-white h-[9%] shadow-xl shadow-gray-600 flex items-center justify-between px-5 absolute bottom-16 scale-[17%] xs:scale-[20%] msm:scale-[20%] sm:scale-[17%] md:scale-[25%] lg:scale-[25%] sxl:scale-[25%] 2xl:scale-[25%]`
          : posterSize.value === '28 X 40'
          ? `bg-white h-[9%] shadow-xl shadow-gray-600 flex items-center justify-between px-5 absolute bottom-16 scale-[18%] xs:scale-[20%] msm:scale-[20%] sm:scale-[20%] md:scale-[25%] lg:scale-[25%] sxl:scale-[25%] 2xl:scale-[23%]`
          : `bg-white h-[9%] shadow-xl shadow-gray-600 flex items-center justify-between px-5 absolute bottom-16 scale-[40%] xs:scale-[40%] msm:scale-[40%] sm:scale-[40%] md:scale-[50%] lg:scale-[50%] sxl:scale-[55%] 2xl:scale-[55%]`
      }
      style={{
        width:
          posterSize.value === '12 X 18'
            ? '864px'
            : posterSize.value === '16 X 20'
            ? '1152px'
            : posterSize.value === '18 X 24'
            ? '1296px'
            : posterSize.value === '20 X 28'
            ? '1440px'
            : posterSize.value === '24 X 36'
            ? '1728px'
            : posterSize.value === '28 X 40'
            ? '2016px'
            : '864px',
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
