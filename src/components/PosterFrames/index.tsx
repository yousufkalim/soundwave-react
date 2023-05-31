import React, { FC } from 'react';
import metalFrameIcon from '../../assets/Blackwood.jpg';
import Neturalframe from '../../assets/Naturalwood.jpg';
import Whiteframe from '../../assets/Whitewood.jpg';
// import AluminiumMetal from '../../assets/woodenFrame/aluminiumMetal.svg';
import Blackframe from '../../assets/Metal.jpg';

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
              ? 'border-[3px] border-black w-[32%] flex items-center justify-center rounded-lg py-[0.9rem] sm:py-3 cursor-pointer'
              : 'border-[2px] w-[32%] flex items-center justify-center rounded-lg py-[0.9rem] sm:py-3 cursor-pointer'
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
              ? 'border-[3px] border-black w-[32%] flex items-center justify-around rounded-lg py-1 cursor-pointer'
              : 'border-[2px] w-[32%] flex items-center justify-around rounded-lg py-1 cursor-pointer'
          }
        >
          <img src={Neturalframe} className="w-9" alt="" />
          <span className="text-[10px] sm:text-[12px]">Wooden</span>
        </div>
        <div
          onClick={() => {
            handleSelectedFrameType('Metal');
          }}
          className={
            frame === 'Metal'
              ? 'border-[3px] border-black w-[32%] flex items-center justify-around rounded-lg py-1 cursor-pointer'
              : 'border-[2px] w-[32%] flex items-center justify-around rounded-lg py-1 cursor-pointer'
          }
        >
          <img src={Blackframe} className="w-9" alt="" />
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
                ? 'border-black border-[3px] flex items-center w-auto xmd:w-[30%] rounded-lg cursor-pointer bg-white px-[0.3rem] py-2 flex flex-col'
                : 'border-gray-300 border-2 flex items-center w-auto xmd:w-[30%] rounded-lg cursor-pointer bg-white px-[0.3rem] py-2 flex flex-col'
            }
          >
            <img src={metalFrameIcon} className="w-[70%] xmd:w-auto" />
            <span className="text-center text-[12px]">Black</span>
          </div>
          <div
            onClick={() => {
              handleSelectedFrame('Natural Wooden Frame');
            }}
            className={
              posterType === 'Natural Wooden Frame'
                ? 'border-black border-[3px] flex items-center w-auto xmd:w-[30%] rounded-lg cursor-pointer bg-white px-[0.3rem] py-2 flex flex-col'
                : 'border-gray-300 border-2 flex items-center w-auto xmd:w-[30%] rounded-lg cursor-pointer bg-white px-[0.3rem] py-2 flex flex-col'
            }
          >
            <img src={Neturalframe} className="w-[70%] xmd:w-auto" />
            <span className="text-center text-[12px]">Natural</span>
          </div>
          <div
            onClick={() => {
              handleSelectedFrame('White Wooden Frame');
            }}
            className={
              posterType === 'White Wooden Frame'
                ? 'border-black border-[3px] flex items-center w-auto xmd:w-[30%] rounded-lg cursor-pointer bg-white px-[0.3rem] py-2 flex flex-col'
                : 'border-gray-300 border-2 flex items-center w-auto xmd:w-[30%] rounded-lg cursor-pointer bg-white px-[0.3rem] py-2 flex flex-col'
            }
          >
            <img src={Whiteframe} className="w-[70%] xmd:w-auto" />
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
                  ? 'border-black border-[3px] flex items-center w-[30%] xmd:w-[30%] rounded-lg cursor-pointer bg-white px-[0.3rem] py-2 flex flex-col'
                  : 'border-gray-300 border-2 flex items-center w-[30%] xmd:w-[30%] rounded-lg cursor-pointer bg-white px-[0.3rem] py-2 flex flex-col'
              }
            >
              <img src={Blackframe} className="w-[70%] xmd:w-auto" />
              <span className="text-center text-[12px]">Black</span>
            </div>
          </div>
        )
      )}
    </>
  );
};

export default PosterFrame;
