import React, { FC, useEffect } from 'react';
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
      boxColor: '#CCCCCC',
      posterColor: '#fff',
      soundWaveColor: 'rgba(0,0,0,1)',
      soundWaveNameColor: 'rgba(0,0,0,1)',
      songTitleColor: 'rgba(0,0,0,1)',
      descriptionColor: 'rgba(0,0,0,1)',
    });
  }, []);

  const selectedFontFamily = selectedFont || 'proxima-nova';

  // const sizeScaling = sizeScales[posterSize.value] || sizeScales['12 X 18'];
  // const [scaleXs, scaleMsm, scaleSm, scaleMd, scaleLg, scaleSxl, scale2xl] = sizeScaling;
  const borderWidth =
    posterType !== 'No Frame' &&
    posterType !== 'Thin Canvas' &&
    posterType !== 'Thick Canvas' &&
    posterSizeToBorderWidth[posterSize.value];

  const descriptionFontSize: Record<string, number> = {
    '12 X 18': +fontSize?.descriptionSize + 14,
    '16 X 20': +fontSize?.descriptionSize + 16,
    '18 X 24': +fontSize?.descriptionSize + 18,
    '20 X 28': +fontSize?.descriptionSize + 20,
    '24 X 36': +fontSize?.descriptionSize + 24,
    '28 X 40': +fontSize?.descriptionSize + 28,
  };
  const borderPadding =
    posterType !== 'No Frame' && posterType !== 'Thin Canvas' && posterType !== 'Thick Canvas'
      ? posterSizeToBorderWidth[posterSize.value] || '0px'
      : '';
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
        boxShadow: '0px 15px 40px rgba(0, 0, 0, 0.16)',
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
          className={`h-[77%] px-1 py-[2] overflow-hidden flex flex-wrap justify-around items-baseline`}
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
                  ? `break-words h-[23%] left-0 right-0 px-[5%] text-ellipsis-8 w-full absolute  bottom-[2.7%]`
                  : `break-words h-[23%] left-0 right-0 px-[5%] text-ellipsis-8 w-full absolute  bottom-[1%]`
                : BackgroundFrame
                ? `break-words h-[23%] left-0 right-0 px-[5%] text-ellipsis-8 w-full absolute bottom-[2.7%]`
                : `break-words h-[23%] left-0 right-0 px-[5%] text-ellipsis-8 w-full absolute bottom-[1%]`
              : flag
              ? BackgroundFrame
                ? `break-words h-[23%] left-0 right-0 px-[5%] text-ellipsis-8 w-full absolute bottom-[6%]`
                : `break-words h-[23%] left-0 right-0 px-[5%] text-ellipsis-8 w-full absolute bottom-[4%]`
              : BackgroundFrame
              ? `break-words h-[23%] left-0 right-0 px-[5%] text-ellipsis-8 w-full absolute bottom-[3%]`
              : `break-words h-[23%] left-0 right-0 px-[5%] text-ellipsis-8 w-full absolute bottom-[2.2%]`
          }
        >
          <div className="text-left pl-2">
            <span
              className={
                selectedAlbum?.label && selectedAlbum?.label.length > 15
                  ? `font-semibold relative font-proxima-nova template_album_name`
                  : `font-semibold relative font-proxima-nova template_album_name`
              }
              style={{
                letterSpacing: selectedFont === 'Morganite' ? '1px' : 'normal',
                color: colors.songTitleColor,
                fontFamily: selectedFont,
                fontSize: selectedAlbum?.label
                  ? posterSize.value === '12 X 18'
                    ? selectedAlbum?.label.length > 15
                      ? selectedFontFamily === 'Blacksword'
                        ? `${+fontSize?.albumNameSize + 25}px`
                        : selectedFontFamily !== 'Morganite'
                        ? `${+fontSize?.albumNameSize + 32}px`
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
                        ? `${+fontSize?.albumNameSize + 43}px`
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
                        ? `${+fontSize?.albumNameSize + 48}px` // completed
                        : `${+fontSize?.albumNameSize + 48}px`
                      : selectedFontFamily === 'Blacksword'
                      ? `${+fontSize?.albumNameSize + 62}px`
                      : selectedFontFamily !== 'Morganite'
                      ? `${+fontSize?.albumNameSize + 72}px` // completed
                      : `${+fontSize?.albumNameSize + 82}px`
                    : posterSize.value === '20 X 28'
                    ? selectedAlbum?.label.length > 15
                      ? selectedFontFamily === 'Blacksword'
                        ? `${+fontSize?.albumNameSize + 45}px`
                        : selectedFontFamily !== 'Morganite'
                        ? `${+fontSize?.albumNameSize + 52}px` // completed
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
                        ? `${+fontSize?.albumNameSize + 64}px`
                        : `${+fontSize?.albumNameSize + 65}px`
                      : selectedFontFamily === 'Blacksword'
                      ? `${+fontSize?.albumNameSize + 90}px`
                      : selectedFontFamily !== 'Morganite'
                      ? `${+fontSize?.albumNameSize + 120}px`
                      : `${+fontSize?.albumNameSize + 120}px`
                    : posterSize.value === '28 X 40' && selectedAlbum?.label.length > 15
                    ? selectedFontFamily === 'Blacksword'
                      ? `${+fontSize?.albumNameSize + 58}px`
                      : selectedFontFamily !== 'Morganite'
                      ? `${+fontSize?.albumNameSize + 75}px`
                      : `${+fontSize?.albumNameSize + 75}px`
                    : selectedFontFamily === 'Blacksword'
                    ? `${+fontSize?.albumNameSize + 100}px`
                    : selectedFontFamily !== 'Morganite'
                    ? `${+fontSize?.albumNameSize + 120}px`
                    : `${+fontSize?.albumNameSize + 135}px`
                  : '64px',
              }}
            >
              <i>{selectedAlbum?.label ? selectedAlbum?.label.toUpperCase() : 'Album/Song Name'}</i>
            </span>
          </div>
          <div
            className={`${activeAlignment} bg-transparent font-proxima-nova mt-4 relative`}
            style={{
              color: colors.descriptionColor,
              fontFamily: selectedFont,
              letterSpacing: selectedFont === 'Morganite' ? '1px' : 'normal',
              fontSize: descriptionFontSize[posterSize.value] ?? '14px',
            }}
          >
            <p id="description" style={{ whiteSpace: 'pre-wrap' }}>
              {albumDescripition}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template2;
