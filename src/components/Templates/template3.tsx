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

interface Template3Props {
  activeAlignment: string;
  selectedAlbum?: SelectedAlbumProps;

  albumDescripition: string;
  dataSets: DatasetProps[];
}

const Template3: FC<Template3Props> = ({
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
        className={`h-[77%] px-1 py-3 bg-gradient-to-b from-[#EA8444] to-[#fc666d]`}
        // style={{ backgroundColor: '#EA8444' }}
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

      <div className="text-center  relative bottom-6">
        <span className={`text-4xl font-extrabold font-[Aemstel-Regular] text-white`}>
          {selectedAlbum?.label ? selectedAlbum?.label.toUpperCase() : 'Album Name'}
        </span>
        <span
          className={`text-4xl font-[Aemstel-LineInside] absolute top-[7px] left-[8.8rem] text-white`}
        >
          {selectedAlbum?.label ? selectedAlbum?.label.toUpperCase() : 'Album Name'}
        </span>
      </div>
      <div
        className={`break-words text-white w-[94%] h-[23%] ${activeAlignment} text-center mt-[-10px]`}
      >
        <p className={`text-[7px] bg-transparent tracking-tighter mb-[1%]`}>{albumDescripition}</p>
        <span className="text-[10px] border p-1 rounded-lg font-bold">
          {selectedAlbum?.singerName ? selectedAlbum.singerName : 'HAMZA'}
        </span>
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

export default Template3;
