import React, { FC, useState } from 'react';
import Tab from '../Tab/index';
import ThemeCustomizationBox from '../ThemeCustomization/index';
import PosterTemplatesBox from '../PosterTemplates/index';
import ThemeBtnBox from '../themeCustomizationBtnBox/index';
interface Step3Props {
  openTheme: boolean;
  setOpenTheme: (value: boolean) => void;
  setOpenDescripition: (value: boolean) => void;
  setOpenStyles: (value: boolean) => void;
  setBoxColor: (value: string) => void;
  setPosterColor: (value: boolean) => void;
  setSoundWaveColor: (value: boolean) => void;
  setSongTitleColor: (value: boolean) => void;
  posterColor: boolean;
  soundWaveColor: boolean;
  songTitleColor: boolean;
  primaryColor: string;
  selectedTemplate: string;
  setSelectedTemplate: (value: string) => void;
  setOpenSize: (value: boolean) => void;
  activeStep: number;
  setActiveStep: (value: number) => void;
}
const step3: FC<Step3Props> = ({
  openTheme,
  setOpenTheme,
  setOpenDescripition,
  setOpenStyles,
  setBoxColor,
  setPosterColor,
  setSoundWaveColor,
  setSongTitleColor,
  posterColor,
  soundWaveColor,
  songTitleColor,
  primaryColor,
  selectedTemplate,
  setSelectedTemplate,
  setOpenSize,
  activeStep,
  setActiveStep,
}) => {
  // const ref = useRef<HTMLDivElement>(null);
  const [selectedSection, setSelectedSection] = useState<string>('btn1');

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
      <div className={openTheme ? 'block w-full' : 'hidden'}>
        <ThemeBtnBox
          selectedSection={selectedSection}
          handleButtonClick={handleButtonClick}
          btn1Text={'Templates'}
          btn2Text={'Customization'}
        />
        {selectedSection === 'btn1' ? (
          <PosterTemplatesBox
            handleTemplateClick={handleTemplateClick}
            selectedTemplate={selectedTemplate}
          />
        ) : (
          selectedSection === 'btn2' && (
            <ThemeCustomizationBox
              setBoxColor={setBoxColor}
              setPosterColor={setPosterColor}
              setSoundWaveColor={setSoundWaveColor}
              setSongTitleColor={setSongTitleColor}
              posterColor={posterColor}
              soundWaveColor={soundWaveColor}
              songTitleColor={songTitleColor}
              primaryColor={primaryColor}
            />
          )
        )}
      </div>
    </>
  );
};

export default step3;
