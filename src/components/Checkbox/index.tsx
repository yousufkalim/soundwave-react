import React, { FC } from 'react';
import { ReactComponent as Moon } from '../../assets/Moon.svg';
import { ReactComponent as Sun } from '../../assets/Light.svg';
interface SwitchComponentProps {
  checked: boolean;
  onChange: () => void;
}
const Switch: FC<SwitchComponentProps> = ({ checked, onChange }) => {
  const Icon = checked ? <Moon className="w-3" /> : <Sun className="w-4" />;
  return (
    <label className="relative inline-flex items-center mr-5 cursor-pointer">
      <input type="checkbox" className="sr-only peer" checked={checked} onChange={onChange} />
      <div
        className="flex items-center justify-end peer-checked:justify-start
        px-1 w-12 h-6 bg-gray-200 rounded-full dark:bg-black peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white
          peer-checked:after:bg-gradient-to-r peer-checked:after:from-[#FC3853] peer-checked:after:to-[#A72EC9]
          after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-white peer-checked:border"
      >
        <span>{Icon}</span>
      </div>
    </label>
  );
};

export default Switch;
