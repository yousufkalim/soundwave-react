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

  // const handleShowColorPicker = (): void => {
  //   setShowColorPicker(!showColorPicker);
  // };
  // const handleColor = (colorSetting: string): void => {
  //   switch (colorSetting) {
  //     case 'background':
  //       setPosterColor(!posterColor);
  //       break;
  //     case 'wave':
  //       setSoundWaveColor(!soundWaveColor);
  //       break;
  //     case 'title':
  //       setSongTitleColor(!songTitleColor);
  //       break;
  //     default:
  //       break;
  //   }
  // };
  return (
    <div>
      {/* <span className="text-sm">Poster Box Color</span> */}
      {/* <div className="flex justify-between">
        <div
          style={{ backgroundColor: `${primaryColor}` }}
          onClick={() => {
            handleAlbumColor(primaryColor);
          }}
          className="text-[12px] font-semibold h-12 text-white w-[31%] flex items-center justify-center border-solid border-2 border-[#E1E1E1] rounded-lg cursor-pointer"
        >
          Album Color
        </div>
        <div
          style={{ backgroundColor: '#D3D3D3' }}
          onClick={() => {
            handleAlbumColor('#D3D3D3');
          }}
          className="text-[12px] font-semibold h-12 text-white w-[31%] flex items-center justify-center border-solid border-2 border-[#E1E1E1] rounded-lg cursor-pointer"
        >
          Neutral
        </div>
        <div
          // ref={ref}
          onClick={handleShowColorPicker}
          className="h-12 w-[31%] flex items-center justify-center  cursor-pointer"
        >
          <PickerImage />
        </div>
      </div> */}
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

        {/* <div className="flex items-center justify-between py-1 border-b-[1px] border-[#CCCCCC]">
          <span className="text-sm">Poster Box Colour</span>
          <div
            style={{ backgroundColor: `black` }}
            className="h-12 w-20 flex items-center justify-center border-[3px] border-[#E1E1E1] rounded-lg cursor-pointer"
            onClick={() => {
              handleAlbumColor(primaryColor);
            }}
          >
            <ColorPickerIcon />
          </div>
        </div>
        <div className="flex items-center justify-between py-1 border-b-[1px] border-[#CCCCCC]">
          <span className="text-sm">Background</span>
          <div
            style={{ backgroundColor: `black` }}
            className="h-12 w-20 flex items-center justify-center border-[3px] border-[#E1E1E1] rounded-lg cursor-pointer"
            onClick={() => {
              handleAlbumColor(primaryColor);
            }}
          >
            <ColorPickerIcon />
          </div>
        </div>
        <div className="flex items-center justify-between py-1 border-b-[1px] border-[#CCCCCC]">
          <span className="text-sm">Soundwave and Name Color</span>
          <div
            style={{ backgroundColor: `black` }}
            className="h-12 w-20 flex items-center justify-center border-[3px] border-[#E1E1E1] rounded-lg cursor-pointer"
            onClick={() => {
              handleAlbumColor(primaryColor);
            }}
          >
            <ColorPickerIcon />
          </div>
        </div>
        <div className="flex items-center justify-between py-1 border-b-[1px] border-[#CCCCCC]">
          <span className="text-sm">Song Title</span>
          <div
            style={{ backgroundColor: `black` }}
            className="h-12 w-20 flex items-center justify-center border-[3px] border-[#E1E1E1] rounded-lg cursor-pointer"
            onClick={() => {
              handleAlbumColor(primaryColor);
            }}
          >
            <ColorPickerIcon />
          </div>
        </div>
        <div className="flex items-center justify-between py-1 border-b-[1px] border-[#CCCCCC]">
          <span className="text-sm">Description</span>
          <div
            style={{ backgroundColor: `black` }}
            className="h-12 w-20 flex items-center justify-center border-[3px] border-[#E1E1E1] rounded-lg cursor-pointer"
            onClick={() => {
              handleAlbumColor(primaryColor);
            }}
          >
            <ColorPickerIcon />
          </div>

        </div> */}

        <div className="py-1">
          <span className="text-sm">Select Font</span>
        </div>
        <select
          name="SelectFont"
          id="SelectFont"
          value={'default'}
          className="border-[1px] border-[#CCCCCC] px-2 h-12 rounded-xl outline-none text-sm"
        >
          <option value="default">Select a font family</option>
          <option value="mulish">mulish</option>
          <option value="times new roman">times new roman</option>
          <option value="chiller">chiller</option>
        </select>
      </div>
    </div>
  );
};

export default Theme;
