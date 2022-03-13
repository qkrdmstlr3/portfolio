import React, { useEffect, useState } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import Carousel from '.';

export default {
  title: 'Component/Carousel',
  component: Carousel,
  decorators: [withKnobs],
};

const items = ['a', 'b', 'c', 'd'];
const Component = ({ children }) => <div>{children}</div>;
export const carousel = () => {
  const [carouselIndex, setCarouselIndex] = useState<number>(0);

  useEffect(() => {
    const timeout = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % items.length);
    }, 2000);

    return () => clearInterval(timeout);
  }, []);

  return <Carousel items={items} second={2} carouselIndex={carouselIndex} Component={Component} />;
};