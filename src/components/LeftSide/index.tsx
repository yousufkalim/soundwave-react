import React, { FC } from 'react';
import PosterFooter from './footer';
import Template1 from '../Templates/template2';
import Template2 from '../Templates/template3';
import Template3 from '../Templates/template1';
import Template4 from '../Templates/template4';
import Template5 from '../Templates/template5';
import Template6 from '../Templates/template6';
import { SelectedAlbumProps, DataSetProps, IStateColors, IFrameProps } from '../../types/index';

interface waveformProps {
  dataSets: DataSetProps[];
  albumDescripition: string;
  selectedAlbum?: SelectedAlbumProps;
  activeAlignment: string;
  setActiveAlignment: (value: string) => void;
  colors: IStateColors;
  setColors: ({
    boxColor,
    posterColor,
    soundWaveColor,
    songTitleColor,
    descriptionColor,
    soundWaveNameColor,
  }: IStateColors) => void;
  selectedTemplate: string;
  frame: IFrameProps;
  BackgroundFrame: string;
  openDescripition: boolean;
  selectedFont: string;
}

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
  openDescripition,
  selectedFont,
}) => {
  const activeAlbum =
    selectedTemplate === 'template1' ? (
      <Template1
        activeAlignment={activeAlignment}
        selectedAlbum={selectedAlbum}
        albumDescripition={albumDescripition}
        dataSets={dataSets}
        colors={colors}
        setColors={setColors}
        frame={frame}
        BackgroundFrame={BackgroundFrame}
        selectedFont={selectedFont}
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
        selectedFont={selectedFont}
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
        selectedFont={selectedFont}
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
        selectedFont={selectedFont}
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
        selectedFont={selectedFont}
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
        selectedFont={selectedFont}
      />
    ) : (
      <Template1
        activeAlignment={activeAlignment}
        selectedAlbum={selectedAlbum}
        albumDescripition={albumDescripition}
        dataSets={dataSets}
        colors={colors}
        setColors={setColors}
        frame={frame}
        BackgroundFrame={BackgroundFrame}
        selectedFont={selectedFont}
      />
    );

  return (
    <div className="bg-[#fcfcfc] w-full md:w-[60%] 2xl:w-[56%] h-[90vh] md:h-[85vh] flex items-center justify-center flex-col gap-6 ">
      {activeAlbum}
      {openDescripition && (
        <PosterFooter activeAlignment={activeAlignment} setActiveAlignment={setActiveAlignment} />
      )}
    </div>
  );
};

export default index;
