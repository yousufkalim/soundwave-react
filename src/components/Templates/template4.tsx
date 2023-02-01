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

interface Template4Props {
  activeAlignment: string;
  selectedAlbum?: SelectedAlbumProps;

  albumDescripition: string;
  dataSets: DatasetProps[];
}

const Template4: FC<Template4Props> = ({
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
      className={`bg-black w-[48%] h-[80%] shadow-lg shadow-[#BAB8B8] pt-6 pl-8 pr-6 mt-[3%] relative `}
    >
      <Grid
        container
        spacing={1}
        className={`h-[77%] px-1 py-3 border-2 border-white `}
        // style={{ backgroundColor: '#EA8444' }}
      >
        {dataSets.map((item) => (
          <Grid item xs={4} className="h-[4%]" key={item.trackId}>
            <Waveform // barWidth={1}
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
      <div className="text-white absolute bottom-28 left-10 flex flex-col bg-black px-2">
        <span className={`text-4xl font-extrabold font-[Morganite]`}>
          {selectedAlbum?.label ? selectedAlbum?.label.toUpperCase() : 'Album Name'}
        </span>
        <span className="text-[10px] font-bold font-[Morganite]">
          {selectedAlbum?.singerName ? selectedAlbum.singerName : 'Song Name'}
        </span>
      </div>
      <div className={`break-words text-white w-[95%] h-[23%] ${activeAlignment} text-left mt-10`}>
        <p className={`text-[7px] bg-transparent tracking-tighter `}>{albumDescripition}</p>
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

export default Template4;
