import React, { FC, useEffect } from 'react';
import {
  DataSetProps,
  SelectedAlbumProps,
  IStateColors,
  IPosterSize,
  IFontSize,
} from '../../types/index';
import Waveroom from '../WaveItem/index';
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
  // const titleColor = colors.songTitleColor.includes('gradient') ? colors.songTitleColor : '';
  // const descriptionColor = colors.descriptionColor.includes('gradient')
  //   ? colors.descriptionColor
  //   : '';
  // const soundWaveNameColor = colors.soundWaveNameColor.includes('gradient')
  //   ? colors.soundWaveNameColor
  //   : '';
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
        background:
          posterType !== 'No Frame' && posterType !== 'Thin Canvas' && posterType !== 'Thick Canvas'
            ? `${BackgroundFrame}`
            : '',
        padding:
          posterSize.value === '12 X 18' &&
          posterType !== 'No Frame' &&
          posterType !== 'Thin Canvas' &&
          posterType !== 'Thick Canvas'
            ? BackgroundFrame
              ? '12px'
              : '0px'
            : posterSize.value === '16 X 20' &&
              posterType !== 'No Frame' &&
              posterType !== 'Thin Canvas' &&
              posterType !== 'Thick Canvas'
            ? BackgroundFrame
              ? '14px'
              : '0px'
            : posterSize.value === '18 X 24' &&
              posterType !== 'No Frame' &&
              posterType !== 'Thin Canvas' &&
              posterType !== 'Thick Canvas'
            ? BackgroundFrame
              ? '16px'
              : '0px'
            : posterSize.value === '20 X 28' &&
              posterType !== 'No Frame' &&
              posterType !== 'Thin Canvas' &&
              posterType !== 'Thick Canvas'
            ? BackgroundFrame
              ? '20px'
              : '0px'
            : posterSize.value === '24 X 36' &&
              posterType !== 'No Frame' &&
              posterType !== 'Thin Canvas' &&
              posterType !== 'Thick Canvas'
            ? BackgroundFrame
              ? '26px'
              : '0px'
            : posterSize.value === '28 X 40' &&
              posterType !== 'No Frame' &&
              posterType !== 'Thin Canvas' &&
              posterType !== 'Thick Canvas'
            ? BackgroundFrame
              ? '30px'
              : '0px'
            : '',
        height:
          posterSize.value === '12 X 18'
            ? '1298px'
            : posterSize.value === '16 X 20'
            ? '1440.5px'
            : posterSize.value === '18 X 24'
            ? '1728px'
            : posterSize.value === '20 X 28'
            ? '2015px'
            : posterSize.value === '24 X 36'
            ? '2592px'
            : posterSize.value === '28 X 40'
            ? '2880px'
            : '1298px',
        width:
          posterSize.value === '12 X 18'
            ? '864px'
            : posterSize.value === '16 X 20'
            ? '1151.7px'
            : posterSize.value === '18 X 24'
            ? '1296px'
            : posterSize.value === '20 X 28'
            ? '1440px'
            : posterSize.value === '24 X 36'
            ? '1728px'
            : posterSize.value === '28 X 40'
            ? '2015.7px'
            : '864px',
        boxShadow: '0px 15px 40px rgba(0, 0, 0, 0.16)',
      }}
    >
      <div
        className={`h-full w-full`}
        style={{
          background: colors.posterColor,
          paddingLeft: BackgroundFrame ? '5%' : '5%',
          paddingRight: BackgroundFrame ? '5%' : '5%',
          paddingTop: BackgroundFrame ? '6%' : '6%',
        }}
      >
        <div
          className={`h-[77%] px-1 py-[5%] overflow-hidden flex flex-wrap justify-around items-baseline`}
          style={{
            background: colors.boxColor,
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
                  posterRatio={
                    posterSize.value === '12 X 18'
                      ? '1218'
                      : posterSize.value === '16 X 20'
                      ? '1620'
                      : posterSize.value === '18 X 24'
                      ? '1824'
                      : posterSize.value === '20 X 28'
                      ? '2028'
                      : posterSize.value === '24 X 36'
                      ? '2436'
                      : posterSize.value === '28 X 40'
                      ? '2840'
                      : '1218'
                  }
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
                  ? `font-semibold font-proxima-nova template_album_name`
                  : `font-semibold font-proxima-nova template_album_name`
              }
              style={{
                color: colors.songTitleColor,
                fontFamily: selectedFont,
                fontSize: selectedAlbum?.label
                  ? posterSize.value === '12 X 18'
                    ? selectedAlbum?.label.length > 15
                      ? `${+fontSize.albumNameSize + 32}px`
                      : `${+fontSize.albumNameSize + 48}px`
                    : posterSize.value === '16 X 20'
                    ? selectedAlbum?.label.length > 15
                      ? `${+fontSize.albumNameSize + 43}px`
                      : `${+fontSize.albumNameSize + 64}px`
                    : posterSize.value === '18 X 24'
                    ? selectedAlbum?.label.length > 15
                      ? `${+fontSize.albumNameSize + 48}px`
                      : `${+fontSize.albumNameSize + 72}px`
                    : posterSize.value === '20 X 28'
                    ? selectedAlbum?.label.length > 15
                      ? `${+fontSize.albumNameSize + 52}px`
                      : `${+fontSize.albumNameSize + 80}px`
                    : posterSize.value === '24 X 36'
                    ? selectedAlbum?.label.length > 15
                      ? `${+fontSize.albumNameSize + 64}px`
                      : `${+fontSize.albumNameSize + 120}px`
                    : posterSize.value === '28 X 40' && selectedAlbum?.label.length > 15
                    ? `${+fontSize.albumNameSize + 75}px`
                    : `${+fontSize.albumNameSize + 128}px`
                  : '32px',
              }}
            >
              <i>{selectedAlbum?.label ? selectedAlbum?.label.toUpperCase() : 'Album/Song Name'}</i>
            </span>
          </div>
          <div
            className={`${activeAlignment} bg-transparent font-proxima-nova tracking-tight mt-4`}
            style={{
              color: colors.descriptionColor,
              fontFamily: selectedFont,
              letterSpacing: selectedFont === 'Morganite' ? '0' : '-0.025em',
              fontSize:
                posterSize.value === '12 X 18'
                  ? `${+fontSize?.descriptionSize + 14}px`
                  : posterSize.value === '16 X 20'
                  ? `${+fontSize?.descriptionSize + 16}px`
                  : posterSize.value === '18 X 24'
                  ? `${+fontSize?.descriptionSize + 18}px`
                  : posterSize.value === '20 X 28'
                  ? `${+fontSize?.descriptionSize + 20}px`
                  : posterSize.value === '24 X 36'
                  ? `${+fontSize?.descriptionSize + 24}px`
                  : posterSize.value === '28 X 40'
                  ? `${+fontSize?.descriptionSize + 26}px`
                  : '14px',
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
