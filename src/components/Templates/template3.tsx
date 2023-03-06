import React, { FC, useEffect } from 'react';
// import { rgbaToHex } from '../../utils/common';
import { DataSetProps, SelectedAlbumProps, IStateColors, IPosterSize } from '../../types/index';
import Waveroom from '../WaveItem/index';

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
      className={`overflow-hidden absolute scale-[65%]
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
            ? `url(${BackgroundFrame}) center no-repeat`
            : '',
        padding:
          posterType !== 'No Frame' && posterType !== 'Thin Canvas' && posterType !== 'Thick Canvas'
            ? BackgroundFrame
              ? '12px'
              : '0px'
            : '',
        height:
          posterSize.value === '12 X 18'
            ? '610px'
            : posterSize.value === '16 X 20'
            ? '620px'
            : posterSize.value === '18 X 24'
            ? '630px'
            : posterSize.value === '20 X 28'
            ? '640px'
            : posterSize.value === '24 X 36'
            ? '650px'
            : posterSize.value === '28 X 40'
            ? '660px'
            : '610px',
        width:
          posterSize.value === '12 X 18'
            ? '440px'
            : posterSize.value === '16 X 20'
            ? '450px'
            : posterSize.value === '18 X 24'
            ? '460px'
            : posterSize.value === '20 X 28'
            ? '470px'
            : posterSize.value === '24 X 36'
            ? '480px'
            : posterSize.value === '28 X 40'
            ? '490px'
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
          className={`h-[77%] px-1 py-3 overflow-hidden flex flex-wrap justify-around items-center`}
          style={{ background: colors?.boxColor }}
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
          className={
            selectedAlbum?.label && selectedAlbum?.label.length > 15
              ? flag
                ? BackgroundFrame
                  ? 'text-center relative bottom-[2.5%] text-lg  font-[Aemstel-Regular] template_album_name tracking-tighter'
                  : 'text-center relative bottom-[2.5%] text-lg  font-[Aemstel-Regular] template_album_name tracking-tighter'
                : BackgroundFrame
                ? 'text-center relative bottom-[2.5%] text-lg  font-[Aemstel-Regular] template_album_name tracking-tighter'
                : 'text-center relative bottom-[2.5%] text-lg  font-[Aemstel-Regular] template_album_name tracking-tighter'
              : flag
              ? BackgroundFrame
                ? 'text-center relative bottom-[3%] text-2xl font-[Aemstel-Regular] template_album_name'
                : 'text-center relative bottom-[3%] text-2xl font-[Aemstel-Regular] template_album_name'
              : BackgroundFrame
              ? 'text-center relative bottom-[3%] text-2xl font-[Aemstel-Regular] template_album_name'
              : 'text-center relative bottom-[3%] text-2xl font-[Aemstel-Regular] template_album_name'
          }
          style={{
            color: colors.songTitleColor,
            fontFamily: selectedFont,
          }}
        >
          {selectedAlbum?.label ? selectedAlbum?.label.toUpperCase() : 'Album Name'}
        </div>
        <div
          className={` bg-transparent tracking-tighter h-[23%] ${activeAlignment} text-[5px] md:text-[6px]`}
          style={{
            color: colors.descriptionColor,
            fontFamily: selectedFont,
          }}
        >
          <p className={`mb-[2%] md:mb-[3.5%]`}>
            <i>
              <b className="text-[6px] md:text-[9px]">{albumDescripition.split(' ')[0]} </b>
            </i>
            {albumDescripition.split(' ').slice(1).join(' ')}
          </p>
          <div className="text-center">
            <span className="text-[7px] md:text-[9px] border p-1 rounded-lg font-bold">
              {selectedAlbum?.singerName ? selectedAlbum.singerName.toUpperCase() : 'SINGER NAME'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template3;
