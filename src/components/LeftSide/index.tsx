/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Grid } from '@mui/material';
import React, { FC } from 'react';
import Waveform from 'react-audio-waveform';
import { ReactComponent as WaterMark } from '../../assets/WaterMark.svg';
interface DatasetProps {
  songName: string;
  trackId: string;
  time: number;
  levels: number[];
}

interface waveformProps {
  dataSets: DatasetProps[];
  albumDescripition: string;
  selectedAlbum?: SelectedAlbumProps;
}
interface SelectedAlbumProps {
  id: string;
  label: string;
  photo: string;
  singerName: string;
}
const index: FC<waveformProps> = ({ dataSets, albumDescripition, selectedAlbum }) => {
  const convertMilisecondToMinutes = (duration: number) => {
    const minutes = duration / 60;
    const minutesAsInt = Math.floor(minutes);
    const seconds = Math.round((minutes - minutesAsInt) * 60);
    return `${minutesAsInt}:${seconds}`;
  };
  return (
    <div className="bg-[#fcfcfc] w-[56%] flex items-center justify-center">
      <div className="w-[48%] h-[86%] shadow-2xl shadow-[#BAB8B8] rounded-lg pt-3 pl-6 pr-4 relative">
        <Grid container spacing={1} className="w-full h-[75%] bg-[#BAB8B8]">
          {dataSets.map((item) => (
            <React.Fragment key={item.trackId}>
              <Grid item xs={4} className="h-[7%] py-4">
                <Waveform
                  barWidth={0.2}
                  peaks={item.levels}
                  height={20}
                  duration={210}
                  color="black"
                  transitionDuration={200}
                />
                <div className="flex justify-between">
                  <span className="text-[7px]">{item.songName}</span>
                  <span className="text-[7px]">{convertMilisecondToMinutes(item.time)}</span>
                </div>
              </Grid>
            </React.Fragment>
          ))}
        </Grid>
        <div className="break-words w-[85%] h-[23%] absolute bottom-10 ">
          <span className="text-4xl font-semibold">
            <i>{selectedAlbum?.label}</i>
          </span>
          <br />
          <p className="text-[7px] tracking-tighter">{albumDescripition}</p>
        </div>
        <div className="flex items-center justify-end absolute right-0 bottom-5 bg-green-400">
          <WaterMark />
        </div>
      </div>
    </div>
  );
};

export default index;
