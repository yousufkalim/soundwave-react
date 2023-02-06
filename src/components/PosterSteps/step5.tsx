import React, { FC, useState } from 'react';
import Tab from '../Tab/index';
import PosterSizeBox from '../PosterSize/index';
import Tmep from '../Testcomp';
interface Step5Props {
  openSize: boolean;
  setOpenDescripition: (value: boolean) => void;
  setOpenTheme: (value: boolean) => void;
  setOpenSize: (value: boolean) => void;
  setOpenStyles: (value: boolean) => void;
  posterSize: string;
  setPosterSize: (value: string) => void;
}

const step5: FC<Step5Props> = ({
  openSize,
  setOpenSize,
  setOpenStyles,
  setOpenDescripition,
  setOpenTheme,
  posterSize,
  setPosterSize,
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const frameSizeArr = ['1218', '1620', '1824', '2028', '2436', '2840'];

  const handleIconClick = (): void => {
    setOpenSize(!openSize);
    setOpenStyles(false);
    setOpenDescripition(false);
    setOpenTheme(false);
  };

  const handleNext = (): void => {
    setActiveIndex(activeIndex === frameSizeArr.length - 1 ? 0 : activeIndex + 1);
  };

  const handlePrev = (): void => {
    setActiveIndex(activeIndex === 0 ? frameSizeArr.length - 1 : activeIndex - 1);
  };

  return (
    <>
      <Tab open={openSize} onClick={handleIconClick} heading={'Size'} />
      <Tmep />

      <div className={openSize ? 'block w-full' : 'hidden'}>
        <div className=" flex items-center justify-between">
          <div className="flex items-center justify-start gap-3">
            <span className="text-sm border-b-[2px] text-green-500 border-green-400 pb-1 font-semibold cursor-pointer">
              Inch
            </span>
            <span className="text-sm border-b-[2px] border-green-400 pb-1">Centimeter</span>
          </div>
          <div className="flex items-center justify-center gap-3">
            <span className="text-sm" onClick={handlePrev}>
              Back
            </span>
            <span className="text-sm" onClick={handleNext}>
              Next
            </span>
          </div>
        </div>
        <div className="overflow-x-scroll">
          <PosterSizeBox posterSize={posterSize} setPosterSize={setPosterSize} />
        </div>
      </div>
    </>
  );
};

export default step5;
