import React, { FC } from 'react';

interface ThemeBtnBoxProps {
  selectedSection: string;
  handleButtonClick: (value: string) => void;
}

const ThemeBtnBox: FC<ThemeBtnBoxProps> = ({ selectedSection, handleButtonClick }) => {
  return (
    <div className="flex items-center justify-between w-full my-3">
      <button
        className={
          selectedSection === 'templates'
            ? 'bg-black h-9 rounded-lg cursor-pointer text-white w-[42%] text-md font-semibold'
            : 'bg-transparent h-9 rounded-lg cursor-pointer text-[#363535] w-[42%] text-md font-semibold'
        }
        onClick={() => {
          handleButtonClick('templates');
        }}
      >
        Templates
      </button>
      <button
        className={
          selectedSection === 'themeCustomization'
            ? 'bg-black h-9 rounded-lg cursor-pointer text-white w-[42%] text-md font-semibold'
            : 'bg-transparent h-9 rounded-lg cursor-pointer text-[#363535] w-[42%] text-md font-semibold'
        }
        onClick={() => {
          handleButtonClick('themeCustomization');
        }}
      >
        Customization
      </button>
    </div>
  );
};

export default ThemeBtnBox;
