import React, { FC } from 'react';
import thinCanvas from '../../assets/thinCanvas.jpg';
import thickCanvas from '../../assets/thickCanvas.jpg';

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
              ? 'border-[3px] gap-5 border-black w-[45%] flex items-center justify-center rounded-lg py-1 cursor-pointer'
              : 'border-[2px] gap-5 w-[45%] flex items-center justify-center rounded-lg py-1 cursor-pointer'
          }
        >
          <img src={thinCanvas} className="w-9" alt="" />
          <span className="text-[10px] sm:text-[12px]">{`Thin-wrap 0.75"`}</span>
        </div>
        <div
          onClick={() => {
            handleSelectedCanvas('Thick Canvas');
          }}
          className={
            posterType === 'Thick Canvas'
              ? 'border-[3px] gap-5 border-black w-[45%] flex items-center justify-center rounded-lg py-1 cursor-pointer'
              : 'border-[2px] gap-5 w-[45%] flex items-center justify-center rounded-lg py-1 cursor-pointer'
          }
        >
          <img src={thickCanvas} className="w-9" alt="" />
          <span className="text-[10px] sm:text-[12px]">{`Thick-wrap 1.5"`}</span>
        </div>
      </div>
    </>
  );
};

export default PosterCanvas;
