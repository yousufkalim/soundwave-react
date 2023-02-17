import React, { FC, useEffect } from 'react';
import { Grid } from '@mui/material';
import Waveform from 'react-audio-waveform';
import { rgbaToHex } from '../../utils/common';
import { DataSetProps, SelectedAlbumProps, IFrameProps, IStateColors } from '../../types/index';

interface Template5Props {
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
  selectedFont: string;
}

const Template5: FC<Template5Props> = ({
  activeAlignment,
  selectedAlbum,
  albumDescripition,
  dataSets,
  colors,
  frame,
  setColors,
  BackgroundFrame,
  selectedFont,
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
      posterColor: 'linear-gradient(180deg, #fff 0%,  #2f2f2f 50% ,#000 100%)',
      soundWaveColor: 'rgba(0,0,0,1)',
      soundWaveNameColor: '#000',
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
        className={`bg-gradient-to-b h-full pt-6 px-6 `}
        style={{ background: colors.posterColor }}
      >
        <Grid
          container
          spacing={1}
          className={`h-[77%] px-1 py-3 `}
          // style={{ backgroundColor: '#e28743' }}
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
              <div className="flex items-center justify-start gap-1 mt-3 pl-2 ">
                <span
                  style={{
                    color: colors.soundWaveNameColor,
                    fontFamily: selectedFont,
                  }}
                  className="text-[8.5px] font-semibold font-[Montserrat] template_album_name"
                >
                  &quot;{item.songName}&quot;
                </span>
                <span
                  style={{
                    color: colors.soundWaveNameColor,
                    fontFamily: selectedFont,
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
          className={`flex flex-col break-words w-[89%] h-[23%] ${activeAlignment} text-center absolute bottom-6`}
        >
          <span
            className={`text-4xl font-extrabold font-[blowbrush] tracking-wide template_album_name`}
            style={{
              color: colors.songTitleColor,
              fontFamily: selectedFont,
            }}
          >
            {selectedAlbum?.label ? selectedAlbum?.label.toUpperCase() : 'ALBUM NAME'}
          </span>
          <span
            className="text-[10px] font-bold font-[Montserrat] template_album_name"
            style={{
              color: colors.songTitleColor,
              fontFamily: selectedFont,
            }}
          >
            {selectedAlbum?.singerName ? selectedAlbum?.singerName.toUpperCase() : 'SINGER NAME'}
          </span>
          <p
            className={`text-[7px] bg-transparent tracking-tighter template_album_name`}
            style={{
              color: colors.descriptionColor,
              fontFamily: selectedFont,
            }}
          >
            {albumDescripition}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Template5;
