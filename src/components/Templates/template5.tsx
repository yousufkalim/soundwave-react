import React, { FC, useEffect } from 'react';
import { Grid } from '@mui/material';
import Waveform from 'react-audio-waveform';
import { rgbaToHex } from '../../utils/common';
import { DataSetProps, SelectedAlbumProps, IStateColors } from '../../types/index';

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
  posterType: string;
  BackgroundFrame: string;
  selectedFont: string;
}

const Template5: FC<Template5Props> = ({
  activeAlignment,
  selectedAlbum,
  albumDescripition,
  dataSets,
  colors,
  posterType,
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
          posterType !== 'No Frame' && posterType !== 'Thin Canvas' && posterType !== 'Thick Canvas'
            ? `url(${BackgroundFrame}) center no-repeat`
            : '',
        padding:
          posterType !== 'No Frame' && posterType !== 'Thin Canvas' && posterType !== 'Thick Canvas'
            ? BackgroundFrame
              ? '12px'
              : '0px'
            : '',
      }}
    >
      <div
        className={`bg-gradient-to-b h-full pt-6 px-6 `}
        style={{ background: colors.posterColor }}
      >
        <Grid container spacing={1} className={`h-[75%]`}>
          {dataSets.map((item, index) => {
            if (index < 18) {
              return (
                <Grid item xs={4} className="h-[3.5%]" key={item.trackId}>
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
              );
            } else {
              return '';
            }
          })}
        </Grid>
        <div
          className={`flex flex-col w-[90%] break-words ${activeAlignment} text-center absolute bottom-6`}
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
            className={`text-[7px] bg-transparent tracking-tighter template_album_name text-ellipsis-8 break-words`}
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
