import React, { FC } from 'react';
interface PosterSizeProps {
  posterSize: string;
  setPosterSize: (value: string) => void;
}

const PosterSize: FC<PosterSizeProps> = ({ posterSize, setPosterSize }) => {
  const handlePoster1Click = (): void => {
    setPosterSize('1620');
  };
  const handlePoster2Click = (): void => {
    setPosterSize('1824');
  };
  return (
    <div className="flex items-center justify-center gap-7">
      <div
        className={
          posterSize === '1620'
            ? 'bg-gradient-to-r from-[#FC3853] to-[#A72EC9] p-[3px] rounded-xl cursor-pointer'
            : 'bg-[#E1E1E1] p-[3px] rounded-xl cursor-pointer'
        }
        onClick={handlePoster1Click}
      >
        <div
          className={
            posterSize === '1620'
              ? 'bg-red-100 w-[7rem] h-[9rem] flex items-center justify-center flex-col rounded-lg'
              : 'bg-white w-[7rem] h-[9rem] flex items-center justify-center flex-col rounded-lg'
          }
        >
          <span
            className={
              posterSize === '1620'
                ? 'text-sm tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#FC3853] to-[#A72EC9]'
                : 'text-sm tracking-tight text-transparent bg-clip-text text-[#919B9B]'
            }
          >
            &quot;16 X 20&quot;
          </span>
          <span
            className={
              posterSize === '1620'
                ? 'text-sm tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#FC3853] to-[#A72EC9]'
                : 'text-sm tracking-tight text-transparent bg-clip-text text-[#919B9B]'
            }
          >
            Frame Size
          </span>
        </div>
      </div>
      <div
        className={
          posterSize === '1824'
            ? 'bg-gradient-to-r from-[#FC3853] to-[#A72EC9] p-[3px] rounded-xl cursor-pointer'
            : 'bg-[#E1E1E1] p-[3px] rounded-xl cursor-pointer'
        }
        onClick={handlePoster2Click}
      >
        <div
          className={
            posterSize === '1824'
              ? 'bg-red-100 w-[9rem] h-[11rem] flex items-center justify-center flex-col rounded-lg'
              : 'bg-white w-[9rem] h-[11rem] flex items-center justify-center flex-col rounded-lg'
          }
        >
          <span
            className={
              posterSize === '1824'
                ? 'text-sm tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#FC3853] to-[#A72EC9]'
                : 'text-sm tracking-tight text-transparent bg-clip-text text-[#919B9B]'
            }
          >
            &quot;18 X 24&quot;
          </span>
          <span
            className={
              posterSize === '1824'
                ? 'text-sm tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#FC3853] to-[#A72EC9]'
                : 'text-sm tracking-tight text-transparent bg-clip-text text-[#919B9B]'
            }
          >
            Frame Size
          </span>
        </div>
      </div>
    </div>
  );
};

export default PosterSize;
