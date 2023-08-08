import { pricingArrayProps } from '../types/index';

export const fontFamilyArray = [
  'Proxima-Nova-italic',
  'Aemstel-Regular',
  'Montserrat',
  'Montserrat-ExtraBold',
  'Morganite',
  'Blacksword',
  'Old Standard TT',
  'Roboto',
  'Josefin Slab',
  'Julee',
  'Roustel',
  'Aksentuasi',
  'AspectRatio',
  'BronovaBold',
  'Edensor',
  'FoxliteScript',
];

export const PricingArray: pricingArrayProps = {
  posterSizePricing: [
    {
      price: 59.99,
      inch: '12 X 18',
      centimeter: '30 X 45',
    },
    {
      price: 69.99,
      inch: '16 X 20',
      centimeter: '40 X 50',
    },
    {
      price: 74.99,
      inch: '18 X 24',
      centimeter: '45 X 60',
    },
    {
      price: 79.99,
      inch: '20 X 28',
      centimeter: '50 X 70',
    },
    {
      price: 89.99,
      inch: '24 X 36',
      centimeter: '60 X 90',
    },
    {
      price: 114.99,
      inch: '28 X 40',
      centimeter: '70 X 100',
    },
  ],
  posterTypePricing: [
    {
      slimCanvasPrice: 79.99,
      thickCanvasPrice: 89.99,
      withFramePrice: 39.99,
      inch: '12 X 18',
      centimeter: '30 X 45',
    },
    {
      slimCanvasPrice: 89.99,
      thickCanvasPrice: 99.99,
      withFramePrice: 49.99,
      inch: '16 X 20',
      centimeter: '40 X 50',
    },
    {
      slimCanvasPrice: 99.99,
      thickCanvasPrice: 109.99,
      withFramePrice: 64.99,
      inch: '18 X 24',
      centimeter: '45 X 60',
    },
    {
      slimCanvasPrice: 129.99,
      thickCanvasPrice: 149.99,
      withFramePrice: 99.99,
      inch: '20 X 28',
      centimeter: '50 X 70',
    },
    {
      slimCanvasPrice: 159.99,
      thickCanvasPrice: 199.99,
      withFramePrice: 109.99,
      inch: '24 X 36',
      centimeter: '60 X 90',
    },
    {
      slimCanvasPrice: 199.99,
      thickCanvasPrice: 249.99,
      withFramePrice: 134.99,
      inch: '28 X 40',
      centimeter: '70 X 100',
    },
  ],
};
interface PosterSize {
  withFrame: string;
  withoutFrame: string;
}

export const posterSizes: Record<string, PosterSize> = {
  '12 X 18': { withFrame: '4.5rem', withoutFrame: '3.8rem' },
  '16 X 20': { withFrame: '5.7rem', withoutFrame: '4.9rem' },
  '18 X 24': { withFrame: '6.4rem', withoutFrame: '5.6rem' },
  '20 X 28': { withFrame: '7rem', withoutFrame: '6rem' },
  '24 X 36': { withFrame: '8.3rem', withoutFrame: '6.9rem' },
  '28 X 40': { withFrame: '9.5rem', withoutFrame: '7.8rem' },
};

export const sizeScales: Record<string, string[]> = {
  '12 X 18': ['30%', '35%', '35%', '35%', '45%', '45%', '50%', '50%'],
  '16 X 20': ['23%', '30%', '30%', '30%', '35%', '40%', '40%', '40%'],
  '18 X 24': ['20%', '25%', '25%', '25%', '30%', '30%', '30%', '35%'],
  '20 X 28': ['18%', '20%', '22%', '25%', '25%', '25%', '25%', '30%'],
  '24 X 36': ['15%', '15%', '18%', '20%', '22%', '22%', '22%', '25%'],
  '28 X 40': ['13%', '15%', '15%', '18%', '20%', '22%', '22%', '22%'],
};

export const posterSizeToBorderWidth: Record<string, string> = {
  '12 X 18': '12px',
  '16 X 20': '14px',
  '18 X 24': '16px',
  '20 X 28': '20px',
  '24 X 36': '26px',
  '28 X 40': '30px',
};

export const sizeValues: Record<string, string> = {
  '12 X 18': '1218',
  '16 X 20': '1620',
  '18 X 24': '1824',
  '20 X 28': '2028',
  '24 X 36': '2436',
  '28 X 40': '2840',
};

export const posterMainDiv: Record<string, string> = {
  '12 X 18':
    'overflow-hidden scale-[30%] absolute xs:scale-[35%] msm:scale-[35%] sm:scale-[35%] md:scale-[45%] lg:scale-[45%] sxl:scale-[40%] 2xl:scale-[50%]',
  '16 X 20':
    'overflow-hidden scale-[23%] absolute xs:scale-[30%] msm:scale-[30%] sm:scale-[30%] md:scale-[35%] lg:scale-[40%] sxl:scale-[35%] 2xl:scale-[40%]',
  '18 X 24':
    'overflow-hidden scale-[20%] absolute xs:scale-[25%] msm:scale-[25%] sm:scale-[25%] md:scale-[30%] lg:scale-[30%] sxl:scale-[30%] 2xl:scale-[35%]',
  '20 X 28':
    'overflow-hidden scale-[18%] absolute xs:scale-[20%] msm:scale-[22%] sm:scale-[25%] md:scale-[25%] lg:scale-[25%] sxl:scale-[25%] 2xl:scale-[30%]',
  '24 X 36':
    'overflow-hidden scale-[15%] absolute xs:scale-[15%] msm:scale-[18%] sm:scale-[20%] md:scale-[22%] lg:scale-[22%] sxl:scale-[22%] 2xl:scale-[25%]',
  '28 X 40':
    'overflow-hidden scale-[13%] absolute xs:scale-[15%] msm:scale-[15%] sm:scale-[18%] md:scale-[20%] lg:scale-[20%] sxl:scale-[20%] 2xl:scale-[22%]',
};

export const posterMainFooterDiv: Record<string, string> = {
  '12 X 18': `scale-[32%] xs:scale-[32%] msm:scale-[37%] sm:scale-[37%] md:scale-[45%] lg:scale-[45%] sxl:scale-[45%] 2xl:scale-[50%] bg-white h-[9%] shadow-xl shadow-gray-600 flex items-center justify-between px-5 absolute sm:bottom-[-0.7rem] bottom-1`,
  '16 X 20': `scale-[35%] xs:scale-[36%] msm:scale-[42%] sm:scale-[48%] md:scale-[48%] lg:scale-[47%] sxl:scale-[49%] 2xl:scale-[56%] bg-white h-[9%] shadow-xl shadow-gray-600 flex items-center justify-between px-5 absolute sm:bottom-[-0.7rem] bottom-1`,
  '18 X 24': `scale-[30%] xs:scale-[40%] msm:scale-[44%] sm:scale-[47%] md:scale-[47%] lg:scale-[47%] sxl:scale-[53%] 2xl:scale-[54%] bg-white h-[9%] shadow-xl shadow-gray-600 flex items-center justify-between px-5 absolute sm:bottom-[-0.7rem] bottom-1`,
  '20 X 28': `scale-[33%] xs:scale-[37%] msm:scale-[41%] sm:scale-[45%] md:scale-[45%] lg:scale-[49%] sxl:scale-[53%] 2xl:scale-[53%] bg-white h-[9%] shadow-xl shadow-gray-600 flex items-center justify-between px-5 absolute sm:bottom-[-0.7rem] bottom-1`,
  '24 X 36': `scale-[33%] xs:scale-[36%] msm:scale-[37%] sm:scale-[40%] md:scale-[45%] lg:scale-[45%] sxl:scale-[49%] 2xl:scale-[49%] bg-white h-[9%] shadow-xl shadow-gray-600 flex items-center justify-between px-5 absolute sm:bottom-[-0.7rem] bottom-1`,
  '28 X 40': `scale-[36%] xs:scale-[37%] msm:scale-[38%] sm:scale-[40%] md:scale-[46%] lg:scale-[47%] sxl:scale-[50%] 2xl:scale-[52%] bg-white h-[9%] shadow-xl shadow-gray-600 flex items-center justify-between px-5 absolute sm:bottom-[-0.7rem] bottom-1`,
};

export const singerNameBorderTemplate3: Record<string, string> = {
  '12 X 18': '1.8px solid white',
  '16 X 20': '1.8px solid white',
  '18 X 24': '2.5px solid white',
  '20 X 28': '2.5px solid white',
  '24 X 36': '2.5px solid white',
  '28 X 40': '3px solid white',
};

// export const singerNameBorderWidthTemplate3: Record<string, string> = {
//   '12 X 18': '1.8px',
//   '16 X 20': '1.8px',
//   '18 X 24': '2.5px',
//   '20 X 28': '2.5px',
//   '24 X 36': '2.5px',
//   '28 X 40': '3px',
// };
// export const singerNamePaddingTemplate3: Record<string, string> = {
//   '12 X 18': '10px 20px',
//   '16 X 20': '10px 20px',
//   '18 X 24': '10px 20px',
//   '20 X 28': '10px 25px',
//   '24 X 36': '10px 30px',
//   '28 X 40': '10px 35px',
// };

export const posterHeigth: Record<string, string> = {
  '12 X 18': '1440px',
  '16 X 20': '1600px',
  '18 X 24': '1960px',
  '20 X 28': '2156px',
  '24 X 36': '2700px',
  '28 X 40': '3000px',
};

export const posterWidth: Record<string, string> = {
  '12 X 18': '960px',
  '16 X 20': '1280px',
  '18 X 24': '1470px',
  '20 X 28': '1540px',
  '24 X 36': '1800px',
  '28 X 40': '2100px',
};
export const posterWidthCm: Record<string, string> = {
  '12 X 18': '30.81',
  '16 X 20': '40.81',
  '18 X 24': '45.81',
  '20 X 28': '50.8',
  '24 X 36': '60.8',
  '28 X 40': '70.81',
};
export const posterHeightCm: Record<string, string> = {
  '12 X 18': '45.81',
  '16 X 20': '50.8',
  '18 X 24': '60.8',
  '20 X 28': '70.81',
  '24 X 36': '90.81',
  '28 X 40': '100.8',
};

export const borderWidthTemplate4: Record<string, string> = {
  '12 X 18': '2.99px solid white',
  '16 X 20': '2.99px solid white',
  '18 X 24': '3.2px solid white',
  '20 X 28': '3.5px solid white',
  '24 X 36': '4px solid white',
  '28 X 40': '4.5px solid white',
};

export const descPaddingTopTemplate4: Record<string, string> = {
  '12 X 18': '8%',
  '16 X 20': '6.5%',
  '18 X 24': '7%',
  '20 X 28': '7%',
  '24 X 36': '8%',
  '28 X 40': '8%',
};

export const framesChange: Record<string, string> = {
  'Black Wooden Frame': '#0a0705',
  'Natural Wooden Frame': '#caab94',
  'White Wooden Frame': '#E8E8E8',
  'Black Metal Frame': '#0a0705',
};

export const steps = ['Album', 'Description', 'Theme', 'Print', 'Size'];
