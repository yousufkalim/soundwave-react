import React, { FC } from 'react';
import { Grid } from '@mui/material';
import SongWave from './songWave';

interface DatasetProps {
  songName: string;
  trackId: string;
  time: number;
  levels: number[];
}

interface WaveProps {
  dataSets: DatasetProps[];
  boxColor: string;
  soundWaveColor: string;
}

const index: FC<WaveProps> = ({ dataSets, boxColor, soundWaveColor }) => {
  return (
    <Grid
      container
      spacing={1}
      className={`w-full h-[80%] py-1 px-2`}
      style={{ backgroundColor: `${boxColor}` }}
    >
      {dataSets.map((item) => (
        <SongWave item={item} soundWaveColor={soundWaveColor} key={item.trackId} />
      ))}
    </Grid>
  );
};

export default index;
