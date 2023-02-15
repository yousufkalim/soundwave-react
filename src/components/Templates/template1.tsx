/* eslint-disable one-var */
import React, { FC, useEffect } from 'react';
import { Grid } from '@mui/material';
import Waveform from 'react-audio-waveform';
import { rgbaToHex } from '../../utils/common';
import { DataSetProps, SelectedAlbumProps, IFrameProps, IStateColors } from '../../types/index';

interface Template1Props {
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


const Template1: FC<Template1Props> = ({
  activeAlignment,
  selectedAlbum,
  albumDescripition,
  dataSets,
  colors,
  setColors,
  frame,
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
      posterColor: '#000',
      soundWaveColor: 'rgba(255, 255, 255, 1)',
      soundWaveNameColor: 'rgba(255, 255, 255, 1)',
      songTitleColor: 'rgba(255, 255, 255, 1)',
      descriptionColor: 'rgba(255, 255, 255, 1)',
    });
  }, []);

  // const titleColor = colors.songTitleColor.includes('gradient') ? colors.songTitleColor : '';
  // const descriptionColor = colors.descriptionColor.includes('gradient')
  //   ? colors.descriptionColor
  //   : '';
  // const soundWaveNameColor = colors.soundWaveNameColor.includes('gradient')
  //   ? colors.soundWaveNameColor
  //   : '';

  return (
    <div
      id="custom-poster-template"
      className={`w-[48%] h-[80%] shadow-lg shadow-[#BAB8B8] mt-[3%]`}
      style={{
        background:
          frame.frameType !== 'No Frame' ? `url(${BackgroundFrame}) center no-repeat` : '',
        padding: frame.frameType !== 'No Frame' ? (BackgroundFrame ? '12px' : '0px') : '',
      }}
    >
      <div className={`pt-6 pl-2 h-full`} style={{ background: colors.posterColor }}>
        <div className="flex items-center justify-center flex-col">
          <span
            className={`text-4xl font-extrabold font-[Montserrat] template_album_name`}
            style={{
              color: colors.songTitleColor,
            }}
          >
            {selectedAlbum?.label ? selectedAlbum?.label.toUpperCase() : 'ALBUM NAME'}
          </span>
          <span
            className={`text-md font-[Montserrat] template_album_name`}
            style={{
              color: colors.songTitleColor,
            }}
          >
            {selectedAlbum?.singerName ? selectedAlbum?.singerName.toUpperCase() : 'SINGER NAME'}
          </span>
        </div>
        <div className="h-full overflow-hidden w-full">
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
                  color={rgbaToHex(colors.soundWaveColor)}
                  pixelRatio={1}
                  progressColor={rgbaToHex(colors.soundWaveColor)}
                  // progressGradientColors={['#ffffff', '#000000']}
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
          <div className={`break-words w-[93%] h-[23%] ${activeAlignment}`}>
            <p
              style={{
                color: colors.descriptionColor,
              }}
              className={`text-[7px] template_album_name bg-transparent tracking-tighter font-[Montserrat] text-ellipsis-8`}
            >
              {albumDescripition}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template1;
