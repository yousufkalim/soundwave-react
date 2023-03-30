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
  flag: boolean;
  fontSize: IFontSize;
}

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
  flag,
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
    '28 X 40': +fontSize?.descriptionSize + 26,
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
        padding: borderPadding,
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
          className={`h-[77%] pb-3 pt-[5%] py-3 overflow-hidden flex flex-wrap justify-around`}
          style={{
            background: colors?.boxColor,
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
          className={
            selectedAlbum?.label && selectedAlbum?.label.length > 15
              ? flag
                ? BackgroundFrame
                  ? 'text-center relative bottom-[2.5%] font-[Aemstel-Regular] template_album_name tracking-tighter'
                  : 'text-center relative bottom-[2.5%] font-[Aemstel-Regular] template_album_name tracking-tighter'
                : BackgroundFrame
                ? 'text-center relative bottom-[1.8%] font-[Aemstel-Regular] template_album_name tracking-tighter'
                : 'text-center relative bottom-[1.7%] font-[Aemstel-Regular] template_album_name tracking-tighter'
              : flag
              ? BackgroundFrame
                ? 'text-center relative bottom-[3%] font-[Aemstel-Regular] template_album_name'
                : 'text-center relative bottom-[3%] font-[Aemstel-Regular] template_album_name'
              : BackgroundFrame
              ? 'text-center relative bottom-[3%]  font-[Aemstel-Regular] template_album_name'
              : 'text-center relative bottom-[3%]  font-[Aemstel-Regular] template_album_name'
          }
          style={{
            color: colors.songTitleColor,
            fontFamily: selectedFont,
            fontSize: selectedAlbum?.label
              ? posterSize.value === '12 X 18'
                ? selectedAlbum?.label.length > 15
                  ? `${+fontSize.albumNameSize + 25}px`
                  : `${+fontSize.albumNameSize + 48}px`
                : posterSize.value === '16 X 20'
                ? selectedAlbum?.label.length > 15
                  ? `${+fontSize.albumNameSize + 33}px`
                  : `${+fontSize.albumNameSize + 64}px`
                : posterSize.value === '18 X 24'
                ? selectedAlbum?.label.length > 15
                  ? `${+fontSize.albumNameSize + 38}px`
                  : `${+fontSize.albumNameSize + 67}px`
                : posterSize.value === '20 X 28'
                ? selectedAlbum?.label.length > 15
                  ? `${+fontSize.albumNameSize + 41}px`
                  : `${+fontSize.albumNameSize + 80}px`
                : posterSize.value === '24 X 36'
                ? selectedAlbum?.label.length > 15
                  ? `${+fontSize.albumNameSize + 51}px`
                  : `${+fontSize.albumNameSize + 96}px`
                : posterSize.value === '28 X 40' && selectedAlbum?.label.length > 15
                ? `${+fontSize.albumNameSize + 59}px`
                : `${+fontSize.albumNameSize + 112}px`
              : '48px',
          }}
        >
          {selectedAlbum?.label ? selectedAlbum?.label.toUpperCase() : 'Album Name'}
        </div>
        <div
          className={`bg-transparent tracking-tighter h-[23%] ${activeAlignment} text-[5px] md:text-[6px] relative left-0 right-0 w-full`}
          style={{
            whiteSpace: 'pre-wrap',
            color: colors.descriptionColor,
            fontFamily: selectedFont,
            letterSpacing: selectedFont === 'Morganite' ? '0' : '-0.05em',
            fontSize: descriptionFontSize[posterSize.value] ?? '14px',
          }}
        >
          <p className={`mb-[3.5%]`}>{albumDescripition}</p>
          <div className="text-center">
            <span
              style={{
                fontFamily: selectedFont,
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
              }}
              className="border p-1 rounded-lg font-bold"
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
