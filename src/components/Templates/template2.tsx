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
  posterMainDiv,
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
      background: BackgroundFrame ? '1%' : '0.5%',
    },
    '16 X 20': {
      background: BackgroundFrame ? '0.9%' : '0.4%',
    },
    '18 X 24': {
      background: BackgroundFrame ? '0.9%' : '0.4%',
    },
    '20 X 28': {
      background: BackgroundFrame ? '1%' : ' 0.52%',
    },
    '24 X 36': {
      background: BackgroundFrame ? '1%' : '0.4%',
    },
    '28 X 40': {
      background: BackgroundFrame ? '1%' : '0.4%',
    },
  };

  const lessThan15Chars: ILessThan15CharsMap = {
    '12 X 18': {
      background: BackgroundFrame ? '2%' : '1.5%',
    },
    '16 X 20': {
      background: BackgroundFrame ? '2.4%' : '2%',
    },
    '18 X 24': {
      background: BackgroundFrame ? '2%' : '1.5%',
    },
    '20 X 28': {
      background: BackgroundFrame ? '2.3%' : '1.7%',
    },
    '24 X 36': {
      background: BackgroundFrame ? '2.3%' : '1.8%',
    },
    '28 X 40': {
      background: BackgroundFrame ? '2.3%' : '1.9%',
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

  const selectedFontFamily = selectedFont || 'Proxima-Nova-italic';

  // let fontSizeValue = 190; // Default font size
  // if (selectedAlbum?.label) {
  //   const length = selectedAlbum.label.length;
  //   if (posterSize.value === '12 X 18') {
  //     if (length > 15) {
  //       if (selectedFontFamily === 'Blacksword') {
  //         fontSizeValue = +fontSize?.albumNameSize + 130;
  //       } else if (selectedFontFamily !== 'Morganite') {
  //         fontSizeValue = +fontSize?.albumNameSize + 120;
  //       } else {
  //         fontSizeValue = +fontSize?.albumNameSize + 130;
  //       }
  //     } else {
  //       if (selectedFontFamily === 'Blacksword') {
  //         fontSizeValue = +fontSize?.albumNameSize + 200;
  //       } else if (selectedFontFamily !== 'Morganite') {
  //         fontSizeValue = +fontSize?.albumNameSize + 200;
  //       } else {
  //         fontSizeValue = +fontSize?.albumNameSize + 250;
  //       }
  //     }
  //   } else if (posterSize.value === '16 X 20') {
  //     if (length > 15) {
  //       if (selectedFontFamily === 'Blacksword') {
  //         fontSizeValue = +fontSize?.albumNameSize + 170;
  //       } else if (selectedFontFamily !== 'Morganite') {
  //         fontSizeValue = +fontSize?.albumNameSize + 160;
  //       } else {
  //         fontSizeValue = +fontSize?.albumNameSize + 180;
  //       }
  //     } else {
  //       if (selectedFontFamily === 'Blacksword') {
  //         fontSizeValue = +fontSize?.albumNameSize + 240;
  //       } else if (selectedFontFamily !== 'Morganite') {
  //         fontSizeValue = +fontSize?.albumNameSize + 250;
  //       } else {
  //         fontSizeValue = +fontSize?.albumNameSize + 300;
  //       }
  //     }
  //   } else if (posterSize.value === '18 X 24') {
  //     if (length > 15) {
  //       if (selectedFontFamily === 'Blacksword') {
  //         fontSizeValue = +fontSize?.albumNameSize + 190;
  //       } else if (selectedFontFamily !== 'Morganite') {
  //         fontSizeValue = +fontSize?.albumNameSize + 180;
  //       } else {
  //         fontSizeValue = +fontSize?.albumNameSize + 230;
  //       }
  //     } else {
  //       if (selectedFontFamily === 'Blacksword') {
  //         fontSizeValue = +fontSize?.albumNameSize + 280;
  //       } else if (selectedFontFamily !== 'Morganite') {
  //         fontSizeValue = +fontSize?.albumNameSize + 285;
  //       } else {
  //         fontSizeValue = +fontSize?.albumNameSize + 350;
  //       }
  //     }
  //   } else if (posterSize.value === '20 X 28') {
  //     if (length > 15) {
  //       if (selectedFontFamily === 'Blacksword') {
  //         fontSizeValue = +fontSize?.albumNameSize + 210;
  //       } else if (selectedFontFamily !== 'Morganite') {
  //         fontSizeValue = +fontSize?.albumNameSize + 200;
  //       } else {
  //         fontSizeValue = +fontSize?.albumNameSize + 250;
  //       }
  //     } else {
  //       if (selectedFontFamily === 'Blacksword') {
  //         fontSizeValue = +fontSize?.albumNameSize + 320;
  //       } else if (selectedFontFamily !== 'Morganite') {
  //         fontSizeValue = +fontSize?.albumNameSize + 320;
  //       } else {
  //         fontSizeValue = +fontSize?.albumNameSize + 400;
  //       }
  //     }
  //   } else if (posterSize.value === '24 X 36') {
  //     if (length > 15) {
  //       if (selectedFontFamily === 'Blacksword') {
  //         fontSizeValue = +fontSize?.albumNameSize + 260;
  //       } else if (selectedFontFamily !== 'Morganite') {
  //         fontSizeValue = +fontSize?.albumNameSize + 250;
  //       } else {
  //         fontSizeValue = +fontSize?.albumNameSize + 300;
  //       }
  //     } else {
  //       if (selectedFontFamily === 'Blacksword') {
  //         fontSizeValue = +fontSize?.albumNameSize + 400;
  //       } else if (selectedFontFamily !== 'Morganite') {
  //         fontSizeValue = +fontSize?.albumNameSize + 420;
  //       } else {
  //         fontSizeValue = +fontSize?.albumNameSize + 500;
  //       }
  //     }
  //   } else if (posterSize.value === '28 X 40' && length > 15) {
  //     if (selectedFontFamily === 'Blacksword') {
  //       fontSizeValue = +fontSize?.albumNameSize + 300;
  //     } else if (selectedFontFamily !== 'Morganite') {
  //       fontSizeValue = +fontSize?.albumNameSize + 285;
  //     } else {
  //       fontSizeValue = +fontSize?.albumNameSize + 350;
  //     }
  //   } else {
  //     if (selectedFontFamily === 'Blacksword') {
  //       fontSizeValue = +fontSize?.albumNameSize + 500;
  //     } else if (selectedFontFamily !== 'Morganite') {
  //       fontSizeValue = +fontSize?.albumNameSize + 480;
  //     } else {
  //       fontSizeValue = +fontSize?.albumNameSize + 600;
  //     }
  //   }
  // }

  return (
    <div
      id="custom-poster-template"
      className={posterMainDiv[posterSize.value]}
      style={{
        background: borderWidth ? BackgroundFrame : '',
        padding: BackgroundFrame ? borderPadding : '',
        height: posterHeigth[posterSize?.value],
        width: posterWidth[posterSize.value],
        boxShadow: '0px 15px 40px rgba(0, 0, 0, 0.5)',
      }}
    >
      <div
        className="h-full w-ful"
        style={{
          background: colors?.posterColor,
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
          className="text-bold text-center break-words w-full absolute left-0 right-0 h-[23%] px-[5%]"
          style={{
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
