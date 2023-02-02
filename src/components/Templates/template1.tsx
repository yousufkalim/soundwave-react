import React, { FC } from 'react';
import { ReactComponent as WaterMark } from '../../assets/WaterMark.svg';
import { Grid } from '@mui/material';
import Waveform from 'react-audio-waveform';

interface DatasetProps {
  songName: string;
  trackId: string;
  time: number;
  levels: number[];
}
interface SelectedAlbumProps {
  id: string;
  label: string;
  photo: string;
  singerName: string;
}

interface Template1Props {
  activeAlignment: string;
  selectedAlbum?: SelectedAlbumProps;

  albumDescripition: string;
  dataSets: DatasetProps[];
}

const Template1: FC<Template1Props> = ({
  activeAlignment,
  selectedAlbum,
  albumDescripition,
  dataSets,
}) => {
  const convertMilisecondToMinutes = (duration: number): string => {
    const minutes = duration / 60;
    const minutesAsInt = Math.floor(minutes);
    const seconds = Math.round((minutes - minutesAsInt) * 60);
    return `${minutesAsInt}:${seconds}`;
  };
  return (
    <div
      id="custom-poster-template-1"
      className={`bg-black w-[48%] h-[80%] shadow-lg shadow-[#BAB8B8] pt-6 pl-2 mt-[3%]`}
    >
      <div className="flex items-center justify-center flex-col">
        <span className={`text-white text-4xl font-extrabold font-[Montserrat]`}>
          {selectedAlbum?.label ? selectedAlbum?.label.toUpperCase() : 'ALBUM NAME'}
        </span>
        <span className={`text-white text-md font-[Montserrat]`}>
          {selectedAlbum?.singerName ? selectedAlbum?.singerName.toUpperCase() : 'SINGER NAME'}
        </span>
      </div>
      <Grid
        container
        spacing={1}
        className={`h-[70%] px-2 py-3`}
        style={{ backgroundColor: 'black' }}
      >
        {dataSets.map((item) => (
          <Grid item xs={4} className="h-[4%]" key={item.trackId}>
            <Waveform
              // barWidth={1}
              peaks={item.levels}
              height={20}
              color="#FFF"
              pixelRatio={1}
              progressGradientColors={[
                [0, '#FFF'],
                [1, '#FFF'],
              ]}
            />
            <div className="flex items-center justify-start gap-1 mt-3 pl-2">
              <span
                style={{ color: 'white' }}
                className="text-[8.5px] font-semibold font-[Montserrat]"
              >
                &quot;{item.songName}&quot;
              </span>
              <span style={{ color: 'white' }} className="text-[8.5px] font-[Montserrat]">
                {convertMilisecondToMinutes(item.time)}
              </span>
            </div>
          </Grid>
        ))}
      </Grid>
      <div className={`break-words w-[93%] h-[23%] ${activeAlignment}`}>
        <p className={`text-[7px] bg-transparent text-white tracking-tighter font-[Montserrat]`}>
          {albumDescripition}
        </p>
      </div>
      <div className="relative w-full">
        <WaterMark
          className={
            activeAlignment === 'text-right'
              ? 'absolute left-0 bottom-6'
              : 'absolute right-0 bottom-6'
          }
        />
      </div>
    </div>
  );
};

export default Template1;
