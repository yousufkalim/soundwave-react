import React, {
  FC,
  useState,
  // , useRef, useEffect
} from 'react';
import GradientPicker from 'react-best-gradient-color-picker';
import Tab from '../Tab/index';
import Checkbox from '../Checkbox/index';
import { ReactComponent as PickerImage } from '../../assets/colorPicker.svg';
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
}) => {
  // const ref = useRef<HTMLDivElement>(null);
  const [color, setColor] = useState<string>('rgba(255,255,255,1)');
  const [showColorPicker, setShowColorPicker] = useState<boolean>(false);

  const handleIconClick = (): void => {
    setOpenColorSetting(!openColorSetting);
    setOpenDescripition(false);
    setOpenStyles(false);
  };

  const handleColor = (colorSetting: string): void => {
    switch (colorSetting) {
      case 'background':
        setPosterColor(!posterColor);
        break;
      case 'wave':
        setSoundWaveColor(!soundWaveColor);
        break;
      case 'title':
        setSongTitleColor(!songTitleColor);
        break;
      default:
        break;
    }
  };

  const handleAlbumColor = (color: string): void => {
    setBoxColor(color);
  };

  const handleShowColorPicker = (): void => {
    setShowColorPicker(!showColorPicker);
  };

  return (
    <>
      <Tab onClick={handleIconClick} heading={'Color Setting'} open={openColorSetting} />
      <div className={openColorSetting ? 'block w-full' : 'hidden'}>
        <span className="text-sm">Poster Box Color</span>
        <div className="flex justify-between">
          <div
            style={{ backgroundColor: `${primaryColor}` }}
            onClick={() => {
              handleAlbumColor(primaryColor);
            }}
            className="text-[12px] font-semibold h-12 text-white w-[31%] flex items-center justify-center border-solid border-2 border-[#E1E1E1] rounded-lg cursor-pointer"
          >
            Album Color
          </div>
          <div
            style={{ backgroundColor: '#D3D3D3' }}
            onClick={() => {
              handleAlbumColor('#D3D3D3');
            }}
            className="text-[12px] font-semibold h-12 text-white w-[31%] flex items-center justify-center border-solid border-2 border-[#E1E1E1] rounded-lg cursor-pointer"
          >
            Neutral
          </div>
          <div
            // ref={ref}
            onClick={handleShowColorPicker}
            className="h-12 w-[31%] flex items-center justify-center  cursor-pointer"
          >
            <PickerImage />
          </div>
        </div>
        {showColorPicker ? (
          <div className="absolute z-50 right-[18.5rem] bottom-[7rem] bg-gray-100 p-1 shadow-2xl shadow-[#BAB8B8] border-solid border-2 border-gray-300 rounded-lg">
            <GradientPicker
              hideAdvancedSliders={true}
              hideColorGuide={true}
              hideControls={false}
              hideInputType={true}
              hidePresets={false}
              hideOpacity={true}
              hideEyeDrop={true}
              hideInputs={true}
              hideHue={false}
              value={color}
              onChange={setColor}
              width={270}
              height={120}
              direction="vertical"
              gradient={'linear-gradient(90deg, #ff0000 0%, #0000ff 100%)'}
            />
          </div>
        ) : (
          ''
        )}

        <div className="flex justify-start flex-col">
          <div className="flex items-center justify-between py-4">
            <span className="text-sm">Background</span>
            <Checkbox
              onChange={() => {
                handleColor('background');
              }}
              checked={posterColor}
            />
          </div>
          <div className="flex items-center justify-between py-4">
            <span className="text-sm">Soundwave Color</span>
            <Checkbox
              onChange={() => {
                handleColor('wave');
              }}
              checked={soundWaveColor}
            />
          </div>
          <div className="flex items-center justify-between py-4">
            <span className="text-sm">Song Title</span>
            <Checkbox
              onChange={() => {
                handleColor('title');
              }}
              checked={songTitleColor}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default step3;
