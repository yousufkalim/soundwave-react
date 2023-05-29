import React, { FC, useEffect } from 'react';
import ColorPicker from '../ColorPicker/ColorPicker';
import WebFont from 'webfontloader';
import { fontFamilyArray } from '../../utils/data';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { IFontSize, IPosterSize } from '../../types/index';
import FontChanger from '../FontChanger/FontChanger';
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
  fontSize: IFontSize;
  setFontSize: ({ descriptionSize, singerNameSize, albumNameSize }: IFontSize) => void;
  posterSize: IPosterSize;
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
  fontSize,
  setFontSize,
  posterSize,
}) => {
  const colorsArray = [
    {
      title: 'Box',
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
      title: 'Song Titles',
      name: 'soundWaveNameColor',
      value: soundWaveNameColor,
      enabled: true,
    },
    {
      title: 'Soundwaves',
      name: 'soundWaveColor',
      value: soundWaveColor,
      enabled: true,
    },
    {
      title: 'Album Title/Artist',
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

  const handleSelectFont = (event: SelectChangeEvent): void => {
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

  const handleAlbumNameFontSize = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setFontSize({ ...fontSize, albumNameSize: event.target.value });
  };

  const handleDescriptionFontSize = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setFontSize({ ...fontSize, descriptionSize: event.target.value });
  };

  const handleSingerNameFontSize = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setFontSize({ ...fontSize, singerNameSize: event.target.value });
  };

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
                hideControls={!(title === 'Box' || title === 'Background')}
                getSetColor={getSetColor}
              />
            );
          }
          return null;
        })}
        <div className="flex items-center justify-between py-1 border-b-[1px] border-[#CCCCCC]">
          <span className="text-[12px]">Select Font</span>
          <FormControl sx={{ m: 1, minWidth: 230 }}>
            <Select
              value={selectedFont ?? ''}
              onChange={handleSelectFont}
              displayEmpty
              style={{ fontFamily: selectedFont, borderRadius: '15px', fontSize: '13px' }}
              inputProps={{ 'aria-label': 'Without label' }}
            >
              <MenuItem value="">Select Font</MenuItem>
              {fontFamilyArray?.sort().map((font) => (
                <MenuItem key={font} value={font} style={{ fontFamily: font }}>
                  {font}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className="flex items-center justify-between py-5 border-b-[1px] border-[#CCCCCC]">
          <span className="text-[12px]">
            Title Font Size (
            {posterSize.value === '12 X 18'
              ? `${+fontSize.albumNameSize + 48}px`
              : posterSize.value === '16 X 20'
              ? `${+fontSize.albumNameSize + 64}px`
              : posterSize.value === '18 X 24'
              ? `${+fontSize.albumNameSize + 72}px`
              : posterSize.value === '20 X 28'
              ? `${+fontSize.albumNameSize + 80}px`
              : posterSize.value === '24 X 36'
              ? `${+fontSize.albumNameSize + 120}px`
              : posterSize.value === '28 X 40'
              ? `${+fontSize.albumNameSize + 128}px`
              : '32px'}
            )
          </span>
          <FontChanger
            id="albumName"
            name="albumName"
            min="-13"
            max="13"
            step="0.1"
            value={fontSize?.albumNameSize}
            onChange={handleAlbumNameFontSize}
          />
        </div>
        <div className="flex items-center justify-between py-5 border-b-[1px] border-[#CCCCCC]">
          <span className="text-[12px]">
            Description Font Size (
            {posterSize.value === '12 X 18'
              ? `${+fontSize?.descriptionSize + 14}px`
              : posterSize.value === '16 X 20'
              ? `${+fontSize?.descriptionSize + 16}px`
              : posterSize.value === '18 X 24'
              ? `${+fontSize?.descriptionSize + 18}px`
              : posterSize.value === '20 X 28'
              ? `${+fontSize?.descriptionSize + 20}px`
              : posterSize.value === '24 X 36'
              ? `${+fontSize?.descriptionSize + 24}px`
              : posterSize.value === '28 X 40'
              ? `${+fontSize?.descriptionSize + 28}px`
              : '14px'}
            )
          </span>
          <FontChanger
            id="description"
            name="description"
            min="-8"
            max="8"
            step="0.1"
            value={fontSize?.descriptionSize}
            onChange={handleDescriptionFontSize}
          />
        </div>
        {selectedTemplate === 'template2' ||
        selectedTemplate === 'template3' ||
        selectedTemplate === 'template4' ||
        selectedTemplate === 'template5' ? (
          <div className="flex items-center justify-between py-5">
            <span className="text-[12px]">
              Artist Font Size (
              {posterSize.value === '12 X 18'
                ? `${+fontSize?.singerNameSize + 14}px`
                : posterSize.value === '16 X 20'
                ? `${+fontSize?.singerNameSize + 16}px`
                : posterSize.value === '18 X 24'
                ? `${+fontSize?.singerNameSize + 18}px`
                : posterSize.value === '20 X 28'
                ? `${+fontSize?.singerNameSize + 20}px`
                : posterSize.value === '24 X 36'
                ? `${+fontSize?.singerNameSize + 22}px`
                : posterSize.value === '28 X 40'
                ? `${+fontSize?.singerNameSize + 24}px`
                : '14px'}
              )
            </span>
            <FontChanger
              id="singerName"
              name="singerName"
              min="-8"
              max="9"
              step="0.1"
              value={fontSize?.singerNameSize}
              onChange={handleSingerNameFontSize}
            />
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default Theme;
