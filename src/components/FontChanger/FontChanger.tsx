import React, { FC } from 'react';

interface FontChangerProps {
  min: string;
  max: string;
  step: string;
  id: string;
  name: string;
  className: string;
}

const FontChanger: FC<FontChangerProps> = ({ min, max, step, id, name, className }) => {
  return (
    <input type="range" min={min} max={max} step={step} id={id} name={name} className={className} />
  );
};

export default FontChanger;
