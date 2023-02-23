import React, { FC } from 'react';
import { Grid } from '@mui/material';
import Waveform from 'react-audio-waveform';

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

interface ITemplateProps {
  isShowAlbumName: boolean;
  activeAlignment: string;
  selectedAlbum?: SelectedAlbumProps;
  albumDescripition: string;
  dataSets: DatasetProps[];
  boxColor: string;
  posterColor: string;
  soundWaveColor: string;
  songTitleColor: string;
  descriptionColor: string;
}

const Template: FC<ITemplateProps> = ({
  isShowAlbumName,
  activeAlignment,
  selectedAlbum,
  albumDescripition,
  dataSets,
  boxColor,
  posterColor,
  soundWaveColor,
  songTitleColor,
  descriptionColor,
}) => {
  const convertMilisecondToMinutes = (duration: number): string => {
    const minutes = duration / 60;
    const minutesAsInt = Math.floor(minutes);
    const seconds = Math.round((minutes - minutesAsInt) * 60);
    return `${minutesAsInt}:${seconds}`;
  };
  return (
    <div
      id="custom-poster-template-1"
      className={`w-[48%] h-[80%] shadow-lg shadow-[#BAB8B8] pt-6 pl-8 pr-6 mt-[3%] relative `}
      style={{ background: posterColor }}
    >
      {isShowAlbumName && (
        <div className="flex items-center justify-center flex-col">
          <span
            className={`text-4xl font-extrabold font-[Montserrat]`}
            style={{ color: songTitleColor }}
          >
            {selectedAlbum?.label ? selectedAlbum?.label.toUpperCase() : 'ALBUM NAME'}
          </span>
          <span className={`text-md font-[Montserrat]`} style={{ color: songTitleColor }}>
            {selectedAlbum?.singerName ? selectedAlbum?.singerName.toUpperCase() : 'SINGER NAME'}
          </span>
        </div>
      )}
      <Grid
        container
        spacing={1}
        className={`h-[77%] px-1 py-3`}
        style={{ backgroundColor: boxColor }}
      >
        {dataSets.map((item) => (
          <Grid item xs={4} className="h-[4%]" key={item.trackId}>
            <Waveform
              // barWidth={1}
              peaks={item.levels}
              height={20}
              color={'rgba(255, 255, 255,1)'}
              pixelRatio={1}
              //   progressGradientColors={[
              //     [0, '#000000'],
              //     [1, '#000000'],
              //   ]}
            />
            <div className="flex items-center justify-start gap-1 mt-3 pl-2">
              <span
                style={{ color: songTitleColor }}
                className="text-[8.5px] font-semibold font-[Montserrat]"
              >
                &quot;{item.songName}&quot;
              </span>
              <span style={{ color: songTitleColor }} className="text-[8.5px] font-[Montserrat]">
                {convertMilisecondToMinutes(item.time)}
              </span>
            </div>
          </Grid>
        ))}
      </Grid>
      <div
        className={`break-words w-[90%] h-[23%] ${activeAlignment} text-center absolute bottom-6 right-6`}
      >
        <div className="text-center">
          <span
            style={{ color: songTitleColor }}
            className={`text-4xl font-extrabold font-proxima-nova`}
          >
            <i>{selectedAlbum?.label ? selectedAlbum?.label.toUpperCase() : 'ALBUM NAME'}</i>
          </span>
        </div>
        <p
          className={`text-[7px] bg-transparent tracking-tighter font-proxima-nova`}
          style={{ color: descriptionColor }}
        >
          {albumDescripition}
        </p>
      </div>
    </div>
  );
};

export default Template;
