import React, { FC, useEffect } from 'react';
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
  colors: IColors;
  setColors: ({
    boxColor,
    posterColor,
    soundWaveColor,
    songTitleColor,
    descriptionColor,
  }: IColors) => void;
}

interface IColors {
  boxColor: string;
  posterColor: string;
  soundWaveColor: string;
  songTitleColor: string;
  descriptionColor: string;
}

const Template1: FC<Template1Props> = ({
  activeAlignment,
  selectedAlbum,
  albumDescripition,
  dataSets,
  colors,
  setColors,
}) => {
  const convertMilisecondToMinutes = (duration: number): string => {
    const minutes = duration / 60;
    const minutesAsInt = Math.floor(minutes);
    const seconds = Math.round((minutes - minutesAsInt) * 60);
    return `${minutesAsInt}:${seconds}`;
  };

  useEffect(() => {
    setColors({
      boxColor: 'transparent',
      posterColor: '#000',
      soundWaveColor: 'rgba(255, 255, 255, 1)',
      songTitleColor: 'rgba(255, 255, 255, 1)',
      descriptionColor: 'rgba(255, 255, 255, 1)',
    });
    console.log('USEEFFECT Runs');
  }, []);

  console.log('Template colors ', colors);

  return (
    <div
      id="custom-poster-template-1"
      className={`w-[48%] h-[80%] shadow-lg shadow-[#BAB8B8] pt-6 pl-2 mt-[3%]`}
      style={{ background: colors.posterColor }}
    >
      <div className="flex items-center justify-center flex-col">
        <span
          className={`text-4xl font-extrabold font-[Montserrat]`}
          style={{ color: colors.songTitleColor }}
        >
          {selectedAlbum?.label ? selectedAlbum?.label.toUpperCase() : 'ALBUM NAME'}
        </span>
        <span className={`text-md font-[Montserrat]`} style={{ color: colors.songTitleColor }}>
          {selectedAlbum?.singerName ? selectedAlbum?.singerName.toUpperCase() : 'SINGER NAME'}
        </span>
      </div>
      <Grid
        container
        spacing={1}
        className={`h-[70%] px-2 py-3`}
        style={{ background: colors?.boxColor }}
      >
        {dataSets.map((item) => (
          <Grid item xs={4} className="h-[4%]" key={item.trackId}>
            <Waveform
              // barWidth={1}
              peaks={item.levels}
              height={20}
              color={colors.soundWaveColor}
              pixelRatio={1}
              progressGradientColors={[
                [0, '#FFF'],
                [1, '#FFF'],
              ]}
            />
            <div className="flex items-center justify-start gap-1 mt-3 pl-2">
              <span
                style={{ color: colors.soundWaveColor }}
                className="text-[8.5px] font-semibold font-[Montserrat]"
              >
                &quot;{item.songName}&quot;
              </span>
              <span
                style={{ color: colors.soundWaveColor }}
                className="text-[8.5px] font-[Montserrat]"
              >
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
    </div>
  );
};

export default Template1;
