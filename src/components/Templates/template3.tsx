import React, { FC, useEffect } from 'react';
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
  flag: boolean;
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
  flag,
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
      className={
        posterSize.value === '12 X 18'
          ? `overflow-hidden scale-[38%] absolute xs:scale-[40%] msm:scale-[40%] sm:scale-[40%] md:scale-[50%] lg:scale-[50%] sxl:scale-[55%] 2xl:scale-[55%]`
          : posterSize.value === '16 X 20'
          ? `overflow-hidden scale-[28%] absolute xs:scale-[35%] msm:scale-[35%] sm:scale-[35%] md:scale-[40%] lg:scale-[45%] sxl:scale-[45%] 2xl:scale-[45%]`
          : posterSize.value === '18 X 24'
          ? `overflow-hidden scale-[25%] absolute xs:scale-[30%] msm:scale-[30%] sm:scale-[30%] md:scale-[35%] lg:scale-[35%] sxl:scale-[35%] 2xl:scale-[40%]`
          : posterSize.value === '20 X 28'
          ? `overflow-hidden scale-[23%] absolute xs:scale-[25%] msm:scale-[25%] sm:scale-[25%] md:scale-[30%] lg:scale-[30%] sxl:scale-[30%] 2xl:scale-[35%]`
          : posterSize.value === '24 X 36'
          ? `overflow-hidden scale-[17%] absolute xs:scale-[20%] msm:scale-[20%] sm:scale-[17%] md:scale-[25%] lg:scale-[25%] sxl:scale-[25%] 2xl:scale-[25%]`
          : posterSize.value === '28 X 40'
          ? `overflow-hidden scale-[18%] absolute xs:scale-[20%] msm:scale-[20%] sm:scale-[20%] md:scale-[25%] lg:scale-[25%] sxl:scale-[25%] 2xl:scale-[23%]`
          : `overflow-hidden scale-[40%] absolute xs:scale-[40%] msm:scale-[40%] sm:scale-[40%] md:scale-[50%] lg:scale-[50%] sxl:scale-[55%] 2xl:scale-[55%]`
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
        className={`h-full`}
        style={{
          background: colors.posterColor,
          paddingLeft: BackgroundFrame ? '16px' : '5%',
          paddingRight: BackgroundFrame ? '16px' : '5%',
          paddingTop: BackgroundFrame ? '16px' : '6%',
        }}
      >
        <div
          className={`h-[77%] pb-3 pt-[5%] py-3 overflow-hidden flex flex-wrap justify-around items-baseline`}
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
        <div
          className={
            selectedAlbum?.label && selectedAlbum?.label.length > 15
              ? flag
                ? BackgroundFrame
                  ? 'text-center relative bottom-[2.5%] font-[Aemstel-Regular] template_album_name tracking-tighter'
                  : 'text-center relative bottom-[2.5%] font-[Aemstel-Regular] template_album_name tracking-tighter'
                : BackgroundFrame
                ? 'text-center relative bottom-[2.5%] font-[Aemstel-Regular] template_album_name tracking-tighter'
                : 'text-center relative bottom-[2.5%] font-[Aemstel-Regular] template_album_name tracking-tighter'
              : flag
              ? BackgroundFrame
                ? 'text-center relative bottom-[3%] font-[Aemstel-Regular] template_album_name'
                : 'text-center relative bottom-[3%] font-[Aemstel-Regular] template_album_name'
              : BackgroundFrame
              ? 'text-center relative bottom-[3%]  font-[Aemstel-Regular] template_album_name'
              : 'text-center relative bottom-[3%]  font-[Aemstel-Regular] template_album_name'
          }
          style={{
            color: colors.songTitleColor,
            fontFamily: selectedFont,
            fontSize: selectedAlbum?.label
              ? posterSize.value === '12 X 18'
                ? selectedAlbum?.label.length > 15
                  ? '2.1rem'
                  : '3rem'
                : posterSize.value === '16 X 20'
                ? selectedAlbum?.label.length > 15
                  ? '2.6rem'
                  : '4rem'
                : posterSize.value === '18 X 24'
                ? selectedAlbum?.label.length > 15
                  ? '3rem'
                  : '4.2rem'
                : posterSize.value === '20 X 28'
                ? selectedAlbum?.label.length > 15
                  ? '3.5rem'
                  : '5rem'
                : posterSize.value === '24 X 36'
                ? selectedAlbum?.label.length > 15
                  ? '4.5rem'
                  : '6rem'
                : posterSize.value === '28 X 40' && selectedAlbum?.label.length > 15
                ? '4.8rem'
                : '7rem'
              : '3rem',
          }}
        >
          {selectedAlbum?.label ? selectedAlbum?.label.toUpperCase() : 'Album Name'}
        </div>
        <div
          className={` bg-transparent tracking-tighter h-[23%] ${activeAlignment} text-[5px] md:text-[6px]`}
          style={{
            color: colors.descriptionColor,
            fontFamily: selectedFont,
            fontSize:
              posterSize.value === '12 X 18'
                ? '12px'
                : posterSize.value === '16 X 20'
                ? '14px'
                : posterSize.value === '18 X 24'
                ? '16px'
                : posterSize.value === '20 X 28'
                ? '18px'
                : posterSize.value === '24 X 36'
                ? '24px'
                : posterSize.value === '28 X 40'
                ? '26px'
                : '10px',
          }}
        >
          <p className={`mb-[3.5%]`}>
            <i>
              <b
                style={{
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
          <div className="text-center">
            <span
              style={{
                fontSize:
                  posterSize.value === '12 X 18'
                    ? '0.675rem'
                    : posterSize.value === '16 X 20'
                    ? '1rem'
                    : posterSize.value === '18 X 24'
                    ? '1.2rem'
                    : posterSize.value === '20 X 28'
                    ? '1.4rem'
                    : posterSize.value === '24 X 36'
                    ? '1.8rem'
                    : posterSize.value === '28 X 40'
                    ? '2rem'
                    : '3rem',
              }}
              className="border p-1 rounded-lg font-bold"
            >
              {selectedAlbum?.singerName ? selectedAlbum.singerName.toUpperCase() : 'SINGER NAME'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template3;
