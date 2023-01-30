import React, { useEffect, FC } from 'react';
interface ImageWithPrimaryColorProps {
  imageUrl?: string;
  primaryColor?: string | null;
  setPrimaryColor: (value: string) => void;
}

const ImageWithPrimaryColor: FC<ImageWithPrimaryColorProps> = ({
  imageUrl,
  primaryColor,
  setPrimaryColor,
}) => {
  useEffect(() => {
    if (imageUrl) {
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

  const componentToHex = (color: number): string => {
    const hex = color.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };

  const rgbToHex = (r: number, g: number, b: number): string => {
    return componentToHex(r) + componentToHex(g) + componentToHex(b);
  };
  console.log('---->', primaryColor);
  return (
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    <div style={{ backgroundColor: `${primaryColor}` }}>
      <div className={primaryColor ? `${primaryColor} w-5 h-5` : ''}></div>
      <img src={imageUrl} alt="img" />
      {primaryColor && (
        <div className={`${primaryColor}`}>The primary color of the image is: {primaryColor}</div>
      )}
    </div>
  );
};

export default ImageWithPrimaryColor;
