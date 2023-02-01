import React, { FC } from 'react';
import { ReactComponent as PosterIcon } from '../../assets/posterIcons/dumyIcon.svg';

interface PosterTemplatesProps {
  selectedTemplate: string;
  handleTemplateClick: (value: string) => void;
}

const PosterTemplates: FC<PosterTemplatesProps> = ({ selectedTemplate, handleTemplateClick }) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <div
          onClick={() => {
            handleTemplateClick('template1');
          }}
          className={
            selectedTemplate === 'template1'
              ? 'p-3 rounded-xl cursor-pointer border-gray-300 border-2 bg-gradient-to-r from-pink-500/10 to-purple-500/10'
              : 'p-3 border-gray-300 border-2 rounded-xl cursor-pointer bg-white'
          }
        >
          <PosterIcon className="h-24" />
        </div>

        <div
          onClick={() => {
            handleTemplateClick('template2');
          }}
          className={
            selectedTemplate === 'template2'
              ? 'p-3  rounded-xl cursor-pointer border-gray-300 border-2 bg-gradient-to-r from-pink-500/10 to-purple-500/10'
              : 'p-3 border-gray-300 border-2 rounded-xl cursor-pointer bg-white'
          }
        >
          <PosterIcon className="h-24" />
        </div>
        <div
          onClick={() => {
            handleTemplateClick('template3');
          }}
          className={
            selectedTemplate === 'template3'
              ? 'p-3 rounded-xl cursor-pointer border-gray-300 border-2 bg-gradient-to-r from-pink-500/10 to-purple-500/10'
              : 'p-3 border-gray-300 border-2 rounded-xl cursor-pointer bg-white'
          }
        >
          <PosterIcon className="h-24" />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div
          onClick={() => {
            handleTemplateClick('template4');
          }}
          className={
            selectedTemplate === 'template4'
              ? 'p-3 rounded-xl cursor-pointer border-gray-300 border-2 bg-gradient-to-r from-pink-500/10 to-purple-500/10'
              : 'p-3 border-gray-300 border-2 rounded-xl cursor-pointer bg-white'
          }
        >
          <PosterIcon className="h-24" />
        </div>
        <div
          onClick={() => {
            handleTemplateClick('template5');
          }}
          className={
            selectedTemplate === 'template5'
              ? 'p-3  rounded-xl cursor-pointer border-gray-300 border-2 bg-gradient-to-r from-pink-500/10 to-purple-500/10'
              : 'p-3 border-gray-300 border-2 rounded-xl cursor-pointer bg-white'
          }
        >
          <PosterIcon className="h-24" />
        </div>
        <div
          onClick={() => {
            handleTemplateClick('template6');
          }}
          className={
            selectedTemplate === 'template6'
              ? 'p-3  rounded-xl cursor-pointer border-gray-300 border-2 bg-gradient-to-r from-pink-500/10 to-purple-500/10'
              : 'p-3 border-gray-300 border-2 rounded-xl cursor-pointer bg-white'
          }
        >
          <PosterIcon className="h-24" />
        </div>
      </div>
    </div>
  );
};

export default PosterTemplates;
