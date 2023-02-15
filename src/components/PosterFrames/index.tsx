import React, { FC } from 'react';
import Blackframe from '../../assets/woodenFrame/woodenBlack.svg';
import Neturalframe from '../../assets/woodenFrame/woodenNetural.svg';
import Whiteframe from '../../assets/woodenFrame/woodenWhite.svg';
import AluminiumMetal from '../../assets/woodenFrame/aluminiumMetal.svg';
import woodenFrameIcon from '../../assets/woodenFrameIcon.svg';
import metalFrameIcon from '../../assets/metalFrameIcon.svg';
import { IFrameProps } from '../../types/index';

interface PosterFrameProps {
  frame: IFrameProps;
  setFrame: ({ frameType, selectedFrame }: IFrameProps) => void;
}

const PosterFrame: FC<PosterFrameProps> = ({ frame, setFrame }) => {
  const handleSelectedFrameType = (targetFrameType: string): void => {
    setFrame({ ...frame, frameType: targetFrameType });
  };

  const handleSelectedFrame = (targetFrame: string): void => {
    setFrame({ ...frame, selectedFrame: targetFrame });
  };
  return (
    <>
      <div className="flex items-center justify-between">
        <div
          onClick={() => {
            handleSelectedFrameType('No Frame');
          }}
          className={
            frame.frameType === 'No Frame'
              ? 'border-[3px] border-black w-[32%] flex items-center justify-center rounded-lg py-3 cursor-pointer'
              : 'border-[2px] w-[32%] flex items-center justify-center rounded-lg py-3 cursor-pointer'
          }
        >
          <span className="text-[12px]">No Frame</span>
        </div>
        <div
          onClick={() => {
            handleSelectedFrameType('Wooden');
          }}
          className={
            frame.frameType === 'Wooden'
              ? 'border-[3px] border-black w-[32%] flex items-center justify-center rounded-lg py-1 cursor-pointer'
              : 'border-[2px] w-[32%] flex items-center justify-center rounded-lg py-1 cursor-pointer'
          }
        >
          <img src={woodenFrameIcon} className="w-12" alt="" />
          <span className="text-[12px]">Wooden</span>
        </div>
        <div
          onClick={() => {
            handleSelectedFrameType('Metal');
          }}
          className={
            frame.frameType === 'Metal'
              ? 'border-[3px] border-black w-[32%] flex items-center justify-center rounded-lg py-1 cursor-pointer'
              : 'border-[2px] w-[32%] flex items-center justify-center rounded-lg py-1 cursor-pointer'
          }
        >
          <img src={metalFrameIcon} className="w-12" alt="" />
          <span className="text-[12px]">Metal</span>
        </div>
      </div>
      {frame.frameType === 'No Frame' ? (
        ''
      ) : frame.frameType === 'Wooden' ? (
        <div className="flex items-center justify-start gap-5 my-2">
          <div
            onClick={() => {
              handleSelectedFrame('Wooden Black');
            }}
            className={
              frame.selectedFrame === 'Wooden Black'
                ? 'border-black border-[3px] rounded-lg cursor-pointer bg-white px-4 py-2 flex flex-col'
                : 'border-gray-300 border-2 rounded-lg cursor-pointer bg-white px-4 py-2 flex flex-col'
            }
          >
            <img src={Blackframe} />
            <span className="text-center text-[12px]">Black</span>
          </div>
          <div
            onClick={() => {
              handleSelectedFrame('Wooden Nuteral');
            }}
            className={
              frame.selectedFrame === 'Wooden Nuteral'
                ? 'border-black border-[3px] rounded-lg cursor-pointer bg-white px-4 py-2 flex flex-col'
                : 'border-gray-300 border-2 rounded-lg cursor-pointer bg-white px-4 py-2 flex flex-col'
            }
          >
            <img src={Neturalframe} />
            <span className="text-center text-[12px]">Netural</span>
          </div>
          <div
            onClick={() => {
              handleSelectedFrame('Wooden White');
            }}
            className={
              frame.selectedFrame === 'Wooden White'
                ? 'border-black border-[3px] rounded-lg cursor-pointer bg-white px-4 py-2 flex flex-col'
                : 'border-gray-300 border-2 rounded-lg cursor-pointer bg-white px-4 py-2 flex flex-col'
            }
          >
            <img src={Whiteframe} />
            <span className="text-center text-[12px]">White</span>
          </div>
        </div>
      ) : (
        frame.frameType === 'Metal' && (
          <div className="flex items-center justify-start gap-4 my-2">
            <div
              onClick={() => {
                handleSelectedFrame('Aluminium Metal');
              }}
              className={
                frame.selectedFrame === 'Aluminium Metal'
                  ? 'border-black border-[3px] rounded-lg cursor-pointer bg-white px-4 py-2 flex flex-col'
                  : 'border-gray-300 border-2 rounded-lg cursor-pointer bg-white px-4 py-2 flex flex-col'
              }
            >
              <img src={AluminiumMetal} />
              <span className="text-center text-[12px]">Black</span>
            </div>
          </div>
        )
      )}
    </>
  );
};

export default PosterFrame;
