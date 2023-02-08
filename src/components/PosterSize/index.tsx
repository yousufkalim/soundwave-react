/* eslint-disable array-callback-return */
import React, { FC, useEffect, useRef } from 'react';

interface PosterSizeProps {
  posterSize: string;
  setPosterSize: (value: string) => void;
  setActiveIndex: (value: number) => void;
  frameSizeArr: string[];
  activeIndex: number;
  measurement: string;
}

const PosterSize: FC<PosterSizeProps> = ({
  posterSize,
  setPosterSize,
  setActiveIndex,
  frameSizeArr,
  activeIndex,
  measurement,
}) => {
  const itemRef = useRef<any>({});

  const handleSelectPosterSize = (targetPosterSize: string): void => {
    setPosterSize(targetPosterSize);
    frameSizeArr.find((item, index) => {
      if (item === targetPosterSize) {
        setActiveIndex(index);
      }
    });
  };

  useEffect(() => {
    if (itemRef.current) {
      itemRef.current[activeIndex]?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [activeIndex, itemRef.current]);

  const FrameArray = [
    {
      id: '1218',
      activeClass:
        'bg-white border-black border-[3px] w-[5rem] h-[7rem] flex items-center justify-center flex-col rounded-xl text-black text-[11px] cursor-pointer',
      notActiveClass:
        'bg-white border-[3px] w-[5rem] h-[7rem] flex items-center justify-center flex-col rounded-xl text-[#919B9B] text-[11px] cursor-pointer',
      frameSizeInch: '12 X 18',
      frameSizeCentimeter: '30 X 45',
    },
    {
      id: '1620',
      activeClass:
        'bg-white border-black border-[3px] w-[6rem] h-[8rem] flex items-center justify-center flex-col rounded-xl text-black text-[11px] cursor-pointer',
      notActiveClass:
        'bg-white border-[3px] w-[6rem] h-[8rem] flex items-center justify-center flex-col rounded-xl text-[#919B9B] text-[11px] cursor-pointer',
      frameSizeInch: '16 X 20',
      frameSizeCentimeter: '40 X 50',
    },
    {
      id: '1824',
      activeClass:
        'bg-white border-black border-[3px] w-[7rem] h-[9rem] flex items-center justify-center flex-col rounded-xl text-black text-[11px] cursor-pointer',
      notActiveClass:
        'bg-white border-[3px] w-[7rem] h-[9rem] flex items-center justify-center flex-col rounded-xl text-[#919B9B] text-[11px] cursor-pointer',
      frameSizeInch: '18 X 24',
      frameSizeCentimeter: '45 X 60',
    },
    {
      id: '2028',
      activeClass:
        'bg-white border-black border-[3px] w-[8rem] h-[10rem] flex items-center justify-center flex-col rounded-xl text-black text-[11px] cursor-pointer',
      notActiveClass:
        'bg-white border-[3px] w-[8rem] h-[10rem] flex items-center justify-center flex-col rounded-xl text-[#919B9B] text-[11px] cursor-pointer',
      frameSizeInch: '20 X 28',
      frameSizeCentimeter: '50 X 70',
    },
    {
      id: '2436',
      activeClass:
        'bg-white border-black border-[3px] w-[9rem] h-[11rem] flex items-center justify-center flex-col rounded-xl text-black text-[11px] cursor-pointer',
      notActiveClass:
        'bg-white border-[3px] w-[9rem] h-[11rem] flex items-center justify-center flex-col rounded-xl text-[#919B9B] text-[11px] cursor-pointer',
      frameSizeInch: '24 X 36',
      frameSizeCentimeter: '60 X 90',
    },
    {
      id: '2840',
      activeClass:
        'bg-white border-black border-[3px] w-[10rem] h-[12rem] flex items-center justify-center flex-col rounded-xl text-black text-[11px] cursor-pointer',
      notActiveClass:
        'bg-white border-[3px] w-[10rem] h-[12rem] flex items-center justify-center flex-col rounded-xl text-[#919B9B] text-[11px] cursor-pointer',
      frameSizeInch: '28 X 40',
      frameSizeCentimeter: '70 X 100',
    },
  ];

  return (
    <div className="flex items-center justify-start gap-2 w-[45rem] font-[julee]">
      {FrameArray.map((item, index) => (
        <div
          ref={(c) => (itemRef.current[index] = c)}
          key={index}
          onClick={() => {
            handleSelectPosterSize(item.id);
          }}
          className={posterSize === item.id ? item.activeClass : item.notActiveClass}
        >
          <span>
            {measurement === 'inch' ? `${item.frameSizeInch}"` : `${item.frameSizeCentimeter}cm`}
          </span>
          <span>{measurement === 'inch' ? 'Inch' : 'Centimeter'}</span>
        </div>
      ))}
    </div>
  );
};

export default PosterSize;
