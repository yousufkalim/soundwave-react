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
      w-[73%] h-[95%] shadow-xl shadow-gray-700 mt-[1%]
      sm:w-[70%] sm:h-[98%]
      xmd:w-[60%] xmd:h-[100%]
      md:w-[78%] md:h-[66%] md:mt-[2%] 
      lg:w-[71%] lg:h-[75%]
      xl:w-[67%]
      sxl:w-[52%] sxl:h-[90%]
      mxl:w-[52%] mxl:h-[72%] 
      2xl:w-[47%] 2xl:h-[86%]
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
            className={`text-[6px] md:text-[7px] bg-transparent tracking-tighter template_album_name text-ellipsis-8 break-words`}
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
