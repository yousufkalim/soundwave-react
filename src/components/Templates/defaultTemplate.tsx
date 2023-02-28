import React, { FC, useEffect } from 'react';
import { Grid } from '@mui/material';
import { DataSetProps, SelectedAlbumProps, IStateColors, IPosterSize } from '../../types/index';
import Waveroom from '../WaveItem/index';
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
  posterType: string;
  BackgroundFrame: string;
  selectedFont: string;
  posterSize: IPosterSize;
}

const Template2: FC<Template2Props> = ({
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
      boxColor: '#CCCCCC',
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
      className={`
      shadow-xl shadow-gray-700 overflow-hidden scale-[70%] relative
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
        className={`h-full pt-6`}
        style={{
          background: colors.posterColor,
          paddingLeft: BackgroundFrame ? ' 24px' : '28px',
          paddingRight: BackgroundFrame ? ' 22px' : '26px',
        }}
      >
        <Grid
          container
          spacing={1}
          className={`h-[77%] px-1 py-3 overflow-hidden`}
          style={{ background: colors.boxColor, width: '100%', marginLeft: '0', marginTop: '0' }}
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
          className={
            selectedAlbum?.label && selectedAlbum?.label.length > 24
              ? `break-words w-full h-[23%] text-ellipsis-8 px-6 absolute right-0 bottom-[1%]`
              : `break-words w-full h-[23%] text-ellipsis-8 px-6 absolute right-0 bottom-[2%]`
          }
        >
          <div className="text-left pl-2">
            <span
              className={
                selectedAlbum?.label && selectedAlbum?.label.length > 24
                  ? `text-lg font-semibold font-proxima-nova template_album_name`
                  : `text-2xl md:text-2xl sxl:text-2xl font-semibold font-proxima-nova template_album_name`
              }
              style={{
                color: colors.songTitleColor,
                fontFamily: selectedFont,
              }}
            >
              <i>{selectedAlbum?.label ? selectedAlbum?.label.toUpperCase() : 'Album/Song Name'}</i>
            </span>
          </div>
          <div
            className={`
            ${activeAlignment} text-[5px] bg-transparent tracking-tighter font-proxima-nova template_album_name 
            md:text-[6px]
            xl:mt-0
            2xl:mt-2
            `}
            style={{
              color: colors.descriptionColor,
              fontFamily: selectedFont,
            }}
          >
            {albumDescripition.split(/\s+/).slice(0, 150).join(' ')}.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template2;
