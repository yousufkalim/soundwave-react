import React, { FC, useState } from 'react';
import Tab from '../Tab/index';
import Checkbox from '../Checkbox/index';
interface Step2Props {
  openColorSetting: boolean;
  setOpenColorSetting: (value: boolean) => void;
  setOpenDescripition: (value: boolean) => void;
  setOpenStyles: (value: boolean) => void;
}
const step2: FC<Step2Props> = ({
  openColorSetting,
  setOpenColorSetting,
  setOpenDescripition,
  setOpenStyles,
}) => {
  const [backgroundColor, setBackgroundColor] = useState<boolean>(false);
  const [waveColor, setWaveColor] = useState<boolean>(false);
  const [titleColor, setTitleColor] = useState<boolean>(false);
  const handleIconClick = (): void => {
    setOpenColorSetting(!openColorSetting);
    setOpenDescripition(false);
    setOpenStyles(false);
  };

  const handleBackgroundColor = (): void => {
    setBackgroundColor(!backgroundColor);
  };
  const handleWaveColor = (): void => {
    setWaveColor(!waveColor);
  };
  const handleTitleColor = (): void => {
    setTitleColor(!titleColor);
  };
  return (
    <>
      <Tab onClick={handleIconClick} heading={'Color Setting'} open={openColorSetting} />
      <div className={openColorSetting ? 'block w-full' : 'hidden'}>
        <span>Poster Box Color</span>
        <div className="flex justify-between">
          <div className="text-[14px] font-semibold h-12 text-white bg-yellow-400 w-[31%] flex items-center justify-center border-solid border-2 border-[#E1E1E1] rounded-lg cursor-pointer">
            Album Color
          </div>
          <div className="text-[14px] font-semibold h-12 text-white bg-[#D3D3D3] w-[31%] flex items-center justify-center border-solid border-2 border-[#E1E1E1] rounded-lg cursor-pointer">
            Neutral
          </div>
          <div className="text-[14px] font-semibold h-12 text-white bg-gradient-to-r from-[#FC3853] to-[#A72EC9] w-[31%] flex items-center justify-center border-solid border-2 border-[#E1E1E1] rounded-lg cursor-pointer">
            Custom Color
          </div>
        </div>
        <div className="flex justify-start flex-col">
          <div className="flex items-center justify-between py-4">
            Background <Checkbox onChange={handleBackgroundColor} checked={backgroundColor} />
          </div>
          <div className="flex items-center justify-between py-4">
            Soundwave Color
            <Checkbox onChange={handleWaveColor} checked={waveColor} />
          </div>
          <div className="flex items-center justify-between py-4">
            Song Title
            <Checkbox onChange={handleTitleColor} checked={titleColor} />
          </div>
        </div>
      </div>
    </>
  );
};

export default step2;
