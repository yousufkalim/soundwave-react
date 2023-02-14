import React, { FC } from 'react';
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
  descriptionColor: string;
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
  descriptionColor,
  activeAlignment,
}) => {
  return (
    <div
      id="custom-poster-div"
      style={{ background: posterColor }}
      className={` w-[48%] h-[89%] shadow-lg shadow-[#BAB8B8] pt-8 pl-6 pr-4 relative mt-[3%]`}
    >
      <Waves dataSets={dataSets} boxColor={boxColor} soundWaveColor={soundWaveColor} />
      <div className={`break-words w-[90%] h-[23%] absolute bottom-2 ${activeAlignment}`}>
        <span style={{ color: songTitleColor }} className={`text-4xl font-semibold `}>
          <i>{selectedAlbum?.label ? selectedAlbum?.label : 'Album/Song Name'}</i>
        </span>
        <br />
        <p style={{ color: descriptionColor }} className={`text-[7px] tracking-tighter`}>
          {albumDescripition}
        </p>
      </div>
    </div>
  );
};

export default PosterBody;
