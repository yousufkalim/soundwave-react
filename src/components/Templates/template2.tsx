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
  flag: boolean;
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
  flag,
}) => {
  useEffect(() => {
    setColors({
      boxColor: '#e28743',
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
      // className={` w-[96%] h-[55%] sm:w-[80%] sm:h-[70%] shadow-lg shadow-[#BAB8B8] relative`}
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
        className={`h-full pt-6`}
        style={{
          background: colors.posterColor,
          paddingLeft: BackgroundFrame ? ' 24px' : '28px',
          paddingRight: BackgroundFrame ? ' 20px' : '24px',
        }}
      >
        <Grid
          container
          spacing={1}
          className={`h-[77%] px-1 py-3`}
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
              ? flag
                ? `break-words w-full h-[23%] text-ellipsis-8 px-6 absolute right-0 bottom-[3%]`
                : `break-words w-full h-[23%] text-ellipsis-8 px-6 absolute right-0 bottom-[2%]`
              : flag
              ? `break-words w-full h-[23%] text-ellipsis-8 px-6 absolute right-0 bottom-[4%]`
              : `break-words w-full h-[23%] text-ellipsis-8 px-6 absolute right-0 bottom-[2%]`
          }
        >
          <div className="text-center">
            <span
              className={
                selectedAlbum?.label && selectedAlbum?.label.length > 24
                  ? `text-lg font-extrabold font-proxima-nova template_album_name`
                  : `text-2xl font-extrabold font-proxima-nova template_album_name`
              }
              style={{
                color: colors.songTitleColor,
                fontFamily: selectedFont,
              }}
            >
              <i>{selectedAlbum?.label ? selectedAlbum?.label.toUpperCase() : 'ALBUM NAME'}</i>
            </span>
          </div>
          <div
            className={`${activeAlignment} bg-transparent tracking-tighter font-proxima-nova template_album_name
            text-[5px] md:text-[6px] 
            xl:mt-0
            2xl:mt-1
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
