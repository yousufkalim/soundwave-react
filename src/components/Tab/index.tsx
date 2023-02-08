import React, { FC } from 'react';
import { ReactComponent as AddIcon } from '../../assets/Plus.svg';
import { ReactComponent as MinusIcon } from '../../assets/minus.svg';

interface tabComponentProps {
  onClick: () => void;
  heading: string;
  open: boolean;
  active: boolean;
}

const Tab: FC<tabComponentProps> = ({ onClick, heading, open, active }) => {
  return (
    <div
      className={
        active
          ? 'bg-[#F9F9F9] cursor-pointer flex items-center justify-between px-4 h-14 rounded-xl border-[1px] border-[#D9D9D9] font-semibold'
          : 'cursor-pointer flex items-center justify-between px-4 h-14 rounded-xl border-[1px] border-[#D9D9D9] font-semibold'
      }
      onClick={onClick}
    >
      <span className={open ? 'text-[14px]' : 'text-[14px] text-[#75746f]'}>{heading}</span>
      {open ? (
        <MinusIcon className={active ? 'text-black' : 'text-[#75746f]'} />
      ) : (
        <AddIcon className={active ? 'text-black' : 'text-[#75746f]'} />
      )}
    </div>
  );
};

export default Tab;
