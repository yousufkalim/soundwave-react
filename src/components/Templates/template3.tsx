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
  posterMainDiv,
  singerNameBorderTemplate3,
  // singerNameBorderWidthTemplate3,
  singerNamePaddingTemplate3,
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
    '12 X 18': +fontSize?.descriptionSize + 60,
    '16 X 20': +fontSize?.descriptionSize + 79,
    '18 X 24': +fontSize?.descriptionSize + 90,
    '20 X 28': +fontSize?.descriptionSize + 100,
    '24 X 36': +fontSize?.descriptionSize + 119,
    '28 X 40': +fontSize?.descriptionSize + 139,
  };

  const biggerThan15Chars: IBiggerThan15CharsMap = {
    '12 X 18': {
      background: BackgroundFrame ? '1.8%' : '1.7%',
    },
    '16 X 20': {
      background: BackgroundFrame ? '2.2%' : '2.2%',
    },
    '18 X 24': {
      background: BackgroundFrame ? '2.1%' : '2%',
    },
    '20 X 28': {
      background: BackgroundFrame ? '1.95%' : '1.95%',
    },
    '24 X 36': {
      background: BackgroundFrame ? '1.94%' : '1.9%',
    },
    '28 X 40': {
      background: BackgroundFrame ? '1.98%' : '1.9%',
    },
  };

  const lessThan15Chars: ILessThan15CharsMap = {
    '12 X 18': {
      background: BackgroundFrame ? '3%' : '3.1%',
    },
    '16 X 20': {
      background: BackgroundFrame ? '3.5%' : '3.5%',
    },
    '18 X 24': {
      background: BackgroundFrame ? '3.3%' : '3.3%',
    },
    '20 X 28': {
      background: BackgroundFrame ? '3.2%' : '3.1%',
    },
    '24 X 36': {
      background: BackgroundFrame ? '3.2%' : '3.2%',
    },
    '28 X 40': {
      background: BackgroundFrame ? '3.3%' : '3.3%',
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

  let fontSizeValue = 190; // Default font size
  if (selectedAlbum?.label) {
    const length = selectedAlbum.label.length;
    if (posterSize.value === '12 X 18') {
      if (length > 15) {
        if (selectedFontFamily === 'Blacksword') {
          fontSizeValue = +fontSize?.albumNameSize + 130;
        } else if (selectedFontFamily !== 'Morganite') {
          fontSizeValue = +fontSize?.albumNameSize + 120;
        } else {
          fontSizeValue = +fontSize?.albumNameSize + 130;
        }
      } else {
        if (selectedFontFamily === 'Blacksword') {
          fontSizeValue = +fontSize?.albumNameSize + 200;
        } else if (selectedFontFamily !== 'Morganite') {
          fontSizeValue = +fontSize?.albumNameSize + 200;
        } else {
          fontSizeValue = +fontSize?.albumNameSize + 250;
        }
      }
    } else if (posterSize.value === '16 X 20') {
      if (length > 15) {
        if (selectedFontFamily === 'Blacksword') {
          fontSizeValue = +fontSize?.albumNameSize + 170;
        } else if (selectedFontFamily !== 'Morganite') {
          fontSizeValue = +fontSize?.albumNameSize + 160;
        } else {
          fontSizeValue = +fontSize?.albumNameSize + 180;
        }
      } else {
        if (selectedFontFamily === 'Blacksword') {
          fontSizeValue = +fontSize?.albumNameSize + 240;
        } else if (selectedFontFamily !== 'Morganite') {
          fontSizeValue = +fontSize?.albumNameSize + 250;
        } else {
          fontSizeValue = +fontSize?.albumNameSize + 300;
        }
      }
    } else if (posterSize.value === '18 X 24') {
      if (length > 15) {
        if (selectedFontFamily === 'Blacksword') {
          fontSizeValue = +fontSize?.albumNameSize + 190;
        } else if (selectedFontFamily !== 'Morganite') {
          fontSizeValue = +fontSize?.albumNameSize + 180;
        } else {
          fontSizeValue = +fontSize?.albumNameSize + 230;
        }
      } else {
        if (selectedFontFamily === 'Blacksword') {
          fontSizeValue = +fontSize?.albumNameSize + 280;
        } else if (selectedFontFamily !== 'Morganite') {
          fontSizeValue = +fontSize?.albumNameSize + 285;
        } else {
          fontSizeValue = +fontSize?.albumNameSize + 350;
        }
      }
    } else if (posterSize.value === '20 X 28') {
      if (length > 15) {
        if (selectedFontFamily === 'Blacksword') {
          fontSizeValue = +fontSize?.albumNameSize + 210;
        } else if (selectedFontFamily !== 'Morganite') {
          fontSizeValue = +fontSize?.albumNameSize + 200;
        } else {
          fontSizeValue = +fontSize?.albumNameSize + 250;
        }
      } else {
        if (selectedFontFamily === 'Blacksword') {
          fontSizeValue = +fontSize?.albumNameSize + 320;
        } else if (selectedFontFamily !== 'Morganite') {
          fontSizeValue = +fontSize?.albumNameSize + 320;
        } else {
          fontSizeValue = +fontSize?.albumNameSize + 400;
        }
      }
    } else if (posterSize.value === '24 X 36') {
      if (length > 15) {
        if (selectedFontFamily === 'Blacksword') {
          fontSizeValue = +fontSize?.albumNameSize + 260;
        } else if (selectedFontFamily !== 'Morganite') {
          fontSizeValue = +fontSize?.albumNameSize + 250;
        } else {
          fontSizeValue = +fontSize?.albumNameSize + 300;
        }
      } else {
        if (selectedFontFamily === 'Blacksword') {
          fontSizeValue = +fontSize?.albumNameSize + 400;
        } else if (selectedFontFamily !== 'Morganite') {
          fontSizeValue = +fontSize?.albumNameSize + 420;
        } else {
          fontSizeValue = +fontSize?.albumNameSize + 500;
        }
      }
    } else if (posterSize.value === '28 X 40' && length > 15) {
      if (selectedFontFamily === 'Blacksword') {
        fontSizeValue = +fontSize?.albumNameSize + 300;
      } else if (selectedFontFamily !== 'Morganite') {
        fontSizeValue = +fontSize?.albumNameSize + 285;
      } else {
        fontSizeValue = +fontSize?.albumNameSize + 350;
      }
    } else {
      if (selectedFontFamily === 'Blacksword') {
        fontSizeValue = +fontSize?.albumNameSize + 500;
      } else if (selectedFontFamily !== 'Morganite') {
        fontSizeValue = +fontSize?.albumNameSize + 480;
      } else {
        fontSizeValue = +fontSize?.albumNameSize + 600;
      }
    }
  }
  return (
    <div
      id="custom-poster-template"
      className={posterMainDiv[posterSize.value]}
      style={{
        background: borderWidth ? BackgroundFrame : '',
        padding: BackgroundFrame ? borderPadding : '',
        height: posterHeigth[posterSize.value],
        width: posterWidth[posterSize.value],
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
            fontSize: fontSizeValue,
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
            fontSize: descriptionFontSize[posterSize.value],
          }}
        >
          <p
            className={
              selectedAlbum?.label && selectedAlbum?.label.length > 15 ? 'mb-[1%]' : 'mb-[3.5%]'
            }
          >
            {albumDescripition}
          </p>
          <div className="flex justify-center text-center">
            <div
              style={{
                position: 'relative',
                fontWeight: 'bold',
                borderRadius: '35px',
                letterSpacing: selectedFont === 'Morganite' ? '1px' : 'normal',
                color: colors?.songTitleColor,
                fontFamily: selectedFont,
                padding: singerNamePaddingTemplate3[posterSize?.value],
                border: singerNameBorderTemplate3[posterSize?.value],
                // borderWidth: singerNameBorderWidthTemplate3[posterSize?.value],
                fontSize:
                  posterSize.value === '12 X 18'
                    ? `${+fontSize?.singerNameSize + 70}px`
                    : posterSize.value === '16 X 20'
                    ? `${+fontSize?.singerNameSize + 80}px`
                    : posterSize.value === '18 X 24'
                    ? `${+fontSize?.singerNameSize + 95}px`
                    : posterSize.value === '20 X 28'
                    ? `${+fontSize?.singerNameSize + 100}px`
                    : posterSize.value === '24 X 36'
                    ? `${+fontSize?.singerNameSize + 130}px`
                    : posterSize.value === '28 X 40'
                    ? `${+fontSize?.singerNameSize + 140}px`
                    : '70px',
              }}
            >
              {selectedAlbum?.singerName ? selectedAlbum.singerName.toUpperCase() : 'SINGER NAME'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template3;
