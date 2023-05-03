import React, { FC, useState } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Fade from 'react-reveal/Fade';

const MobileNavMenu: FC = () => {
  const [aboutOptions, setAboutOptions] = useState(false);
  const [helpOptions, setHelpOptions] = useState(false);
  return (
    <Fade duration={600}>
      <div className="bg-black h-[100vh] text-white px-[40px] msm:px-[70px] pt-[20px]">
        <div className="flex flex-col">
          <div
            className="w-[58%] pr-[70px]"
            style={{ display: aboutOptions || helpOptions ? 'none' : 'block' }}
          >
            <Fade duration={600}>
              <div className="mt-[7px] mb-[20px] font-[Basic] font-bold text-[23px] msm:text-[30px] text-left">
                <ul>
                  <li className="mb-[0.585em]">
                    <a
                      className="hover:border-b-[2px] hover:border-b-current"
                      href="https://www.walltonez.com/"
                    >
                      Home
                    </a>
                  </li>
                  <li className="mb-[0.585em]">
                    <a className="hover:border-b-[2px] hover:border-b-current" href="/">
                      Create
                    </a>
                  </li>
                  <li className="mb-[0.585em]">
                    <span
                      className="hover:border-b-[2px] hover:border-b-current cursor-pointer"
                      onClick={() => {
                        setAboutOptions(true);
                      }}
                    >
                      About
                      <ArrowForwardIosIcon sx={{ marginLeft: '8.5px', width: '.92rem' }} />
                    </span>
                  </li>
                  <li className="mb-[0.585em]">
                    <a
                      className="hover:border-b-[2px] hover:border-b-current"
                      href="https://www.walltonez.com/pages/reviews"
                    >
                      Reviews
                    </a>
                  </li>
                  <li className="mb-[0.585em]">
                    <a
                      className="hover:border-b-[2px] hover:border-b-current"
                      href="https://www.walltonez.com/blogs/blogs"
                    >
                      Blog
                    </a>
                  </li>
                  <li className="mb-[0.585em]">
                    <span
                      className="hover:border-b-[2px] hover:border-b-current cursor-pointer"
                      onClick={() => {
                        setHelpOptions(true);
                      }}
                    >
                      Help
                      <ArrowForwardIosIcon sx={{ marginLeft: '8.5px', width: '.92rem' }} />
                    </span>
                  </li>
                </ul>
              </div>
            </Fade>
          </div>

          <div
            className="flex justify-start w-full mt-[10px]"
            style={{ display: aboutOptions ? 'block' : 'none' }}
          >
            <Fade when={aboutOptions} duration={600}>
              <div className="font-[Basic] font-bold text-[20px] msm:text-[30px] text-left ">
                <ul>
                  <li className="mb-[1.5rem] text-[16px] mt-[10px] flex items-center">
                    <span
                      className="hover:border-b-[2px] hover:border-b-current cursor-pointer"
                      onClick={() => {
                        setAboutOptions(false);
                      }}
                    >
                      <ChevronLeftIcon fontSize="small" />
                      Back
                    </span>
                  </li>
                </ul>
                <ul className="pt-[10px] ml-[20px]">
                  <li className="mb-[0.585em]">
                    <a
                      className="hover:border-b-[2px] hover:border-b-current"
                      href="https://www.walltonez.com/pages/about"
                    >
                      <span>Who We Are</span>
                    </a>
                  </li>
                  <li className="mb-[0.585em]">
                    <a
                      className="hover:border-b-[2px] hover:border-b-current"
                      href="https://www.walltonez.com/pages/sustainability"
                    >
                      <span>Sustainability</span>
                    </a>
                  </li>
                  <li className="mb-[0.585em]">
                    <a
                      className="hover:border-b-[2px] hover:border-b-current"
                      href="https://www.walltonez.com/pages/our-quality"
                    >
                      <span>Our Quality</span>
                    </a>
                  </li>
                </ul>
              </div>
            </Fade>
          </div>

          <div
            className="flex justify-start w-full mt-[10px]"
            style={{ display: helpOptions ? 'block' : 'none' }}
          >
            <Fade when={helpOptions} duration={600}>
              <div className="font-[Basic] font-bold text-[20px] msm:text-[30px] text-left ">
                <ul>
                  <li className="mb-[1.5rem] text-[16px] mt-[10px] flex items-center">
                    <ChevronLeftIcon fontSize="small" />
                    <span
                      className="hover:border-b-[2px] hover:border-b-current cursor-pointer"
                      onClick={() => {
                        setHelpOptions(false);
                      }}
                    >
                      Back
                    </span>
                  </li>
                </ul>
                <ul className="pt-[10px] ml-[20px]">
                  <li className="mb-[0.585em]">
                    <a
                      className="hover:border-b-[2px] hover:border-b-current"
                      href="https://www.walltonez.com/pages/frequently-asked-questions"
                    >
                      <span>FAQs</span>
                    </a>
                  </li>
                  <li className="mb-[0.585em]">
                    <a
                      className="hover:border-b-[2px] hover:border-b-current"
                      href="https://www.walltonez.com/pages/contact-us"
                    >
                      <span>Contact Us</span>
                    </a>
                  </li>
                </ul>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default MobileNavMenu;
