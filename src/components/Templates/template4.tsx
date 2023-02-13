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

interface Template4Props {
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

const Template4: FC<Template4Props> = ({
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
      boxColor: '#000',
      posterColor: '#000',
      soundWaveColor: '#fff',
      songTitleColor: '#fff',
      descriptionColor: '#fff',
    });
  }, []);

  return (
    <div
      id="custom-poster-template-1"
      className={`w-[48%] h-[80%] shadow-lg shadow-[#BAB8B8] p-2 mt-[3%] relative `}
      style={{ background: 'transparent' }}
    >
      <div className={`h-full pt-6 pl-8 pr-6 `} style={{ background: colors.posterColor }}>
        <Grid
          container
          spacing={1}
          className={`h-[77%] px-1 py-3 border-2 border-white `}
          style={{ backgroundColor: colors.boxColor }}
        >
          {dataSets.map((item) => (
            <Grid item xs={4} className="h-[4%]" key={item.trackId}>
              <Waveform // barWidth={1}
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
        <div
          className=" absolute bottom-28 left-10 flex flex-col bg-black px-2"
          style={{ color: colors.songTitleColor }}
        >
          <span className={`text-4xl font-extrabold font-[Morganite]`}>
            {selectedAlbum?.label ? selectedAlbum?.label.toUpperCase() : 'ALBUM NAME'}
          </span>
          <span className="text-[10px] font-bold font-[Morganite]">
            {selectedAlbum?.singerName ? selectedAlbum.singerName : 'SINGER NAME'}
          </span>
        </div>
        <div
          className={`break-words w-[95%] h-[23%] ${activeAlignment} text-left mt-10`}
          style={{ color: colors.descriptionColor }}
        >
          <p className={`text-[7px] bg-transparent tracking-tighter `}>{albumDescripition}</p>
        </div>
      </div>
    </div>
  );
};

export default Template4;
