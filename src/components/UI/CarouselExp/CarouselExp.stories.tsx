import React, { useEffect, useState } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import CarouselExp from '.';

export default {
  title: 'Component/CarouselExp',
  component: CarouselExp,
  decorators: [withKnobs],
};

const items = ['a', 'b', 'c', 'd'];
const Component = ({ children }) => <div>{children}</div>;
export const carouselExp = () => {
  const [carouselIndex, setCarouselIndex] = useState<number>(0);

  useEffect(() => {
    const timeout = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % items.length);
    }, 2000);

    return () => clearInterval(timeout);
  }, []);

  return <CarouselExp items={items} second={2} carouselIndex={carouselIndex} Component={Component} />;
};
