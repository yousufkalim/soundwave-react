import React, { FC } from 'react';

interface ThemeBtnBoxProps {
  btn1Text: string;
  btn2Text: string;
  selectedSection: string;
  handleButtonClick: (value: string) => void;
}

const ThemeBtnBox: FC<ThemeBtnBoxProps> = ({
  btn1Text,
  btn2Text,
  selectedSection,
  handleButtonClick,
}) => {
  return (
    <div className="flex items-center justify-between w-full my-3">
      <button
        className={
          selectedSection === 'btn1'
            ? 'bg-black h-9 rounded-lg cursor-pointer text-white w-[42%] text-md font-semibold'
            : 'bg-transparent h-9 rounded-lg cursor-pointer text-[#363535] w-[42%] text-md font-semibold'
        }
        onClick={() => {
          handleButtonClick('btn1');
        }}
      >
        {btn1Text}
      </button>
      <button
        className={
          selectedSection === 'btn2'
            ? 'bg-black h-9 rounded-lg cursor-pointer text-white w-[42%] text-md font-semibold'
            : 'bg-transparent h-9 rounded-lg cursor-pointer text-[#363535] w-[42%] text-md font-semibold'
        }
        onClick={() => {
          handleButtonClick('btn2');
        }}
      >
        {btn2Text}
      </button>
    </div>
  );
};

export default ThemeBtnBox;
