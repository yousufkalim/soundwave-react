import React, { FC } from 'react';
import Waveform from 'react-audio-waveform';
import { Grid } from '@mui/material';

interface itemProps {
  songName: string;
  trackId: string;
  time: number;
  levels: number[];
}

interface SongWaveProps {
  item: itemProps;
  soundWaveColor: string;
  key: string;
}
const SongWave: FC<SongWaveProps> = ({ item, key, soundWaveColor }) => {
  const convertMilisecondToMinutes = (duration: number): string => {
    const minutes = duration / 60;
    const minutesAsInt = Math.floor(minutes);
    const seconds = Math.round((minutes - minutesAsInt) * 60);
    return `${minutesAsInt}:${seconds}`;
  };
  return (
    <Grid item xs={4} className="h-[7%] py-3" key={key}>
      <Waveform
        // barWidth={0.2}
        peaks={item.levels}
        height={20}
        color={soundWaveColor}
        pixelRatio={1}
      />
      <div className="flex items-center justify-start gap-1 mt-3 pl-2">
        <span style={{ color: `${soundWaveColor}` }} className="text-[8.5px] font-semibold">
          &quot;{item.songName}&quot;
        </span>
        <span style={{ color: `${soundWaveColor}` }} className="text-[8.5px]">
          {convertMilisecondToMinutes(item.time)}
        </span>
      </div>
    </Grid>
  );
};

export default SongWave;
