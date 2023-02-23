import React, { FC, useState } from 'react';
import ThemeCustomizationBox from '../ThemeCustomization/index';
import PosterTemplatesBox from '../PosterTemplates/index';
import ThemeBtnBox from '../themeCustomizationBtnBox/index';

interface Step3Props {
  boxColor: string;
  posterColor: string;
  soundWaveColor: string;
  songTitleColor: string;
  descriptionColor: string;
  soundWaveNameColor: string;
  selectedTemplate: string;
  getSetColor: (currentColor: string, fieldName: string) => void;
  setSelectedTemplate: (value: string) => void;
  selectedFont: string;
  setSelectedFont: (value: string) => void;
  setLoading: (value: boolean) => void;
}
const step3: FC<Step3Props> = ({
  boxColor,
  posterColor,
  soundWaveColor,
  songTitleColor,
  soundWaveNameColor,
  descriptionColor,
  selectedTemplate,
  setSelectedTemplate,
  getSetColor,
  selectedFont,
  setSelectedFont,
  setLoading,
}) => {
  // const ref = useRef<HTMLDivElement>(null);
  const [selectedSection, setSelectedSection] = useState<string>('Templates');

  const handleButtonClick = (targetSection: string): void => {
    setSelectedSection(targetSection);
  };

  const handleTemplateClick = (targetTemplate: string): void => {
    setSelectedTemplate(targetTemplate);
  };

  return (
    <>
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
    </>
  );
};

export default step3;
