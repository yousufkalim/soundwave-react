import React, { FC, useEffect } from 'react';
import { Grid } from '@mui/material';
import Waveform from 'react-audio-waveform';
import { rgbaToHex } from '../../utils/common';
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
}) => {
  const convertMilisecondToMinutes = (duration: number): string => {
    const minutes = duration / 60;
    const minutesAsInt = Math.floor(minutes);
    const seconds = Math.round((minutes - minutesAsInt) * 60);
    return `${minutesAsInt}:${seconds}`;
  };

  useEffect(() => {
    setColors({
      boxColor: '#000',
      posterColor: '#000',
      soundWaveColor: '#fff',
      soundWaveNameColor: '#fff',
      songTitleColor: '#fff',
      descriptionColor: '#fff',
    });
  }, []);

  const titleColor = colors.songTitleColor.includes('gradient') ? colors.songTitleColor : '';
  const descriptionColor = colors.descriptionColor.includes('gradient')
    ? colors.descriptionColor
    : '';
  const soundWaveNameColor = colors.soundWaveNameColor.includes('gradient')
    ? colors.soundWaveNameColor
    : '';

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
      <div className={`h-full pt-6 pl-8 pr-6 `} style={{ background: colors.posterColor }}>
        <Grid
          container
          spacing={1}
          className={`h-[77%] px-1 py-3 border-2 border-white `}
          style={{ backgroundColor: colors.boxColor }}
        >
          {dataSets.map((item) => (
            <Grid item xs={4} className="h-[4%]" key={item.trackId}>
              <Waveform // barWidth={1}
                peaks={item.levels}
                height={20}
                color={rgbaToHex(colors.soundWaveColor)}
                pixelRatio={1}
                progressColor={rgbaToHex(colors.soundWaveColor)}
              />
              <div className="flex items-center justify-start gap-1 mt-3 pl-2">
                <span
                  style={{
                    backgroundColor: colors.soundWaveNameColor,
                    backgroundImage: soundWaveNameColor,
                  }}
                  className="text-[8.5px] font-semibold font-[Montserrat] template_album_name"
                >
                  &quot;{item.songName}&quot;
                </span>
                <span
                  style={{
                    backgroundColor: colors.soundWaveNameColor,
                    backgroundImage: soundWaveNameColor,
                  }}
                  className="text-[8.5px] font-[Montserrat] template_album_name"
                >
                  {convertMilisecondToMinutes(item.time)}
                </span>
              </div>
            </Grid>
          ))}
        </Grid>
        <div
          className=" absolute bottom-28 left-10 flex flex-col bg-black px-2 template_album_name"
          style={{
            backgroundColor: colors.songTitleColor,
            backgroundImage: titleColor,
          }}
        >
          <span className={`text-4xl font-extrabold font-[Morganite]`}>
            {selectedAlbum?.label ? selectedAlbum?.label.toUpperCase() : 'ALBUM NAME'}
          </span>
          <span className="text-[10px] font-bold font-[Morganite]">
            {selectedAlbum?.singerName ? selectedAlbum.singerName : 'SINGER NAME'}
          </span>
        </div>
        <div
          className={`break-words w-[95%] h-[23%] ${activeAlignment} text-left mt-10 template_album_name`}
          style={{
            backgroundColor: colors.descriptionColor,
            backgroundImage: descriptionColor,
          }}
        >
          <p className={`text-[7px] bg-transparent tracking-tighter `}>{albumDescripition}</p>
        </div>
      </div>
    </div>
  );
};

export default Template4;
