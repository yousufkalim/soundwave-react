import React, { FC, useEffect } from 'react';
import Waveroom from '../WaveItem/index';
// import { rgbaToHex } from '../../utils/common';
import {
  DataSetProps,
  SelectedAlbumProps,
  IStateColors,
  IFontSize,
  IPosterSize,
} from '../../types/index';
import {
  // sizeScales,
  posterSizeToBorderWidth,
  sizeValues,
  posterHeigth,
  posterMainDiv,
  posterWidth,
} from '../../utils/data';

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
  fontSize: IFontSize;
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
  fontSize,
}) => {
  useEffect(() => {
    setColors({
      boxColor: 'transparent',
      posterColor: 'linear-gradient(180deg,rgb(255,255,255) 60%, rgb(0, 0, 0) 100%)',
      soundWaveColor: 'rgba(0,0,0,1)',
      soundWaveNameColor: '#000',
      songTitleColor: '#fff',
      descriptionColor: '#fff',
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

  const selectedFontFamily = selectedFont || 'Aksentuasi';

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
          paddingLeft: BackgroundFrame ? '5%' : '5%',
          paddingRight: BackgroundFrame ? '5%' : '5%',
          paddingTop: BackgroundFrame ? '6%' : '6%',
          transform:
            posterType === 'Thin Canvas'
              ? 'scale(0.75)'
              : posterType === 'Thick Canvas'
              ? 'scale(0.74)'
              : '',
        }}
      >
        <div
          className={`h-[77%] px-1 py-2 overflow-hidden flex flex-wrap justify-around`}
          style={{
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
        <div className={`flex flex-col break-words w-full text-center`}>
          <span
            className={
              selectedAlbum?.label && selectedAlbum?.label.length > 24
                ? `font-extrabold relative font-[Aksentuasi] tracking-tighter break-words`
                : `font-extrabold relative font-[Aksentuasi] tracking-wide break-words`
            }
            style={{
              color: colors.songTitleColor,
              fontFamily: selectedFont,
              fontSize: selectedAlbum?.label
                ? posterSize.value === '12 X 18'
                  ? selectedAlbum?.label.length > 24
                    ? selectedFontFamily === 'Blacksword'
                      ? `${+fontSize?.albumNameSize + 130}px`
                      : selectedFontFamily !== 'Morganite'
                      ? `${+fontSize?.albumNameSize + 115}px`
                      : `${+fontSize?.albumNameSize + 130}px`
                    : selectedFontFamily === 'Blacksword'
                    ? `${+fontSize?.albumNameSize + 200}px`
                    : selectedFontFamily !== 'Morganite'
                    ? `${+fontSize?.albumNameSize + 200}px`
                    : `${+fontSize?.albumNameSize + 250}px`
                  : posterSize.value === '16 X 20'
                  ? selectedAlbum?.label.length > 24
                    ? selectedFontFamily === 'Blacksword'
                      ? `${+fontSize?.albumNameSize + 170}px`
                      : selectedFontFamily !== 'Morganite'
                      ? `${+fontSize?.albumNameSize + 150}px`
                      : `${+fontSize?.albumNameSize + 180}px`
                    : selectedFontFamily === 'Blacksword'
                    ? `${+fontSize?.albumNameSize + 240}px`
                    : selectedFontFamily !== 'Morganite'
                    ? `${+fontSize?.albumNameSize + 250}px`
                    : `${+fontSize?.albumNameSize + 300}px`
                  : posterSize.value === '18 X 24'
                  ? selectedAlbum?.label.length > 24
                    ? selectedFontFamily === 'Blacksword'
                      ? `${+fontSize?.albumNameSize + 190}px`
                      : selectedFontFamily !== 'Morganite'
                      ? `${+fontSize?.albumNameSize + 180}px` // completed
                      : `${+fontSize?.albumNameSize + 230}px`
                    : selectedFontFamily === 'Blacksword'
                    ? `${+fontSize?.albumNameSize + 280}px`
                    : selectedFontFamily !== 'Morganite'
                    ? `${+fontSize?.albumNameSize + 285}px` // completed
                    : `${+fontSize?.albumNameSize + 350}px`
                  : posterSize.value === '20 X 28'
                  ? selectedAlbum?.label.length > 24
                    ? selectedFontFamily === 'Blacksword'
                      ? `${+fontSize?.albumNameSize + 210}px`
                      : selectedFontFamily !== 'Morganite'
                      ? `${+fontSize?.albumNameSize + 190}px` // completed
                      : `${+fontSize?.albumNameSize + 250}px`
                    : selectedFontFamily === 'Blacksword'
                    ? `${+fontSize?.albumNameSize + 320}px`
                    : selectedFontFamily !== 'Morganite'
                    ? `${+fontSize?.albumNameSize + 320}px` // completed
                    : `${+fontSize?.albumNameSize + 400}px`
                  : posterSize.value === '24 X 36'
                  ? selectedAlbum?.label.length > 24
                    ? selectedFontFamily === 'Blacksword'
                      ? `${+fontSize?.albumNameSize + 260}px`
                      : selectedFontFamily !== 'Morganite'
                      ? `${+fontSize?.albumNameSize + 250}px`
                      : `${+fontSize?.albumNameSize + 300}px`
                    : selectedFontFamily === 'Blacksword'
                    ? `${+fontSize?.albumNameSize + 400}px`
                    : selectedFontFamily !== 'Morganite'
                    ? `${+fontSize?.albumNameSize + 420}px`
                    : `${+fontSize?.albumNameSize + 500}px`
                  : posterSize.value === '28 X 40' && selectedAlbum?.label.length > 24
                  ? selectedFontFamily === 'Blacksword'
                    ? `${+fontSize?.albumNameSize + 300}px`
                    : selectedFontFamily !== 'Morganite'
                    ? `${+fontSize?.albumNameSize + 285}px`
                    : `${+fontSize?.albumNameSize + 350}px`
                  : selectedFontFamily === 'Blacksword'
                  ? `${+fontSize?.albumNameSize + 500}px`
                  : selectedFontFamily !== 'Morganite'
                  ? `${+fontSize?.albumNameSize + 480}px`
                  : `${+fontSize?.albumNameSize + 600}px`
                : '64px',
              letterSpacing: selectedFont === 'Morganite' ? '1px' : 'normal',
            }}
          >
            {selectedAlbum?.label ? selectedAlbum?.label.toUpperCase() : 'ALBUM NAME'}
          </span>
          <span
            className="font-bold font-[Montserrat] break-words relative"
            style={{
              color: colors.songTitleColor,
              fontFamily: selectedFont,
              fontSize: selectedAlbum?.label
                ? posterSize.value === '12 X 18'
                  ? selectedAlbum?.label.length > 24
                    ? `${+fontSize?.singerNameSize + 65}px`
                    : `${+fontSize?.singerNameSize + 65}px`
                  : posterSize.value === '16 X 20'
                  ? selectedAlbum?.label.length > 24
                    ? `${+fontSize?.singerNameSize + 75}px`
                    : `${+fontSize?.singerNameSize + 75}px`
                  : posterSize.value === '18 X 24'
                  ? selectedAlbum?.label.length > 24
                    ? `${+fontSize?.singerNameSize + 85}px`
                    : `${+fontSize?.singerNameSize + 85}px`
                  : posterSize.value === '20 X 28'
                  ? selectedAlbum?.label.length > 24
                    ? `${+fontSize?.singerNameSize + 95}px`
                    : `${+fontSize?.singerNameSize + 95}px`
                  : posterSize.value === '24 X 36'
                  ? selectedAlbum?.label.length > 24
                    ? `${+fontSize?.singerNameSize + 120}px`
                    : `${+fontSize?.singerNameSize + 120}px`
                  : posterSize.value === '28 X 40' && selectedAlbum?.label.length > 24
                  ? `${+fontSize?.singerNameSize + 130}px`
                  : `${+fontSize?.singerNameSize + 130}px`
                : `${+fontSize?.singerNameSize + 65}px`,
              letterSpacing: selectedFont === 'Morganite' ? '1px' : 'normal',
            }}
          >
            {selectedAlbum?.singerName ? selectedAlbum?.singerName.toUpperCase() : 'SINGER NAME'}
          </span>
          <p
            className={`${activeAlignment} relative text-[5px] md:text-[6px] bg-transparent text-ellipsis-8 break-words mt-[1.8%] font-[Montserrat] pb-[2%]`}
            style={{
              whiteSpace: 'pre-wrap',
              color: colors.descriptionColor,
              fontFamily: selectedFont,
              letterSpacing: selectedFont === 'Morganite' ? '1px' : 'normal',
              fontSize: descriptionFontSize[posterSize.value] ?? '14px',
            }}
          >
            {albumDescripition}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Template5;
