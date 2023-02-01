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

interface Template2Props {
  activeAlignment: string;
  selectedAlbum?: SelectedAlbumProps;

  albumDescripition: string;
  dataSets: DatasetProps[];
}

const Template2: FC<Template2Props> = ({
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
      className={`bg-white w-[48%] h-[80%] shadow-lg shadow-[#BAB8B8] pt-6 pl-8 pr-6 mt-[3%] relative `}
    >
      <Grid
        container
        spacing={1}
        className={`h-[77%] px-1 py-3`}
        style={{ backgroundColor: '#EA8444' }}
      >
        {dataSets.map((item) => (
          <Grid item xs={4} className="h-[4%]" key={item.trackId}>
            <Waveform
              // barWidth={1}
              peaks={item.levels}
              height={20}
              color="#000000"
              pixelRatio={1}
              progressGradientColors={[
                [0, '#000000'],
                [1, '#000000'],
              ]}
            />
            <div className="flex items-center justify-start gap-1 mt-3 pl-2">
              <span
                style={{ color: 'black' }}
                className="text-[8.5px] font-semibold font-[Montserrat]"
              >
                &quot;{item.songName}&quot;
              </span>
              <span style={{ color: 'black' }} className="text-[8.5px] font-[Montserrat]">
                {convertMilisecondToMinutes(item.time)}
              </span>
            </div>
          </Grid>
        ))}
      </Grid>
      <div
        className={`break-words w-[90%] h-[23%] ${activeAlignment} text-center absolute bottom-6 right-6`}
      >
        <div className="text-center">
          <span className={`text-black text-4xl font-extrabold font-proxima-nova`}>
            <i>{selectedAlbum?.label ? selectedAlbum?.label.toUpperCase() : 'HAMZA'}</i>
          </span>
        </div>
        <p className={`text-[7px] bg-transparent text-black tracking-tighter font-proxima-nova`}>
          {albumDescripition}
        </p>
      </div>
      <div className="w-full">
        <WaterMark
          className={
            activeAlignment === 'text-right'
              ? 'absolute left-0 bottom-3'
              : 'absolute right-0 bottom-3'
          }
        />
      </div>
    </div>
  );
};

export default Template2;
