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
      background: BackgroundFrame ? '1.15%' : '0.65%',
    },
    '16 X 20': {
      background: BackgroundFrame ? '1.05%' : '0.52%',
    },
    '18 X 24': {
      background: BackgroundFrame ? '1.1%' : '0.55%',
    },
    '20 X 28': {
      background: BackgroundFrame ? '1.1%' : ' 0.52%',
    },
    '24 X 36': {
      background: BackgroundFrame ? '1%' : '0.4%',
    },
    '28 X 40': {
      background: BackgroundFrame ? '1.1%' : '0.5%',
    },
  };

  const lessThan15Chars: ILessThan15CharsMap = {
    '12 X 18': {
      background: BackgroundFrame ? '2.4%' : '1.8%',
    },
    '16 X 20': {
      background: BackgroundFrame ? '2.8%' : '2%',
    },
    '18 X 24': {
      background: BackgroundFrame ? '2.3%' : '1.8%',
    },
    '20 X 28': {
      background: BackgroundFrame ? '2.5%' : '1.9%',
    },
    '24 X 36': {
      background: BackgroundFrame ? '2.461%' : '1.9%',
    },
    '28 X 40': {
      background: BackgroundFrame ? '2.439%' : '1.9%',
    },
  };

  const descriptionFontSize: Record<string, number> = {
    '12 X 18': +fontSize?.descriptionSize + 60,
    '16 X 20': +fontSize?.descriptionSize + 79,
    '18 X 24': +fontSize?.descriptionSize + 90,
    '20 X 28': +fontSize?.descriptionSize + 100,
    '24 X 36': +fontSize?.descriptionSize + 119,
    '28 X 40': +fontSize?.descriptionSize + 139,
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
        className={`h-full w-full`}
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
            marginTop: selectedAlbum?.label && selectedAlbum?.label?.length > 15 ? '7%' : '5%',
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
