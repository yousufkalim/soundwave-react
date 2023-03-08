import React, { FC, useEffect } from 'react';
import Waveroom from '../WaveItem';
import { DataSetProps, SelectedAlbumProps, IStateColors, IPosterSize } from '../../types/index';

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

  const capitalizeLabel = (label: string): string => {
    return label.toLowerCase().replace(/(^|\s)\S/g, (match) => match.toUpperCase());
  };

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
            ? '611px'
            : posterSize.value === '16 X 20'
            ? '550px'
            : posterSize.value === '18 X 24'
            ? '586px'
            : posterSize.value === '20 X 28'
            ? '616px'
            : posterSize.value === '24 X 36'
            ? '636px'
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
        className={`bg-gradient-to-b h-full`}
        style={{
          background: colors.posterColor,
          paddingLeft: BackgroundFrame ? '16px' : '24px',
          paddingRight: BackgroundFrame ? '16px' : '24px',
          paddingTop: BackgroundFrame ? '12px' : '20px',
        }}
      >
        <div className="flex items-center justify-center">
          <span
            className={
              selectedAlbum?.label && selectedAlbum?.label.length > 24
                ? `text-2xl font-bold font-[blacksword] template_album_name tracking-tight`
                : `text-4xl font-[blacksword] template_album_name tracking-wider`
            }
            style={{
              color: colors.songTitleColor,
              fontFamily: selectedFont,
            }}
          >
            {selectedAlbum?.label ? capitalizeLabel(selectedAlbum?.label) : 'ALBUM NAME'}
          </span>
        </div>
        <div
          className={`h-[77%] px-1 py-2 overflow-hidden flex flex-wrap justify-between items-center`}
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
          className={`${activeAlignment} mt-[3%] overflow-hidden text-ellipsis-8 break-words template_album_name`}
          style={{
            color: colors.descriptionColor,
            fontFamily: selectedFont,
          }}
        >
          <p
            className={`text-[5px] md:text-[6px] bg-transparent tracking-tighter font-[Montserrat]`}
          >
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

export default Template6;
