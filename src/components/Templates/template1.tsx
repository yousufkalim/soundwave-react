/* eslint-disable one-var */
import React, { FC, useEffect } from 'react';
import Waveroom from '../WaveItem/index';
import {
  DataSetProps,
  SelectedAlbumProps,
  IStateColors,
  IPosterSize,
  IFontSize,
} from '../../types/index';
import {
  // sizeScales,
  posterSizeToBorderWidth,
  sizeValues,
  posterHeigth,
  posterWidth,
  posterMainDiv,
} from '../../utils/data';

interface Template1Props {
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

const Template1: FC<Template1Props> = ({
  activeAlignment,
  selectedAlbum,
  albumDescripition,
  dataSets,
  colors,
  setColors,
  posterType,
  BackgroundFrame,
  selectedFont,
  posterSize,
  fontSize,
}) => {
  useEffect(() => {
    setColors({
      boxColor: 'transparent',
      posterColor: '#000',
      soundWaveColor: 'rgba(255, 255, 255, 1)',
      soundWaveNameColor: 'rgba(255, 255, 255, 1)',
      songTitleColor: 'rgba(255, 255, 255, 1)',
      descriptionColor: 'rgba(255, 255, 255, 1)',
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
  const selectedFontFamily = selectedFont || 'Montserrat';

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
        <div className="flex items-center justify-center flex-col pb-[1%]">
          <span
            className={
              selectedAlbum?.label && selectedAlbum?.label.length > 24
                ? `font-bold break-words tracking-tighter`
                : `font-bold break-words tracking-wide`
            }
            style={{
              color: colors.songTitleColor,
              fontFamily: selectedFont,
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
              letterSpacing: selectedFont === 'Morganite' ? '1px' : 'normal',
            }}
          >
            {selectedAlbum?.label ? selectedAlbum?.label.toUpperCase() : 'ALBUM NAME'}
          </span>
          <span
            className={
              selectedAlbum?.label && selectedAlbum?.label.length > 24
                ? `text-sm break-words relative`
                : `text-sm break-words relative`
            }
            style={{
              color: colors.songTitleColor,
              fontFamily: selectedFont,
              fontSize: selectedAlbum?.label
                ? posterSize.value === '12 X 18'
                  ? selectedAlbum?.label.length > 24
                    ? `${+fontSize?.singerNameSize + 14}px`
                    : `${+fontSize?.singerNameSize + 14}px`
                  : posterSize.value === '16 X 20'
                  ? selectedAlbum?.label.length > 24
                    ? `${+fontSize?.singerNameSize + 16}px`
                    : `${+fontSize?.singerNameSize + 16}px`
                  : posterSize.value === '18 X 24'
                  ? selectedAlbum?.label.length > 24
                    ? `${+fontSize?.singerNameSize + 19}px`
                    : `${+fontSize?.singerNameSize + 19}px`
                  : posterSize.value === '20 X 28'
                  ? selectedAlbum?.label.length > 24
                    ? `${+fontSize?.singerNameSize + 22}px`
                    : `${+fontSize?.singerNameSize + 22}px`
                  : posterSize.value === '24 X 36'
                  ? selectedAlbum?.label.length > 24
                    ? `${+fontSize?.singerNameSize + 28}px`
                    : `${+fontSize?.singerNameSize + 28}px`
                  : posterSize.value === '28 X 40' && selectedAlbum?.label.length > 24
                  ? `${+fontSize?.singerNameSize + 32}px`
                  : `${+fontSize?.singerNameSize + 32}px`
                : '14px',
              letterSpacing: selectedFont === 'Morganite' ? '1px' : 'normal',
            }}
          >
            {selectedAlbum?.singerName ? selectedAlbum?.singerName.toUpperCase() : 'SINGER NAME'}
          </span>
        </div>
        <div className="h-full overflow-hidden">
          <div
            className={`h-[75%] px-1 py-2 overflow-hidden flex flex-wrap justify-around`}
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
            style={{
              whiteSpace: 'pre-wrap',
              color: colors.descriptionColor,
              fontFamily: selectedFont || 'Montserrat',
              letterSpacing: selectedFont === 'Morganite' ? '1px' : 'normal',
              fontSize: descriptionFontSize[posterSize.value] ?? '14px',
            }}
            className={`${activeAlignment} mt-[2%] absolute left-0 right-0 px-[5%] w-full`}
          >
            <p className={`break-words bg-transparent font-[Montserrat] text-ellipsis-8 pb-[2%]`}>
              {albumDescripition}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template1;
