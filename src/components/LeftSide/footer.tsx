import React, { FC } from 'react';
import { ReactComponent as Left } from '../../assets/LeftSidePosterFooter/LeftPosterInactive.svg';
import { ReactComponent as Centered } from '../../assets/LeftSidePosterFooter/CenteredPosterInactive.svg';
import { ReactComponent as Right } from '../../assets/LeftSidePosterFooter/RightPosterInactive.svg';
import { IPosterSize } from '../../types/index';
import { posterMainFooterDiv } from '../../utils/data';
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
      className={posterMainFooterDiv[posterSize.value]}
      style={{
        width: '800px',
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
