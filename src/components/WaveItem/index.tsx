import React, { FC } from 'react';
import Waveform from 'react-audio-waveform';
import { rgbaToHex } from '../../utils/common';
import { DataSetProps, IStateColors } from '../../types/index';
interface WaveroomProps {
  item: DataSetProps;
  selectedFont: string;
  colors: IStateColors;
  height: number;
  songsAmount: number;
}
const Waveroom: FC<WaveroomProps> = ({ item, selectedFont, colors, height, songsAmount }) => {
  const convertMilisecondToMinutes = (duration: number): string => {
    const minutes = duration / 60;
    const minutesAsInt = Math.floor(minutes);
    const temp = Math.round((minutes - minutesAsInt) * 60);
    const seconds = temp < 10 ? `0${temp}` : temp;
    return `${minutesAsInt}:${seconds}`;
  };
  return (
    <div
      className={
        songsAmount <= 12
          ? 'w-[50%] flex flex-col justify-center items-center'
          : 'w-[30%] flex flex-col justify-center items-center'
      }
    >
      <div className="w-min" id={`wave-container-${height}`}>
        <Waveform
          peaks={item.levels}
          height={height}
          color={rgbaToHex(colors.soundWaveColor)}
          pixelRatio={1}
          progressColor={rgbaToHex(colors.soundWaveColor)}
        />
        <div
          className={
            songsAmount <= 12
              ? 'flex items-center justify-between mt-2'
              : 'flex items-center justify-between mt-2'
          }
        >
          <span
            className={`w-[82%] flex items-center justify-start tracking-tighter font-semibold font-[Montserrat] template_album_name text-[4px] sm:text-[6px] xl:text-[7px]`}
            style={{
              color: colors.soundWaveNameColor,
              fontFamily: selectedFont,
              fontSize: songsAmount > 18 ? '5px' : '7px',
            }}
          >
            &quot;{item.songName}&quot;
          </span>
          <span
            className={`
          w-[18%] font-[Montserrat] template_album_name text-[4px] flex items-center justify-end
          sm:text-[6px] 
           xl:text-[7px] 
          2xl:text-[8px] 
          `}
            style={{
              color: colors.soundWaveNameColor,
              fontFamily: selectedFont,
              fontSize: songsAmount > 18 ? '5px' : '7px',
            }}
          >
            {convertMilisecondToMinutes(item.time)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Waveroom;
