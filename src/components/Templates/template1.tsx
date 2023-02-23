/* eslint-disable one-var */
import React, { FC, useEffect } from 'react';
import { Grid } from '@mui/material';
import Waveroom from '../WaveItem/index';
import { DataSetProps, SelectedAlbumProps, IStateColors } from '../../types/index';

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
      className={`w-[73%] h-[95%] shadow-xl shadow-gray-700 mt-[1%]
      sm:w-[70%] sm:h-[98%]
      xmd:w-[60%] xmd:h-[100%]
      md:w-[78%] md:h-[66%] md:mt-[2%] 
      lg:w-[71%] lg:h-[75%]
      xl:w-[67%]
      sxl:w-[52%] sxl:h-[90%]
      mxl:w-[52%] mxl:h-[72%] 
      2xl:w-[47%] 2xl:h-[86%]`}
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
                : `text-4xl font-extrabold font-[Montserrat] template_album_name`
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
            className={`h-[73%] py-3`}
            style={{ background: colors?.boxColor }}
          >
            {dataSets.map((item, index) => {
              if (index < 30) {
                return (
                  <Waveroom
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
          <div className={`break-words h-[23%] ${activeAlignment} mt-[-10px]`}>
            <p
              style={{
                color: colors.descriptionColor,
                fontFamily: selectedFont,
              }}
              className={`text-[6px] md:text-[7px] template_album_name bg-transparent tracking-tighter font-[Montserrat] text-ellipsis-8`}
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
