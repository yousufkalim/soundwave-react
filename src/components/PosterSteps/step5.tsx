/* eslint-disable array-callback-return */
import React, { FC, useState } from 'react';
import Tab from '../Tab/index';
import PosterSizeBox from '../PosterSize/index';
import { ReactComponent as BackArrow } from '../../assets/SimpleBackArrow.svg';
import { ReactComponent as ForwardArrow } from '../../assets/SimpleForwardArrow.svg';
import { ReactComponent as BoldBackArrow } from '../../assets/boldBackArrow.svg';
import { ReactComponent as BoldForwardArrow } from '../../assets/boldForwardArrow.svg';
import { IPosterSize } from '../../types/index';
interface Step5Props {
  openSize: boolean;
  setOpenDescripition: (value: boolean) => void;
  setOpenTheme: (value: boolean) => void;
  setOpenSize: (value: boolean) => void;
  setOpenStyles: (value: boolean) => void;
  posterSize: IPosterSize;
  setPosterSize: ({ value, unit }: IPosterSize) => void;
  activeStep: number;
  setActiveStep: (value: number) => void;
}

const step5: FC<Step5Props> = ({
  openSize,
  setOpenSize,
  setOpenStyles,
  setOpenDescripition,
  setOpenTheme,
  posterSize,
  setPosterSize,
  activeStep,
  setActiveStep,
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [measurement, setMeasurement] = useState<string>('inch');
  const frameSizeArr = ['1218', '1620', '1824', '2028', '2436', '2840'];

  const handleIconClick = (): void => {
    if (activeStep >= 5) {
      setOpenSize(!openSize);
      setOpenStyles(false);
      setOpenDescripition(false);
      setOpenTheme(false);
      setActiveStep(6);
    } else {
      setOpenSize(false);
      setOpenStyles(false);
      setOpenDescripition(false);
      setOpenTheme(false);
    }
  };

  const handleNext = (): void => {
    setActiveIndex((prev) => {
      const nextIndex = (prev + 1) % frameSizeArr.length;
      const item = frameSizeArr[nextIndex];
      setPosterSize({ value: item, unit: measurement });
      return nextIndex;
    });
  };

  const handlePrev = (): void => {
    setActiveIndex((prev) => {
      let nextIndex = prev - 1;
      if (nextIndex < 0) {
        nextIndex = frameSizeArr.length - 1;
      }
      const item = frameSizeArr[nextIndex];
      setPosterSize({ value: item, unit: measurement });
      return nextIndex;
    });
  };

  const handleMeasurement = (targetMeasurement: string): void => {
    setMeasurement(targetMeasurement);
  };

  return (
    <>
      <Tab open={openSize} onClick={handleIconClick} heading={'Size'} active={activeStep >= 5} />
      <div className={openSize ? 'block w-full' : 'hidden'}>
        <div className=" flex items-center justify-between">
          <div className="flex items-center justify-start gap-3">
            <span
              onClick={() => {
                handleMeasurement('inch');
              }}
              className={
                measurement === 'inch'
                  ? 'text-sm border-b-[2px] text-[#47B45F] border-[#47B45F] pb-1 font-semibold'
                  : 'text-sm border-b-[2px] border-gray-400 pb-1 font-semibold cursor-pointer'
              }
            >
              Inch
            </span>
            <span
              onClick={() => {
                handleMeasurement('centimeter');
              }}
              className={
                measurement === 'centimeter'
                  ? 'text-sm border-b-[2px] text-[#47B45F] border-[#47B45F] pb-1 font-semibold'
                  : 'text-sm border-b-[2px] border-gray-400 pb-1 font-semibold cursor-pointer'
              }
            >
              Centimeter
            </span>
          </div>
          <div className="flex items-center justify-center gap-3">
            <button className="text-sm" disabled={activeIndex === 0} onClick={handlePrev}>
              {activeIndex === 0 ? <BackArrow /> : <BoldBackArrow />}
            </button>
            <button
              className="text-sm"
              disabled={activeIndex === frameSizeArr.length - 1}
              onClick={handleNext}
            >
              {activeIndex === frameSizeArr.length - 1 ? <ForwardArrow /> : <BoldForwardArrow />}
            </button>
          </div>
        </div>
        <div className="overflow-x-scroll">
          <PosterSizeBox
            measurement={measurement}
            posterSize={posterSize}
            setPosterSize={setPosterSize}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            frameSizeArr={frameSizeArr}
          />
        </div>
      </div>
    </>
  );
};

export default step5;
