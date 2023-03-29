import React, { FC } from 'react';

interface FontChangerProps {
  min: string;
  max: string;
  step: string;
  id: string;
  name: string;
  className?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FontChanger: FC<FontChangerProps> = ({
  min,
  max,
  step,
  id,
  name,
  className,
  value,
  onChange,
}) => {
  return (
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      id={id}
      name={name}
      className={className}
      value={value}
      onChange={onChange}
    />
  );
};

export default FontChanger;
