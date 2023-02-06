import React, { FC } from 'react';

interface PosterCanvasProps {
  selectedCanvas: string;
  handleSelectedCanvas: (value: string) => void;
}

const PosterCanvas: FC<PosterCanvasProps> = ({ selectedCanvas, handleSelectedCanvas }) => {
  return (
    <>
      <div className="flex items-center justify-start gap-4 my-2">
        <div
          onClick={() => {
            handleSelectedCanvas('Thin');
          }}
          className={
            selectedCanvas === 'Thin'
              ? 'border-black border-[3px] rounded-lg cursor-pointer bg-white px-5 py-4 flex flex-col'
              : 'border-gray-300 border-2 rounded-lg cursor-pointer bg-white px-5 py-4 flex flex-col'
          }
        >
          <div className="border-[2px] border-black px-2 py-5">
            <span className="text-[.7rem] font-semibold">2-3 CM</span>
          </div>
          <span className="text-center text-[.8rem]">Thin</span>
        </div>
        <div
          onClick={() => {
            handleSelectedCanvas('Think');
          }}
          className={
            selectedCanvas === 'Think'
              ? 'border-black border-[3px] rounded-lg cursor-pointer bg-white px-5 py-4 flex flex-col'
              : 'border-gray-300 border-2 rounded-lg cursor-pointer bg-white px-5 py-4 flex flex-col'
          }
        >
          <div className="border-[2px] border-black px-3 py-5">
            <span className="text-[.7rem] font-semibold">4 CM</span>
          </div>
          <span className="text-center text-[.8rem]">Think</span>
        </div>
      </div>
    </>
  );
};

export default PosterCanvas;
