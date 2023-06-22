import React, { FC, useEffect } from 'react';
import Waveroom from '../WaveItem';
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
  posterWidth,
} from '../../utils/data';

interface Template6Props {
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

const Template6: FC<Template6Props> = ({
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
      posterColor: 'linear-gradient(180deg, rgb(233, 132, 209) 0%, rgb(233,132,73) 100%)',
      soundWaveColor: 'rgba(255,255,255,1)',
      soundWaveNameColor: '#fff',
      songTitleColor: '#fff',
      descriptionColor: '#fff',
    });
  }, []);

  const capitalizeAfterSpaceOrParenthesis = (str: string): string => {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    return str.replace(/(\s+|\()(\w)/g, (match, p1, p2) => `${p1}${p2.toUpperCase()}`);
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

  return (
    <div
      id="custom-poster-template"
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
          padding: '6% 5% 0% 5%',
          background: colors.posterColor,
          transform:
            posterType === 'Thin Canvas'
              ? 'scale(0.75)'
              : posterType === 'Thick Canvas'
              ? 'scale(0.74)'
              : '',
        }}
      >
        <div className="flex pb-[4%] items-center justify-center">
          <span
            className={
              selectedAlbum?.label && selectedAlbum?.label.length > 24
                ? `font-bold font-[Blacksword] break-words tracking-tight`
                : `font-[Blacksword] break-words tracking-wider`
            }
            style={{
              textTransform: 'capitalize',
              color: colors.songTitleColor,
              fontFamily: selectedFont,
              fontSize: selectedAlbum?.label
                ? posterSize.value === '12 X 18'
                  ? selectedAlbum?.label.length > 24
                    ? `${+fontSize.albumNameSize + 34}px`
                    : `${+fontSize.albumNameSize + 45}px`
                  : posterSize.value === '16 X 20'
                  ? selectedAlbum?.label.length > 24
                    ? `${+fontSize.albumNameSize + 45}px`
                    : `${+fontSize.albumNameSize + 51}px`
                  : posterSize.value === '18 X 24'
                  ? selectedAlbum?.label.length > 24
                    ? `${+fontSize.albumNameSize + 50}px`
                    : `${+fontSize.albumNameSize + 56}px`
                  : posterSize.value === '20 X 28'
                  ? selectedAlbum?.label.length > 24
                    ? `${+fontSize.albumNameSize + 54}px`
                    : `${+fontSize.albumNameSize + 64}px`
                  : posterSize.value === '24 X 36'
                  ? selectedAlbum?.label.length > 24
                    ? `${+fontSize.albumNameSize + 65}px`
                    : `${+fontSize.albumNameSize + 80}px`
                  : posterSize.value === '28 X 40' && selectedAlbum?.label.length > 24
                  ? `${+fontSize.albumNameSize + 77}px`
                  : `${+fontSize.albumNameSize + 88}px`
                : `48px`,
            }}
          >
            {selectedAlbum?.label
              ? capitalizeAfterSpaceOrParenthesis(selectedAlbum?.label)
              : 'ALBUM NAME'}
          </span>
        </div>
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
        <div
          className={`${activeAlignment} px-[1%] w-full overflow-hidden text-ellipsis-8 break-words relative bg-transparent font-[Montserrat]`}
          style={{
            color: colors.descriptionColor,
            fontSize: descriptionFontSize[posterSize.value] ?? '14px',
          }}
        >
          <p
            style={{
              whiteSpace: 'pre-wrap',
              fontFamily: selectedFont,
              letterSpacing: selectedFont === 'Morganite' ? '1px' : 'normal',
            }}
          >
            {albumDescripition}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Template6;
