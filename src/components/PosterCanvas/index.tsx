import React, { FC } from 'react';

interface PosterCanvasProps {
  posterType: string;
  handleSelectedCanvas: (value: string) => void;
}

const PosterCanvas: FC<PosterCanvasProps> = ({ posterType, handleSelectedCanvas }) => {
  return (
    <>
      <div className="flex items-center justify-start gap-4 my-2">
        <div
          onClick={() => {
            handleSelectedCanvas('Thin Canvas');
          }}
          className={
            posterType === 'Thin Canvas'
              ? 'border-black border-[3px] rounded-lg cursor-pointer bg-white px-4 py-2 flex flex-col'
              : 'border-gray-300 border-2 rounded-lg cursor-pointer bg-white px-4 py-2 flex flex-col'
          }
        >
          <div className="border-[2px] border-black px-2 py-5">
            <span className="text-[.6rem] font-semibold">2-3 CM</span>
          </div>
          <span className="text-center text-[12px]">Thin</span>
        </div>
        <div
          onClick={() => {
            handleSelectedCanvas('Thick Canvas');
          }}
          className={
            posterType === 'Thick Canvas'
              ? 'border-black border-[3px] rounded-lg cursor-pointer bg-white px-4 py-2 flex flex-col'
              : 'border-gray-300 border-2 rounded-lg cursor-pointer bg-white px-4 py-2 flex flex-col'
          }
        >
          <div className="border-[2px] border-black px-3 py-5">
            <span className="text-[.7rem] font-semibold">4 CM</span>
          </div>
          <span className="text-center text-[12px]">Thick</span>
        </div>
      </div>
    </>
  );
};

export default PosterCanvas;
