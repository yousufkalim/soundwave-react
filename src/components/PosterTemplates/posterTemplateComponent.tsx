import React, { FC } from 'react';

interface IPosterTemplateComponent {
  posterImage: string;
  templateName: string;
  selectedTemplate: string;
  handleTemplateClick: (value: string) => void;
}

const posterTemplateComponent: FC<IPosterTemplateComponent> = ({
  posterImage,
  templateName,
  selectedTemplate,
  handleTemplateClick,
}) => {
  return (
    <div
      onClick={() => {
        handleTemplateClick(templateName);
      }}
      className={
        selectedTemplate === templateName
          ? 'p-3  rounded-xl cursor-pointer border-black border-2'
          : 'p-3 border-gray-300 border-2 rounded-xl cursor-pointer bg-white'
      }
    >
      <img src={posterImage} className="h-20 xl:h-21 2xl:h-24" />
    </div>
  );
};

export default posterTemplateComponent;
