import React, { FC, useEffect } from 'react';
import { Grid } from '@mui/material';
import { DataSetProps, SelectedAlbumProps, IStateColors } from '../../types/index';
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
      // className={` w-[96%] h-[55%] sm:w-[80%] sm:h-[70%] shadow-lg shadow-[#BAB8B8] relative`}
      className={`
      shadow-xl shadow-gray-700 overflow-hidden relative
      w-[500px] h-[680px] scale-[70%]
      xs:scale-[80%]
      msm:scale-[85%]
      sm:scale-[95%]
      md:scale-[80%]
      lg:scale-[90%]
      sxl:scale-[95%]
      2xl:scale-[100%]
      `}
      // sm:scale-[80%]
      // xmd:w-[60%] xmd:h-[100%]
      // md:w-[78%] md:h-[66%] md:mt-[2%]
      // lg:w-[71%] lg:h-[75%]
      // xl:w-[67%]
      // sxl:w-[52%] sxl:h-[90%]
      // mxl:w-[52%] mxl:h-[72%]
      // 2xl:w-[47%] 2xl:h-[86%]
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
        className={`h-full pt-6`}
        style={{
          background: colors.posterColor,
          paddingLeft: BackgroundFrame ? ' 24px' : '28px',
          paddingRight: BackgroundFrame ? ' 22px' : '26px',
        }}
      >
        <Grid
          container
          spacing={1}
          className={`h-[77%] px-1 py-3 overflow-hidden`}
          style={{ background: colors.boxColor, width: '100%', marginLeft: '0', marginTop: '0' }}
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
                  height={index < 30 ? 15 : 18}
                />
              );
            } else {
              return '';
            }
          })}
        </Grid>
        <div
          className={
            selectedAlbum?.label && selectedAlbum?.label.length > 24
              ? `break-words w-full h-[23%] text-ellipsis-8 px-6 absolute right-0 bottom-[1%]`
              : `break-words w-full h-[23%] text-ellipsis-8 px-6 absolute right-0 bottom-[2%]`
          }
        >
          <div className="text-left pl-2">
            <span
              className={
                selectedAlbum?.label && selectedAlbum?.label.length > 24
                  ? `text-lg 
                  md:text-xl 
                  font-semibold font-proxima-nova template_album_name`
                  : `text-3xl
                  md:text-4xl
                   sxl:text-3xl  font-semibold font-proxima-nova template_album_name`
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
            ${activeAlignment} text-[6px] bg-transparent tracking-tighter font-proxima-nova template_album_name 
            md:text-[7px]
            xl:mt-0
            2xl:mt-2
            `}
            style={{
              color: colors.descriptionColor,
              fontFamily: selectedFont,
            }}
          >
            {albumDescripition.split(/\s+/).slice(0, 150).join(' ')}.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template2;
