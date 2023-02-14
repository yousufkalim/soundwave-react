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

interface IColors {
  boxColor: string;
  posterColor: string;
  soundWaveColor: string;
  songTitleColor: string;
  descriptionColor: string;
  soundWaveNameColor: string;
}

interface IFrameProps {
  frameType: string;
  selectedFrame: string;
}
interface waveformProps {
  dataSets: DatasetProps[];
  albumDescripition: string;
  selectedAlbum?: SelectedAlbumProps;
  activeAlignment: string;
  setActiveAlignment: (value: string) => void;
  colors: IColors;
  setColors: ({
    boxColor,
    posterColor,
    soundWaveColor,
    songTitleColor,
    descriptionColor,
    soundWaveNameColor,
  }: IColors) => void;
  selectedTemplate: string;
  frame: IFrameProps;
  BackgroundFrame: string;
}

// const templatesArr = [
//   {
//     name: 'template1',
//     boxColor: 'transparent',
//     posterColor: '#000000',
//     soundWaveColor: '#ffffff',
//     songTitleColor: '#ffffff',
//     descriptionColor: '#ffffff',
//   },
//   {
//     name: 'template2',
//     boxColor: 'transparent',
//     posterColor: '#000000',
//     soundWaveColor: '#ffffff',
//     songTitleColor: '#ffffff',
//     descriptionColor: '#ffffff',
//   },
//   {
//     name: 'template3',
//     boxColor: 'transparent',
//     posterColor: '#000000',
//     soundWaveColor: '#ffffff',
//     songTitleColor: '#ffffff',
//     descriptionColor: '#ffffff',
//   },
//   {
//     name: 'template4',
//     boxColor: 'transparent',
//     posterColor: '#000000',
//     soundWaveColor: '#ffffff',
//     songTitleColor: '#ffffff',
//     descriptionColor: '#ffffff',
//   },
//   {
//     name: 'template5',
//     boxColor: 'transparent',
//     posterColor: '#000000',
//     soundWaveColor: '#ffffff',
//     songTitleColor: '#ffffff',
//     descriptionColor: '#ffffff',
//   },
//   {
//     name: 'template6',
//     boxColor: 'transparent',
//     posterColor: '#000000',
//     soundWaveColor: '#ffffff',
//     songTitleColor: '#ffffff',
//     descriptionColor: '#ffffff',
//   },
// ];

const index: FC<waveformProps> = ({
  dataSets,
  albumDescripition,
  selectedAlbum,
  colors,
  activeAlignment,
  setActiveAlignment,
  selectedTemplate,
  setColors,
  frame,
  BackgroundFrame,
}) => {
  // const currentTemplate = templatesArr.find((item) => item.name === selectedTemplate);

  return (
    <div className="bg-[#fcfcfc] w-[56%] flex items-center justify-center flex-col gap-6">
      {selectedTemplate === 'template1' ? (
        <Template1
          activeAlignment={activeAlignment}
          selectedAlbum={selectedAlbum}
          albumDescripition={albumDescripition}
          dataSets={dataSets}
          colors={colors}
          setColors={setColors}
          frame={frame}
          BackgroundFrame={BackgroundFrame}
        />
      ) : selectedTemplate === 'template2' ? (
        <Template2
          activeAlignment={activeAlignment}
          selectedAlbum={selectedAlbum}
          albumDescripition={albumDescripition}
          dataSets={dataSets}
          colors={colors}
          setColors={setColors}
          frame={frame}
          BackgroundFrame={BackgroundFrame}
        />
      ) : selectedTemplate === 'template3' ? (
        <Template3
          activeAlignment={activeAlignment}
          selectedAlbum={selectedAlbum}
          albumDescripition={albumDescripition}
          dataSets={dataSets}
          colors={colors}
          setColors={setColors}
          frame={frame}
          BackgroundFrame={BackgroundFrame}
        />
      ) : selectedTemplate === 'template4' ? (
        <Template4
          activeAlignment={activeAlignment}
          selectedAlbum={selectedAlbum}
          albumDescripition={albumDescripition}
          dataSets={dataSets}
          colors={colors}
          setColors={setColors}
          frame={frame}
          BackgroundFrame={BackgroundFrame}
        />
      ) : selectedTemplate === 'template5' ? (
        <Template5
          activeAlignment={activeAlignment}
          selectedAlbum={selectedAlbum}
          albumDescripition={albumDescripition}
          dataSets={dataSets}
          colors={colors}
          setColors={setColors}
          frame={frame}
          BackgroundFrame={BackgroundFrame}
        />
      ) : selectedTemplate === 'template6' ? (
        <Template6
          activeAlignment={activeAlignment}
          selectedAlbum={selectedAlbum}
          albumDescripition={albumDescripition}
          dataSets={dataSets}
          colors={colors}
          setColors={setColors}
          frame={frame}
          BackgroundFrame={BackgroundFrame}
        />
      ) : (
        <PosterBody
          dataSets={dataSets}
          albumDescripition={albumDescripition}
          selectedAlbum={selectedAlbum}
          boxColor={colors.boxColor}
          posterColor={colors.posterColor}
          soundWaveColor={colors.soundWaveColor}
          songTitleColor={colors.songTitleColor}
          descriptionColor={colors.descriptionColor}
          activeAlignment={activeAlignment}
        />
      )}
      <PosterFooter activeAlignment={activeAlignment} setActiveAlignment={setActiveAlignment} />
    </div>
  );
};

export default index;
