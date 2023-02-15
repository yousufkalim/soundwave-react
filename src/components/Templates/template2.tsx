import React, { FC, useEffect } from 'react';
import { Grid } from '@mui/material';
import Waveform from 'react-audio-waveform';
import { rgbaToHex } from '../../utils/common';
import { DataSetProps, SelectedAlbumProps, IFrameProps, IStateColors } from '../../types/index';

interface Template2Props {
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

const Template2: FC<Template2Props> = ({
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
      boxColor: '#e28743',
      posterColor: '#fff',
      soundWaveColor: 'rgba(0,0,0,1)',
      soundWaveNameColor: 'rgba(0,0,0,1)',
      songTitleColor: 'rgba(0,0,0,1)',
      descriptionColor: 'rgba(0,0,0,1)',
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
      className={` w-[48%] h-[80%] shadow-lg shadow-[#BAB8B8] mt-[3%] relative `}
      style={{
        background:
          frame.frameType !== 'No Frame' ? `url(${BackgroundFrame}) center no-repeat` : '',
        padding: frame.frameType !== 'No Frame' ? (BackgroundFrame ? '12px' : '0px') : '',
      }}
    >
      <div className={`h-full px-4 pt-4`} style={{ background: colors.posterColor }}>
        <Grid
          container
          spacing={1}
          className={`h-[77%] px-1 py-3 w-full overflow-hidden mt-4`}
          style={{ background: colors.boxColor, width: '100%', marginLeft: '0', marginTop: '0' }}
        >
          {dataSets.map((item) => (
            <Grid
              item
              xs={4}
              className="h-fit"
              key={item.trackId}
              style={{ paddingTop: '0.25rem' }}
            >
              <Waveform
                // barWidth={1}
                peaks={item.levels}
                height={20}
                color={rgbaToHex(colors.soundWaveColor)}
                pixelRatio={1}
                progressColor={rgbaToHex(colors.soundWaveColor)}
              />
              <div
                style={{
                  color: colors.soundWaveNameColor,
                }}
                className="text-[8.5px] font-semibold font-[Montserrat] template_album_name pt-1"
              >
                &quot;{item.songName}&quot;
                <span className="ml-2">{convertMilisecondToMinutes(item.time)}</span>
              </div>
            </Grid>
          ))}
        </Grid>
        <div
          className={`break-words w-full h-[23%] ${activeAlignment} text-center text-ellipsis-8 px-4 absolute right-0 bottom-4`}
        >
          <div className="text-center">
            <span
              className={`text-4xl font-extrabold font-proxima-nova template_album_name`}
              style={{
                color: colors.songTitleColor,
              }}
            >
              <i>{selectedAlbum?.label ? selectedAlbum?.label.toUpperCase() : 'ALBUM NAME'}</i>
            </span>
          </div>
          <div
            className={`text-[7px] bg-transparent tracking-tighter font-proxima-nova template_album_name`}
            style={{
              color: colors.descriptionColor,
            }}
          >
            {albumDescripition}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template2;
