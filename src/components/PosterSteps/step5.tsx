/* eslint-disable array-callback-return */
import React, { FC, useState } from 'react';
import PosterSizeBox from '../PosterSize/index';
import { ReactComponent as BackArrow } from '../../assets/SimpleBackArrow.svg';
import { ReactComponent as ForwardArrow } from '../../assets/SimpleForwardArrow.svg';
import { ReactComponent as BoldBackArrow } from '../../assets/boldBackArrow.svg';
import { ReactComponent as BoldForwardArrow } from '../../assets/boldForwardArrow.svg';
import { IPosterSize } from '../../types/index';

interface Step5Props {
  posterSize: IPosterSize;
  setPosterSize: ({ value, unit }: IPosterSize) => void;
}

const step5: FC<Step5Props> = ({ posterSize, setPosterSize }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [measurement, setMeasurement] = useState<string>('inch');
  const frameSizeArr = ['12 X 18', '16 X 20', '18 X 24', '20 X 28', '24 X 36', '28 X 40'];

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
      <div className=" flex items-center justify-between">
        <div className="flex items-center justify-start gap-3">
          <span
            onClick={() => {
              handleMeasurement('inch');
            }}
            className={
              measurement === 'inch'
                ? 'text-[12px] border-b-[2px] text-[#47B45F] border-[#47B45F] pb-1 font-semibold'
                : 'text-[12px] border-b-[2px] border-gray-400 pb-1 font-semibold cursor-pointer'
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
                ? 'text-[12px] border-b-[2px] text-[#47B45F] border-[#47B45F] pb-1 font-semibold'
                : 'text-[12px] border-b-[2px] border-gray-400 pb-1 font-semibold cursor-pointer'
            }
          >
            Centimeter
          </span>
        </div>
        <div className="flex items-center justify-center gap-3">
          <button className="text-[12px]" disabled={activeIndex === 0} onClick={handlePrev}>
            {activeIndex === 0 ? <BackArrow /> : <BoldBackArrow />}
          </button>
          <button
            className="text-[12px]"
            disabled={activeIndex === frameSizeArr.length - 1}
            onClick={handleNext}
          >
            {activeIndex === frameSizeArr.length - 1 ? <ForwardArrow /> : <BoldForwardArrow />}
          </button>
        </div>
      </div>
      <div className="overflow-x-scroll custom_scroll">
        <PosterSizeBox
          measurement={measurement}
          posterSize={posterSize}
          setPosterSize={setPosterSize}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          frameSizeArr={frameSizeArr}
        />
      </div>
    </>
  );
};

export default step5;
