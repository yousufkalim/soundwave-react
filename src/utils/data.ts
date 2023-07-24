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
  '12 X 18': { withFrame: '15.5rem', withoutFrame: '13rem' },
  '16 X 20': { withFrame: '20rem', withoutFrame: '17rem' },
  '18 X 24': { withFrame: '23.5rem', withoutFrame: '19rem' },
  '20 X 28': { withFrame: '26.5rem', withoutFrame: '21rem' },
  '24 X 36': { withFrame: '30rem', withoutFrame: '25rem' },
  '28 X 40': { withFrame: '35rem', withoutFrame: '30rem' },
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
  '12 X 18': '50px',
  '16 X 20': '60px',
  '18 X 24': '70px',
  '20 X 28': '80px',
  '24 X 36': '90px',
  '28 X 40': '100px',
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
    'overflow-hidden scale-[7%] absolute xs:scale-[7%] msm:scale-[8%] sm:scale-[8%] md:scale-[10%] lg:scale-[10%] sxl:scale-[10%] 2xl:scale-[11%]',
  '16 X 20':
    'overflow-hidden scale-[6%] absolute xs:scale-[6%] msm:scale-[7%] sm:scale-[8%] md:scale-[8%] lg:scale-[8%] sxl:scale-[8%] 2xl:scale-[9.5%]',
  '18 X 24':
    'overflow-hidden scale-[4.5%] absolute xs:scale-[6%] msm:scale-[6.5%] sm:scale-[7%] md:scale-[7%] lg:scale-[7%] sxl:scale-[8%] 2xl:scale-[8%]',
  '20 X 28':
    'overflow-hidden scale-[4.5%] absolute xs:scale-[5%] msm:scale-[5.5%] sm:scale-[6%] md:scale-[6%] lg:scale-[6.5%] sxl:scale-[7%] 2xl:scale-[7%]',
  '24 X 36':
    'overflow-hidden scale-[3.7%] absolute xs:scale-[4%] msm:scale-[4.1%] sm:scale-[4.5%] md:scale-[5%] lg:scale-[5%] sxl:scale-[5.5%] 2xl:scale-[5.5%]',
  '28 X 40':
    'overflow-hidden scale-[3.4%] absolute xs:scale-[3.5%] msm:scale-[3.6%] sm:scale-[3.8%] md:scale-[4.5%] lg:scale-[4.5%] sxl:scale-[4.7%] 2xl:scale-[5%]',
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
  '12 X 18': '8px solid white',
  '16 X 20': '10px solid white',
  '18 X 24': '12px solid white',
  '20 X 28': '14px solid white',
  '24 X 36': '16px solid white',
  '28 X 40': '18px solid white',
};

// export const singerNameBorderWidthTemplate3: Record<string, string> = {
//   '12 X 18': '1.8px',
//   '16 X 20': '1.8px',
//   '18 X 24': '2.5px',
//   '20 X 28': '2.5px',
//   '24 X 36': '2.5px',
//   '28 X 40': '3px',
// };
export const singerNamePaddingTemplate3: Record<string, string> = {
  '12 X 18': '10px 20px',
  '16 X 20': '10px 20px',
  '18 X 24': '10px 20px',
  '20 X 28': '10px 25px',
  '24 X 36': '10px 30px',
  '28 X 40': '10px 35px',
};

export const posterHeigth: Record<string, string> = {
  '12 X 18': '5409px',
  '16 X 20': '6000px',
  '18 X 24': '7181px',
  '20 X 28': '8362px',
  '24 X 36': '10724px',
  '28 X 40': '11906px',
};

export const posterWidth: Record<string, string> = {
  '12 X 18': '3638px',
  '16 X 20': '4819px',
  '18 X 24': '5409px',
  '20 X 28': '6000px',
  '24 X 36': '7181px',
  '28 X 40': '8362px',
};

export const borderWidthTemplate4: Record<string, string> = {
  '12 X 18': '8px solid white',
  '16 X 20': '14px solid white',
  '18 X 24': '15px solid white',
  '20 X 28': '18px solid white',
  '24 X 36': '24px solid white',
  '28 X 40': '29px solid white',
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
