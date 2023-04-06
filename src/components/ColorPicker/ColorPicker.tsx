import React, { FC, useRef, useState } from 'react';
import GradientPicker from 'react-best-gradient-color-picker';
import { ReactComponent as ColorPickerIcon } from '../../assets/colorPickerIcon.svg';
import { useOnClickOutside } from '../../hooks/useClickOutSide';

interface IColorPickerProps {
  name: string;
  value: string;
  title: string;
  getSetColor: (currentColor: string, fieldName: string) => void;
}

const ColorPicker: FC<IColorPickerProps> = ({ name, title, value, getSetColor }) => {
  const [open, setOpen] = useState<boolean>(false);
  // const { setSolid, setGradient } = useColorPicker(color, setColor);

  const colorPickerRef = useRef<HTMLDivElement>(null);

  const handleClickOutSide = (): void => {
    setOpen(false);
  };

  useOnClickOutside(colorPickerRef, handleClickOutSide);

  const handleOpenColorPicker = (): void => {
    setOpen(true);
  };

  const handleChangeColor = (color: string): void => {
    getSetColor(color, name);
  };

  return (
    <>
      <div className="flex relative items-center justify-between py-2 border-b-[1px] border-[#CCCCCC]">
        <span className="text-[12px]">{title}</span>
        <div
          style={{ background: value }}
          className="h-10 w-16 flex items-center justify-center border-[3px] border-[#bebdbd] rounded-lg cursor-pointer"
          onClick={handleOpenColorPicker}
        >
          <ColorPickerIcon />
        </div>
        {open && (
          <div
            ref={colorPickerRef}
            className="absolute w-auto z-50 top-[0.5rem] sm:right-[5rem] right-[4.5rem] bg-gray-100 p-1 shadow-2xl shadow-[#BAB8B8] border-solid border-2 border-gray-300 rounded-lg"
          >
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
              value={value}
              onChange={handleChangeColor}
              width={270}
              height={120}
              direction="vertical"
              gradient={'linear-gradient(90deg, #ff0000 0%, #0000ff 100%)'}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default ColorPicker;
