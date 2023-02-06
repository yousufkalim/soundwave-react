import React, { FC } from 'react';
interface PosterSizeProps {
  posterSize: string;
  setPosterSize: (value: string) => void;
}

const PosterSize: FC<PosterSizeProps> = ({ posterSize, setPosterSize }) => {
  const handleSelectPosterSize = (targetPosterSize: string): void => {
    setPosterSize(targetPosterSize);
  };

  return (
    <div className="flex items-center justify-start gap-2 w-[45rem]">
      <div
        onClick={() => {
          handleSelectPosterSize('1218');
        }}
        className={
          posterSize === '1218'
            ? 'bg-white border-black border-[3px] w-[5rem] h-[7rem] flex items-center justify-center flex-col rounded-xl text-black text-[11px] cursor-pointer'
            : 'bg-white border-[3px] w-[5rem] h-[7rem] flex items-center justify-center flex-col rounded-xl text-[#919B9B] text-[11px] cursor-pointer'
        }
      >
        <span>&quot;12 X 18&quot;</span>
        <span>Frame Size</span>
      </div>

      <div
        onClick={() => {
          handleSelectPosterSize('1620');
        }}
        className={
          posterSize === '1620'
            ? 'bg-white border-black border-[3px] w-[6rem] h-[8rem] flex items-center justify-center flex-col rounded-xl text-black text-[11px] cursor-pointer'
            : 'bg-white border-[3px] w-[6rem] h-[8rem] flex items-center justify-center flex-col rounded-xl text-[#919B9B] text-[11px] cursor-pointer'
        }
      >
        <span>&quot;16 X 20&quot;</span>
        <span>Frame Size</span>
      </div>

      <div
        onClick={() => {
          handleSelectPosterSize('1824');
        }}
        className={
          posterSize === '1824'
            ? 'bg-white border-black border-[3px] w-[7rem] h-[9rem] flex items-center justify-center flex-col rounded-xl text-black text-[11px] cursor-pointer'
            : 'bg-white border-[3px] w-[7rem] h-[9rem] flex items-center justify-center flex-col rounded-xl text-[#919B9B] text-[11px] cursor-pointer'
        }
      >
        <span>&quot;18 X 24&quot;</span>
        <span>Frame Size</span>
      </div>

      <div
        onClick={() => {
          handleSelectPosterSize('2028');
        }}
        className={
          posterSize === '2028'
            ? 'bg-white border-black border-[3px] w-[8rem] h-[10rem] flex items-center justify-center flex-col rounded-xl text-black text-[11px] cursor-pointer'
            : 'bg-white border-[3px] w-[8rem] h-[10rem] flex items-center justify-center flex-col rounded-xl text-[#919B9B] text-[11px] cursor-pointer'
        }
      >
        <span>&quot;20 X 28&quot;</span>
        <span>Frame Size</span>
      </div>

      <div
        onClick={() => {
          handleSelectPosterSize('2436');
        }}
        className={
          posterSize === '2436'
            ? 'bg-white border-black border-[3px] w-[9rem] h-[11rem] flex items-center justify-center flex-col rounded-xl text-black text-[11px] cursor-pointer'
            : 'bg-white border-[3px] w-[9rem] h-[11rem] flex items-center justify-center flex-col rounded-xl text-[#919B9B] text-[11px] cursor-pointer'
        }
      >
        <span>&quot;24 X 36&quot;</span>
        <span>Frame Size</span>
      </div>

      <div
        onClick={() => {
          handleSelectPosterSize('2840');
        }}
        className={
          posterSize === '2840'
            ? 'bg-white border-black border-[3px] w-[10rem] h-[12rem] flex items-center justify-center flex-col rounded-xl text-black text-[11px] cursor-pointer'
            : 'bg-white border-[3px] w-[10rem] h-[12rem] flex items-center justify-center flex-col rounded-xl text-[#919B9B] text-[11px] cursor-pointer'
        }
      >
        <span>&quot;28 X 40&quot;</span>
        <span>Frame Size</span>
      </div>
    </div>
  );
};

export default PosterSize;
