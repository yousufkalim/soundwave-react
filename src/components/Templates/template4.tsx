import React, { FC, useEffect } from 'react';
import { Grid } from '@mui/material';
import Waveroom from '../WaveItem/index';
import { DataSetProps, SelectedAlbumProps, IStateColors, IPosterSize } from '../../types/index';

interface Template4Props {
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

const Template4: FC<Template4Props> = ({
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
      boxColor: '#000',
      posterColor: '#000',
      soundWaveColor: 'rgba(255,255,255,1)',
      soundWaveNameColor: '#fff',
      songTitleColor: '#fff',
      descriptionColor: '#fff',
    });
  }, []);

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
      <div className={`h-full pt-8 pl-8 pr-6 `} style={{ background: colors.posterColor }}>
        <Grid
          container
          spacing={1}
          className={`h-[77%] px-1 py-3 border-2 border-white`}
          style={{ backgroundColor: colors.boxColor }}
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
        <div
          className="absolute left-7 bg-black pl-[2px] template_album_name"
          style={{
            color: colors.songTitleColor,
            bottom: selectedAlbum?.label && selectedAlbum?.label.length > 24 ? '18%' : '17%',
            fontFamily: selectedFont,
          }}
        >
          <div
            className={
              selectedAlbum?.label && selectedAlbum?.label.length > 24
                ? `text-[2rem] font-extrabold font-[Morganite]`
                : `text-[2rem] font-extrabold font-[Morganite]`
            }
          >
            {selectedAlbum?.label ? selectedAlbum?.label.toUpperCase() : 'ALBUM NAME'}
          </div>
          <div
            className={
              selectedAlbum?.label && selectedAlbum?.label.length > 24
                ? 'text-[.8em] font-bold font-[Morganite] mt-[-1rem]'
                : 'text-[1em] font-bold font-[Morganite] mt-[-1rem]'
            }
          >
            {selectedAlbum?.singerName ? selectedAlbum.singerName : 'SINGER NAME'}
          </div>
        </div>
        <div
          className={`${activeAlignment} text-left pt-11 template_album_name overflow-hidden `}
          style={{
            color: colors.descriptionColor,
            fontFamily: selectedFont,
          }}
        >
          <p
            className={`text-[5px] md:text-[6px]   bg-transparent text-ellipsis-8 tracking-tighter`}
          >
            {albumDescripition.split(/\s+/).slice(0, 150).join(' ')}.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Template4;
