import React, { FC, useState } from 'react';
import Tab from '../Tab/index';
import ThemeBtnBox from '../themeCustomizationBtnBox/index';
import PosterFrame from '../PosterFrames/index';
import PosterCanvas from '../PosterCanvas/index';
import { Collapse } from '@mui/material';
import Fade from 'react-reveal/Fade';
interface Step4Props {
  openStyles: boolean;
  setOpenDescripition: (value: boolean) => void;
  setOpenTheme: (value: boolean) => void;
  setOpenStyles: (value: boolean) => void;
  setOpenSize: (value: boolean) => void;
  activeStep: number;
  setActiveStep: (value: number) => void;
  posterType: string;
  setPosterType: (value: string) => void;
}

const step4: FC<Step4Props> = ({
  openStyles,
  setOpenStyles,
  setOpenDescripition,
  setOpenTheme,
  setOpenSize,
  activeStep,
  setActiveStep,
  posterType,
  setPosterType,
}) => {
  const [selectedSection, setSelectedSection] = useState<string>('poster');
  const [frame, setFrame] = useState<string>('No Frame');

  const handleButtonClick = (targetSection: string): void => {
    setSelectedSection(targetSection);
  };

  const handleSelectedCanvas = (targetFrame: string): void => {
    setPosterType(targetFrame);
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
      <Collapse in={openStyles} timeout={600} unmountOnExit>
        <Fade when={openStyles} duration={500}>
          <span className="text-[12px]">Select</span>
          <ThemeBtnBox
            selectedSection={selectedSection}
            handleButtonClick={handleButtonClick}
            btn1Text={'Poster'}
            btn2Text={'Canvas'}
          />
          {selectedSection === 'poster' ? (
            <PosterFrame
              selectedSection={selectedSection}
              posterType={posterType}
              setPosterType={setPosterType}
              frame={frame}
              setFrame={setFrame}
            />
          ) : (
            selectedSection === 'canvas' && (
              <PosterCanvas posterType={posterType} handleSelectedCanvas={handleSelectedCanvas} />
            )
          )}
        </Fade>
      </Collapse>
    </>
  );
};

export default step4;
