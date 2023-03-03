import React, { FC } from 'react';
import Waveform from 'react-audio-waveform';
import { Grid } from '@mui/material';
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
    const seconds = Math.round((minutes - minutesAsInt) * 60);
    return `${minutesAsInt}:${seconds}`;
  };
  return (
    <Grid item xs={4}>
      <div id={`wave-container-${height}`} className="flex items-center justify-center">
        <Waveform
          peaks={item.levels}
          height={height}
          color={rgbaToHex(colors.soundWaveColor)}
          pixelRatio={1}
          progressColor={rgbaToHex(colors.soundWaveColor)}
        />
      </div>
      <div className="flex items-center justify-between mt-2 px-3">
        <span
          className={`
          w-[80%] tracking-tight font-semibold font-[Montserrat] template_album_name text-[4px]
          sm:text-[6px] 
          xl:w-[80%] xl:text-[7px]
          2xl:w-[82%]
        `}
          style={{
            color: colors.soundWaveNameColor,
            fontFamily: selectedFont,
            fontSize: songsAmount > 18 ? '5px' : '8px',
          }}
        >
          &quot;{item.songName}&quot;
        </span>
        <span
          className={`
          w-[20%] font-[Montserrat] template_album_name text-[4px]
          sm:text-[6px] 
          xl:w-[20%] xl:text-[7px] 
          2xl:w-[18%] 2xl:text-[8px] 
          `}
          style={{
            color: colors.soundWaveNameColor,
            fontFamily: selectedFont,
            fontSize: songsAmount ? '5px' : '8px',
          }}
        >
          {convertMilisecondToMinutes(item.time)}
        </span>
      </div>
    </Grid>
  );
};

export default Waveroom;
