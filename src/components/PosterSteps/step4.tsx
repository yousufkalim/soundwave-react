import React, { FC, useState } from 'react';
import ThemeBtnBox from '../themeCustomizationBtnBox/index';
import PosterFrame from '../PosterFrames/index';
import PosterCanvas from '../PosterCanvas/index';
interface Step4Props {
  posterType: string;
  setPosterType: (value: string) => void;
}

const step4: FC<Step4Props> = ({ posterType, setPosterType }) => {
  const [selectedSection, setSelectedSection] = useState<string>('Poster');
  const [frame, setFrame] = useState<string>('No Frame');

  const handleButtonClick = (targetSection: string): void => {
    setSelectedSection(targetSection);
  };

  const handleSelectedCanvas = (targetFrame: string): void => {
    setPosterType(targetFrame);
  };

  return (
    <>
      <span className="text-[12px]">Select</span>
      <ThemeBtnBox
        selectedSection={selectedSection}
        handleButtonClick={handleButtonClick}
        btn1Text={'Poster'}
        btn2Text={'Canvas'}
      />
      {selectedSection === 'Poster' ? (
        <PosterFrame
          selectedSection={selectedSection}
          posterType={posterType}
          setPosterType={setPosterType}
          frame={frame}
          setFrame={setFrame}
        />
      ) : (
        selectedSection === 'Canvas' && (
          <PosterCanvas posterType={posterType} handleSelectedCanvas={handleSelectedCanvas} />
        )
      )}
    </>
  );
};

export default step4;
