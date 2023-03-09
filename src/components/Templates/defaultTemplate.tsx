import React, { FC, useEffect } from 'react';
import { DataSetProps, SelectedAlbumProps, IStateColors, IPosterSize } from '../../types/index';
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
      className={`overflow-hidden scale-[65%] absolute
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
        boxShadow: '0px 15px 40px rgba(0, 0, 0, 0.16)',
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
          className={`h-[77%] px-1 py-3 overflow-hidden flex flex-wrap justify-around items-baseline`}
          style={{ background: colors.boxColor }}
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
                  ? `break-words w-full h-[23%] text-ellipsis-8 px-6 absolute right-0 bottom-[2.7%]`
                  : `break-words w-full h-[23%] text-ellipsis-8 px-6 absolute right-0 bottom-[1.5%]`
                : BackgroundFrame
                ? `break-words w-full h-[23%] text-ellipsis-8 px-6 absolute right-0 bottom-[2.7%]`
                : `break-words w-full h-[23%] text-ellipsis-8 px-6 absolute right-0 bottom-[1.5%]`
              : flag
              ? BackgroundFrame
                ? `break-words w-full h-[23%] text-ellipsis-8 px-6 absolute right-0 bottom-[3%]`
                : `break-words w-full h-[23%] text-ellipsis-8 px-6 absolute right-0 bottom-[2%]`
              : BackgroundFrame
              ? `break-words w-full h-[23%] text-ellipsis-8 px-6 absolute right-0 bottom-[3%]`
              : `break-words w-full h-[23%] text-ellipsis-8 px-6 absolute right-0 bottom-[2%]`
          }
        >
          <div className="text-left pl-2">
            <span
              className={
                selectedAlbum?.label && selectedAlbum?.label.length > 15
                  ? `text-lg font-semibold font-proxima-nova template_album_name`
                  : `text-2xl md:text-2xl sxl:text-2xl font-semibold font-proxima-nova template_album_name`
              }
              style={{
                color: colors.songTitleColor,
                fontFamily: selectedFont,
              }}
            >
              <i>{selectedAlbum?.label ? selectedAlbum?.label.toUpperCase() : 'Album/Song Name'}</i>
            </span>
          </div>
          <div
            className={`
            ${activeAlignment} text-[5px] bg-transparent font-proxima-nova tracking-tight
            md:text-[6px]
            xl:mt-0
            2xl:mt-4
            `}
            style={{
              color: colors.descriptionColor,
              fontFamily: selectedFont,
            }}
          >
            <p>
              <i>
                <b className="text-[6px] md:text-[9px]">{albumDescripition.split(' ')[0]} </b>
              </i>
              {albumDescripition.split(' ').slice(1).join(' ')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template2;
