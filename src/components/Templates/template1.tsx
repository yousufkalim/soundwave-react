/* eslint-disable one-var */
import React, { FC, useEffect } from 'react';
import { Grid } from '@mui/material';
import Waveform from 'react-audio-waveform';
import { rgbaToHex } from '../../utils/common';

// import gradient from 'gradient-parser';

interface DatasetProps {
  songName: string;
  trackId: string;
  time: number;
  levels: number[];
}
interface SelectedAlbumProps {
  id: string;
  label: string;
  photo: string;
  singerName: string;
}

interface IFrameProps {
  frameType: string;
  selectedFrame: string;
}

interface Template1Props {
  activeAlignment: string;
  selectedAlbum?: SelectedAlbumProps;
  albumDescripition: string;
  dataSets: DatasetProps[];
  colors: IColors;
  setColors: ({
    boxColor,
    posterColor,
    soundWaveColor,
    songTitleColor,
    descriptionColor,
  }: IColors) => void;
  frame: IFrameProps;
}

interface IColors {
  boxColor: string;
  posterColor: string;
  soundWaveColor: string;
  songTitleColor: string;
  descriptionColor: string;
}

const Template1: FC<Template1Props> = ({
  activeAlignment,
  selectedAlbum,
  albumDescripition,
  dataSets,
  colors,
  setColors,
  frame,
}) => {
  const convertMilisecondToMinutes = (duration: number): string => {
    const minutes = duration / 60;
    const minutesAsInt = Math.floor(minutes);
    const seconds = Math.round((minutes - minutesAsInt) * 60);
    return `${minutesAsInt}:${seconds}`;
  };

  useEffect(() => {
    setColors({
      boxColor: 'transparent',
      posterColor: '#000',
      soundWaveColor: 'rgba(255, 255, 255, 1)',
      songTitleColor: 'rgba(255, 255, 255, 1)',
      descriptionColor: 'rgba(255, 255, 255, 1)',
    });
  }, []);

  const titleColor = colors.songTitleColor.includes('gradient') ? colors.songTitleColor : '';
  const descriptionColor = colors.descriptionColor.includes('gradient')
    ? colors.descriptionColor
    : '';
  const soundWaveColor = colors.soundWaveColor.includes('gradient') ? colors.soundWaveColor : '';

  // let waveColors;
  // const isLinear = colors.soundWaveColor.includes('linear');
  // const isRadial = colors.soundWaveColor.includes('radial');
  // let filteredColors: string[] = [];
  // if (isLinear || isRadial) {
  //   waveColors = isLinear
  //     ? colors.soundWaveColor
  //         .substring(colors.soundWaveColor.indexOf('(') + 1, colors.soundWaveColor.lastIndexOf(')'))
  //         .split('deg, ')[1]
  //     : colors.soundWaveColor
  //         .substring(colors.soundWaveColor.indexOf('(') + 1, colors.soundWaveColor.lastIndexOf(')'))
  //         .split('circle, ')[1];
  //   const a = waveColors.split('%');
  //   const test = a.map((item) => {
  //     const b = item.split(')')[0];
  //     let c;
  //     if (b.startsWith(', ')) {
  //       c = b.split(', ')[1];
  //     } else {
  //       c = b;
  //     }
  //     return c?.concat(')');
  //   });
  //   const filtered = test.filter((item) => item.startsWith('r') || item.startsWith('R'));
  //   // const obj = gradient.parse('linear-gradient(30deg, #000, transparent)');
  //   console.log('TEsting Gradient =====>  ', filtered);
  //   filteredColors = filtered;
  //   // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  //   filteredColors = JSON.stringify(filteredColors.map((item, index) => [index, rgbaToHex(item)]));
  //   // console.log(
  //   //   'Selected colors ===> ',
  //   //   waveColors.split(/,(?![^(]*\))(?![^"']*["'](?:[^"']*["'][^"']*["'])*[^"']*$)/),
  //   // );
  // } else {
  //   console.log('test');
  // }
  // console.log('GET Hexa  ', typeof filteredColors);

  return (
    <div
      id="custom-poster-template-1"
      className={`w-[48%] h-[80%] shadow-lg shadow-[#BAB8B8] p-2 mt-[3%]`}
      style={{ background: '#000' }}
    >
      <div className={`pt-6 pl-2 h-full`} style={{ background: colors.posterColor }}>
        <div className="flex items-center justify-center flex-col">
          <span
            className={`text-4xl font-extrabold font-[Montserrat] template_album_name`}
            style={{
              backgroundColor: colors.songTitleColor,
              backgroundImage: titleColor,
            }}
          >
            {selectedAlbum?.label ? selectedAlbum?.label.toUpperCase() : 'ALBUM NAME'}
          </span>
          <span
            className={`text-md font-[Montserrat] template_album_name`}
            style={{
              backgroundColor: colors.songTitleColor,
              backgroundImage: titleColor,
            }}
          >
            {selectedAlbum?.singerName ? selectedAlbum?.singerName.toUpperCase() : 'SINGER NAME'}
          </span>
        </div>
        <Grid
          container
          spacing={1}
          className={`h-[70%] px-2 py-3`}
          style={{ background: colors?.boxColor }}
        >
          {dataSets.map((item) => (
            <Grid item xs={4} className="h-[4%]" key={item.trackId}>
              <Waveform
                // barWidth={1}
                peaks={item.levels}
                height={20}
                color={rgbaToHex(colors.soundWaveColor)}
                pixelRatio={1}
                progressColor={rgbaToHex(colors.soundWaveColor)}
                // progressGradientColors={[[0, '#000']]}
              />
              <div className="flex items-center justify-start gap-1 mt-3 pl-2">
                <span
                  style={{
                    backgroundColor: colors.soundWaveColor,
                    backgroundImage: soundWaveColor,
                  }}
                  className="text-[8.5px] font-semibold font-[Montserrat] template_album_name"
                >
                  &quot;{item.songName}&quot;
                </span>
                <span
                  style={{
                    backgroundColor: colors.soundWaveColor,
                    backgroundImage: soundWaveColor,
                  }}
                  className="text-[8.5px] font-[Montserrat] template_album_name"
                >
                  {convertMilisecondToMinutes(item.time)}
                </span>
              </div>
            </Grid>
          ))}
        </Grid>
        <div className={`break-words w-[93%] h-[23%] ${activeAlignment}`}>
          <p
            style={{
              backgroundColor: colors.descriptionColor,
              backgroundImage: descriptionColor,
            }}
            className={`text-[7px] template_album_name bg-transparent tracking-tighter font-[Montserrat]`}
          >
            {albumDescripition}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Template1;
