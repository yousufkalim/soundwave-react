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
  '12 X 18': { withFrame: '4rem', withoutFrame: '3.5rem' },
  '16 X 20': { withFrame: '5rem', withoutFrame: '4.5rem' },
  '18 X 24': { withFrame: '5.5rem', withoutFrame: '5rem' },
  '20 X 28': { withFrame: '6.5rem', withoutFrame: '5.5rem' },
  '24 X 36': { withFrame: '7.8rem', withoutFrame: '6.7rem' },
  '28 X 40': { withFrame: '9rem', withoutFrame: '7.5rem' },
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
    'overflow-hidden scale-[7%] absolute xs:scale-[9%] msm:scale-[10%] sm:scale-[10%] md:scale-[10%] lg:scale-[10%] sxl:scale-[10%] 2xl:scale-[11%]',
  '16 X 20':
    'overflow-hidden scale-[6%] absolute xs:scale-[6%] msm:scale-[7%] sm:scale-[8%] md:scale-[8%] lg:scale-[8%] sxl:scale-[8%] 2xl:scale-[9.5%]',
  '18 X 24':
    'overflow-hidden scale-[4.5%] absolute xs:scale-[6%] msm:scale-[6.5%] sm:scale-[7%] md:scale-[7%] lg:scale-[7%] sxl:scale-[8%] 2xl:scale-[8%]',
  '20 X 28':
    'overflow-hidden scale-[4.5%] absolute xs:scale-[5%] msm:scale-[5.5%] sm:scale-[6%] md:scale-[6%] lg:scale-[6.5%] sxl:scale-[7%] 2xl:scale-[7%]',
  '24 X 36':
    'overflow-hidden scale-[3.7%] absolute xs:scale-[4%] msm:scale-[4.5%] sm:scale-[4.5%] md:scale-[5%] lg:scale-[5%] sxl:scale-[5.5%] 2xl:scale-[5.5%]',
  '28 X 40':
    'overflow-hidden scale-[3.4%] absolute xs:scale-[3.9%] msm:scale-[4%] sm:scale-[4.3%] md:scale-[4.5%] lg:scale-[4.5%] sxl:scale-[4.7%] 2xl:scale-[5%]',
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

// export const posterHeigth: Record<string, string> = {
//   '12 X 18': '1300px',
//   '16 X 20': '1440px',
//   '18 X 24': '1740px',
//   '20 X 28': '2020px',
//   '24 X 36': '2600px',
//   '28 X 40': '2900px',
// };
// export const posterWidth: Record<string, string> = {
//   '12 X 18': '860px',
//   '16 X 20': '1150px',
//   '18 X 24': '1280px',
//   '20 X 28': '1440px',
//   '24 X 36': '1750px',
//   '28 X 40': '2000px',
// };
