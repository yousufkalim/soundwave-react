import React, { FC } from 'react';

const index: FC = () => {
  return (
    <ul className="flex justify-between">
      <li className="flex-col bg-gradient-to-r from-red-500/10 to-purple-500/10 font-semibold h-16 text-white w-[32%] flex items-center justify-center border-solid border-4 border-[#fff] rounded-xl cursor-pointer shadow-md hover:border-gray-200 hover:shadow-lg">
        <span className="text-[#919B9B] text-[11px]">$49.00</span>
        <span className="text-[#919B9B] text-[11px]">No Frame(Poster Only)</span>
      </li>
      <li className="flex-col bg-gradient-to-r from-red-500/10 to-purple-500/10 font-semibold h-16 text-white w-[32%] flex items-center justify-center border-solid border-4 border-[#fff] rounded-xl cursor-pointer shadow-md hover:border-gray-200 hover:shadow-lg">
        <span className="text-[#919B9B] text-[11px]">$118.00</span>
        <span className="text-[#919B9B] text-[11px]">Black Gallery Frame</span>
      </li>
      <li className="flex-col bg-gradient-to-r from-red-500/10 to-purple-500/10 font-semibold h-16 text-white w-[32%] flex items-center justify-center border-solid border-4 border-[#fff] rounded-xl cursor-pointer shadow-md hover:border-gray-200 hover:shadow-lg">
        <span className="text-[#919B9B] text-[11px]">$118.00</span>
        <span className="text-[#919B9B] text-[11px]">White Gallery Frame</span>
      </li>
    </ul>
  );
};

export default index;
