import React, { FC, useState } from 'react';
import Tab from '../Tab/index';
import ThemeCustomizationBox from '../ThemeCustomization/index';
import PosterTemplatesBox from '../PosterTemplates/index';
import ThemeBtnBox from '../themeCustomizationBtnBox/index';
import { Collapse } from '@mui/material';
import Fade from 'react-reveal/Fade';

interface Step3Props {
  openTheme: boolean;
  setOpenTheme: (value: boolean) => void;
  setOpenDescripition: (value: boolean) => void;
  setOpenStyles: (value: boolean) => void;
  boxColor: string;
  posterColor: string;
  soundWaveColor: string;
  songTitleColor: string;
  descriptionColor: string;
  soundWaveNameColor: string;
  selectedTemplate: string;
  getSetColor: (currentColor: string, fieldName: string) => void;
  setSelectedTemplate: (value: string) => void;
  setOpenSize: (value: boolean) => void;
  activeStep: number;
  setActiveStep: (value: number) => void;
  selectedFont: string;
  setSelectedFont: (value: string) => void;
  setLoading: (value: boolean) => void;
}
const step3: FC<Step3Props> = ({
  openTheme,
  setOpenTheme,
  setOpenDescripition,
  setOpenStyles,
  boxColor,
  posterColor,
  soundWaveColor,
  songTitleColor,
  soundWaveNameColor,
  descriptionColor,
  selectedTemplate,
  setSelectedTemplate,
  setOpenSize,
  activeStep,
  setActiveStep,
  getSetColor,
  selectedFont,
  setSelectedFont,
  setLoading,
}) => {
  // const ref = useRef<HTMLDivElement>(null);
  const [selectedSection, setSelectedSection] = useState<string>('Templates');

  const handleIconClick = (): void => {
    if (activeStep >= 3) {
      setOpenTheme(!openTheme);
      setOpenDescripition(false);
      setOpenStyles(false);
      setOpenSize(false);
      setActiveStep(4);
    } else {
      setOpenTheme(false);
      setOpenDescripition(false);
      setOpenStyles(false);
      setOpenSize(false);
    }
  };

  const handleButtonClick = (targetSection: string): void => {
    setSelectedSection(targetSection);
  };

  const handleTemplateClick = (targetTemplate: string): void => {
    setSelectedTemplate(targetTemplate);
  };

  return (
    <>
      <Tab onClick={handleIconClick} heading={'Theme'} open={openTheme} active={activeStep >= 3} />
      <Collapse in={openTheme} timeout={600} unmountOnExit>
        <Fade when={openTheme} duration={500}>
          <ThemeBtnBox
            selectedSection={selectedSection}
            handleButtonClick={handleButtonClick}
            btn1Text={'Templates'}
            btn2Text={'Customization'}
          />
          {selectedSection === 'Templates' ? (
            <PosterTemplatesBox
              handleTemplateClick={handleTemplateClick}
              selectedTemplate={selectedTemplate}
            />
          ) : (
            selectedSection === 'Customization' && (
              <ThemeCustomizationBox
                selectedTemplate={selectedTemplate}
                boxColor={boxColor}
                posterColor={posterColor}
                soundWaveColor={soundWaveColor}
                songTitleColor={songTitleColor}
                descriptionColor={descriptionColor}
                soundWaveNameColor={soundWaveNameColor}
                getSetColor={getSetColor}
                selectedFont={selectedFont}
                setSelectedFont={setSelectedFont}
                setLoading={setLoading}
              />
            )
          )}
        </Fade>
      </Collapse>
    </>
  );
};

export default step3;
