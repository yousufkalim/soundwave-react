import React, { FC } from 'react';
import PosterFooter from './footer';
import PosterBody from './posterBody';

import Template1 from '../Templates/template1';
import Template2 from '../Templates/template2';
import Template3 from '../Templates/template3';
import Template4 from '../Templates/template4';
import Template5 from '../Templates/template5';
import Template6 from '../Templates/template6';

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
  selectedTemplate: string;
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
  selectedTemplate,
}) => {
  return (
    <div className="bg-[#fcfcfc] w-[56%] flex items-center justify-center flex-col gap-6">
      {selectedTemplate === 'template1' ? (
        <Template1
          activeAlignment={activeAlignment}
          selectedAlbum={selectedAlbum}
          albumDescripition={albumDescripition}
          dataSets={dataSets}
        />
      ) : selectedTemplate === 'template2' ? (
        <Template2
          activeAlignment={activeAlignment}
          selectedAlbum={selectedAlbum}
          albumDescripition={albumDescripition}
          dataSets={dataSets}
        />
      ) : selectedTemplate === 'template3' ? (
        <Template3
          activeAlignment={activeAlignment}
          selectedAlbum={selectedAlbum}
          albumDescripition={albumDescripition}
          dataSets={dataSets}
        />
      ) : selectedTemplate === 'template4' ? (
        <Template4
          activeAlignment={activeAlignment}
          selectedAlbum={selectedAlbum}
          albumDescripition={albumDescripition}
          dataSets={dataSets}
        />
      ) : selectedTemplate === 'template5' ? (
        <Template5
          activeAlignment={activeAlignment}
          selectedAlbum={selectedAlbum}
          albumDescripition={albumDescripition}
          dataSets={dataSets}
        />
      ) : selectedTemplate === 'template6' ? (
        <Template6
          activeAlignment={activeAlignment}
          selectedAlbum={selectedAlbum}
          albumDescripition={albumDescripition}
          dataSets={dataSets}
        />
      ) : (
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
      )}
      <PosterFooter activeAlignment={activeAlignment} setActiveAlignment={setActiveAlignment} />
    </div>
  );
};

export default index;
