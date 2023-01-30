import React, { FC } from 'react';
import PosterFooter from './footer';
import PosterBody from './posterBody';
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
  setActiveAlignment: (value: string) => void;
}
interface SelectedAlbumProps {
  id: string;
  label: string;
  photo: string;
  singerName: string;
}
const index: FC<waveformProps> = ({
  dataSets,
  albumDescripition,
  selectedAlbum,
  boxColor,
  posterColor,
  soundWaveColor,
  songTitleColor,
  activeAlignment,
  setActiveAlignment,
}) => {
  return (
    <div className="bg-[#fcfcfc] w-[56%] flex items-center justify-center flex-col gap-5">
      <PosterBody
        dataSets={dataSets}
        albumDescripition={albumDescripition}
        selectedAlbum={selectedAlbum}
        boxColor={boxColor}
        posterColor={posterColor}
        soundWaveColor={soundWaveColor}
        songTitleColor={songTitleColor}
        activeAlignment={activeAlignment}
      />
      <PosterFooter activeAlignment={activeAlignment} setActiveAlignment={setActiveAlignment} />
    </div>
  );
};

export default index;
