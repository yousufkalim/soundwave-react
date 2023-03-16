import React, { FC, useEffect } from 'react';
import Waveroom from '../WaveItem/index';
// import { rgbaToHex } from '../../utils/common';
import { DataSetProps, SelectedAlbumProps, IStateColors, IPosterSize } from '../../types/index';

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
  posterSize: IPosterSize;
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
  posterSize,
}) => {
  useEffect(() => {
    setColors({
      boxColor: 'transparent',
      posterColor: 'linear-gradient(180deg, rgb(255,255,255) 60%,  rgb(0, 0, 0) 100%',
      soundWaveColor: 'rgba(0,0,0,1)',
      soundWaveNameColor: '#000',
      songTitleColor: '#fff',
      descriptionColor: '#fff',
    });
  }, []);
  console.log('colors.posterColor', colors?.posterColor);

  return (
    <div
      id="custom-poster-template"
      className={
        posterSize.value === '12 X 18'
          ? `overflow-hidden scale-[33%] absolute xs:scale-[35%] msm:scale-[35%] sm:scale-[35%] md:scale-[45%] lg:scale-[45%] sxl:scale-[50%] 2xl:scale-[50%]`
          : posterSize.value === '16 X 20'
          ? `overflow-hidden scale-[23%] absolute xs:scale-[30%] msm:scale-[30%] sm:scale-[30%] md:scale-[35%] lg:scale-[40%] sxl:scale-[40%] 2xl:scale-[40%]`
          : posterSize.value === '18 X 24'
          ? `overflow-hidden scale-[20%] absolute xs:scale-[25%] msm:scale-[25%] sm:scale-[25%] md:scale-[30%] lg:scale-[30%] sxl:scale-[30%] 2xl:scale-[35%]`
          : posterSize.value === '20 X 28'
          ? `overflow-hidden scale-[18%] absolute xs:scale-[20%] msm:scale-[20%] sm:scale-[30%] md:scale-[25%] lg:scale-[25%] sxl:scale-[25%] 2xl:scale-[30%]`
          : posterSize.value === '24 X 36'
          ? `overflow-hidden scale-[15%] absolute xs:scale-[15%] msm:scale-[15%] sm:scale-[12%] md:scale-[20%] lg:scale-[20%] sxl:scale-[20%] 2xl:scale-[22%]`
          : posterSize.value === '28 X 40'
          ? `overflow-hidden scale-[13%] absolute xs:scale-[15%] msm:scale-[15%] sm:scale-[15%] md:scale-[20%] lg:scale-[20%] sxl:scale-[20%] 2xl:scale-[20%]`
          : `overflow-hidden scale-[33%] absolute xs:scale-[35%] msm:scale-[35%] sm:scale-[35%] md:scale-[45%] lg:scale-[45%] sxl:scale-[50%] 2xl:scale-[50%]`
      }
      style={{
        background:
          posterType !== 'No Frame' && posterType !== 'Thin Canvas' && posterType !== 'Thick Canvas'
            ? `${BackgroundFrame}`
            : '',
        padding:
          posterSize.value === '12 X 18' &&
          posterType !== 'No Frame' &&
          posterType !== 'Thin Canvas' &&
          posterType !== 'Thick Canvas'
            ? BackgroundFrame
              ? '12px'
              : '0px'
            : posterSize.value === '16 X 20' &&
              posterType !== 'No Frame' &&
              posterType !== 'Thin Canvas' &&
              posterType !== 'Thick Canvas'
            ? BackgroundFrame
              ? '14px'
              : '0px'
            : posterSize.value === '18 X 24' &&
              posterType !== 'No Frame' &&
              posterType !== 'Thin Canvas' &&
              posterType !== 'Thick Canvas'
            ? BackgroundFrame
              ? '16px'
              : '0px'
            : posterSize.value === '20 X 28' &&
              posterType !== 'No Frame' &&
              posterType !== 'Thin Canvas' &&
              posterType !== 'Thick Canvas'
            ? BackgroundFrame
              ? '20px'
              : '0px'
            : posterSize.value === '24 X 36' &&
              posterType !== 'No Frame' &&
              posterType !== 'Thin Canvas' &&
              posterType !== 'Thick Canvas'
            ? BackgroundFrame
              ? '26px'
              : '0px'
            : posterSize.value === '28 X 40' &&
              posterType !== 'No Frame' &&
              posterType !== 'Thin Canvas' &&
              posterType !== 'Thick Canvas'
            ? BackgroundFrame
              ? '30px'
              : '0px'
            : '',
        height:
          posterSize.value === '12 X 18'
            ? '1298px'
            : posterSize.value === '16 X 20'
            ? '1440.5px'
            : posterSize.value === '18 X 24'
            ? '1728px'
            : posterSize.value === '20 X 28'
            ? '2015px'
            : posterSize.value === '24 X 36'
            ? '2592px'
            : posterSize.value === '28 X 40'
            ? '2880px'
            : '1298px',
        width:
          posterSize.value === '12 X 18'
            ? '864px'
            : posterSize.value === '16 X 20'
            ? '1151.7px'
            : posterSize.value === '18 X 24'
            ? '1296px'
            : posterSize.value === '20 X 28'
            ? '1440px'
            : posterSize.value === '24 X 36'
            ? '1728px'
            : posterSize.value === '28 X 40'
            ? '2015.7px'
            : '864px',
        boxShadow: '0px 15px 40px rgba(0, 0, 0, 0.5)',
      }}
    >
      <div
        className={`bg-gradient-to-b h-full w-full`}
        style={{
          background: colors.posterColor,
          paddingLeft: BackgroundFrame ? '5%' : '5%',
          paddingRight: BackgroundFrame ? '5%' : '5%',
          paddingTop: BackgroundFrame ? '6%' : '6%',
        }}
      >
        <div
          className={`h-[77%] px-1 pb-3 pt-[5%] py-3 overflow-hidden flex flex-wrap justify-around items-baseline`}
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
                  height={dataSets.length <= 18 ? 18 : 15}
                  posterRatio={
                    posterSize.value === '12 X 18'
                      ? '1218'
                      : posterSize.value === '16 X 20'
                      ? '1620'
                      : posterSize.value === '18 X 24'
                      ? '1824'
                      : posterSize.value === '20 X 28'
                      ? '2028'
                      : posterSize.value === '24 X 36'
                      ? '2436'
                      : posterSize.value === '28 X 40'
                      ? '2840'
                      : '1218'
                  }
                />
              );
            } else {
              return '';
            }
          })}
        </div>
        <div className={`flex flex-col break-words  text-center`}>
          <span
            className={
              selectedAlbum?.label && selectedAlbum?.label.length > 24
                ? `font-extrabold w-full left-0 right-0 px-[5%] font-[A Aksentuasi] tracking-tighter template_album_name`
                : `font-extrabold w-full left-0 right-0 px-[5%] font-[A Aksentuasi] tracking-wide template_album_name`
            }
            style={{
              color: colors.songTitleColor,
              fontFamily: selectedFont,
              fontSize: selectedAlbum?.label
                ? posterSize.value === '12 X 18'
                  ? selectedAlbum?.label.length > 24
                    ? '1.8rem'
                    : '2.5rem'
                  : posterSize.value === '16 X 20'
                  ? selectedAlbum?.label.length > 24
                    ? '2.5rem'
                    : '3.2rem'
                  : posterSize.value === '18 X 24'
                  ? selectedAlbum?.label.length > 24
                    ? '2.8rem'
                    : '3.5rem'
                  : posterSize.value === '20 X 28'
                  ? selectedAlbum?.label.length > 24
                    ? '3.2rem'
                    : '4rem'
                  : posterSize.value === '24 X 36'
                  ? selectedAlbum?.label.length > 24
                    ? '3.8rem'
                    : '5rem'
                  : posterSize.value === '28 X 40' && selectedAlbum?.label.length > 24
                  ? '4.5rem'
                  : '5.5rem'
                : '3rem',
            }}
          >
            {selectedAlbum?.label ? selectedAlbum?.label.toUpperCase() : 'ALBUM NAME'}
          </span>
          <span
            className="font-bold font-[Montserrat] template_album_name"
            style={{
              color: colors.songTitleColor,
              fontFamily: selectedFont,
              fontSize: selectedAlbum?.label
                ? posterSize.value === '12 X 18'
                  ? selectedAlbum?.label.length > 24
                    ? '1em'
                    : '1em'
                  : posterSize.value === '16 X 20'
                  ? selectedAlbum?.label.length > 24
                    ? '1.3em'
                    : '1.3em'
                  : posterSize.value === '18 X 24'
                  ? selectedAlbum?.label.length > 24
                    ? '1.5em'
                    : '1.5em'
                  : posterSize.value === '20 X 28'
                  ? selectedAlbum?.label.length > 24
                    ? '1.8em'
                    : '1.8em'
                  : posterSize.value === '24 X 36'
                  ? selectedAlbum?.label.length > 24
                    ? '2.2em'
                    : '2.2em'
                  : posterSize.value === '28 X 40' && selectedAlbum?.label.length > 24
                  ? '2.5em'
                  : '2.5em'
                : '.8em',
            }}
          >
            {selectedAlbum?.singerName ? selectedAlbum?.singerName.toUpperCase() : 'SINGER NAME'}
          </span>
          <p
            className={`${activeAlignment} text-[5px] md:text-[6px] bg-transparent tracking-tighter template_album_name text-ellipsis-8 break-words mt-[1.8%] font-[Montserrat]`}
            style={{
              color: colors.descriptionColor,
              fontFamily: selectedFont,
              fontSize:
                posterSize.value === '12 X 18'
                  ? '14px'
                  : posterSize.value === '16 X 20'
                  ? '16px'
                  : posterSize.value === '18 X 24'
                  ? '18px'
                  : posterSize.value === '20 X 28'
                  ? '20px'
                  : posterSize.value === '24 X 36'
                  ? '24px'
                  : posterSize.value === '28 X 40'
                  ? '26px'
                  : '10px',
            }}
          >
            <i>
              <b
                style={{
                  fontSize:
                    posterSize.value === '12 X 18'
                      ? '16px'
                      : posterSize.value === '16 X 20'
                      ? '18px'
                      : posterSize.value === '18 X 24'
                      ? '20px'
                      : posterSize.value === '20 X 28'
                      ? '22px'
                      : posterSize.value === '24 X 36'
                      ? '26px'
                      : posterSize.value === '28 X 40'
                      ? '28px'
                      : '10px',
                }}
                className="text-[6px] md:text-[9px]"
              >
                {albumDescripition.split(' ')[0]}{' '}
              </b>
            </i>
            {albumDescripition.split(' ').slice(1).join(' ')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Template5;
