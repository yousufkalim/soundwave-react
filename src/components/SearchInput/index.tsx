/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useEffect, useRef, useState } from 'react';
import { useOnClickOutside } from '../../hooks/useClickOutSide';

interface SearchOption {
  label: string;
  id: string;
  singerName: string;
  photo: string;
}
interface SelectedAlbum {
  id: string;
  label: string;
  photo: string;
  singerName: string;
}
interface SearchInputProps {
  options: SearchOption[];
  value: string;
  placeholder: string;
  className: string;
  onChange: (value: string) => void;
  setSelectedAlbumId: (value: string) => void;
  handleSelectedAlbum: (value: SelectedAlbum) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({
  options,
  value,
  placeholder,
  onChange,
  className,
  setSelectedAlbumId,
  handleSelectedAlbum,
}) => {
  const autocomplete = useRef<HTMLDivElement>(null);
  // states
  const [optionsData, setOptionsData] = useState<SearchOption[]>([]);
  const [query, setQuery] = useState<string>(value);
  const [isShow, setIsShow] = useState<boolean>(false);

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleInputChange = (e: { target: HTMLInputElement }) => {
    const { value } = e.target;
    setQuery(value);
    onChange(value);
    const updatedOptions: SearchOption[] = !value
      ? []
      : [...options.filter((option) => option.label.toLowerCase().includes(value.toLowerCase()))];
    setOptionsData(updatedOptions);
  };

  const handleClickOutSide = () => {
    setIsShow(false);
  };
  useOnClickOutside(autocomplete, handleClickOutSide);

  const hilightSearchText = (text: string) => {
    const pattern = new RegExp('(' + query + ')', 'gi');
    const newText = text.replace(pattern, `<b>${query}</b>`);
    return `${newText.charAt(3).toUpperCase()}${newText.substring(4)}`;
  };

  const selectedOptionData = (text: string) => {
    setQuery(text);
    setIsShow(false);
    onChange(text);
  };

  useEffect(() => {
    setIsShow(optionsData.length !== 0);
  }, [optionsData]);

  return (
    <div ref={autocomplete} className={'relative w-full'}>
      <div className="relative bg-gradient-to-tr from-[#FC3853] to-[#A72EC9] p-[1px] rounded-xl">
        <input
          name="SearchInput-input"
          className="relative w-full h-12 text-black px-4 rounded-xl outline-none text-base"
          type="search"
          placeholder={placeholder}
          value={query}
          onChange={handleInputChange}
        />
      </div>
      {isShow && (
        <ul className="flex items-center justify-start flex-col mt-[.5rem] absolute bg-white w-full max-h-96 rounded top-11 z-[10] overflow-y-auto shadow-md">
          {optionsData.map((optionItem) => (
            <li
              className="flex items-center justify-start gap-3 cursor-pointer border-none w-full text-left bg-white py-4 px-2 hover:bg-[#e2e2e2]"
              onClick={() => {
                selectedOptionData(optionItem.label);
                setSelectedAlbumId(optionItem.id);
                handleSelectedAlbum(optionItem);
              }}
              key={optionItem.id}
            >
              <img src={optionItem.photo} className="object-cover rounded-full w-13 h-13 ml-2" />
              <div>
                <div
                  className="overflow-hidden text-ellipsis whitespace-nowrap"
                  dangerouslySetInnerHTML={{
                    __html: hilightSearchText(optionItem.label),
                  }}
                />

                <span>{optionItem.singerName}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchInput;
