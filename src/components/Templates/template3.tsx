import React, { FC, useEffect } from 'react';
import { Grid } from '@mui/material';
// import { rgbaToHex } from '../../utils/common';
import { DataSetProps, SelectedAlbumProps, IStateColors, IPosterSize } from '../../types/index';
import Waveroom from '../WaveItem/index';

interface Template3Props {
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

const Template3: FC<Template3Props> = ({
  activeAlignment,
  selectedAlbum,
  albumDescripition,
  dataSets,
  colors,
  posterType,
  setColors,
  BackgroundFrame,
  selectedFont,
  posterSize,
}) => {
  useEffect(() => {
    setColors({
      boxColor: 'linear-gradient(180deg, rgb(226, 135, 67) 0%, rgb(252, 102, 109) 100%)',
      posterColor: '#000',
      soundWaveColor: 'rgba(0,0,0,1)',
      soundWaveNameColor: 'rgba(0,0,0,1)',
      songTitleColor: '#fff',
      descriptionColor: 'rgba(255,255,255,1)',
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
      shadow-xl shadow-gray-700 overflow-hidden relative scale-[70%]
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
            ? '580px'
            : posterSize.value === '16 X 20'
            ? '610px'
            : posterSize.value === '18 X 24'
            ? '580px'
            : posterSize.value === '20 X 28'
            ? '676px'
            : posterSize.value === '24 X 36'
            ? '580px'
            : posterSize.value === '28 X 40'
            ? '611px'
            : '680px',
        width:
          posterSize.value === '12 X 18'
            ? '420px'
            : posterSize.value === '16 X 20'
            ? '450px'
            : posterSize.value === '18 X 24'
            ? '460px'
            : posterSize.value === '20 X 28'
            ? '440px'
            : posterSize.value === '24 X 36'
            ? '420px'
            : posterSize.value === '28 X 40'
            ? '457px'
            : '480px',
      }}
    >
      <div
        className={`h-full pt-8`}
        style={{
          background: colors.posterColor,
          paddingLeft: BackgroundFrame ? ' 28px' : '32px',
          paddingRight: BackgroundFrame ? ' 20px' : '24px',
        }}
      >
        <Grid
          container
          spacing={1}
          className={`h-[77%] px-1 py-3 bg-gradient-to-b`}
          style={{ background: colors?.boxColor }}
        >
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

        <div
          className={
            selectedAlbum?.label && selectedAlbum?.label.length > 24
              ? 'text-center relative bottom-3 w-full'
              : 'text-center relative bottom-6 w-full'
          }
        >
          <span
            className={
              selectedAlbum?.label && selectedAlbum?.label.length > 24
                ? `text-xl font-extrabold font-[Aemstel-Regular] template_album_name`
                : `text-4xl font-extrabold font-[Aemstel-Regular] template_album_name`
            }
            style={{
              color: colors.songTitleColor,
              fontFamily: selectedFont,
            }}
          >
            {selectedAlbum?.label ? selectedAlbum?.label.toUpperCase() : 'Album Name'}
          </span>
        </div>
        <div
          className={`text-center h-[23%] ${activeAlignment}  template_album_name mt-[-20px]`}
          style={{
            color: colors.descriptionColor,
            fontFamily: selectedFont,
          }}
        >
          <p
            className={`text-[5px] md:text-[6px] lg:text-[7px] bg-transparent tracking-tighter mb-[1%] md:mb-[1%] text-ellipsis-8 break-words`}
          >
            {albumDescripition.split(/\s+/).slice(0, 150).join(' ')}.
          </p>
          <span className="text-[7px] md:text-[10px] border p-1 rounded-lg font-bold">
            {selectedAlbum?.singerName ? selectedAlbum.singerName.toUpperCase() : 'SINGER NAME'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Template3;
