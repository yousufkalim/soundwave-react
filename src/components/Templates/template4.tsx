import React, { FC, useEffect } from 'react';
import Waveroom from '../WaveItem/index';
import {
  DataSetProps,
  SelectedAlbumProps,
  IStateColors,
  IPosterSize,
  IFontSize,
} from '../../types/index';

interface PosterSize {
  withFrame: string;
  withoutFrame: string;
}

const posterSizes: Record<string, PosterSize> = {
  '12 X 18': { withFrame: '4rem', withoutFrame: '3.5rem' },
  '16 X 20': { withFrame: '5rem', withoutFrame: '4.5rem' },
  '18 X 24': { withFrame: '5.5rem', withoutFrame: '5rem' },
  '20 X 28': { withFrame: '6.5rem', withoutFrame: '5.5rem' },
  '24 X 36': { withFrame: '7.8rem', withoutFrame: '6.7rem' },
  '28 X 40': { withFrame: '9rem', withoutFrame: '7.5rem' },
};

const sizeScales: Record<string, string[]> = {
  '12 X 18': ['30%', '35%', '35%', '35%', '45%', '45%', '50%', '50%'],
  '16 X 20': ['23%', '30%', '30%', '30%', '35%', '40%', '40%', '40%'],
  '18 X 24': ['20%', '25%', '25%', '25%', '30%', '30%', '30%', '35%'],
  '20 X 28': ['18%', '20%', '22%', '25%', '25%', '25%', '25%', '30%'],
  '24 X 36': ['15%', '15%', '18%', '20%', '22%', '22%', '22%', '25%'],
  '28 X 40': ['13%', '15%', '15%', '18%', '20%', '22%', '22%', '22%'],
};

const posterSizeToBorderWidth: Record<string, string> = {
  '12 X 18': '12px',
  '16 X 20': '14px',
  '18 X 24': '16px',
  '20 X 28': '20px',
  '24 X 36': '26px',
  '28 X 40': '30px',
};
const sizeValues: Record<string, string> = {
  '12 X 18': '1218',
  '16 X 20': '1620',
  '18 X 24': '1824',
  '20 X 28': '2028',
  '24 X 36': '2436',
  '28 X 40': '2840',
};

const posterHeigth: Record<string, string> = {
  '12 X 18': '1298px',
  '16 X 20': '1440.5px',
  '18 X 24': '1728px',
  '20 X 28': '2015px',
  '24 X 36': '2592px',
  '28 X 40': '2880px',
};

const posterWidth: Record<string, string> = {
  '12 X 18': '864px',
  '16 X 20': '1151.7px',
  '18 X 24': '1296px',
  '20 X 28': '1440px',
  '24 X 36': '1728px',
  '28 X 40': '2015.7px',
};

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
  fontSize,
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

  const sizeScaling = sizeScales[posterSize.value] || sizeScales['12 X 18'];
  const [scaleXs, scaleMsm, scaleSm, scaleMd, scaleLg, scaleSxl, scale2xl] = sizeScaling;
  const leftSpacingSize = posterSizes[posterSize?.value] || posterSizes['12 X 18'];
  const leftSpacing = BackgroundFrame ? leftSpacingSize.withFrame : leftSpacingSize.withoutFrame;

  const borderWidth =
    posterType !== 'No Frame' &&
    posterType !== 'Thin Canvas' &&
    posterType !== 'Thick Canvas' &&
    posterSizeToBorderWidth[posterSize.value];

  const borderPadding =
    posterType !== 'No Frame' && posterType !== 'Thin Canvas' && posterType !== 'Thick Canvas'
      ? posterSizeToBorderWidth[posterSize.value] || '0px'
      : '';

  const descriptionFontSize: Record<string, number> = {
    '12 X 18': +fontSize?.descriptionSize + 14,
    '16 X 20': +fontSize?.descriptionSize + 16,
    '18 X 24': +fontSize?.descriptionSize + 18,
    '20 X 28': +fontSize?.descriptionSize + 20,
    '24 X 36': +fontSize?.descriptionSize + 24,
    '28 X 40': +fontSize?.descriptionSize + 26,
  };
  const selectedFontFamily = selectedFont || 'Morganite';
  return (
    <div
      id="custom-poster-template"
      className={`overflow-hidden scale-[${sizeScaling[0]}] absolute xs:scale-[${scaleXs}] msm:scale-[${scaleMsm}] sm:scale-[${scaleSm}] md:scale-[${scaleMd}] lg:scale-[${scaleLg}] sxl:scale-[${scaleSxl}] 2xl:scale-[${scale2xl}]`}
      style={{
        background: borderWidth ? BackgroundFrame : '',
        padding: borderPadding,
        height: posterHeigth[posterSize.value] || '1298px',
        width: posterWidth[posterSize.value] || '864px',
        boxShadow: '0px 15px 40px rgba(0, 0, 0, 0.5)',
      }}
    >
      <div
        className={`h-full w-full`}
        style={{
          backgroundColor: colors.posterColor,
          padding: '6% 5% 0% 5%',
        }}
      >
        <div
          className={`h-[80%] px-1 py-2 border-2 border-white overflow-hidden flex flex-wrap justify-around`}
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
                  posterRatio={sizeValues[posterSize.value] || '1218'}
                />
              );
            } else {
              return '';
            }
          })}
        </div>
        <div
          className="absolute template_album_name flex items-center justify-center flex-col"
          style={{
            left: leftSpacing,
            color: colors.songTitleColor,
            bottom:
              posterSize.value === '12 X 18'
                ? BackgroundFrame
                  ? selectedFontFamily !== 'Morganite'
                    ? '16.3%' // changed
                    : '14.8%' // changed
                  : selectedFontFamily !== 'Morganite'
                  ? '15.3%' // changed
                  : '14.3%' // changed
                : posterSize.value === '16 X 20'
                ? BackgroundFrame
                  ? selectedFontFamily !== 'Morganite'
                    ? '16.3%' // changed
                    : '14.7%' // changed
                  : selectedFontFamily !== 'Morganite'
                  ? '14.7%' // changed
                  : '14.1%' // changed
                : posterSize.value === '18 X 24'
                ? BackgroundFrame
                  ? selectedFontFamily !== 'Morganite'
                    ? '16%' // changed
                    : '14.8%' // changed
                  : selectedFontFamily !== 'Morganite'
                  ? '15%' // changed
                  : '14.2%' // changed
                : posterSize.value === '20 X 28'
                ? BackgroundFrame
                  ? selectedFontFamily !== 'Morganite'
                    ? '15.8%'
                    : '14.8%'
                  : selectedFontFamily !== 'Morganite'
                  ? '14.9%'
                  : '14.2%'
                : posterSize.value === '24 X 36'
                ? BackgroundFrame
                  ? selectedFontFamily !== 'Morganite'
                    ? '14.7%'
                    : '14.7%'
                  : selectedFontFamily !== 'Morganite'
                  ? '14.1%'
                  : '14.1%'
                : posterSize.value === '28 X 40'
                ? BackgroundFrame
                  ? selectedFontFamily !== 'Morganite'
                    ? '14.6%'
                    : '14.6%'
                  : selectedFontFamily !== 'Morganite'
                  ? '14%'
                  : '14%'
                : '16%',
          }}
        >
          <div
            style={{
              fontFamily: selectedFontFamily,
              fontSize: selectedAlbum?.label
                ? posterSize.value === '12 X 18'
                  ? selectedAlbum?.label.length > 24
                    ? selectedFontFamily !== 'Morganite'
                      ? `${+fontSize?.albumNameSize + 32}px`
                      : `${+fontSize?.albumNameSize + 48}px`
                    : selectedFontFamily !== 'Morganite'
                    ? `${+fontSize?.albumNameSize + 48}px`
                    : `${+fontSize?.albumNameSize + 64}px`
                  : posterSize.value === '16 X 20'
                  ? selectedAlbum?.label.length > 24
                    ? selectedFontFamily !== 'Morganite'
                      ? `${+fontSize?.albumNameSize + 36}px`
                      : `${+fontSize?.albumNameSize + 51}px`
                    : selectedFontFamily !== 'Morganite'
                    ? `${+fontSize?.albumNameSize + 48}px`
                    : `${+fontSize?.albumNameSize + 67}px`
                  : posterSize.value === '18 X 24'
                  ? selectedAlbum?.label.length > 24
                    ? selectedFontFamily !== 'Morganite'
                      ? `${+fontSize?.albumNameSize + 40}px` // completed
                      : `${+fontSize?.albumNameSize + 56}px`
                    : selectedFontFamily !== 'Morganite'
                    ? `${+fontSize?.albumNameSize + 60}px` // completed
                    : `${+fontSize?.albumNameSize + 74}px`
                  : posterSize.value === '20 X 28'
                  ? selectedAlbum?.label.length > 24
                    ? selectedFontFamily !== 'Morganite'
                      ? `${+fontSize?.albumNameSize + 45}px` // completed
                      : `${+fontSize?.albumNameSize + 64}px`
                    : selectedFontFamily !== 'Morganite'
                    ? `${+fontSize?.albumNameSize + 70}px` // completed
                    : `${+fontSize?.albumNameSize + 86}px`
                  : posterSize.value === '24 X 36'
                  ? selectedAlbum?.label.length > 24
                    ? selectedFontFamily !== 'Morganite'
                      ? `${+fontSize?.albumNameSize + 80}px`
                      : `${+fontSize?.albumNameSize + 80}px`
                    : selectedFontFamily !== 'Morganite'
                    ? `${+fontSize?.albumNameSize + 112}px`
                    : `${+fontSize?.albumNameSize + 112}px`
                  : posterSize.value === '28 X 40' && selectedAlbum?.label.length > 24
                  ? selectedFontFamily !== 'Morganite'
                    ? `${+fontSize?.albumNameSize + 88}px`
                    : `${+fontSize?.albumNameSize + 88}px`
                  : selectedFontFamily !== 'Morganite'
                  ? `${+fontSize?.albumNameSize + 123}px`
                  : `${+fontSize?.albumNameSize + 123}px`
                : '64px',
            }}
            className={
              selectedAlbum?.label && selectedAlbum?.label.length > 24
                ? `md:font-semibold bg-black px-2`
                : `md:font-semibold bg-black px-2`
            }
          >
            {selectedAlbum?.label ? selectedAlbum?.label.toUpperCase() : 'ALBUM NAME'}
          </div>
          <div
            style={{
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
            }}
            className={
              selectedAlbum?.label && selectedAlbum?.label.length > 24
                ? 'md:font-bold mt-[-1rem] text-center'
                : 'md:font-bold mt-[-1rem] text-center'
            }
          >
            {selectedAlbum?.singerName ? selectedAlbum.singerName : 'SINGER NAME'}
          </div>
        </div>
        <div
          className={`${activeAlignment} text-left absolute left-0 right-0 px-[5%] w-full pt-[9%] template_album_name overflow-hidden `}
          style={{
            color: colors.descriptionColor,
            fontFamily: selectedFontFamily,
            fontSize: descriptionFontSize[posterSize.value] ?? '14px',
          }}
        >
          <p
            style={{
              whiteSpace: 'pre-wrap',
              letterSpacing: selectedFontFamily === 'Morganite' ? '0' : '-0.05em',
            }}
            className={`bg-transparent text-ellipsis-8 tracking-tighter`}
          >
            {albumDescripition}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Template4;
