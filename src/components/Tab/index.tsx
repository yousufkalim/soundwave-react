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
      className="cursor-pointer flex items-center justify-between px-4 h-14 rounded-xl border-[1px] border-[#D9D9D9] font-semibold"
      onClick={onClick}
    >
      <span className={open ? 'text-[14px]' : 'text-[14px] text-[#75746f]'}>{heading}</span>
      {open ? <MinusIcon /> : <AddIcon />}
    </div>
  );
};

export default Tab;
