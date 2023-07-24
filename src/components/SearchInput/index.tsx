/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useEffect, useRef, useState } from 'react';
import { useOnClickOutside } from '../../hooks/useClickOutSide';
import { SelectedAlbumProps } from '../../types/index';

interface SearchInputProps {
  options: SelectedAlbumProps[];
  value: string;
  placeholder: string;
  className: string;
  onChange: (value: string) => void;
  setSelectedAlbumId: (value: string) => void;
  handleSelectedAlbum: (value: SelectedAlbumProps) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({
  options,
  value,
  placeholder,
  onChange,
  setSelectedAlbumId,
  handleSelectedAlbum,
}) => {
  const autocomplete = useRef<HTMLDivElement>(null);
  // states
  const [optionsData, setOptionsData] = useState<SelectedAlbumProps[]>([]);
  // const [query, setQuery] = useState<string>(value);
  const [isShow, setIsShow] = useState<boolean>(false);

  // const hilightSearchText = (text: string) => {
  //   const pattern = new RegExp('(' + query + ')', 'gi');
  //   const newText = text.replace(pattern, `<b>${query}</b>`);
  //   return `${newText.charAt(3).toUpperCase()}${newText.substring(4)}`;
  // };

  const selectedOptionData = (text: string) => {
    // setQuery(text);
    setIsShow(false);
    onChange(text);
  };

  useEffect(() => {
    setIsShow(optionsData.length !== 0);
  }, [optionsData]);

  const liRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      liRef?.current?.scrollIntoView({ behavior: 'smooth' });
    }, 700);
    return () => {
      clearTimeout(timer);
    };
  }, [options]);

  const handleInputChange = (e: { target: HTMLInputElement }) => {
    onChange(e.target.value);
    setOptionsData(options);
  };

  const handleClickOutSide = () => {
    setIsShow(false);
  };

  useOnClickOutside(autocomplete, handleClickOutSide);

  return (
    <div ref={autocomplete} className={'relative w-full'}>
      <div className="border-[1px] border-[#454238] p-[1px] rounded-xl">
        <input
          name="SearchInput-input"
          className="relative w-full py-3 2xl:py-4 text-black px-4 rounded-xl outline-none text-[12px] 2xl:text-[13px] font-semibold placeholder:text-[#454238]"
          type="search"
          placeholder={placeholder}
          value={value}
          onChange={handleInputChange}
        />
      </div>
      {isShow && (
        <ul
          ref={liRef}
          id="hide_Scrollbar"
          className="md:pb-0 pb-[3rem] xs:pb-[3rem] flex items-center justify-start flex-col mt-[.5rem] absolute bg-white w-full max-h-96 rounded top-11 z-[10] overflow-y-scroll shadow-md overflow-x-hidden"
          // className="md:pb-0 pb-[3rem] xs:pb-[3rem] flex items-center justify-start flex-col mt-[.5rem] absolute bg-white w-full md:max-h-96 rounded top-11 z-[10] overflow-y-auto shadow-md overflow-x-hidden"
        >
          {optionsData.map((optionItem) => (
            <li
              className="flex items-center justify-start gap-3 cursor-pointer border-b-2 border-gray-100 w-full text-left bg-white py-3 2xl:py-4 px-2 hover:bg-[#e2e2e2]"
              onClick={() => {
                selectedOptionData(optionItem.label);
                setSelectedAlbumId(optionItem.id);
                handleSelectedAlbum(optionItem);
              }}
              key={optionItem.id}
            >
              <img
                src={optionItem.photo}
                className="object-cover rounded-full w-12 h-12 ml-2 2xl:w-13 2xl:h-13"
              />
              <div>
                <div className="overflow-hidden text-ellipsis whitespace-nowrap text-[14px] 2xl:text-[15px] font-semibold">
                  {optionItem.label}
                </div>
                <span className="text-[13px] 2xl:text-[14px]">{optionItem.singerName}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchInput;
