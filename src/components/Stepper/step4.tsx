import React, { FC } from 'react';
import Tab from '../Tab/index';

interface Step4Props {
  openStyles: boolean;

  setOpenDescripition: (value: boolean) => void;
  setOpenColorSetting: (value: boolean) => void;
  setOpenStyles: (value: boolean) => void;
}

const step2: FC<Step4Props> = ({
  openStyles,
  setOpenStyles,
  setOpenDescripition,
  setOpenColorSetting,
}) => {
  const handleIconClick = (): void => {
    setOpenStyles(!openStyles);
    setOpenDescripition(false);
    setOpenColorSetting(false);
  };
  return (
    <>
      <Tab onClick={handleIconClick} heading={'Styles and Frames'} open={openStyles} />
    </>
  );
};

export default step2;
