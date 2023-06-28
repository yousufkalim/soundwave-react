import React, { FC, useEffect } from 'react';
// import { rgbaToHex } from '../../utils/common';
import {
  DataSetProps,
  SelectedAlbumProps,
  IStateColors,
  IPosterSize,
  IFontSize,
} from '../../types/index';
import Waveroom from '../WaveItem/index';
import {
  // sizeScales,
  posterSizeToBorderWidth,
  sizeValues,
  posterHeigth,
  posterWidth,
} from '../../utils/data';

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
  takingScreenShot: boolean;
  fontSize: IFontSize;
}
interface IBiggerThan15Chars {
  background: string;
}

type IBiggerThan15CharsMap = Record<string, IBiggerThan15Chars>;
type ILessThan15CharsMap = Record<string, IBiggerThan15Chars>;

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
  takingScreenShot,
  fontSize,
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

  const descriptionFontSize: Record<string, number> = {
    '12 X 18': +fontSize?.descriptionSize + 14,
    '16 X 20': +fontSize?.descriptionSize + 16,
    '18 X 24': +fontSize?.descriptionSize + 18,
    '20 X 28': +fontSize?.descriptionSize + 20,
    '24 X 36': +fontSize?.descriptionSize + 24,
    '28 X 40': +fontSize?.descriptionSize + 28,
  };

  const biggerThan15Chars: IBiggerThan15CharsMap = {
    '12 X 18': {
      background: takingScreenShot
        ? posterType === 'No Frame'
          ? '2.7%'
          : '2.7%'
        : BackgroundFrame
        ? '1.7%'
        : '1.65%',
    },
    '16 X 20': {
      background: takingScreenShot
        ? posterType === 'No Frame'
          ? '2.6%'
          : '2.5%'
        : BackgroundFrame
        ? '1.6%'
        : '1.6%',
    },
    '18 X 24': {
      background: takingScreenShot
        ? posterType === 'No Frame'
          ? '2.5%'
          : '2.6%'
        : BackgroundFrame
        ? '1.5%'
        : '1.5%',
    },
    '20 X 28': {
      background: takingScreenShot
        ? posterType === 'No Frame'
          ? '2.5%'
          : '2.5%'
        : BackgroundFrame
        ? '1.65%'
        : ' 1.6%',
    },
    '24 X 36': {
      background: takingScreenShot
        ? posterType === 'No Frame'
          ? '2.4%'
          : '2.5%'
        : BackgroundFrame
        ? '1.6%'
        : '1.5%',
    },
    '28 X 40': {
      background: takingScreenShot
        ? posterType === 'No Frame'
          ? '2.5%'
          : '2.6%'
        : BackgroundFrame
        ? '1.75%'
        : '1.65%',
    },
  };

  const lessThan15Chars: ILessThan15CharsMap = {
    '12 X 18': {
      background: takingScreenShot
        ? posterType === 'No Frame'
          ? '4.5%'
          : '4.6%'
        : BackgroundFrame
        ? '2.8%'
        : '3%',
    },
    '16 X 20': {
      background: takingScreenShot
        ? posterType === 'No Frame'
          ? '4.5%'
          : '4.6%'
        : BackgroundFrame
        ? '2.9%'
        : '2.45%',
    },
    '18 X 24': {
      background: takingScreenShot
        ? posterType === 'No Frame'
          ? '4.3%'
          : '4.4%'
        : BackgroundFrame
        ? '2.9%'
        : '2.8%',
    },
    '20 X 28': {
      background: takingScreenShot
        ? posterType === 'No Frame'
          ? '4.5%'
          : '4.5%'
        : BackgroundFrame
        ? '2.8%'
        : '2.8%',
    },
    '24 X 36': {
      background: takingScreenShot
        ? posterType === 'No Frame'
          ? '4.4%'
          : '4.4%'
        : BackgroundFrame
        ? '2.8%'
        : '2.7%',
    },
    '28 X 40': {
      background: takingScreenShot
        ? posterType === 'No Frame'
          ? '4.4%'
          : '4.4%'
        : BackgroundFrame
        ? '3%'
        : '2.95%',
    },
  };

  // for frame padding
  const borderPadding =
    posterType !== 'No Frame' && posterType !== 'Thin Canvas' && posterType !== 'Thick Canvas'
      ? posterSizeToBorderWidth[posterSize.value] || '0px'
      : '';
  // for background frame
  const borderWidth =
    posterType !== 'No Frame' &&
    posterType !== 'Thin Canvas' &&
    posterType !== 'Thick Canvas' &&
    posterSizeToBorderWidth[posterSize.value];

  // const sizeScaling = sizeScales[posterSize.value] || sizeScales['12 X 18'];
  // const [scaleXs, scaleMsm, scaleSm, scaleMd, scaleLg, scaleSxl, scale2xl] = sizeScaling;
  const selectedFontFamily = selectedFont || 'Aemstel-Regular';

  return (
    <div
      id="custom-poster-template"
      // className={`overflow-hidden scale-[${sizeScaling[0]}] absolute xs:scale-[${scaleXs}] msm:scale-[${scaleMsm}] sm:scale-[${scaleSm}] md:scale-[${scaleMd}] lg:scale-[${scaleLg}] sxl:scale-[${scaleSxl}] 2xl:scale-[${scale2xl}]`}

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
          className={`h-[77%] pb-3 py-3 overflow-hidden flex flex-wrap justify-around`}
          style={{
            background: colors?.boxColor,
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
        <div
          className="text-center relative break-words tracking-tighter"
          style={{
            bottom:
              selectedAlbum?.label && selectedAlbum?.label.length > 15
                ? biggerThan15Chars[posterSize.value].background
                : lessThan15Chars[posterSize.value].background,
            color: colors.songTitleColor,
            fontFamily: selectedFontFamily,
            fontSize: selectedAlbum?.label
              ? posterSize.value === '12 X 18'
                ? selectedAlbum?.label.length > 15
                  ? selectedFontFamily === 'Blacksword'
                    ? `${+fontSize?.albumNameSize + 25}px`
                    : selectedFontFamily !== 'Morganite'
                    ? `${+fontSize?.albumNameSize + 27}px`
                    : `${+fontSize?.albumNameSize + 33}px`
                  : selectedFontFamily === 'Blacksword'
                  ? `${+fontSize?.albumNameSize + 45}px`
                  : selectedFontFamily !== 'Morganite'
                  ? `${+fontSize?.albumNameSize + 46}px`
                  : `${+fontSize?.albumNameSize + 58}px`
                : posterSize.value === '16 X 20'
                ? selectedAlbum?.label.length > 15
                  ? selectedFontFamily === 'Blacksword'
                    ? `${+fontSize?.albumNameSize + 35}px`
                    : selectedFontFamily !== 'Morganite'
                    ? `${+fontSize?.albumNameSize + 28}px`
                    : `${+fontSize?.albumNameSize + 42}px`
                  : selectedFontFamily === 'Blacksword'
                  ? `${+fontSize?.albumNameSize + 60}px`
                  : selectedFontFamily !== 'Morganite'
                  ? `${+fontSize?.albumNameSize + 50}px`
                  : `${+fontSize?.albumNameSize + 78}px`
                : posterSize.value === '18 X 24'
                ? selectedAlbum?.label.length > 15
                  ? selectedFontFamily === 'Blacksword'
                    ? `${+fontSize?.albumNameSize + 40}px`
                    : selectedFontFamily !== 'Morganite'
                    ? `${+fontSize?.albumNameSize + 33}px` // completed
                    : `${+fontSize?.albumNameSize + 48}px`
                  : selectedFontFamily === 'Blacksword'
                  ? `${+fontSize?.albumNameSize + 62}px`
                  : selectedFontFamily !== 'Morganite'
                  ? `${+fontSize?.albumNameSize + 60}px` // completed
                  : `${+fontSize?.albumNameSize + 82}px`
                : posterSize.value === '20 X 28'
                ? selectedAlbum?.label.length > 15
                  ? selectedFontFamily === 'Blacksword'
                    ? `${+fontSize?.albumNameSize + 45}px`
                    : selectedFontFamily !== 'Morganite'
                    ? `${+fontSize?.albumNameSize + 40}px` // completed
                    : `${+fontSize?.albumNameSize + 53}px`
                  : selectedFontFamily === 'Blacksword'
                  ? `${+fontSize?.albumNameSize + 75}px`
                  : selectedFontFamily !== 'Morganite'
                  ? `${+fontSize?.albumNameSize + 70}px` // completed
                  : `${+fontSize?.albumNameSize + 98}px`
                : posterSize.value === '24 X 36'
                ? selectedAlbum?.label.length > 15
                  ? selectedFontFamily === 'Blacksword'
                    ? `${+fontSize?.albumNameSize + 50}px`
                    : selectedFontFamily !== 'Morganite'
                    ? `${+fontSize?.albumNameSize + 51}px`
                    : `${+fontSize?.albumNameSize + 65}px`
                  : selectedFontFamily === 'Blacksword'
                  ? `${+fontSize?.albumNameSize + 90}px`
                  : selectedFontFamily !== 'Morganite'
                  ? `${+fontSize?.albumNameSize + 90}px`
                  : `${+fontSize?.albumNameSize + 120}px`
                : posterSize.value === '28 X 40' && selectedAlbum?.label.length > 15
                ? selectedFontFamily === 'Blacksword'
                  ? `${+fontSize?.albumNameSize + 58}px`
                  : selectedFontFamily !== 'Morganite'
                  ? `${+fontSize?.albumNameSize + 59}px`
                  : `${+fontSize?.albumNameSize + 75}px`
                : selectedFontFamily === 'Blacksword'
                ? `${+fontSize?.albumNameSize + 100}px`
                : selectedFontFamily !== 'Morganite'
                ? `${+fontSize?.albumNameSize + 100}px`
                : `${+fontSize?.albumNameSize + 135}px`
              : '64px',
            letterSpacing: selectedFont === 'Morganite' ? '1px' : 'normal',
          }}
        >
          {selectedAlbum?.label ? selectedAlbum?.label.toUpperCase() : 'Album Name'}
        </div>
        <div
          className={`bg-transparent px-[5%] ${activeAlignment} text-[5px] md:text-[6px] absolute left-0 right-0 w-full`}
          style={{
            whiteSpace: 'pre-wrap',
            color: colors.descriptionColor,
            fontFamily: selectedFont,
            letterSpacing: selectedFont === 'Morganite' ? '1px' : 'normal',
            fontSize: descriptionFontSize[posterSize.value] ?? '14px',
          }}
        >
          <p className="mb-[3.5%]">{albumDescripition}</p>
          <div className="text-center">
            <span
              style={{
                position: 'relative',
                color: colors.songTitleColor,
                fontFamily: selectedFont,
                letterSpacing: selectedFont === 'Morganite' ? '1px' : 'normal',
                fontWeight: 'bold',
                border: '1px solid white',
                borderRadius: '7px',
                padding: '4px',
                fontSize:
                  posterSize.value === '12 X 18'
                    ? `${+fontSize?.singerNameSize + 16}px`
                    : posterSize.value === '16 X 20'
                    ? `${+fontSize?.singerNameSize + 20}px`
                    : posterSize.value === '18 X 24'
                    ? `${+fontSize?.singerNameSize + 25}px`
                    : posterSize.value === '20 X 28'
                    ? `${+fontSize?.singerNameSize + 28}px`
                    : posterSize.value === '24 X 36'
                    ? `${+fontSize?.singerNameSize + 37}px`
                    : posterSize.value === '28 X 40'
                    ? `${+fontSize?.singerNameSize + 41}px`
                    : '16px',
                borderWidth:
                  posterSize.value === '18 X 24'
                    ? '1.5px'
                    : posterSize.value === '20 X 28'
                    ? '1.5px'
                    : posterSize.value === '24 X 36'
                    ? '2px'
                    : posterSize.value === '28 X 40'
                    ? '2px'
                    : '1.8px',
              }}
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
