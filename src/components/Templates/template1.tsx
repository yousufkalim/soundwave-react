/* eslint-disable one-var */
import React, { FC, useEffect } from 'react';
import { Grid } from '@mui/material';
import Waveroom from '../WaveItem/index';
import { DataSetProps, SelectedAlbumProps, IStateColors, IPosterSize } from '../../types/index';

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
  posterType: string;
  BackgroundFrame: string;
  selectedFont: string;
  posterSize: IPosterSize;
}

const Template1: FC<Template1Props> = ({
  activeAlignment,
  selectedAlbum,
  albumDescripition,
  dataSets,
  colors,
  setColors,
  posterType,
  BackgroundFrame,
  selectedFont,
  posterSize,
}) => {
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
      className={`
      shadow-xl shadow-gray-700 overflow-hidden relative scale-[65%]
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
        height:
          posterSize.value === '12 X 18'
            ? '630px'
            : posterSize.value === '16 X 20'
            ? '640px'
            : posterSize.value === '18 X 24'
            ? '650px'
            : posterSize.value === '20 X 28'
            ? '660px'
            : posterSize.value === '24 X 36'
            ? '670px'
            : posterSize.value === '28 X 40'
            ? '680px'
            : '680px',
        width:
          posterSize.value === '12 X 18'
            ? '430px'
            : posterSize.value === '16 X 20'
            ? '440px'
            : posterSize.value === '18 X 24'
            ? '450px'
            : posterSize.value === '20 X 28'
            ? '460px'
            : posterSize.value === '24 X 36'
            ? '470px'
            : posterSize.value === '28 X 40'
            ? '480px'
            : '430px',
      }}
    >
      <div
        className={`pt-6 h-full`}
        style={{
          background: colors.posterColor,
          paddingLeft: BackgroundFrame ? '24px' : '28px',
          paddingRight: BackgroundFrame ? '8px' : '12px',
        }}
      >
        <div className="flex items-center justify-center flex-col mb-[1%]">
          <span
            className={
              selectedAlbum?.label && selectedAlbum?.label.length > 24
                ? `text-xl font-extrabold font-[Montserrat] template_album_name`
                : `text-2xl font-extrabold font-[Montserrat] template_album_name`
            }
            style={{
              color: colors.songTitleColor,
              fontFamily: selectedFont,
            }}
          >
            {selectedAlbum?.label ? selectedAlbum?.label.toUpperCase() : 'ALBUM NAME'}
          </span>
          <span
            className={
              selectedAlbum?.label && selectedAlbum?.label.length > 24
                ? `text-sm font-[Montserrat] template_album_name`
                : `text-md font-[Montserrat] template_album_name`
            }
            style={{
              color: colors.songTitleColor,
              fontFamily: selectedFont,
            }}
          >
            {selectedAlbum?.singerName ? selectedAlbum?.singerName.toUpperCase() : 'SINGER NAME'}
          </span>
        </div>
        <div className="h-full overflow-hidden pr-3">
          <Grid
            container
            spacing={1}
            className={`h-[73%] py-3 overflow-hidden`}
            style={{ background: colors?.boxColor }}
          >
            {dataSets.map((item, index) => {
              if (index < 24) {
                return (
                  <Waveroom
                    songsAmount={dataSets.length}
                    item={item}
                    selectedFont={selectedFont}
                    colors={colors}
                    key={item.trackId}
                    height={index < 24 ? 15 : 18}
                  />
                );
              } else {
                return '';
              }
            })}
          </Grid>
          <div className={`break-words h-[23%] ${activeAlignment} mt-[4px]`}>
            <p
              style={{
                color: colors.descriptionColor,
                fontFamily: selectedFont,
              }}
              className={`text-[5px] md:text-[6px] template_album_name bg-transparent tracking-tighter font-[Montserrat] text-ellipsis-8`}
            >
              {albumDescripition.split(/\s+/).slice(0, 150).join(' ')}.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template1;
