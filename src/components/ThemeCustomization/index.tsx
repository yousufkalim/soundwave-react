import React, { FC, useEffect } from 'react';
import ColorPicker from '../ColorPicker/ColorPicker';
import WebFont from 'webfontloader';
import { fontFamilyArray } from '../../utils/data';
// import Spinner from '../Spinner/Spinner';
interface ThemeProps {
  boxColor: string;
  posterColor: string;
  soundWaveColor: string;
  songTitleColor: string;
  descriptionColor: string;
  soundWaveNameColor: string;
  selectedTemplate: string;
  getSetColor: (currentColor: string, fieldName: string) => void;
  selectedFont: string;
  setSelectedFont: (value: string) => void;
  setLoading: (value: boolean) => void;
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
  selectedFont,
  setSelectedFont,
  setLoading,
}) => {
  const colorsArray = [
    {
      title: 'Box Color',
      name: 'boxColor',
      value: boxColor,
      enabled: selectedTemplate === 'template1' || selectedTemplate === 'template2',
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

  // useEffect(() => {
  // eslint-disable-next-line @typescript-eslint/no-floating-promises
  // getFontData();
  // }, []);
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  // const getFontData = async () => {
  //   await fetch(
  //     'https://www.googleapis.com/webfonts/v1/webfonts?key=GOOGLE_API_KEY_REDACTED',
  //   )
  //     .then(async (response) => await response.json())
  //     .then((data: { items: Font[] }) => {
  //       setFontData(data.items);
  //     });
  // };

  const handleSelectFont = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    setSelectedFont(event.target.value);
  };
  useEffect(() => {
    if (selectedFont) {
      setLoading(true);
      WebFont.load({
        google: {
          families: [selectedFont],
        },
        active: () => {
          setLoading(false);
        },
      });
    }
  }, [selectedFont]);
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
            style={{ fontFamily: selectedFont }}
            value={selectedFont ?? ''}
            onChange={handleSelectFont}
            className="border-[1px] border-[#CCCCCC] px-3 h-12 rounded-2xl outline-none text-[12px] font-medium"
          >
            <option value="">Select a font</option>
            {fontFamilyArray?.map((font) => (
              <option key={font} value={font}>
                {font}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Theme;
