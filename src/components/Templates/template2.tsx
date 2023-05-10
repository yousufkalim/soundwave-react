import React, { FC, useEffect } from 'react';
import {
  DataSetProps,
  SelectedAlbumProps,
  IStateColors,
  IFontSize,
  IPosterSize,
} from '../../types/index';
import Waveroom from '../WaveItem/index';
import {
  // sizeScales,
  posterSizeToBorderWidth,
  sizeValues,
  posterHeigth,
  posterWidth,
} from '../../utils/data';

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
  takingScreenShot: boolean;
  fontSize: IFontSize;
}

interface IBiggerThan15Chars {
  background: string;
}

type IBiggerThan15CharsMap = Record<string, IBiggerThan15Chars>;
type ILessThan15CharsMap = Record<string, IBiggerThan15Chars>;

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
  takingScreenShot,
  fontSize,
}) => {
  useEffect(() => {
    setColors({
      boxColor: '#EA8444',
      posterColor: '#fff',
      soundWaveColor: 'rgba(0,0,0,1)',
      soundWaveNameColor: 'rgba(0,0,0,1)',
      songTitleColor: 'rgba(0,0,0,1)',
      descriptionColor: 'rgba(0,0,0,1)',
    });
  }, []);

  const biggerThan15Chars: IBiggerThan15CharsMap = {
    '12 X 18': {
      background: takingScreenShot
        ? posterType === 'No Frame'
          ? '1.8%'
          : '2.4%'
        : BackgroundFrame
        ? '1.1%'
        : '0.69%',
    },
    '16 X 20': {
      background: takingScreenShot
        ? posterType === 'No Frame'
          ? '1.9%'
          : '2.3%'
        : BackgroundFrame
        ? '1.05%'
        : '0.6%',
    },
    '18 X 24': {
      background: takingScreenShot
        ? posterType === 'No Frame'
          ? '1.75%'
          : '2.3%'
        : BackgroundFrame
        ? '1.2%'
        : '0.55%',
    },
    '20 X 28': {
      background: takingScreenShot
        ? posterType === 'No Frame'
          ? '1.7%'
          : '2.3%'
        : BackgroundFrame
        ? '1.1%'
        : ' 0.52%',
    },
    '24 X 36': {
      background: takingScreenShot
        ? posterType === 'No Frame'
          ? '1.55%'
          : '2.3%'
        : BackgroundFrame
        ? '1.1%'
        : '0.5%',
    },
    '28 X 40': {
      background: takingScreenShot
        ? posterType === 'No Frame'
          ? '1.6%'
          : '2.3%'
        : BackgroundFrame
        ? '1.2%'
        : '0.5%',
    },
  };

  const lessThan15Chars: ILessThan15CharsMap = {
    '12 X 18': {
      background: takingScreenShot
        ? posterType === 'No Frame'
          ? '3.9%'
          : '4.4%'
        : BackgroundFrame
        ? '2.4%'
        : '2%',
    },
    '16 X 20': {
      background: takingScreenShot
        ? posterType === 'No Frame'
          ? '4.5%'
          : '5%'
        : BackgroundFrame
        ? '2.9%'
        : '2.45%',
    },
    '18 X 24': {
      background: takingScreenShot
        ? posterType === 'No Frame'
          ? '3.98%'
          : '4.5%'
        : BackgroundFrame
        ? '2.4%'
        : '1.9%',
    },
    '20 X 28': {
      background: takingScreenShot
        ? posterType === 'No Frame'
          ? '4%'
          : '4.6%'
        : BackgroundFrame
        ? '2.6%'
        : '1.98%',
    },
    '24 X 36': {
      background: takingScreenShot
        ? posterType === 'No Frame'
          ? '3.95%'
          : '4.55%'
        : BackgroundFrame
        ? '2.561%'
        : '2%',
    },
    '28 X 40': {
      background: takingScreenShot
        ? posterType === 'No Frame'
          ? '3.9%'
          : '4.5%'
        : BackgroundFrame
        ? '2.539%'
        : '1.95%',
    },
  };

  const descriptionFontSize: Record<string, number> = {
    '12 X 18': +fontSize?.descriptionSize + 14,
    '16 X 20': +fontSize?.descriptionSize + 16,
    '18 X 24': +fontSize?.descriptionSize + 18,
    '20 X 28': +fontSize?.descriptionSize + 20,
    '24 X 36': +fontSize?.descriptionSize + 24,
    '28 X 40': +fontSize?.descriptionSize + 28,
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
  const selectedFontFamily = selectedFont || 'Proxima-Nova-italic';
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
        }}
      >
        <div
          className={`h-[77%] px-1 pb-3 py-[2] overflow-hidden flex flex-wrap justify-around`}
          style={{
            background: colors.boxColor,
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
          className="text-center break-words w-full left-0 right-0 h-[23%] px-[5%]"
          style={{
            fontWeight: 'bold',
            color: colors.songTitleColor,
            fontFamily: selectedFont || 'Proxima-Nova-italic',
            fontSize: selectedAlbum?.label
              ? posterSize.value === '12 X 18'
                ? selectedAlbum?.label.length > 15
                  ? selectedFontFamily === 'Blacksword'
                    ? `${+fontSize?.albumNameSize + 25}px`
                    : selectedFontFamily !== 'Morganite'
                    ? `${+fontSize?.albumNameSize + 28}px`
                    : `${+fontSize?.albumNameSize + 33}px`
                  : selectedFontFamily === 'Blacksword'
                  ? `${+fontSize?.albumNameSize + 45}px`
                  : selectedFontFamily !== 'Morganite'
                  ? `${+fontSize?.albumNameSize + 48}px`
                  : `${+fontSize?.albumNameSize + 58}px`
                : posterSize.value === '16 X 20'
                ? selectedAlbum?.label.length > 15
                  ? selectedFontFamily === 'Blacksword'
                    ? `${+fontSize?.albumNameSize + 35}px`
                    : selectedFontFamily !== 'Morganite'
                    ? `${+fontSize?.albumNameSize + 33}px`
                    : `${+fontSize?.albumNameSize + 42}px`
                  : selectedFontFamily === 'Blacksword'
                  ? `${+fontSize?.albumNameSize + 60}px`
                  : selectedFontFamily !== 'Morganite'
                  ? `${+fontSize?.albumNameSize + 64}px`
                  : `${+fontSize?.albumNameSize + 78}px`
                : posterSize.value === '18 X 24'
                ? selectedAlbum?.label.length > 15
                  ? selectedFontFamily === 'Blacksword'
                    ? `${+fontSize?.albumNameSize + 40}px`
                    : selectedFontFamily !== 'Morganite'
                    ? `${+fontSize?.albumNameSize + 38}px`
                    : `${+fontSize?.albumNameSize + 48}px`
                  : selectedFontFamily === 'Blacksword'
                  ? `${+fontSize?.albumNameSize + 62}px`
                  : selectedFontFamily !== 'Morganite'
                  ? `${+fontSize?.albumNameSize + 67}px`
                  : `${+fontSize?.albumNameSize + 82}px`
                : posterSize.value === '20 X 28'
                ? selectedAlbum?.label.length > 15
                  ? selectedFontFamily === 'Blacksword'
                    ? `${+fontSize?.albumNameSize + 45}px`
                    : selectedFontFamily !== 'Morganite'
                    ? `${+fontSize?.albumNameSize + 43}px`
                    : `${+fontSize?.albumNameSize + 53}px`
                  : selectedFontFamily === 'Blacksword'
                  ? `${+fontSize?.albumNameSize + 75}px`
                  : selectedFontFamily !== 'Morganite'
                  ? `${+fontSize?.albumNameSize + 80}px`
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
                  ? `${+fontSize?.albumNameSize + 100}px`
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
                ? `${+fontSize?.albumNameSize + 112}px`
                : `${+fontSize?.albumNameSize + 135}px`
              : '64px',
            letterSpacing: selectedFont === 'Morganite' ? '1px' : 'normal',
            position: 'absolute',
            bottom:
              selectedAlbum?.label && selectedAlbum?.label.length > 15
                ? biggerThan15Chars[posterSize.value].background
                : lessThan15Chars[posterSize.value].background,
          }}
        >
          {selectedAlbum?.label ? selectedAlbum?.label.toUpperCase() : 'ALBUM NAME'}
        </div>
        <div
          className={`${activeAlignment} bg-transparent absolute left-0 right-0 px-[5%]`}
          style={{
            marginTop: selectedAlbum?.label && selectedAlbum?.label?.length > 15 ? '8%' : '5%',
            whiteSpace: 'pre-wrap',
            color: colors.descriptionColor,
            fontFamily: selectedFont || 'Montserrat',
            letterSpacing: selectedFont === 'Morganite' ? '1px' : 'normal',
            fontSize: descriptionFontSize[posterSize.value] ?? '14px',
          }}
        >
          {albumDescripition}
        </div>
      </div>
    </div>
  );
};

export default Template2;
