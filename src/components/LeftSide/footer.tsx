import React, { FC } from 'react';
import { ReactComponent as Left } from '../../assets/LeftSidePosterFooter/LeftPosterInactive.svg';
import { ReactComponent as Centered } from '../../assets/LeftSidePosterFooter/CenteredPosterInactive.svg';
import { ReactComponent as Right } from '../../assets/LeftSidePosterFooter/RightPosterInactive.svg';
import { ReactComponent as ActiveRight } from '../../assets/LeftSidePosterFooter/RightPosterActive.svg';
import { ReactComponent as ActiveCenter } from '../../assets/LeftSidePosterFooter/CenteredPosterActive.svg';
import { ReactComponent as ActiveLeft } from '../../assets/LeftSidePosterFooter/LeftPosterActive.svg';

interface FooterProps {
  activeAlignment: string;
  setActiveAlignment: (value: string) => void;
}
const Footer: FC<FooterProps> = ({ activeAlignment, setActiveAlignment }) => {
  const handleActiveAlignment = (value: string): void => {
    setActiveAlignment(value);
  };
  return (
    <div className="bg-white w-[48%] h-12 shadow-xl shadow-[#BAB8B8] flex items-center justify-between px-5">
      <div
        className={
          activeAlignment === 'text-left'
            ? 'bg-red-100 p-1 rounded-md cursor-pointer'
            : 'hover:bg-[#f8f8f8] p-1 rounded-md cursor-pointer'
        }
        onClick={() => {
          handleActiveAlignment('text-left');
        }}
      >
        {activeAlignment === 'text-left' ? <ActiveLeft /> : <Left />}
      </div>
      <div
        className={
          activeAlignment === 'text-center'
            ? 'bg-red-100 p-1 rounded-md cursor-pointer'
            : 'hover:bg-[#f8f8f8] p-1 rounded-md cursor-pointer'
        }
        onClick={() => {
          handleActiveAlignment('text-center');
        }}
      >
        {activeAlignment === 'text-center' ? <ActiveCenter /> : <Centered />}
      </div>
      <div
        className={
          activeAlignment === 'text-right'
            ? 'bg-red-100 p-1 rounded-md cursor-pointer'
            : 'hover:bg-[#f8f8f8] p-1 rounded-md cursor-pointer'
        }
        onClick={() => {
          handleActiveAlignment('text-right');
        }}
      >
        {activeAlignment === 'text-right' ? <ActiveRight /> : <Right />}
      </div>
    </div>
  );
};

export default Footer;
