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
            ? 'bg-gradient-to-r from-[#FC3853] to-[#A72EC9] h-9 rounded-lg cursor-pointer text-white w-[47%] text-md'
            : 'bg-transparent h-9 rounded-lg cursor-pointer text-[#363535] w-[47%] text-md'
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
            ? 'bg-gradient-to-r from-[#FC3853] to-[#A72EC9] h-9 rounded-lg cursor-pointer text-white w-[47%] text-md'
            : 'bg-transparent h-9 rounded-lg cursor-pointer text-[#363535] w-[47%] text-md'
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
