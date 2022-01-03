import React from 'react';
import MiddleContainer from '.';

export default {
  title: 'Container/MiddleContainer',
  component: MiddleContainer,
};

export const contactScreenMiddleContainer = () => (
  <div style={{ maxWidth: '560px', height: '800px' }}>
    <MiddleContainer screen="contact" changing={false} carouselIndex={1} />
  </div>
);

export const experienceScreenMiddleContainer = () => (
  <div style={{ maxWidth: '560px', height: '800px' }}>
    <MiddleContainer screen="experience" changing={false} carouselIndex={1} />
  </div>
);

export const mainScreenMiddleContainer = () => (
  <div style={{ maxWidth: '560px', height: '800px' }}>
    <MiddleContainer screen="main" changing={false} carouselIndex={1} />
  </div>
);

export const portfolioScreenMiddleContainer = () => (
  <div style={{ maxWidth: '560px', height: '800px' }}>
    <MiddleContainer screen="portfolio" changing={false} carouselIndex={1} />
  </div>
);

export const skillScreenMiddleContainer = () => (
  <div style={{ maxWidth: '560px', height: '800px' }}>
    <MiddleContainer screen="skill" changing={false} carouselIndex={1} />
  </div>
);
