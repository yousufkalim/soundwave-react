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
  posterRatio?: string;
  posterType: string;
}
const Waveroom: FC<WaveroomProps> = ({
  item,
  selectedFont,
  colors,
  height,
  songsAmount,
  posterRatio,
  posterType,
}) => {
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
          ? 'w-[50%] z-10 flex flex-col justify-center items-center'
          : 'w-[30%] z-10 flex flex-col justify-center items-center'
      }
    >
      <div
        className="w-min"
        id={posterRatio ? `wave-container-${height}-${posterRatio}` : `wave-container-${height}`}
      >
        <Waveform
          peaks={item.levels}
          height={height}
          color={rgbaToHex(colors.soundWaveColor)}
          pixelRatio={10}
          progressColor={rgbaToHex(colors.soundWaveColor)}
        />
        <div
          className={
            songsAmount <= 12
              ? 'flex items-baseline justify-between mt-2'
              : 'flex items-baseline justify-between mt-2'
          }
        >
          <span
            className={`w-[82%] flex items-center justify-start tracking-tighter font-semibold font-[Montserrat] break-words text-[4px] sm:text-[6px] xl:text-[7px]`}
            style={{
              color: colors.soundWaveNameColor,
              letterSpacing:
                posterType === 'Thin Canvas' || posterType === 'Thick Canvas' ? '2px' : 'normal',
              fontSize:
                posterRatio === '1218'
                  ? songsAmount > 18
                    ? '10px'
                    : '12px'
                  : posterRatio === '1620'
                  ? songsAmount > 18
                    ? '12px'
                    : '14px'
                  : posterRatio === '1824'
                  ? songsAmount > 18
                    ? '14px'
                    : '16px'
                  : posterRatio === '2028'
                  ? songsAmount > 18
                    ? '16px'
                    : '18px'
                  : posterRatio === '2436'
                  ? songsAmount > 18
                    ? '22px'
                    : '22px'
                  : posterRatio === '2840' && songsAmount > 18
                  ? '24px'
                  : '24px',
            }}
          >
            &quot;{item.songName}&quot;
          </span>
          <span
            className={`
          w-[18%] font-[Montserrat] break-words text-[4px] flex items-center justify-end
          sm:text-[6px] 
           xl:text-[7px] 
          2xl:text-[8px] 
          `}
            style={{
              color: colors.soundWaveNameColor,
              // fontFamily: selectedFont,
              fontSize:
                posterRatio === '1218'
                  ? songsAmount > 18
                    ? '10px'
                    : '12px'
                  : posterRatio === '1620'
                  ? songsAmount > 18
                    ? '12px'
                    : '14px'
                  : posterRatio === '1824'
                  ? songsAmount > 18
                    ? '14px'
                    : '16px'
                  : posterRatio === '2028'
                  ? songsAmount > 18
                    ? '16px'
                    : '18px'
                  : posterRatio === '2436'
                  ? songsAmount > 18
                    ? '22px'
                    : '22px'
                  : posterRatio === '2840' && songsAmount > 18
                  ? '24px'
                  : '24px',
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
