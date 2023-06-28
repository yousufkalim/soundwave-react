import React, { FC, useEffect, useState } from 'react';
import Waveroom from '../WaveItem/index';
import {
  DataSetProps,
  SelectedAlbumProps,
  IStateColors,
  IPosterSize,
  IFontSize,
} from '../../types/index';

import {
  posterSizes,
  // sizeScales,
  posterSizeToBorderWidth,
  sizeValues,
  posterHeigth,
  posterWidth,
} from '../../utils/data';

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
  fontSize: IFontSize;
  takingScreenShot: boolean;
}
interface IBiggerThan15Chars {
  background: string;
}
type IBiggerThan15CharsMap = Record<string, IBiggerThan15Chars>;
type ILessThan15CharsMap = Record<string, IBiggerThan15Chars>;

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
  fontSize,
  takingScreenShot,
}) => {
  const [currentWidth, setCurrentWidth] = useState<number>(0);
  const leftSpacingSize = posterSizes[posterSize?.value] || posterSizes['12 X 18'];
  const leftSpacing = BackgroundFrame ? leftSpacingSize.withFrame : leftSpacingSize.withoutFrame;

  const borderWidth =
    posterType !== 'No Frame' &&
    posterType !== 'Thin Canvas' &&
    posterType !== 'Thick Canvas' &&
    posterSizeToBorderWidth[posterSize.value];
  // for frame padding
  const borderPadding =
    posterType !== 'No Frame' && posterType !== 'Thin Canvas' && posterType !== 'Thick Canvas'
      ? posterSizeToBorderWidth[posterSize.value] || '0px'
      : '';
  // for description
  const descriptionFontSize: Record<string, number> = {
    '12 X 18': +fontSize?.descriptionSize + 14,
    '16 X 20': +fontSize?.descriptionSize + 16,
    '18 X 24': +fontSize?.descriptionSize + 18,
    '20 X 28': +fontSize?.descriptionSize + 20,
    '24 X 36': +fontSize?.descriptionSize + 24,
    '28 X 40': +fontSize?.descriptionSize + 28,
  };
  const selectedFontFamily = selectedFont || 'Morganite';

  const biggerThan15Chars: IBiggerThan15CharsMap = {
    '12 X 18': {
      background: takingScreenShot
        ? posterType === 'No Frame'
          ? '15.7%'
          : '15.7%'
        : BackgroundFrame
        ? '14.8%'
        : '14.2%',
    },
    '16 X 20': {
      background: takingScreenShot
        ? posterType === 'No Frame'
          ? '15.7%'
          : '15.7%'
        : BackgroundFrame
        ? '14.5%'
        : '14.1%',
    },
    '18 X 24': {
      background: takingScreenShot
        ? posterType === 'No Frame'
          ? '15.7%'
          : '15.7%'
        : BackgroundFrame
        ? '14.6%'
        : '14.2%',
    },
    '20 X 28': {
      background: takingScreenShot
        ? posterType === 'No Frame'
          ? '15.7%'
          : '15.7%'
        : BackgroundFrame
        ? '14.7%'
        : '14.2%',
    },
    '24 X 36': {
      background: takingScreenShot
        ? posterType === 'No Frame'
          ? '15.2%'
          : '15.2%'
        : BackgroundFrame
        ? '14.7%'
        : '14.2%',
    },
    '28 X 40': {
      background: takingScreenShot
        ? posterType === 'No Frame'
          ? '15.2%'
          : '15.2%'
        : BackgroundFrame
        ? '14.4%'
        : '14.2%',
    },
  };

  const lessThan15Chars: ILessThan15CharsMap = {
    '12 X 18': {
      background: takingScreenShot
        ? posterType === 'No Frame'
          ? '16.7%'
          : '16.7%'
        : BackgroundFrame
        ? '15%'
        : '14.4%',
    },
    '16 X 20': {
      background: takingScreenShot
        ? posterType === 'No Frame'
          ? '16.2%'
          : '16.2%'
        : BackgroundFrame
        ? '14.9%'
        : '14.3%',
    },
    '18 X 24': {
      background: takingScreenShot
        ? posterType === 'No Frame'
          ? '16.1%'
          : '16.1%'
        : BackgroundFrame
        ? '15%'
        : '14.5%',
    },
    '20 X 28': {
      background: takingScreenShot
        ? posterType === 'No Frame'
          ? '16.1%'
          : '16.1%'
        : BackgroundFrame
        ? '14.9%'
        : '14.6%',
    },
    '24 X 36': {
      background: takingScreenShot
        ? posterType === 'No Frame'
          ? '16.1%'
          : '16.1%'
        : BackgroundFrame
        ? '14.8%'
        : '14.4%',
    },
    '28 X 40': {
      background: takingScreenShot
        ? posterType === 'No Frame'
          ? '15.8%'
          : '15.8%'
        : BackgroundFrame
        ? '14.7%'
        : '14.3%',
    },
  };

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
  const div = document.getElementById('title_div');

  useEffect(() => {
    const interval = setInterval(() => {
      handleResize();
    }, 200);

    return () => {
      clearInterval(interval);
    };
  }, [div]);

  const handleResize = (): void => {
    if (div && div.clientWidth !== currentWidth) setCurrentWidth(div?.clientWidth);
  };
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
          ? `overflow-hidden scale-[18%] absolute xs:scale-[20%] msm:scale-[22%] sm:scale-[25%] md:scale-[25%] lg:scale-[25%] sxl:scale-[25%] 2xl:scale-[30%]`
          : posterSize.value === '24 X 36'
          ? `overflow-hidden scale-[15%] absolute xs:scale-[15%] msm:scale-[18%] sm:scale-[20%] md:scale-[22%] lg:scale-[22%] sxl:scale-[22%] 2xl:scale-[25%]`
          : posterSize.value === '28 X 40'
          ? `overflow-hidden scale-[13%] absolute xs:scale-[15%] msm:scale-[15%] sm:scale-[18%] md:scale-[20%] lg:scale-[22%] sxl:scale-[22%] 2xl:scale-[22%]`
          : `overflow-hidden scale-[30%] absolute xs:scale-[35%] msm:scale-[35%] sm:scale-[35%] md:scale-[45%] lg:scale-[45%] sxl:scale-[50%] 2xl:scale-[50%]`
      }
      style={{
        background: borderWidth ? BackgroundFrame : '',
        padding: BackgroundFrame ? borderPadding : '',
        height: posterHeigth[posterSize.value] || '1298px',
        width: posterWidth[posterSize.value] || '864px',
        boxShadow: '0px 15px 40px rgba(0, 0, 0, 0.5)',
      }}
    >
      <div
        className={`h-full w-full`}
        style={{
          background: colors.posterColor,
          padding: '6% 5% 0% 5%',
          transform:
            posterType === 'Thin Canvas'
              ? 'scale(0.75)'
              : posterType === 'Thick Canvas'
              ? 'scale(0.74)'
              : '',
        }}
      >
        <div
          className={`h-[80%] relative px-1 py-2`}
          style={{
            borderTop: '2.99px solid white',
            borderLeft: '2.99px solid white',
            borderRight: '2.99px solid white',
          }}
        >
          <div
            className="absolute bottom-0 left-[-1px]"
            style={{ borderBottom: '2.99px solid white', width: '11px' }}
          ></div>
          <div
            className="absolute bottom-0 right-[-1px]"
            style={{
              borderBottom: '2.99px solid white',
              width: `calc(98.8% - ${currentWidth ?? 0}px)`,
            }}
          ></div>

          <div
            className={`h-[100%] overflow-hidden flex flex-wrap justify-around`}
            style={{
              background: colors.posterColor,
              paddingTop:
                dataSets.length >= 10 && dataSets.find((item) => item?.songName?.length >= 30)
                  ? '5%'
                  : '0.5rem',
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
                    posterRatio={sizeValues[posterSize.value] || '1218'}
                  />
                );
              } else {
                return '';
              }
            })}
          </div>
        </div>
        <div
          id="title_div"
          className="absolute break-words flex items-center justify-center flex-col max-w-[85%]"
          style={{
            left: leftSpacing,
            color: colors.songTitleColor,
            bottom:
              selectedAlbum?.label && selectedAlbum?.label.length > 15
                ? biggerThan15Chars[posterSize.value].background
                : lessThan15Chars[posterSize.value].background,
            marginBottom:
              selectedFontFamily === 'Aemstel-Regular'
                ? '1.5rem'
                : selectedFontFamily === 'Roustel'
                ? '0.5rem'
                : selectedFontFamily !== 'Morganite'
                ? '1rem'
                : '0rem',
          }}
        >
          <div
            style={{
              background: 'transparent',
              letterSpacing: selectedFontFamily === 'Morganite' ? '1px' : 'normal',
              fontFamily: selectedFontFamily,
              fontSize: selectedAlbum?.label
                ? posterSize.value === '12 X 18'
                  ? selectedAlbum?.label.length > 24
                    ? selectedFontFamily === 'Blacksword'
                      ? `${+fontSize?.albumNameSize + 17}px`
                      : selectedFontFamily !== 'Morganite'
                      ? `${+fontSize?.albumNameSize + 23}px`
                      : `${+fontSize?.albumNameSize + 48}px`
                    : selectedFontFamily === 'Blacksword'
                    ? `${+fontSize?.albumNameSize + 30}px`
                    : selectedFontFamily !== 'Morganite'
                    ? `${+fontSize?.albumNameSize + 43}px`
                    : `${+fontSize?.albumNameSize + 64}px`
                  : posterSize.value === '16 X 20'
                  ? selectedAlbum?.label.length > 24
                    ? selectedFontFamily === 'Blacksword'
                      ? `${+fontSize?.albumNameSize + 23}px`
                      : selectedFontFamily !== 'Morganite'
                      ? `${+fontSize?.albumNameSize + 29}px`
                      : `${+fontSize?.albumNameSize + 51}px`
                    : selectedFontFamily === 'Blacksword'
                    ? `${+fontSize?.albumNameSize + 40}px`
                    : selectedFontFamily !== 'Morganite'
                    ? `${+fontSize?.albumNameSize + 54}px`
                    : `${+fontSize?.albumNameSize + 67}px`
                  : posterSize.value === '18 X 24'
                  ? selectedAlbum?.label.length > 24
                    ? selectedFontFamily === 'Blacksword'
                      ? `${+fontSize?.albumNameSize + 26}px`
                      : selectedFontFamily !== 'Morganite'
                      ? `${+fontSize?.albumNameSize + 33}px` // completed
                      : `${+fontSize?.albumNameSize + 56}px`
                    : selectedFontFamily === 'Blacksword'
                    ? `${+fontSize?.albumNameSize + 45}px`
                    : selectedFontFamily !== 'Morganite'
                    ? `${+fontSize?.albumNameSize + 60}px` // completed
                    : `${+fontSize?.albumNameSize + 74}px`
                  : posterSize.value === '20 X 28'
                  ? selectedAlbum?.label.length > 24
                    ? selectedFontFamily === 'Blacksword'
                      ? `${+fontSize?.albumNameSize + 28}px`
                      : selectedFontFamily !== 'Morganite'
                      ? `${+fontSize?.albumNameSize + 38}px` // completed
                      : `${+fontSize?.albumNameSize + 64}px`
                    : selectedFontFamily === 'Blacksword'
                    ? `${+fontSize?.albumNameSize + 48}px`
                    : selectedFontFamily !== 'Morganite'
                    ? `${+fontSize?.albumNameSize + 70}px` // completed
                    : `${+fontSize?.albumNameSize + 86}px`
                  : posterSize.value === '24 X 36'
                  ? selectedAlbum?.label.length > 24
                    ? selectedFontFamily === 'Blacksword'
                      ? `${+fontSize?.albumNameSize + 35}px`
                      : selectedFontFamily !== 'Morganite'
                      ? `${+fontSize?.albumNameSize + 46}px`
                      : `${+fontSize?.albumNameSize + 80}px`
                    : selectedFontFamily === 'Blacksword'
                    ? `${+fontSize?.albumNameSize + 60}px`
                    : selectedFontFamily !== 'Morganite'
                    ? `${+fontSize?.albumNameSize + 90}px`
                    : `${+fontSize?.albumNameSize + 112}px`
                  : posterSize.value === '28 X 40' && selectedAlbum?.label.length > 24
                  ? selectedFontFamily === 'Blacksword'
                    ? `${+fontSize?.albumNameSize + 41}px`
                    : selectedFontFamily !== 'Morganite'
                    ? `${+fontSize?.albumNameSize + 53}px`
                    : `${+fontSize?.albumNameSize + 88}px`
                  : selectedFontFamily === 'Blacksword'
                  ? `${+fontSize?.albumNameSize + 68}px`
                  : selectedFontFamily !== 'Morganite'
                  ? `${+fontSize?.albumNameSize + 105}px`
                  : `${+fontSize?.albumNameSize + 123}px`
                : '64px',
            }}
            className={selectedAlbum?.label && selectedAlbum?.label.length > 24 ? `px-2` : `px-2`}
          >
            <p>{selectedAlbum?.label ? selectedAlbum?.label.toUpperCase() : 'ALBUM NAME'}</p>
          </div>
          <div
            style={{
              marginTop:
                selectedFontFamily === 'Blacksword' || selectedFontFamily === 'Roustel'
                  ? '0rem'
                  : selectedFontFamily === 'Morganite'
                  ? '-1rem'
                  : '-0.5rem',
              fontFamily: selectedFontFamily,
              fontSize: selectedAlbum?.label
                ? posterSize.value === '12 X 18'
                  ? selectedAlbum?.label.length > 24
                    ? `${+fontSize?.singerNameSize + 27}px`
                    : `${+fontSize?.singerNameSize + 18}px`
                  : posterSize.value === '16 X 20'
                  ? selectedAlbum?.label.length > 24
                    ? `${+fontSize?.singerNameSize + 32}px`
                    : `${+fontSize?.singerNameSize + 21}px`
                  : posterSize.value === '18 X 24'
                  ? selectedAlbum?.label.length > 24
                    ? `${+fontSize?.singerNameSize + 37}px`
                    : `${+fontSize?.singerNameSize + 25}px`
                  : posterSize.value === '20 X 28'
                  ? selectedAlbum?.label.length > 24
                    ? `${+fontSize?.singerNameSize + 42}px`
                    : `${+fontSize?.singerNameSize + 29}px`
                  : posterSize.value === '24 X 36'
                  ? selectedAlbum?.label.length > 24
                    ? `${+fontSize?.singerNameSize + 56}px`
                    : `${+fontSize?.singerNameSize + 37}px`
                  : posterSize.value === '28 X 40' && selectedAlbum?.label.length > 24
                  ? `${+fontSize?.singerNameSize + 64}px`
                  : `${+fontSize?.singerNameSize + 41}px`
                : '18px',
              letterSpacing: selectedFontFamily === 'Morganite' ? '1px' : 'normal',
            }}
            className={
              selectedAlbum?.label && selectedAlbum?.label.length > 24
                ? 'mt-[-0.5rem] text-center'
                : 'mt-[-0.5rem] text-center'
            }
          >
            {selectedAlbum?.singerName ? selectedAlbum.singerName : 'SINGER NAME'}
          </div>
        </div>
        <div
          className={`${activeAlignment} text-left absolute left-0 right-0 px-[5%] w-full pt-[9%] break-words overflow-hidden `}
          style={{
            color: colors.descriptionColor,
            fontFamily: selectedFont || 'Montserrat',
            fontSize: descriptionFontSize[posterSize.value] ?? '14px',
          }}
        >
          <p
            style={{
              whiteSpace: 'pre-wrap',
              letterSpacing: selectedFontFamily === 'Morganite' ? '1px' : 'normal',
            }}
            className={`bg-transparent text-ellipsis-8`}
          >
            {albumDescripition}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Template4;
