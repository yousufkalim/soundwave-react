import React, { FC, useEffect } from 'react';
import { Grid } from '@mui/material';
import Waveroom from '../WaveItem';
import { DataSetProps, SelectedAlbumProps, IStateColors, IPosterSize } from '../../types/index';

interface Template6Props {
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

const Template6: FC<Template6Props> = ({
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
      boxColor: 'transparent',
      posterColor: 'linear-gradient(180deg, rgb(233, 132, 209) 0%, rgb(233,132,73) 100%)',
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
      <div
        className={`bg-gradient-to-b h-full pt-6 pl-6 pr-4`}
        style={{ background: colors.posterColor }}
      >
        <div className="flex items-center justify-center mb-[3%]">
          <span
            className={
              selectedAlbum?.label && selectedAlbum?.label.length > 24
                ? `text-md font-bold font-[blacksword] template_album_name tracking-tighter`
                : `text-xl font-extrabold font-[blacksword] template_album_name tracking-tighter`
            }
            style={{
              color: colors.songTitleColor,
              fontFamily: selectedFont,
            }}
          >
            {selectedAlbum?.label ? selectedAlbum?.label.toUpperCase() : 'ALBUM NAME'}
          </span>
        </div>
        <Grid
          container
          spacing={1}
          className={`h-[75%] px-1 py-2`}
          // style={{ backgroundColor: '' }}
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
          className={`${activeAlignment} mt-[2%] text-center overflow-hidden text-ellipsis-8 break-words template_album_name`}
          style={{
            color: colors.descriptionColor,
            fontFamily: selectedFont,
          }}
        >
          <p
            className={`text-[5px] md:text-[6px] bg-transparent tracking-tighter font-[Montserrat]`}
          >
            {albumDescripition.split(/\s+/).slice(0, 150).join(' ')}.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Template6;
