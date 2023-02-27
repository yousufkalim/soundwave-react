import React, { FC, useEffect } from 'react';
import { Grid } from '@mui/material';
import Waveroom from '../WaveItem/index';

// import { rgbaToHex } from '../../utils/common';
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
  useEffect(() => {
    setColors({
      boxColor: 'transparent',
      posterColor:
        'linear-gradient(180deg, rgba(255,255,255,1) 0%,  rgba(47, 47, 47, 1) 70% ,rgba(0,0,0,1) 100%)',
      soundWaveColor: 'rgba(0,0,0,1)',
      soundWaveNameColor: '#000',
      songTitleColor: '#fff',
      descriptionColor: '#fff',
    });
  }, []);

  return (
    <div
      id="custom-poster-template"
      className={`
      shadow-xl shadow-gray-700 overflow-hidden relative
      w-[500px] h-[680px] scale-[70%]
      xs:scale-[80%]
      msm:scale-[85%]
      sm:scale-[95%]
      md:scale-[80%]
      lg:scale-[90%]
      sxl:scale-[95%]
      2xl:scale-[100%]
      `}
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
        className={`bg-gradient-to-b h-full pt-6 px-6`}
        style={{ background: colors.posterColor }}
      >
        <Grid container spacing={1} className={`h-[75%]`}>
          {dataSets.map((item, index) => {
            if (index < 30) {
              return (
                <Waveroom
                  songsAmount={dataSets.length}
                  item={item}
                  selectedFont={selectedFont}
                  colors={colors}
                  key={item.trackId}
                  height={index < 30 ? 15 : 18}
                />
              );
            } else {
              return '';
            }
          })}
        </Grid>
        <div className={`flex flex-col break-words ${activeAlignment} text-center`}>
          <span
            className={
              selectedAlbum?.label && selectedAlbum?.label.length > 24
                ? `text-2xl font-extrabold font-[blowbrush] tracking-wide template_album_name`
                : `text-4xl font-extrabold font-[blowbrush] tracking-wide template_album_name`
            }
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
            className={`text-[5px] md:text-[6px] lg:text-[7px] bg-transparent tracking-tighter template_album_name text-ellipsis-8 break-words`}
            style={{
              color: colors.descriptionColor,
              fontFamily: selectedFont,
            }}
          >
            {albumDescripition.split(/\s+/).slice(0, 150).join(' ')}.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Template5;
