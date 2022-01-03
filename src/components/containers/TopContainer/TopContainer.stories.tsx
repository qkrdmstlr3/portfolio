import React from 'react';
import { action } from '@storybook/addon-actions';
import TopContainer from '.';

export default {
  title: 'Container/TopContainer',
  component: TopContainer,
};

const changeScreenAction = action('change screen');
export const contactScreenBottomContainer = () => (
  <div style={{ maxWidth: '560px', height: '800px' }}>
    <TopContainer screen="contact" changing={false} carouselIndex={1} changeScreen={changeScreenAction} />
  </div>
);

export const experienceScreenBottomContainer = () => (
  <div style={{ maxWidth: '560px', height: '800px' }}>
    <TopContainer screen="experience" changing={false} carouselIndex={1} changeScreen={changeScreenAction} />
  </div>
);

export const mainScreenBottomContainer = () => (
  <div style={{ maxWidth: '560px', height: '800px' }}>
    <TopContainer screen="main" changing={false} carouselIndex={1} changeScreen={changeScreenAction} />
  </div>
);

export const portfolioScreenBottomContainer = () => (
  <div style={{ maxWidth: '560px', height: '800px' }}>
    <TopContainer screen="portfolio" changing={false} carouselIndex={1} changeScreen={changeScreenAction} />
  </div>
);

export const skillScreenBottomContainer = () => (
  <div style={{ maxWidth: '560px', height: '800px' }}>
    <TopContainer screen="skill" changing={false} carouselIndex={1} changeScreen={changeScreenAction} />
  </div>
);
