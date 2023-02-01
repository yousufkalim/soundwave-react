import React, { FC } from 'react';
import { ReactComponent as AddIcon } from '../../assets/Plus.svg';
import { ReactComponent as MinusIcon } from '../../assets/minus.svg';

interface tabComponentProps {
  onClick: () => void;
  heading: string;
  open: boolean;
}

const Tab: FC<tabComponentProps> = ({ onClick, heading, open }) => {
  return (
    <div
      className="cursor-pointer flex items-center justify-between px-4 w-full h-14 rounded-xl bg-gradient-to-r from-pink-500/10 to-purple-500/10"
      onClick={onClick}
    >
      <span className={open ? 'text-[14px] text-black' : 'text-[14px] text-[#424240]'}>
        {heading}
      </span>
      {open ? <MinusIcon /> : <AddIcon />}
    </div>
  );
};

export default Tab;
