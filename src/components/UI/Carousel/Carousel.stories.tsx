import React, { useEffect, useState } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import Carousel from '.';

export default {
  title: 'Component/Carousel',
  component: Carousel,
  decorators: [withKnobs],
};

const items = [
  { id: 1, text: 'a' },
  { id: 2, text: 'b' },
  { id: 3, text: 'c' },
];
const SECOND = 2;
const Component = ({ children }) => {
  return <div>{children.text}</div>;
};
export const carousel = () => {
  const [carouselIndex, setCarouselIndex] = useState<number>(0);

  useEffect(() => {
    const timeout = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % items.length);
    }, SECOND * 1000);

    return () => clearInterval(timeout);
  }, []);

  return <Carousel items={items} second={SECOND} carouselIndex={carouselIndex} Component={Component} />;
};
