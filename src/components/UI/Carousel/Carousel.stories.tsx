import React from 'react';
import { withKnobs, number } from '@storybook/addon-knobs';
import Carousel from '.';

export default {
  title: 'Component/Carousel',
  component: Carousel,
  decorators: [withKnobs],
};

const Component = ({ children }) => <div>{children}</div>;
const carouselIndexKnob = number('Carousel Index', 1);
export const carousel = () => (
  <Carousel
    autoplay
    items={['c', 'a', 'r', 'o', 'u', 's', 'e', 'l']}
    carouselIndex={carouselIndexKnob}
    Component={Component}
  />
);
