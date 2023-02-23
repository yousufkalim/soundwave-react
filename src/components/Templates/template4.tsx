import React, { FC, useEffect } from 'react';
import { Grid } from '@mui/material';
import Waveroom from '../WaveItem/index';
import { DataSetProps, SelectedAlbumProps, IStateColors } from '../../types/index';

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
      w-[73%] h-[95%] shadow-xl shadow-gray-700 mt-[1%] relative
      sm:w-[70%] sm:h-[98%]
      xmd:w-[60%] xmd:h-[100%]
      md:w-[78%] md:h-[66%] md:mt-[2%] 
      lg:w-[71%] lg:h-[75%]
      xl:w-[67%]
      sxl:w-[52%] sxl:h-[90%]
      mxl:w-[52%] mxl:h-[72%] 
      2xl:w-[47%] 2xl:h-[86%]
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
      }}
    >
      <div className={`h-full pt-8 pl-8 pr-6 `} style={{ background: colors.posterColor }}>
        <Grid
          container
          spacing={1}
          className={`h-[77%] px-1 py-3 border-2 border-white`}
          style={{ backgroundColor: colors.boxColor }}
        >
          {dataSets.map((item, index) => {
            if (index < 30) {
              return (
                <Waveroom
                  item={item}
                  selectedFont={selectedFont}
                  colors={colors}
                  key={item.trackId}
                  height={index < 30 ? 15 : 18}
                />
              );
            } else {
              return '';
            }
          })}
        </Grid>
        <div
          className="absolute left-10 bg-black pl-[2px] template_album_name"
          style={{
            color: colors.songTitleColor,
            bottom: selectedAlbum?.label && selectedAlbum?.label.length > 24 ? '18%' : '17%',
            fontFamily: selectedFont,
          }}
        >
          <div
            className={
              selectedAlbum?.label && selectedAlbum?.label.length > 24
                ? `text-[2rem] font-extrabold font-[Morganite]`
                : `text-[3rem] font-extrabold font-[Morganite]`
            }
          >
            {selectedAlbum?.label ? selectedAlbum?.label.toUpperCase() : 'ALBUM NAME'}
          </div>
          <div
            className={
              selectedAlbum?.label && selectedAlbum?.label.length > 24
                ? 'text-[.8em] font-bold font-[Morganite] mt-[-1rem]'
                : 'text-[1em] font-bold font-[Morganite] mt-[-1rem]'
            }
          >
            {selectedAlbum?.singerName ? selectedAlbum.singerName : 'SINGER NAME'}
          </div>
        </div>
        <div
          className={`${activeAlignment} text-left pt-11 template_album_name overflow-hidden `}
          style={{
            color: colors.descriptionColor,
            fontFamily: selectedFont,
          }}
        >
          <p
            className={`text-[5px] md:text-[6px] lg:text-[7px]  bg-transparent text-ellipsis-8 tracking-tighter`}
          >
            {albumDescripition.split(/\s+/).slice(0, 150).join(' ')}.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Template4;
