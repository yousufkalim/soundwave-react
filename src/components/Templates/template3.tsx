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

interface IFrameProps {
  frameType: string;
  selectedFrame: string;
}

interface Template3Props {
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
  frame: IFrameProps;
}

interface IColors {
  boxColor: string;
  posterColor: string;
  soundWaveColor: string;
  songTitleColor: string;
  descriptionColor: string;
}

const Template3: FC<Template3Props> = ({
  activeAlignment,
  selectedAlbum,
  albumDescripition,
  dataSets,
  colors,
  frame,
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
      boxColor: 'linear-gradient(180deg, #e28743 0%, #fc666d 100%)',
      posterColor: '#000',
      soundWaveColor: 'rgba(0,0,0,1)',
      songTitleColor: '#fff',
      descriptionColor: 'rgba(0,0,0,1)',
    });
    console.log('USEEFFECT Runs');
  }, []);

  return (
    <div
      id="custom-poster-template-1"
      className={` w-[48%] h-[80%] shadow-lg shadow-[#BAB8B8] p-2 mt-[3%] relative `}
      style={{ background: 'transparent' }}
    >
      <div className={`h-full pt-6 pl-8 pr-6`} style={{ background: colors.posterColor }}>
        <Grid
          container
          spacing={1}
          className={`h-[77%] px-1 py-3 bg-gradient-to-b`}
          style={{ background: colors.boxColor }}
          // style={{ backgroundColor: '#EA8444' }}
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
                  [0, '#000000'],
                  [1, '#000000'],
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

        <div className="text-center  relative bottom-6">
          <span
            className={`text-4xl font-extrabold font-[Aemstel-Regular]`}
            style={{ color: colors.songTitleColor }}
          >
            {selectedAlbum?.label ? selectedAlbum?.label.toUpperCase() : 'Album Name'}
          </span>
          <span
            className={`text-4xl font-[Aemstel-LineInside] absolute top-[7px] left-[6.2rem]`}
            style={{ color: colors.songTitleColor }}
          >
            {selectedAlbum?.label ? selectedAlbum?.label.toUpperCase() : 'ALBUM NAME'}
          </span>
        </div>
        <div
          className={`break-words w-[94%] h-[23%] ${activeAlignment} text-center mt-[-10px]`}
          style={{ color: colors.songTitleColor }}
        >
          <p className={`text-[7px] bg-transparent tracking-tighter mb-[1%]`}>
            {albumDescripition}
          </p>
          <span className="text-[10px] border p-1 rounded-lg font-bold">
            {selectedAlbum?.singerName ? selectedAlbum.singerName.toUpperCase() : 'SINGER NAME'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Template3;
