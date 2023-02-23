import React, { FC, useEffect } from 'react';
import { Grid } from '@mui/material';
import Waveroom from '../WaveItem';
import { DataSetProps, SelectedAlbumProps, IStateColors } from '../../types/index';

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

  return (
    <div
      id="custom-poster-template"
      className={`
      w-[73%] h-[95%] shadow-xl shadow-gray-700 mt-[1%]
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
      <div
        className={`bg-gradient-to-b h-full pt-6 pl-6 pr-4`}
        style={{ background: colors.posterColor }}
      >
        <div className="flex items-center justify-center mb-[3%]">
          <span
            className={
              selectedAlbum?.label && selectedAlbum?.label.length > 24
                ? `text-md font-bold font-[blacksword] template_album_name tracking-tighter`
                : `text-2xl font-extrabold font-[blacksword] template_album_name`
            }
            style={{
              color: colors.songTitleColor,
              fontFamily: selectedFont,
            }}
          >
            {selectedAlbum?.label ? selectedAlbum?.label.toUpperCase() : 'ALBUM NAME'}
          </span>
        </div>
        <Grid
          container
          spacing={1}
          className={`h-[75%] px-1 py-2`}
          // style={{ backgroundColor: '' }}
        >
          {dataSets.map((item, index) => {
            if (index < 30) {
              return (
                <Waveroom
                  height={index < 30 ? 15 : 18}
                  item={item}
                  selectedFont={selectedFont}
                  colors={colors}
                  key={item.trackId}
                />
              );
            } else {
              return '';
            }
          })}
        </Grid>
        <div
          style={{
            color: colors.descriptionColor,
            fontFamily: selectedFont,
          }}
          className={`${activeAlignment} mt-[2%] text-center overflow-hidden text-ellipsis-8 break-words template_album_name`}
        >
          <p
            className={`text-[5px] md:text-[6px] lg:text-[7px] bg-transparent tracking-tighter font-[Montserrat]`}
          >
            {albumDescripition.split(/\s+/).slice(0, 150).join(' ')}.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Template6;
