// import GradientPicker from 'react-best-gradient-color-picker';
// import Checkbox from '../Checkbox/index';
// import { ReactComponent as PickerImage } from '../../assets/colorPicker.svg';
import { ReactComponent as ColorPickerIcon } from '../../assets/colorPickerIcon.svg';

import React, {
  FC,
  // useState,
  // , useRef, useEffect
} from 'react';

interface ThemeProps {
  setBoxColor: (value: string) => void;
  setPosterColor: (value: boolean) => void;
  setSoundWaveColor: (value: boolean) => void;
  setSongTitleColor: (value: boolean) => void;
  posterColor: boolean;
  soundWaveColor: boolean;
  songTitleColor: boolean;
  // primaryColor: string;
}

const Theme: FC<ThemeProps> = ({
  setBoxColor,
  setPosterColor,
  setSoundWaveColor,
  setSongTitleColor,
  posterColor,
  soundWaveColor,
  songTitleColor,
  // primaryColor,
}) => {
  // const [color, setColor] = useState<string>('rgba(255,255,255,1)');
  // const [showColorPicker, setShowColorPicker] = useState<boolean>(false);
  // const handleAlbumColor = (color: string): void => {
  //   setBoxColor(color);
  // };

  // const handleShowColorPicker = (): void => {
  //   setShowColorPicker(!showColorPicker);
  // };
  // const handleColor = (colorSetting: string): void => {
  //   switch (colorSetting) {
  //     case 'background':
  //       setPosterColor(!posterColor);
  //       break;
  //     case 'wave':
  //       setSoundWaveColor(!soundWaveColor);
  //       break;
  //     case 'title':
  //       setSongTitleColor(!songTitleColor);
  //       break;
  //     default:
  //       break;
  //   }
  // };
  return (
    <div>
      {/* <span className="text-sm">Poster Box Color</span> */}
      {/* <div className="flex justify-between">
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
      </div> */}
      {/* {showColorPicker && (
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
      )} */}
      <div className="flex justify-start flex-col">
        <div className="flex items-center justify-between py-1 border-b-[1px] border-[#CCCCCC]">
          <span className="text-sm">Poster Box Colour</span>
          <div
            style={{ backgroundColor: `black` }}
            className="h-12 w-20 flex items-center justify-center border-[3px] border-[#E1E1E1] rounded-lg cursor-pointer"
            // onClick={() => {
            //   handleAlbumColor(primaryColor);
            // }}
          >
            <ColorPickerIcon />
          </div>
        </div>
        <div className="flex items-center justify-between py-1 border-b-[1px] border-[#CCCCCC]">
          <span className="text-sm">Background</span>
          <div
            style={{ backgroundColor: `black` }}
            className="h-12 w-20 flex items-center justify-center border-[3px] border-[#E1E1E1] rounded-lg cursor-pointer"
            // onClick={() => {
            //   handleAlbumColor(primaryColor);
            // }}
          >
            <ColorPickerIcon />
          </div>
        </div>
        <div className="flex items-center justify-between py-1 border-b-[1px] border-[#CCCCCC]">
          <span className="text-sm">Soundwave and Name Color</span>
          <div
            style={{ backgroundColor: `black` }}
            className="h-12 w-20 flex items-center justify-center border-[3px] border-[#E1E1E1] rounded-lg cursor-pointer"
            // onClick={() => {
            //   handleAlbumColor(primaryColor);
            // }}
          >
            <ColorPickerIcon />
          </div>
        </div>
        <div className="flex items-center justify-between py-1 border-b-[1px] border-[#CCCCCC]">
          <span className="text-sm">Song Title</span>
          <div
            style={{ backgroundColor: `black` }}
            className="h-12 w-20 flex items-center justify-center border-[3px] border-[#E1E1E1] rounded-lg cursor-pointer"
            // onClick={() => {
            //   handleAlbumColor(primaryColor);
            // }}
          >
            <ColorPickerIcon />
          </div>
        </div>
        <div className="flex items-center justify-between py-1 border-b-[1px] border-[#CCCCCC]">
          <span className="text-sm">Description</span>
          <div
            style={{ backgroundColor: `black` }}
            className="h-12 w-20 flex items-center justify-center border-[3px] border-[#E1E1E1] rounded-lg cursor-pointer"
            // onClick={() => {
            //   handleAlbumColor(primaryColor);
            // }}
          >
            <ColorPickerIcon />
          </div>
        </div>
        <div className="py-1">
          <span className="text-sm">Select Font</span>
        </div>
        <select
          name="SelectFont"
          id="SelectFont"
          value={'default'}
          className="border-[1px] border-[#CCCCCC] px-2 h-12 rounded-xl outline-none text-sm"
        >
          <option value="default">Select a font family</option>
          <option value="mulish">mulish</option>
          <option value="times new roman">times new roman</option>
          <option value="chiller">chiller</option>
        </select>
      </div>
    </div>
  );
};

export default Theme;
