/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import MiddleContainer from '.';
import { experiences, portfolios } from '../../../constants';

describe('Component/Container/MiddleContainer', () => {
  describe('rendering test', () => {
    const carouselIndex = 0;

    it('main', () => {
      const component = render(<MiddleContainer screen="main" changing={false} carouselIndex={carouselIndex} />);
      const middleContainer = component.getByLabelText('middle-container');

      component.getByText('생각을 현실로 구현하는');
      component.getByText('조개소년');
      expect(middleContainer).toHaveStyle({
        width: '100%',
        height: '35%',
      });
    });

    it('skill', () => {
      const component = render(<MiddleContainer screen="skill" changing={false} carouselIndex={carouselIndex} />);
      const middleContainer = component.getByLabelText('middle-container');

      component.getByText('생각을 현실로 구현하는');
      component.getByText('조개소년');
      expect(middleContainer).toHaveStyle({
        width: '100%',
        height: '35%',
      });
    });

    it('contact', () => {
      const component = render(<MiddleContainer screen="contact" changing={false} carouselIndex={carouselIndex} />);
      const middleContainer = component.getByLabelText('middle-container');

      component.getByText('생각을 현실로 구현하는');
      component.getByText('조개소년');
      expect(middleContainer).toHaveStyle({
        width: '100%',
        height: '35%',
      });
    });

    it('portfolio', () => {
      const component = render(<MiddleContainer screen="portfolio" changing={false} carouselIndex={carouselIndex} />);
      const middleContainer = component.getByLabelText('middle-container');

      component.getAllByText(portfolios[carouselIndex].title);
      expect(middleContainer).toHaveStyle({
        width: '100%',
        height: '17%',
      });
    });

    it('experience', () => {
      const component = render(<MiddleContainer screen="experience" changing={false} carouselIndex={carouselIndex} />);
      const middleContainer = component.getByLabelText('middle-container');

      component.getAllByText(experiences[carouselIndex].title);
      expect(middleContainer).toHaveStyle({
        width: '100%',
        height: '17%',
      });
    });
  });
});
