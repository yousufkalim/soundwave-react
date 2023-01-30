import React, {
  FC,
  // , useState
} from 'react';
import Tab from '../Tab/index';
import PosterSizeBox from '../PosterSize/index';
import PosterFrames from '../PosterFrames/index';

interface Step4Props {
  openStyles: boolean;
  setOpenDescripition: (value: boolean) => void;
  setOpenColorSetting: (value: boolean) => void;
  setOpenStyles: (value: boolean) => void;
  posterSize: string;
  setPosterSize: (value: string) => void;
}

const step4: FC<Step4Props> = ({
  openStyles,
  setOpenStyles,
  setOpenDescripition,
  setOpenColorSetting,
  posterSize,
  setPosterSize,
}) => {
  const handleIconClick = (): void => {
    setOpenStyles(!openStyles);
    setOpenDescripition(false);
    setOpenColorSetting(false);
  };
  return (
    <>
      <Tab open={openStyles} onClick={handleIconClick} heading={'Styles and Frames'} />
      <div className={openStyles ? 'block w-full' : 'hidden'}>
        <span className="text-sm">Poster Size</span>
        <PosterSizeBox posterSize={posterSize} setPosterSize={setPosterSize} />
        <span className="text-sm">Select Frame</span>
        <PosterFrames />
      </div>
    </>
  );
};

export default step4;
