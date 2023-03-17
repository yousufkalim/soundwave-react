import React, { FC } from 'react';
import Blackframe from '../../assets/woodenFrame/Blackframe.svg';
import Neturalframe from '../../assets/woodenFrame/Neturalframe.svg';
import Whiteframe from '../../assets/woodenFrame/Whiteframe.svg';
// import AluminiumMetal from '../../assets/woodenFrame/aluminiumMetal.svg';
import woodenFrameIcon from '../../assets/woodenFrameIcon.svg';
import metalFrameIcon from '../../assets/metalFrameIcon.svg';

interface PosterFrameProps {
  frame: string;
  setFrame: (value: string) => void;
  posterType: string;
  setPosterType: (value: string) => void;
  selectedSection: string;
}

const PosterFrame: FC<PosterFrameProps> = ({
  frame,
  setFrame,
  posterType,
  setPosterType,
  selectedSection,
}) => {
  const handleSelectedFrameType = (targetFrameType: string): void => {
    setFrame(targetFrameType);
    if (selectedSection) {
      setPosterType('No Frame');
    }
  };

  const handleSelectedFrame = (targetFrame: string): void => {
    setPosterType(targetFrame);
  };
  return (
    <>
      <div className="flex items-center justify-between">
        <div
          onClick={() => {
            handleSelectedFrameType('No Frame');
          }}
          className={
            frame === 'No Frame'
              ? 'border-[3px] border-black w-[32%] flex items-center justify-center rounded-lg py-2 sm:py-3 cursor-pointer'
              : 'border-[2px] w-[32%] flex items-center justify-center rounded-lg py-2 sm:py-3 cursor-pointer'
          }
        >
          <span className="text-[10px] sm:text-[12px]">No Frame</span>
        </div>
        <div
          onClick={() => {
            handleSelectedFrameType('Wooden');
          }}
          className={
            frame === 'Wooden'
              ? 'border-[3px] border-black w-[32%] flex items-center justify-center rounded-lg py-1 cursor-pointer'
              : 'border-[2px] w-[32%] flex items-center justify-center rounded-lg py-1 cursor-pointer'
          }
        >
          <img src={woodenFrameIcon} className="w-9 sm:w-12" alt="" />
          <span className="text-[10px] sm:text-[12px]">Wooden</span>
        </div>
        <div
          onClick={() => {
            handleSelectedFrameType('Metal');
          }}
          className={
            frame === 'Metal'
              ? 'border-[3px] border-black w-[32%] flex items-center justify-center rounded-lg py-1 cursor-pointer'
              : 'border-[2px] w-[32%] flex items-center justify-center rounded-lg py-1 cursor-pointer'
          }
        >
          <img src={metalFrameIcon} className="w-9 sm:w-12" alt="" />
          <span className="text-[10px] sm:text-[12px]">Metal</span>
        </div>
      </div>

      {frame === 'No Frame' ? (
        ''
      ) : frame === 'Wooden' ? (
        <div className="flex items-center justify-start gap-5 my-2">
          <div
            onClick={() => {
              handleSelectedFrame('Black Wooden Frame');
            }}
            className={
              posterType === 'Black Wooden Frame'
                ? 'border-black border-[3px] rounded-lg cursor-pointer bg-white px-4 py-2 flex flex-col'
                : 'border-gray-300 border-2 rounded-lg cursor-pointer bg-white px-4 py-2 flex flex-col'
            }
          >
            <img src={Blackframe} />
            <span className="text-center text-[12px]">Black</span>
          </div>
          <div
            onClick={() => {
              handleSelectedFrame('Nuteral Wooden Frame');
            }}
            className={
              posterType === 'Nuteral Wooden Frame'
                ? 'border-black border-[3px] rounded-lg cursor-pointer bg-white px-4 py-2 flex flex-col'
                : 'border-gray-300 border-2 rounded-lg cursor-pointer bg-white px-4 py-2 flex flex-col'
            }
          >
            <img src={Neturalframe} />
            <span className="text-center text-[12px]">Netural</span>
          </div>
          <div
            onClick={() => {
              handleSelectedFrame('White Wooden Frame');
            }}
            className={
              posterType === 'White Wooden Frame'
                ? 'border-black border-[3px] rounded-lg cursor-pointer bg-white px-4 py-2 flex flex-col'
                : 'border-gray-300 border-2 rounded-lg cursor-pointer bg-white px-4 py-2 flex flex-col'
            }
          >
            <img src={Whiteframe} />
            <span className="text-center text-[12px]">White</span>
          </div>
        </div>
      ) : (
        frame === 'Metal' && (
          <div className="flex items-center justify-start gap-4 my-2">
            <div
              onClick={() => {
                handleSelectedFrame('Black Metal Frame');
              }}
              className={
                posterType === 'Black Metal Frame'
                  ? 'border-black border-[3px] rounded-lg cursor-pointer bg-white px-4 py-2 flex flex-col'
                  : 'border-gray-300 border-2 rounded-lg cursor-pointer bg-white px-4 py-2 flex flex-col'
              }
            >
              <img src={Blackframe} />
              <span className="text-center text-[12px]">Black</span>
            </div>
          </div>
        )
      )}
    </>
  );
};

export default PosterFrame;
