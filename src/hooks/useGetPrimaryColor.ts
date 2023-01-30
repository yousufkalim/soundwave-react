/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useEffect } from 'react';
const componentToHex = (color: number): string => {
  const hex = color.toString(16);
  return hex.length === 1 ? '0' + hex : hex;
};

const rgbToHex = (r: number, g: number, b: number): string => {
  return componentToHex(r) + componentToHex(g) + componentToHex(b);
};
export const useGetPrimaryColor = (
  imageUrl?: string,
  setPrimaryColor?: (value: string) => void,
) => {
  useEffect(() => {
    if (imageUrl && setPrimaryColor) {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const img = new Image();
      if (ctx) {
        img.crossOrigin = 'anonymous';
        img.onload = () => {
          canvas.width = img.width;
          canvas.height = img.height;
          ctx.drawImage(img, 0, 0);
          const pixelData = ctx.getImageData(img.width / 2, img.height / 2, 1, 1).data;
          setPrimaryColor(`#${rgbToHex(pixelData[0], pixelData[1], pixelData[2])}`);
        };
      }
      img.src = imageUrl;
    }
  }, [imageUrl]);
};
