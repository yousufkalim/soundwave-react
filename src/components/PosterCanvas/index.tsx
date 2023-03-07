import React, { FC } from 'react';
import thinCanvas from '../../assets/thinCanvas.svg';
import thickCanvas from '../../assets/thickCanvas.svg';

interface PosterCanvasProps {
  posterType: string;
  handleSelectedCanvas: (value: string) => void;
}

const PosterCanvas: FC<PosterCanvasProps> = ({ posterType, handleSelectedCanvas }) => {
  return (
    <>
      <div className="flex items-center md:justify-start gap-4 my-2 xs:justify-center justify-center">
        <div
          onClick={() => {
            handleSelectedCanvas('Thin Canvas');
          }}
          className={
            posterType === 'Thin Canvas'
              ? 'border-[3px] border-black w-[40%] flex items-center justify-center rounded-lg py-1 cursor-pointer'
              : 'border-[2px] w-[40%] flex items-center justify-center rounded-lg py-1 cursor-pointer'
          }
        >
          <img src={thinCanvas} className="w-9 sm:w-12" alt="" />
          <span className="text-[10px] sm:text-[12px]">{`Thin-wrap 0.75"`}</span>
        </div>
        <div
          onClick={() => {
            handleSelectedCanvas('Thick Canvas');
          }}
          className={
            posterType === 'Thick Canvas'
              ? 'border-[3px] border-black w-[40%] flex items-center justify-center rounded-lg py-1 cursor-pointer'
              : 'border-[2px] w-[40%] flex items-center justify-center rounded-lg py-1 cursor-pointer'
          }
        >
          <img src={thickCanvas} className="w-9 sm:w-12" alt="" />
          <span className="text-[10px] sm:text-[12px]">{`Thick-wrap 1.5"`}</span>
        </div>
      </div>
    </>
  );
};

export default PosterCanvas;
