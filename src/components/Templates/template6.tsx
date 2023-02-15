import React, { FC, useEffect } from 'react';
import { Grid } from '@mui/material';
import Waveform from 'react-audio-waveform';
import { rgbaToHex } from '../../utils/common';
import { DataSetProps, SelectedAlbumProps, IFrameProps, IStateColors } from '../../types/index';

interface Template6Props {
  activeAlignment: string;
  selectedAlbum?: SelectedAlbumProps;
  albumDescripition: string;
  dataSets: DataSetProps[];
  colors: IStateColors;
  setColors: ({
    boxColor,
    posterColor,
    soundWaveColor,
    songTitleColor,
    descriptionColor,
    soundWaveNameColor,
  }: IStateColors) => void;
  frame: IFrameProps;
  BackgroundFrame: string;
}



const Template6: FC<Template6Props> = ({
  activeAlignment,
  selectedAlbum,
  albumDescripition,
  dataSets,
  colors,
  frame,
  setColors,
  BackgroundFrame,
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
      posterColor: 'linear-gradient(180deg, rgb(233, 132, 209) 0%, rgb(233,132,73) 100%)',
      soundWaveColor: 'rgba(255,255,255,1)',
      soundWaveNameColor: '#fff',
      songTitleColor: '#fff',
      descriptionColor: '#fff',
    });
  }, []);

  return (
    <div
      id="custom-poster-template"
      className={`w-[48%] h-[80%] shadow-lg shadow-[#BAB8B8] mt-[3%] relative `}
      style={{
        background:
          frame.frameType !== 'No Frame' ? `url(${BackgroundFrame}) center no-repeat` : '',
        padding: frame.frameType !== 'No Frame' ? (BackgroundFrame ? '12px' : '0px') : '',
      }}
    >
      <div
        className={`bg-gradient-to-b h-full pt-6 pl-8 pr-6 `}
        style={{ background: colors.posterColor }}
      >
        <div className="flex items-center justify-center">
          <span
            className={`text-4xl font-extrabold font-[blacksword] template_album_name`}
            style={{
              color: colors.songTitleColor,
            }}
          >
            {selectedAlbum?.label ? selectedAlbum?.label.toUpperCase() : 'ALBUM NAME'}
          </span>
        </div>
        <Grid
          container
          spacing={1}
          className={`h-[77%] px-1 py-2`}
          // style={{ backgroundColor: '' }}
        >
          {dataSets.map((item) => (
            <Grid item xs={4} className="h-[4%]" key={item.trackId}>
              <Waveform
                // barWidth={1}
                peaks={item.levels}
                height={20}
                color={rgbaToHex(colors.soundWaveColor)}
                pixelRatio={1}
                progressColor={rgbaToHex(colors.soundWaveColor)}
              />
              <div className="flex items-center justify-start gap-1 mt-3 pl-2">
                <span
                  style={{
                    color: colors.soundWaveNameColor,
                  }}
                  className="text-[8.5px] font-semibold font-[Montserrat] template_album_name"
                >
                  &quot;{item.songName}&quot;
                </span>
                <span
                  style={{
                    color: colors.soundWaveNameColor,
                  }}
                  className="text-[8.5px] font-[Montserrat] template_album_name"
                >
                  {convertMilisecondToMinutes(item.time)}
                </span>
              </div>
            </Grid>
          ))}
        </Grid>
        <div
          style={{
            color: colors.descriptionColor,
          }}
          className={`break-words w-full h-[23%] ${activeAlignment} text-center mt-[-5px] template_album_name`}
        >
          <p className={`text-[7px] bg-transparent tracking-tighter font-[Montserrat]`}>
            {albumDescripition}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Template6;
