/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useState, useRef, useEffect } from 'react';

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [1, 2, 3, 4, 5];

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div style={{ overflowX: 'scroll', whiteSpace: 'nowrap' }}>
      {items.map((item, index) => (
        <CarouselItem
          key={item}
          active={index === activeIndex}
          handleClick={() => {
            handleClick(index);
          }}
        />
      ))}
      <button
        className="bg-black p-4"
        disabled={activeIndex === 0}
        onClick={() => {
          setActiveIndex(activeIndex - 1);
        }}
      >
        Prev
      </button>
      <button
        disabled={activeIndex === items.length - 1}
        onClick={() => {
          setActiveIndex(activeIndex + 1);
        }}
      >
        Next
      </button>
    </div>
  );
};

interface CarouselItemProps {
  active: boolean;
  handleClick: () => void;
}

const CarouselItem: React.FC<CarouselItemProps> = ({ active, handleClick }) => {
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (active && itemRef.current) {
      itemRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [active]);

  return (
    <div
      ref={itemRef}
      style={{ display: 'inline-block', width: '100px', height: '100px' }}
      onClick={handleClick}
    >
      Item {active ? 'Active' : 'Inactive'}
    </div>
  );
};

export default Carousel;
