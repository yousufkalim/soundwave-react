import React, { FC, useEffect } from 'react';
import Waveroom from '../WaveItem/index';
import { DataSetProps, SelectedAlbumProps, IStateColors, IPosterSize } from '../../types/index';

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

  return (
    <div
      id="custom-poster-template"
      className={
        posterSize.value === '12 X 18'
          ? `overflow-hidden scale-[38%] absolute xs:scale-[40%] msm:scale-[40%] sm:scale-[40%] md:scale-[50%] lg:scale-[50%] sxl:scale-[55%] 2xl:scale-[55%]`
          : posterSize.value === '16 X 20'
          ? `overflow-hidden scale-[28%] absolute xs:scale-[35%] msm:scale-[35%] sm:scale-[35%] md:scale-[40%] lg:scale-[45%] sxl:scale-[45%] 2xl:scale-[45%]`
          : posterSize.value === '18 X 24'
          ? `overflow-hidden scale-[25%] absolute xs:scale-[30%] msm:scale-[30%] sm:scale-[30%] md:scale-[35%] lg:scale-[35%] sxl:scale-[35%] 2xl:scale-[40%]`
          : posterSize.value === '20 X 28'
          ? `overflow-hidden scale-[23%] absolute xs:scale-[25%] msm:scale-[25%] sm:scale-[25%] md:scale-[30%] lg:scale-[30%] sxl:scale-[30%] 2xl:scale-[35%]`
          : posterSize.value === '24 X 36'
          ? `overflow-hidden scale-[17%] absolute xs:scale-[20%] msm:scale-[20%] sm:scale-[17%] md:scale-[25%] lg:scale-[25%] sxl:scale-[25%] 2xl:scale-[25%]`
          : posterSize.value === '28 X 40'
          ? `overflow-hidden scale-[18%] absolute xs:scale-[20%] msm:scale-[20%] sm:scale-[20%] md:scale-[25%] lg:scale-[25%] sxl:scale-[25%] 2xl:scale-[25%]`
          : `overflow-hidden scale-[40%] absolute xs:scale-[40%] msm:scale-[40%] sm:scale-[40%] md:scale-[50%] lg:scale-[50%] sxl:scale-[55%] 2xl:scale-[55%]`
      }
      style={{
        background:
          posterType !== 'No Frame' && posterType !== 'Thin Canvas' && posterType !== 'Thick Canvas'
            ? `${BackgroundFrame}`
            : '',
        padding:
          posterType !== 'No Frame' && posterType !== 'Thin Canvas' && posterType !== 'Thick Canvas'
            ? BackgroundFrame
              ? '12px'
              : '0px'
            : '',
        height:
          posterSize.value === '12 X 18'
            ? '1200px'
            : posterSize.value === '16 X 20'
            ? '1440px'
            : posterSize.value === '18 X 24'
            ? '1673px'
            : posterSize.value === '20 X 28'
            ? '2016px'
            : posterSize.value === '24 X 36'
            ? '2812px'
            : posterSize.value === '28 X 40'
            ? '2868'
            : '611px',
        width:
          posterSize.value === '12 X 18'
            ? '864px'
            : posterSize.value === '16 X 20'
            ? '1152px'
            : posterSize.value === '18 X 24'
            ? '1296px'
            : posterSize.value === '20 X 28'
            ? '1440px'
            : posterSize.value === '24 X 36'
            ? '1728px'
            : posterSize.value === '28 X 40'
            ? '2016'
            : '440px',
        boxShadow: '0px 15px 40px rgba(0, 0, 0, 0.5)',
      }}
    >
      <div
        className={`h-full`}
        style={{
          background: colors.posterColor,
          paddingLeft: BackgroundFrame ? '16px' : '5%',
          paddingRight: BackgroundFrame ? '16px' : '5%',
          paddingTop: BackgroundFrame ? '16px' : '6%',
        }}
      >
        <div
          className={`h-[80%] px-1 pt-2 pb-4 border-2 border-white overflow-hidden flex flex-wrap justify-around items-baseline`}
          style={{ backgroundColor: colors.boxColor }}
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
          className="absolute left-12 bg-black text-center px-[3px] template_album_name"
          style={{
            color: colors.songTitleColor,
            bottom:
              selectedAlbum?.label && selectedAlbum?.label.length > 24
                ? BackgroundFrame
                  ? '17%'
                  : '16%'
                : BackgroundFrame
                ? '17%'
                : '16%',
            fontFamily: selectedFont,
          }}
        >
          <div
            className={
              selectedAlbum?.label && selectedAlbum?.label.length > 24
                ? `text-[2.3rem] italic font-semibold font-[Morganite]`
                : `text-[2.3rem] italic font-semibold font-[Morganite]`
            }
          >
            {selectedAlbum?.label ? selectedAlbum?.label.toUpperCase() : 'ALBUM NAME'}
          </div>
          <div
            className={
              selectedAlbum?.label && selectedAlbum?.label.length > 24
                ? 'text-[.8em] font-bold font-[Morganite] mt-[-1rem] text-center'
                : 'text-[1em] font-bold font-[Morganite] mt-[-1rem] text-center'
            }
          >
            {selectedAlbum?.singerName ? selectedAlbum.singerName : 'SINGER NAME'}
          </div>
        </div>
        <div
          className={`${activeAlignment} text-left pt-10 template_album_name overflow-hidden `}
          style={{
            color: colors.descriptionColor,
            fontFamily: selectedFont,
          }}
        >
          <p className={`text-[5px] md:text-[6px] bg-transparent text-ellipsis-8 tracking-tighter`}>
            <i>
              <b className="text-[6px] md:text-[9px]">{albumDescripition.split(' ')[0]} </b>
            </i>
            {albumDescripition.split(' ').slice(1).join(' ')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Template4;
