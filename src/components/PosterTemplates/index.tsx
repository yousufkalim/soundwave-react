import React, { FC } from 'react';
import Template1 from '../../assets/posterIcons/template1.svg';
import Template2 from '../../assets/posterIcons/template2.svg';
import Template3 from '../../assets/posterIcons/template3.svg';
import Template4 from '../../assets/posterIcons/template4.svg';
import Template5 from '../../assets/posterIcons/template5.svg';
import Template6 from '../../assets/posterIcons/template6.svg';
import PosterTemplateComponent from './posterTemplateComponent';

interface PosterTemplatesProps {
  selectedTemplate: string;
  handleTemplateClick: (value: string) => void;
}

const PosterTemplates: FC<PosterTemplatesProps> = ({ selectedTemplate, handleTemplateClick }) => {
  return (
    <div className="flex flex-wrap justify-center items-start gap-4 sm:justify-start sm:gap-2 xl:gap-3 3xl:gap-3">
      <PosterTemplateComponent
        posterImage={Template2}
        selectedTemplate={selectedTemplate}
        handleTemplateClick={handleTemplateClick}
        templateName={'template1'}
      />
      <PosterTemplateComponent
        posterImage={Template3}
        selectedTemplate={selectedTemplate}
        handleTemplateClick={handleTemplateClick}
        templateName={'template2'}
      />
      <PosterTemplateComponent
        posterImage={Template1}
        selectedTemplate={selectedTemplate}
        handleTemplateClick={handleTemplateClick}
        templateName={'template3'}
      />
      <PosterTemplateComponent
        posterImage={Template4}
        selectedTemplate={selectedTemplate}
        handleTemplateClick={handleTemplateClick}
        templateName={'template4'}
      />
      <PosterTemplateComponent
        posterImage={Template5}
        selectedTemplate={selectedTemplate}
        handleTemplateClick={handleTemplateClick}
        templateName={'template5'}
      />
      <PosterTemplateComponent
        posterImage={Template6}
        selectedTemplate={selectedTemplate}
        handleTemplateClick={handleTemplateClick}
        templateName={'template6'}
      />
    </div>
  );
};

export default PosterTemplates;
