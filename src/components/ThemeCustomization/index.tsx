import React, { FC } from 'react';
import ColorPicker from '../ColorPicker/ColorPicker';

interface ThemeProps {
  boxColor: string;
  posterColor: string;
  soundWaveColor: string;
  songTitleColor: string;
  descriptionColor: string;
  soundWaveNameColor: string;
  selectedTemplate: string;
  getSetColor: (currentColor: string, fieldName: string) => void;
}

const Theme: FC<ThemeProps> = ({
  getSetColor,
  boxColor,
  posterColor,
  soundWaveColor,
  songTitleColor,
  descriptionColor,
  soundWaveNameColor,
  selectedTemplate,
}) => {
  const colorsArray = [
    {
      title: 'Poster box colour',
      name: 'boxColor',
      value: boxColor,
      enabled: selectedTemplate === 'template2' || selectedTemplate === 'template3',
    },
    {
      title: 'Background',
      name: 'posterColor',
      value: posterColor,
      enabled: true,
    },
    {
      title: 'Soundwave Name Color',
      name: 'soundWaveNameColor',
      value: soundWaveNameColor,
      enabled: true,
    },
    {
      title: 'Soundwave Color',
      name: 'soundWaveColor',
      value: soundWaveColor,
      enabled: true,
    },
    {
      title: 'Song Title',
      name: 'songTitleColor',
      value: songTitleColor,
      enabled: true,
    },
    {
      title: 'Description',
      name: 'descriptionColor',
      value: descriptionColor,
      enabled: true,
    },
  ];


  return (
    <div>
      <div className="flex justify-start flex-col">
        {colorsArray?.map(({ name, value, title, enabled }) => {
          if (enabled) {
            return (
              <ColorPicker
                key={name}
                name={name}
                value={value}
                title={title}
                getSetColor={getSetColor}
              />
            );
          }
          return null;
        })}
        <div className="flex items-center justify-between py-2 border-b-[1px] border-[#CCCCCC]">
          <span className="text-[12px]">Select Font</span>
          <select
            name="SelectFont"
            id="SelectFont"
            value={'default'}
            className="border-[1px] border-[#CCCCCC] px-3 h-12 rounded-2xl outline-none text-[12px] font-medium"
          >
            <option value="default">Select a font family</option>
            <option value="mulish">mulish</option>
            <option value="times new roman">times new roman</option>
            <option value="chiller">chiller</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Theme;
