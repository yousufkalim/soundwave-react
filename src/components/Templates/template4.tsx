import React, { FC, useEffect } from 'react';
import { Grid } from '@mui/material';
import Waveroom from '../WaveItem/index';
import { DataSetProps, SelectedAlbumProps, IFrameProps, IStateColors } from '../../types/index';

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
  frame: IFrameProps;
  BackgroundFrame: string;
  selectedFont: string;
}

const Template4: FC<Template4Props> = ({
  activeAlignment,
  selectedAlbum,
  albumDescripition,
  dataSets,
  colors,
  frame,
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
      className={`w-[48%] h-[80%] shadow-lg shadow-[#BAB8B8] mt-[3%] relative `}
      style={{
        background:
          frame.frameType !== 'No Frame' ? `url(${BackgroundFrame}) center no-repeat` : '',
        padding: frame.frameType !== 'No Frame' ? (BackgroundFrame ? '12px' : '0px') : '',
      }}
    >
      <div className={`h-full pt-6 pl-6 pr-4 `} style={{ background: colors.posterColor }}>
        <Grid
          container
          spacing={1}
          className={`h-[77%] px-1 py-3 border-2 border-white `}
          style={{ backgroundColor: colors.boxColor }}
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
          className=" absolute left-10 bg-black pl-[2px] template_album_name"
          style={{
            color: colors.songTitleColor,
            bottom: '17%',
            fontFamily: selectedFont,
          }}
        >
          <div className={`text-[3rem] font-extrabold font-[Morganite]`}>
            {selectedAlbum?.label ? selectedAlbum?.label.toUpperCase() : 'ALBUM NAME'}
          </div>
          <div className="text-[1em] font-bold font-[Morganite] mt-[-1rem]">
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
          <p className={`text-[7px] bg-transparent text-ellipsis-8 tracking-tighter`}>
            {albumDescripition}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Template4;
