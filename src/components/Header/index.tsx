import React, { FC } from 'react';
import { ReactComponent as Logo } from '../../assets/Logo.svg';
import { ReactComponent as Profile } from '../../assets/Profile.svg';
const index: FC = () => {
  return (
    <div className="w-full h-20 bg-black flex items-center justify-between px-20">
      <Logo className="w-14" />
      <span className="text-white text-xl font-semibold">Create Your Own Design</span>
      <Profile className="w-14" />
    </div>
  );
};

export default index;
