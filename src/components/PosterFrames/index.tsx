import React, { FC, useState } from 'react';
import Blackframe from '../../assets/woodenFrame/woodenBlack.svg';
import Neturalframe from '../../assets/woodenFrame/woodenNetural.svg';
import Whiteframe from '../../assets/woodenFrame/woodenWhite.svg';
import AluminiumMetal from '../../assets/woodenFrame/aluminiumMetal.svg';
import woodenFrameIcon from '../../assets/woodenFrameIcon.svg';
import metalFrameIcon from '../../assets/metalFrameIcon.svg';

interface PosterFrameProps {
  selectedFrame: string;
  handleSelectedFrame: (value: string) => void;
}

const PosterFrame: FC<PosterFrameProps> = ({ selectedFrame, handleSelectedFrame }) => {
  const [frameType, setFrameTpye] = useState<string>('noframe');

  const handleSelectedFrameType = (targetFrameType: string): void => {
    setFrameTpye(targetFrameType);
  };
  return (
    <>
      <div className="flex items-center justify-between">
        <div
          onClick={() => {
            handleSelectedFrameType('noframe');
          }}
          className={
            frameType === 'noframe'
              ? 'border-[3px] border-black w-[32%] flex items-center justify-center rounded-lg py-3 cursor-pointer'
              : 'border-[2px] w-[32%] flex items-center justify-center rounded-lg py-3 cursor-pointer'
          }
        >
          <span className="text-sm">No Frame</span>
        </div>
        <div
          onClick={() => {
            handleSelectedFrameType('wooden');
          }}
          className={
            frameType === 'wooden'
              ? 'border-[3px] border-black w-[32%] flex items-center justify-center rounded-lg py-1 cursor-pointer'
              : 'border-[2px] w-[32%] flex items-center justify-center rounded-lg py-1 cursor-pointer'
          }
        >
          <img src={woodenFrameIcon} alt="" />
          <span className="text-sm">Wooden</span>
        </div>
        <div
          onClick={() => {
            handleSelectedFrameType('metal');
          }}
          className={
            frameType === 'metal'
              ? 'border-[3px] border-black w-[32%] flex items-center justify-center rounded-lg py-1 cursor-pointer'
              : 'border-[2px] w-[32%] flex items-center justify-center rounded-lg py-1 cursor-pointer'
          }
        >
          <img src={metalFrameIcon} alt="" />
          <span className="text-sm">Metal</span>
        </div>
      </div>
      {frameType === 'noframe' ? (
        ''
      ) : frameType === 'wooden' ? (
        <div className="flex items-center justify-start gap-4 my-2">
          <div
            onClick={() => {
              handleSelectedFrame('woodenblack');
            }}
            className={
              selectedFrame === 'woodenblack'
                ? 'border-black border-[3px] rounded-lg cursor-pointer bg-white px-5 py-3 flex flex-col'
                : 'border-gray-300 border-2 rounded-lg cursor-pointer bg-white px-5 py-3 flex flex-col'
            }
          >
            <img src={Blackframe} />
            <span className="text-center text-sm">Black</span>
          </div>
          <div
            onClick={() => {
              handleSelectedFrame('woodenNuteral');
            }}
            className={
              selectedFrame === 'woodenNuteral'
                ? 'border-black border-[3px] rounded-lg cursor-pointer bg-white px-5 py-3 flex flex-col'
                : 'border-gray-300 border-2 rounded-lg cursor-pointer bg-white px-5 py-3 flex flex-col'
            }
          >
            <img src={Neturalframe} />
            <span className="text-center text-sm">Netural</span>
          </div>
          <div
            onClick={() => {
              handleSelectedFrame('woodenWhite');
            }}
            className={
              selectedFrame === 'woodenWhite'
                ? 'border-black border-[3px] rounded-lg cursor-pointer bg-white px-5 py-3 flex flex-col'
                : 'border-gray-300 border-2 rounded-lg cursor-pointer bg-white px-5 py-3 flex flex-col'
            }
          >
            <img src={Whiteframe} />
            <span className="text-center text-sm">White</span>
          </div>
        </div>
      ) : (
        frameType === 'metal' && (
          <div className="flex items-center justify-start gap-4 my-2">
            <div
              onClick={() => {
                handleSelectedFrame('aluminiumMetal');
              }}
              className={
                selectedFrame === 'aluminiumMetal'
                  ? 'border-black border-[3px] rounded-lg cursor-pointer bg-white px-5 py-3 flex flex-col'
                  : 'border-gray-300 border-2 rounded-lg cursor-pointer bg-white px-5 py-3 flex flex-col'
              }
            >
              <img src={AluminiumMetal} />
              <span className="text-center text-sm">Black</span>
            </div>
          </div>
        )
      )}
    </>
  );
};

export default PosterFrame;
