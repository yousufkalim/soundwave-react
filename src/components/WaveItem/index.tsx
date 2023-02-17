import React, { FC } from 'react';
import Waveform from 'react-audio-waveform';
import { Grid } from '@mui/material';
import { rgbaToHex } from '../../utils/common';
import { DataSetProps, IStateColors } from '../../types/index';
interface WaveroomProps {
  item: DataSetProps;
  selectedFont: string;
  colors: IStateColors;
}
const Waveroom: FC<WaveroomProps> = ({ item, selectedFont, colors }) => {
  const convertMilisecondToMinutes = (duration: number): string => {
    const minutes = duration / 60;
    const minutesAsInt = Math.floor(minutes);
    const seconds = Math.round((minutes - minutesAsInt) * 60);
    return `${minutesAsInt}:${seconds}`;
  };
  return (
    <Grid item xs={4} className="h-[4%]" key={item.trackId}>
      <Waveform
        // barWidth={1}
        peaks={item.levels}
        height={20}
        color={rgbaToHex(colors.soundWaveColor)}
        pixelRatio={1}
        progressColor={rgbaToHex(colors.soundWaveColor)}
      />
      <div className="flex items-center justify-start gap-1 mt-[10px] pl-2">
        <span
          style={{
            color: colors.soundWaveNameColor,
            fontFamily: selectedFont,
          }}
          className="text-[8px] font-semibold font-[Montserrat] template_album_name"
        >
          &quot;{item.songName}&quot;
        </span>
        <span
          style={{
            color: colors.soundWaveNameColor,
            fontFamily: selectedFont,
          }}
          className="text-[8px] font-[Montserrat] template_album_name"
        >
          {convertMilisecondToMinutes(item.time)}
        </span>
      </div>
    </Grid>
  );
};

export default Waveroom;
