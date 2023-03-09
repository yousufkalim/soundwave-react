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
      className={`
       overflow-hidden absolute scale-[65%]
      xs:scale-[80%]
      msm:scale-[85%]
      sm:scale-[95%]
      md:scale-[80%]
      lg:scale-[90%]
      sxl:scale-[95%]
      2xl:scale-[100%]
      `}
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
            ? '611px'
            : posterSize.value === '16 X 20'
            ? '550px'
            : posterSize.value === '18 X 24'
            ? '586px'
            : posterSize.value === '20 X 28'
            ? '616px'
            : posterSize.value === '24 X 36'
            ? '716px'
            : posterSize.value === '28 X 40'
            ? '626px'
            : '611px',
        width:
          posterSize.value === '12 X 18'
            ? '440px'
            : posterSize.value === '16 X 20'
            ? '440px'
            : posterSize.value === '18 X 24'
            ? '440px'
            : posterSize.value === '20 X 28'
            ? '440px'
            : posterSize.value === '24 X 36'
            ? '440px'
            : posterSize.value === '28 X 40'
            ? '440px'
            : '440px',
        boxShadow: '0px 15px 40px rgba(0, 0, 0, 0.5)',
      }}
    >
      <div
        className={`h-full`}
        style={{
          background: colors.posterColor,
          paddingLeft: BackgroundFrame ? '16px' : '24px',
          paddingRight: BackgroundFrame ? '16px' : '24px',
          paddingTop: BackgroundFrame ? '16px' : '24px',
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
                />
              );
            } else {
              return '';
            }
          })}
        </div>
        <div
          className="absolute left-8 bg-black pl-[3px] template_album_name h-[3rem]"
          style={{
            color: colors.songTitleColor,
            bottom:
              selectedAlbum?.label && selectedAlbum?.label.length > 24
                ? BackgroundFrame
                  ? '17%'
                  : '15.5%'
                : BackgroundFrame
                ? '17%'
                : '15.5%',
            fontFamily: selectedFont,
          }}
        >
          <div
            className={
              selectedAlbum?.label && selectedAlbum?.label.length > 24
                ? `text-[2.3rem] font-extrabold font-[Morganite]`
                : `text-[2.3rem] font-extrabold font-[Morganite]`
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
