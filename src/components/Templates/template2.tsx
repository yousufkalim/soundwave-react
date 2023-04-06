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
  flag: boolean;
  fontSize: IFontSize;
}

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
  flag,
  fontSize,
}) => {
  useEffect(() => {
    setColors({
      boxColor: '#e28743',
      posterColor: '#fff',
      soundWaveColor: 'rgba(0,0,0,1)',
      soundWaveNameColor: 'rgba(0,0,0,1)',
      songTitleColor: 'rgba(0,0,0,1)',
      descriptionColor: 'rgba(0,0,0,1)',
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
  const selectedFontFamily = selectedFont || 'Proxima-italic';

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
          className={
            selectedAlbum?.label && selectedAlbum?.label.length > 15
              ? flag
                ? BackgroundFrame
                  ? // more than 15 charaters and with background frame and flag
                    posterSize.value === '12 X 18'
                    ? `break-words w-full left-0 right-0 h-[23%] text-ellipsis-8 px-[5%] absolute bottom-[2.8%]`
                    : posterSize.value === '16 X 20'
                    ? `break-words w-full left-0 right-0 h-[23%] text-ellipsis-8 px-[5%] absolute bottom-[2.8%]`
                    : posterSize.value === '18 X 24'
                    ? `break-words w-full left-0 right-0 h-[23%] text-ellipsis-8 px-[5%] absolute bottom-[2.8%]`
                    : posterSize.value === '20 X 28'
                    ? `break-words w-full left-0 right-0 h-[23%] text-ellipsis-8 px-[5%] absolute bottom-[2.8%]`
                    : posterSize.value === '24 X 36'
                    ? `break-words w-full left-0 right-0 h-[23%] text-ellipsis-8 px-[5%] absolute bottom-[2.8%]`
                    : posterSize.value === '28 X 40'
                    ? `break-words w-full left-0 right-0 h-[23%] text-ellipsis-8 px-[5%] absolute bottom-[2.8%]`
                    : `break-words w-full left-0 right-0 h-[23%] text-ellipsis-8 px-[5%] absolute bottom-[2.8%]`
                  : // more than 15 charaters and with no background frame and flag
                  posterSize.value === '12 X 18'
                  ? `break-words w-full left-0 right-0 h-[23%] text-ellipsis-8 px-[5%] absolute bottom-[1.6%]`
                  : posterSize.value === '16 X 20'
                  ? `break-words w-full left-0 right-0 h-[23%] text-ellipsis-8 px-[5%] absolute bottom-[2%]`
                  : posterSize.value === '18 X 24'
                  ? `break-words w-full left-0 right-0 h-[23%] text-ellipsis-8 px-[5%] absolute bottom-[2%]`
                  : posterSize.value === '20 X 28'
                  ? `break-words w-full left-0 right-0 h-[23%] text-ellipsis-8 px-[5%] absolute bottom-[1.9%]`
                  : posterSize.value === '24 X 36'
                  ? `break-words w-full left-0 right-0 h-[23%] text-ellipsis-8 px-[5%] absolute bottom-[1.6%]`
                  : posterSize.value === '28 X 40'
                  ? `break-words w-full left-0 right-0 h-[23%] text-ellipsis-8 px-[5%] absolute bottom-[1.7%]`
                  : `break-words w-full left-0 right-0 h-[23%] text-ellipsis-8 px-[5%] absolute bottom-[1.6%]`
                : BackgroundFrame
                ? // more than 15 charaters and with background frame
                  posterSize.value === '12 X 18'
                  ? `break-words w-full left-0 right-0 h-[23%] text-ellipsis-8 px-[5%] absolute bottom-[1.154%]`
                  : posterSize.value === '16 X 20'
                  ? `break-words w-full left-0 right-0 h-[23%] text-ellipsis-8 px-[5%] absolute bottom-[1.25%]`
                  : posterSize.value === '18 X 24'
                  ? `break-words w-full left-0 right-0 h-[23%] text-ellipsis-8 px-[5%] absolute bottom-[1.25%]`
                  : posterSize.value === '20 X 28'
                  ? `break-words w-full left-0 right-0 h-[23%] text-ellipsis-8 px-[5%] absolute bottom-[1.154%]`
                  : posterSize.value === '24 X 36'
                  ? `break-words w-full left-0 right-0 h-[23%] text-ellipsis-8 px-[5%] absolute bottom-[1.16%]`
                  : posterSize.value === '28 X 40'
                  ? `break-words w-full left-0 right-0 h-[23%] text-ellipsis-8 px-[5%] absolute bottom-[1.23%]`
                  : `break-words w-full left-0 right-0 h-[23%] text-ellipsis-8 px-[5%] absolute bottom-[1.154%]`
                : // more than 15 charaters and no background frame
                posterSize.value === '12 X 18'
                ? `break-words w-full left-0 right-0 h-[23%] text-ellipsis-8 px-[5%] absolute bottom-[0.65%]`
                : posterSize.value === '16 X 20'
                ? `break-words w-full left-0 right-0 h-[23%] text-ellipsis-8 px-[5%] absolute bottom-[0.7%]`
                : posterSize.value === '18 X 24'
                ? `break-words w-full left-0 right-0 h-[23%] text-ellipsis-8 px-[5%] absolute bottom-[0.7%]`
                : posterSize.value === '20 X 28'
                ? `break-words w-full left-0 right-0 h-[23%] text-ellipsis-8 px-[5%] absolute bottom-[0.63%]`
                : posterSize.value === '24 X 36'
                ? `break-words w-full left-0 right-0 h-[23%] text-ellipsis-8 px-[5%] absolute bottom-[0.63%]`
                : posterSize.value === '28 X 40'
                ? `break-words w-full left-0 right-0 h-[23%] text-ellipsis-8 px-[5%] absolute bottom-[0.67%]`
                : `break-words w-full left-0 right-0 h-[23%] text-ellipsis-8 px-[5%] absolute bottom-[0.65%]`
              : flag
              ? BackgroundFrame
                ? `break-words w-full left-0 right-0 h-[23%] text-ellipsis-8 px-[5%] absolute bottom-[5%]`
                : `break-words w-full left-0 right-0 h-[23%] text-ellipsis-8 px-[5%] absolute bottom-[4.5%]`
              : BackgroundFrame
              ? // less than 15 charaters and with background frame
                posterSize.value === '12 X 18'
                ? `break-words w-full left-0 right-0 h-[23%] text-ellipsis-8 px-[5%] absolute bottom-[2.5%]`
                : posterSize.value === '16 X 20'
                ? `break-words w-full left-0 right-0 h-[23%] text-ellipsis-8 px-[5%] absolute bottom-[3%]`
                : posterSize.value === '18 X 24'
                ? `break-words w-full left-0 right-0 h-[23%] text-ellipsis-8 px-[5%] absolute bottom-[2.5%]`
                : posterSize.value === '20 X 28'
                ? `break-words w-full left-0 right-0 h-[23%] text-ellipsis-8 px-[5%] absolute bottom-[2.8%]`
                : posterSize.value === '24 X 36'
                ? `break-words w-full left-0 right-0 h-[23%] text-ellipsis-8 px-[5%] absolute bottom-[2.5%]`
                : posterSize.value === '28 X 40'
                ? `break-words w-full left-0 right-0 h-[23%] text-ellipsis-8 px-[5%] absolute bottom-[2.7%]`
                : `break-words w-full left-0 right-0 h-[23%] text-ellipsis-8 px-[5%] absolute bottom-[2.5%]`
              : // less than 15 charaters and no background frame
              posterSize.value === '12 X 18'
              ? `break-words w-full left-0 right-0 h-[23%] text-ellipsis-8 px-[5%] absolute bottom-[2%]`
              : posterSize.value === '16 X 20'
              ? `break-words w-full left-0 right-0 h-[23%] text-ellipsis-8 px-[5%] absolute bottom-[2.45%]`
              : posterSize.value === '18 X 24'
              ? `break-words w-full left-0 right-0 h-[23%] text-ellipsis-8 px-[5%] absolute bottom-[2%]`
              : posterSize.value === '20 X 28'
              ? `break-words w-full left-0 right-0 h-[23%] text-ellipsis-8 px-[5%] absolute bottom-[2.2%]`
              : posterSize.value === '24 X 36'
              ? `break-words w-full left-0 right-0 h-[23%] text-ellipsis-8 px-[5%] absolute bottom-[2.1%]`
              : posterSize.value === '28 X 40'
              ? `break-words w-full left-0 right-0 h-[23%] text-ellipsis-8 px-[5%] absolute bottom-[2.1%]`
              : `break-words w-full left-0 right-0 h-[23%] text-ellipsis-8 px-[5%] absolute bottom-[2%]`
          }
        >
          <div className="text-center">
            <span
              className={
                selectedAlbum?.label && selectedAlbum?.label.length > 15
                  ? `font-semibold font-proxima-nova template_album_name tracking-tighter`
                  : `font-semibold font-proxima-nova template_album_name tracking-wide`
              }
              style={{
                color: colors.songTitleColor,
                fontFamily: selectedFont || 'Proxima-italic',
                fontSize: selectedAlbum?.label
                  ? posterSize.value === '12 X 18'
                    ? selectedAlbum?.label.length > 15
                      ? selectedFontFamily === 'Blacksword'
                        ? `${+fontSize?.albumNameSize + 25}px`
                        : selectedFontFamily !== 'Morganite'
                        ? `${+fontSize?.albumNameSize + 25}px`
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
                        ? `${+fontSize?.albumNameSize + 38}px` // completed
                        : `${+fontSize?.albumNameSize + 48}px`
                      : selectedFontFamily === 'Blacksword'
                      ? `${+fontSize?.albumNameSize + 62}px`
                      : selectedFontFamily !== 'Morganite'
                      ? `${+fontSize?.albumNameSize + 67}px` // completed
                      : `${+fontSize?.albumNameSize + 82}px`
                    : posterSize.value === '20 X 28'
                    ? selectedAlbum?.label.length > 15
                      ? selectedFontFamily === 'Blacksword'
                        ? `${+fontSize?.albumNameSize + 45}px`
                        : selectedFontFamily !== 'Morganite'
                        ? `${+fontSize?.albumNameSize + 43}px` // completed
                        : `${+fontSize?.albumNameSize + 53}px`
                      : selectedFontFamily === 'Blacksword'
                      ? `${+fontSize?.albumNameSize + 75}px`
                      : selectedFontFamily !== 'Morganite'
                      ? `${+fontSize?.albumNameSize + 80}px` // completed
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
              }}
            >
              <i>{selectedAlbum?.label ? selectedAlbum?.label.toUpperCase() : 'ALBUM NAME'}</i>
            </span>
          </div>
          <div
            className={`${activeAlignment} bg-transparent absolute left-0 right-0 px-[5%] mt-[5%] template_album_name 
            `}
            style={{
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
    </div>
  );
};

export default Template2;
