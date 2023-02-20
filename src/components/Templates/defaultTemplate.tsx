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
      className={` w-[48%] h-[80%] shadow-lg shadow-[#BAB8B8] relative`}
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
        className={`h-full pt-4`}
        style={{
          background: colors.posterColor,
          paddingLeft: BackgroundFrame ? ' 12px' : '16px',
          paddingRight: BackgroundFrame ? ' 12px' : '16px',
        }}
      >
        <Grid
          container
          spacing={1}
          className={`h-[77%] px-1 py-3 w-full overflow-hidden mt-4`}
          style={{ background: colors.boxColor, width: '100%', marginLeft: '0', marginTop: '0' }}
        >
          {dataSets.map((item, index) => {
            if (index < 18) {
              return (
                <Waveroom
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
          className={`break-words w-full h-[23%] text-ellipsis-8 px-6 absolute right-0 bottom-6`}
        >
          <div className="text-left">
            <span
              className={`text-4xl font-semibold font-proxima-nova template_album_name`}
              style={{
                color: colors.songTitleColor,
                fontFamily: selectedFont,
              }}
            >
              <i>{selectedAlbum?.label ? selectedAlbum?.label.toUpperCase() : 'Album/Song Name'}</i>
            </span>
          </div>
          <div
            className={`${activeAlignment} text-[7px] bg-transparent tracking-tighter font-proxima-nova template_album_name mt-2`}
            style={{
              color: colors.descriptionColor,
              fontFamily: selectedFont,
            }}
          >
            {albumDescripition}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template2;
