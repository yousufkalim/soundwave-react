import React, { FC, useState } from 'react';
import Tab from '../Tab/index';
import ThemeCustomizationBox from '../ThemeCustomization/index';
import PosterTemplatesBox from '../PosterTemplates/index';
import ThemeBtnBox from '../themeCustomizationBtnBox/index';
interface Step3Props {
  openColorSetting: boolean;
  setOpenColorSetting: (value: boolean) => void;
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
}
const step3: FC<Step3Props> = ({
  openColorSetting,
  setOpenColorSetting,
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
}) => {
  // const ref = useRef<HTMLDivElement>(null);
  const [selectedSection, setSelectedSection] = useState<string>('templates');

  const handleIconClick = (): void => {
    setOpenColorSetting(!openColorSetting);
    setOpenDescripition(false);
    setOpenStyles(false);
  };

  const handleButtonClick = (targetSection: string): void => {
    setSelectedSection(targetSection);
  };

  const handleTemplateClick = (targetTemplate: string): void => {
    setSelectedTemplate(targetTemplate);
  };

  return (
    <>
      <Tab onClick={handleIconClick} heading={'Theme'} open={openColorSetting} />
      <div className={openColorSetting ? 'block w-full' : 'hidden'}>
        <ThemeBtnBox selectedSection={selectedSection} handleButtonClick={handleButtonClick} />
        {selectedSection === 'templates' ? (
          <PosterTemplatesBox
            handleTemplateClick={handleTemplateClick}
            selectedTemplate={selectedTemplate}
          />
        ) : (
          selectedSection === 'themeCustomization' && (
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
