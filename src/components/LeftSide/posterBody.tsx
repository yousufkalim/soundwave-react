import React, { FC } from 'react';
import { ReactComponent as WaterMark } from '../../assets/WaterMark.svg';
import Waves from '../Waves';

interface DatasetProps {
  songName: string;
  trackId: string;
  time: number;
  levels: number[];
}

interface waveformProps {
  dataSets: DatasetProps[];
  albumDescripition: string;
  selectedAlbum?: SelectedAlbumProps;
  boxColor: string;
  posterColor: string;
  soundWaveColor: string;
  songTitleColor: string;
  activeAlignment: string;
}
interface SelectedAlbumProps {
  id: string;
  label: string;
  photo: string;
  singerName: string;
}
const PosterBody: FC<waveformProps> = ({
  dataSets,
  albumDescripition,
  selectedAlbum,
  boxColor,
  posterColor,
  soundWaveColor,
  songTitleColor,
  activeAlignment,
}) => {
  return (
    <div
      className={`${posterColor} w-[48%] h-[89%] shadow-lg shadow-[#BAB8B8] pt-8 pl-6 pr-4 relative`}
    >
      <Waves dataSets={dataSets} boxColor={boxColor} soundWaveColor={soundWaveColor} />
      <div className={`break-words w-[90%] h-[23%] absolute bottom-2 ${activeAlignment}`}>
        <span className={`${songTitleColor} text-4xl font-semibold `}>
          <i>{selectedAlbum?.label ? selectedAlbum?.label : 'Album/Song Name'}</i>
        </span>
        <br />
        <p className={`text-[7px] ${songTitleColor} tracking-tighter`}>{albumDescripition}</p>
      </div>
      <div
        className={
          activeAlignment === 'text-right'
            ? ' absolute left-0 bottom-3'
            : ' absolute right-0 bottom-3'
        }
      >
        <WaterMark />
      </div>
    </div>
  );
};

export default PosterBody;
