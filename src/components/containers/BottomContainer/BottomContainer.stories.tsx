import React from 'react';
import { action } from '@storybook/addon-actions';
import BottomContainer from '.';

export default {
  title: 'Container/BottomContainer',
  component: BottomContainer,
};

const changeScreenAction = action('change screen');
export const contactScreenBottomContainer = () => (
  <div style={{ maxWidth: '560px', height: '800px' }}>
    <BottomContainer screen="contact" changing={false} carouselIndex={1} changeScreen={changeScreenAction} />
  </div>
);

export const experienceScreenBottomContainer = () => (
  <div style={{ maxWidth: '560px', height: '800px' }}>
    <BottomContainer screen="experience" changing={false} carouselIndex={1} changeScreen={changeScreenAction} />
  </div>
);

export const mainScreenBottomContainer = () => (
  <div style={{ maxWidth: '560px', height: '800px' }}>
    <BottomContainer screen="main" changing={false} carouselIndex={1} changeScreen={changeScreenAction} />
  </div>
);

export const portfolioScreenBottomContainer = () => (
  <div style={{ maxWidth: '560px', height: '800px' }}>
    <BottomContainer screen="portfolio" changing={false} carouselIndex={1} changeScreen={changeScreenAction} />
  </div>
);

export const skillScreenBottomContainer = () => (
  <div style={{ maxWidth: '560px', height: '800px' }}>
    <BottomContainer screen="skill" changing={false} carouselIndex={1} changeScreen={changeScreenAction} />
  </div>
);
