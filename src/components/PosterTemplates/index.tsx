import React, { FC } from 'react';
import Template1 from '../../assets/posterIcons/template1.svg';
import Template2 from '../../assets/posterIcons/template2.svg';
import Template3 from '../../assets/posterIcons/template3.svg';
import Template4 from '../../assets/posterIcons/template4.svg';
import Template5 from '../../assets/posterIcons/template5.svg';
import Template6 from '../../assets/posterIcons/template6.svg';

interface PosterTemplatesProps {
  selectedTemplate: string;
  handleTemplateClick: (value: string) => void;
}

const PosterTemplates: FC<PosterTemplatesProps> = ({ selectedTemplate, handleTemplateClick }) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-start gap-4">
        <div
          onClick={() => {
            handleTemplateClick('template1');
          }}
          className={
            selectedTemplate === 'template1'
              ? 'p-3 rounded-xl cursor-pointer border-black border-2 '
              : 'p-3 border-gray-300 border-2 rounded-xl cursor-pointer bg-white'
          }
        >
          <img src={Template1} className="h-24" />
        </div>
        <div
          onClick={() => {
            handleTemplateClick('template2');
          }}
          className={
            selectedTemplate === 'template2'
              ? 'p-3  rounded-xl cursor-pointer border-black border-2 '
              : 'p-3 border-gray-300 border-2 rounded-xl cursor-pointer bg-white'
          }
        >
          <img src={Template2} className="h-24" />
        </div>
        <div
          onClick={() => {
            handleTemplateClick('template3');
          }}
          className={
            selectedTemplate === 'template3'
              ? 'p-3 rounded-xl cursor-pointer border-black border-2 '
              : 'p-3 border-gray-300 border-2 rounded-xl cursor-pointer bg-white'
          }
        >
          <img src={Template3} className="h-24" />
        </div>
        <div
          onClick={() => {
            handleTemplateClick('template4');
          }}
          className={
            selectedTemplate === 'template4'
              ? 'p-3 rounded-xl cursor-pointer border-black border-2 '
              : 'p-3 border-gray-300 border-2 rounded-xl cursor-pointer bg-white'
          }
        >
          <img src={Template4} className="h-24" />
        </div>
      </div>
      <div className="flex items-center justify-start gap-4">
        <div
          onClick={() => {
            handleTemplateClick('template5');
          }}
          className={
            selectedTemplate === 'template5'
              ? 'p-3  rounded-xl cursor-pointer border-black border-2 '
              : 'p-3 border-gray-300 border-2 rounded-xl cursor-pointer bg-white'
          }
        >
          <img src={Template5} className="h-24" />
        </div>
        <div
          onClick={() => {
            handleTemplateClick('template6');
          }}
          className={
            selectedTemplate === 'template6'
              ? 'p-3  rounded-xl cursor-pointer border-black border-2 '
              : 'p-3 border-gray-300 border-2 rounded-xl cursor-pointer bg-white'
          }
        >
          <img src={Template6} className="h-24" />
        </div>
      </div>
    </div>
  );
};

export default PosterTemplates;
