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
        barWidth={0.2}
        peaks={item.levels}
        height={20}
        duration={210}
        color={soundWaveColor}
        transitionDuration={200}
      />
      <div className="flex justify-between mt-3 px-2">
        <span style={{ color: `${soundWaveColor}` }} className="text-[8.5px]">
          {item.songName}
        </span>
        <span style={{ color: `${soundWaveColor}` }} className="text-[8.5px]">
          {convertMilisecondToMinutes(item.time)}
        </span>
      </div>
    </Grid>
  );
};

export default SongWave;
