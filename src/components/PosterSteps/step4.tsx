import React, { FC, useState } from 'react';
import Tab from '../Tab/index';
import ThemeBtnBox from '../themeCustomizationBtnBox/index';
import PosterFrame from '../PosterFrames/index';
import PosterCanvas from '../PosterCanvas/index';


interface IFrameProps {
  frameType: string;
  selectedFrame: string;
}
interface Step4Props {
  openStyles: boolean;
  setOpenDescripition: (value: boolean) => void;
  setOpenTheme: (value: boolean) => void;
  setOpenStyles: (value: boolean) => void;
  setOpenSize: (value: boolean) => void;
  activeStep: number;
  setActiveStep: (value: number) => void;
  frame: IFrameProps;
  setFrame: ({ frameType, selectedFrame }: IFrameProps) => void;
  // selectedFrame:string
  // setSelectedFrame
}

const step4: FC<Step4Props> = ({
  openStyles,
  setOpenStyles,
  setOpenDescripition,
  setOpenTheme,
  setOpenSize,
  activeStep,
  setActiveStep,
  frame,
  setFrame,
  // selectedFrame,
  // setSelectedFrame
}) => {
  const [selectedSection, setSelectedSection] = useState<string>('btn1');

  const [selectedCanvas, setSelectedCanvas] = useState<string>('');

  const handleButtonClick = (targetSection: string): void => {
    setSelectedSection(targetSection);
  };

  const handleSelectedCanvas = (targetFrame: string): void => {
    setSelectedCanvas(targetFrame);
  };

  const handleIconClick = (): void => {
    if (activeStep >= 4) {
      setOpenStyles(!openStyles);
      setOpenDescripition(false);
      setOpenTheme(false);
      setOpenSize(false);
      setActiveStep(5);
    } else {
      setOpenStyles(false);
      setOpenDescripition(false);
      setOpenTheme(false);
      setOpenSize(false);
    }
  };
  return (
    <>
      <Tab
        open={openStyles}
        onClick={handleIconClick}
        heading={'Print Format'}
        active={activeStep >= 4}
      />
      <div className={openStyles ? 'block w-full' : 'hidden'}>
        <span className="text-sm">Select</span>
        <ThemeBtnBox
          selectedSection={selectedSection}
          handleButtonClick={handleButtonClick}
          btn1Text={'Poster'}
          btn2Text={'Canvas'}
        />
        {selectedSection === 'btn1' ? (
          <PosterFrame frame={frame} setFrame={setFrame} />
        ) : (
          selectedSection === 'btn2' && (
            <PosterCanvas
              selectedCanvas={selectedCanvas}
              handleSelectedCanvas={handleSelectedCanvas}
            />
          )
        )}
      </div>
    </>
  );
};

export default step4;
