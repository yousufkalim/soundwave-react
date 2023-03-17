import React, { FC, useEffect } from 'react';
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
      className={
        posterSize.value === '12 X 18'
          ? `overflow-hidden scale-[30%] absolute xs:scale-[35%] msm:scale-[35%] sm:scale-[35%] md:scale-[45%] lg:scale-[45%] sxl:scale-[50%] 2xl:scale-[50%]`
          : posterSize.value === '16 X 20'
          ? `overflow-hidden scale-[23%] absolute xs:scale-[30%] msm:scale-[30%] sm:scale-[30%] md:scale-[35%] lg:scale-[40%] sxl:scale-[40%] 2xl:scale-[40%]`
          : posterSize.value === '18 X 24'
          ? `overflow-hidden scale-[20%] absolute xs:scale-[25%] msm:scale-[25%] sm:scale-[25%] md:scale-[30%] lg:scale-[30%] sxl:scale-[30%] 2xl:scale-[35%]`
          : posterSize.value === '20 X 28'
          ? `overflow-hidden scale-[18%] absolute xs:scale-[20%] msm:scale-[20%] sm:scale-[30%] md:scale-[25%] lg:scale-[25%] sxl:scale-[25%] 2xl:scale-[30%]`
          : posterSize.value === '24 X 36'
          ? `overflow-hidden scale-[12%] absolute xs:scale-[15%] msm:scale-[15%] sm:scale-[12%] md:scale-[20%] lg:scale-[20%] sxl:scale-[20%] 2xl:scale-[22%]`
          : posterSize.value === '28 X 40'
          ? `overflow-hidden scale-[15%] absolute xs:scale-[15%] msm:scale-[15%] sm:scale-[15%] md:scale-[20%] lg:scale-[20%] sxl:scale-[20%] 2xl:scale-[20%]`
          : `overflow-hidden scale-[30%] absolute xs:scale-[35%] msm:scale-[35%] sm:scale-[35%] md:scale-[45%] lg:scale-[45%] sxl:scale-[50%] 2xl:scale-[50%]`
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
        className={`h-full w-full`}
        style={{
          background: colors.posterColor,
          paddingLeft: BackgroundFrame ? '5%' : '5%',
          paddingRight: BackgroundFrame ? '5%' : '5%',
          paddingTop: BackgroundFrame ? '6%' : '6%',
        }}
      >
        <div
          className={`h-[80%] px-1 pb-3 pt-[5%] border-2 border-white overflow-hidden flex flex-wrap justify-around`}
          style={{
            backgroundColor: colors.boxColor,
            alignItems:
              dataSets.length >= 10 && dataSets.find((item) => item?.songName?.length >= 30)
                ? 'baseline'
                : 'center',
          }}
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
          className="absolute bg-black text-center px-3 template_album_name"
          style={{
            left:
              posterSize.value === '12 X 18'
                ? BackgroundFrame
                  ? '4rem'
                  : '3.5rem'
                : posterSize.value === '16 X 20'
                ? BackgroundFrame
                  ? '5rem'
                  : '4.5rem'
                : posterSize.value === '18 X 24'
                ? BackgroundFrame
                  ? '5.5rem'
                  : '5rem'
                : posterSize.value === '20 X 28'
                ? BackgroundFrame
                  ? '6.5rem'
                  : '5.5rem'
                : posterSize.value === '24 X 36'
                ? BackgroundFrame
                  ? '7.8rem'
                  : '6.7rem'
                : posterSize.value === '28 X 40'
                ? BackgroundFrame
                  ? '9rem'
                  : '7.5rem'
                : '3rem',

            color: colors.songTitleColor,
            // bottom:
            //   selectedAlbum?.label && selectedAlbum?.label.length > 24
            //     ? BackgroundFrame
            //       ? '17%'
            //       : '16%'
            //     : BackgroundFrame
            //     ? '17%'
            //     : '16%',
            bottom:
              posterSize.value === '12 X 18'
                ? BackgroundFrame
                  ? '14.8%'
                  : '14.2%'
                : posterSize.value === '16 X 20'
                ? BackgroundFrame
                  ? '14.5%'
                  : '14%'
                : posterSize.value === '18 X 24'
                ? BackgroundFrame
                  ? '14.7%'
                  : '14.2%'
                : posterSize.value === '20 X 28'
                ? BackgroundFrame
                  ? '14.8%'
                  : '14.3%'
                : posterSize.value === '24 X 36'
                ? BackgroundFrame
                  ? '14.6%'
                  : '14%'
                : posterSize.value === '28 X 40'
                ? BackgroundFrame
                  ? '14.5%'
                  : '13.9%'
                : '16%',
          }}
        >
          <div
            style={{
              fontSize: selectedAlbum?.label
                ? posterSize.value === '12 X 18'
                  ? selectedAlbum?.label.length > 24
                    ? '3rem'
                    : '4rem'
                  : posterSize.value === '16 X 20'
                  ? selectedAlbum?.label.length > 24
                    ? '3.2rem'
                    : '4.2rem'
                  : posterSize.value === '18 X 24'
                  ? selectedAlbum?.label.length > 24
                    ? '3.5rem'
                    : '4.6rem'
                  : posterSize.value === '20 X 28'
                  ? selectedAlbum?.label.length > 24
                    ? '4rem'
                    : '5.4rem'
                  : posterSize.value === '24 X 36'
                  ? selectedAlbum?.label.length > 24
                    ? '5rem'
                    : '7rem'
                  : posterSize.value === '28 X 40' && selectedAlbum?.label.length > 24
                  ? '5.5rem'
                  : '7.7rem'
                : '3rem',
            }}
            className={
              selectedAlbum?.label && selectedAlbum?.label.length > 24
                ? `italic md:font-semibold font-medium font-[Morganite] `
                : `italic md:font-semibold font-medium font-[Morganite]`
            }
          >
            {selectedAlbum?.label ? selectedAlbum?.label.toUpperCase() : 'ALBUM NAME'}
          </div>
          <div
            style={{
              fontSize: selectedAlbum?.label
                ? posterSize.value === '12 X 18'
                  ? selectedAlbum?.label.length > 24
                    ? '1.7em'
                    : '1.1em'
                  : posterSize.value === '16 X 20'
                  ? selectedAlbum?.label.length > 24
                    ? '2em'
                    : '1.3em'
                  : posterSize.value === '18 X 24'
                  ? selectedAlbum?.label.length > 24
                    ? '2.3em'
                    : '1.6em'
                  : posterSize.value === '20 X 28'
                  ? selectedAlbum?.label.length > 24
                    ? '2.6em'
                    : '1.8em'
                  : posterSize.value === '24 X 36'
                  ? selectedAlbum?.label.length > 24
                    ? '3.5em'
                    : '2.3em'
                  : posterSize.value === '28 X 40' && selectedAlbum?.label.length > 24
                  ? '4em'
                  : '2.6rem'
                : '.8em',
            }}
            className={
              selectedAlbum?.label && selectedAlbum?.label.length > 24
                ? 'md:font-bold font-medium font-[Morganite] mt-[-1rem] text-center'
                : 'md:font-bold font-medium [Morganite] mt-[-1rem] text-center'
            }
          >
            {selectedAlbum?.singerName ? selectedAlbum.singerName : 'SINGER NAME'}
          </div>
        </div>
        <div
          className={`${activeAlignment} text-left absolute left-0 right-0 px-[5%] w-full pt-[9%] template_album_name overflow-hidden `}
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
          <p
            style={{
              letterSpacing: selectedFont === 'Morganite' ? '0' : '-0.05em',
            }}
            className={`bg-transparent text-ellipsis-8 tracking-tighter`}
          >
            <i>
              {/* <b
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
              </b> */}
            </i>
            {albumDescripition}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Template4;
