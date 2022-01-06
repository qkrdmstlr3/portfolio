/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import Sixth from '.';

describe('Component/Container/BottomContainer/Sixth', () => {
  describe('rendering test', () => {
    it('main', () => {
      const component = render(<Sixth screen="main" changing={false} carouselIndex={0} />);
      const blackBox = component.getByLabelText('sixth-black');
      const firstBox = component.getByLabelText('sixth-first');
      const secondBox = component.getByLabelText('sixth-second');
      const thirdBox = component.getByLabelText('sixth-third');
      const fourthBox = component.getByLabelText('sixth-fourth');

      expect(blackBox).toHaveStyle({ width: '48%', height: '100%' });
      expect(firstBox).toHaveStyle({ width: '13%', height: '100%' });
      expect(secondBox).toHaveStyle({ width: '13%', height: '100%' });
      expect(thirdBox).toHaveStyle({ width: '13%', height: '100%' });
      expect(fourthBox).toHaveStyle({ width: '13%', height: '100%' });
    });

    it('skill', () => {
      const component = render(<Sixth screen="skill" changing={false} carouselIndex={0} />);
      const blackBox = component.getByLabelText('sixth-black');
      const firstBox = component.getByLabelText('sixth-first');
      const secondBox = component.getByLabelText('sixth-second');
      const thirdBox = component.getByLabelText('sixth-third');
      const fourthBox = component.getByLabelText('sixth-fourth');

      expect(blackBox).toHaveStyle({ width: '48%', height: '100%' });
      expect(firstBox).toHaveStyle({ width: '13%', height: '100%' });
      expect(secondBox).toHaveStyle({ width: '13%', height: '100%' });
      expect(thirdBox).toHaveStyle({ width: '13%', height: '100%' });
      expect(fourthBox).toHaveStyle({ width: '13%', height: '100%' });
    });

    it('contact', () => {
      const component = render(<Sixth screen="contact" changing={false} carouselIndex={0} />);
      const blackBox = component.getByLabelText('sixth-black');
      const firstBox = component.getByLabelText('sixth-first');
      const secondBox = component.getByLabelText('sixth-second');
      const thirdBox = component.getByLabelText('sixth-third');
      const fourthBox = component.getByLabelText('sixth-fourth');

      expect(blackBox).toHaveStyle({ width: '12%', height: '100%' });
      expect(firstBox).toHaveStyle({ width: '22%', height: '100%' });
      expect(secondBox).toHaveStyle({ width: '22%', height: '100%' });
      expect(thirdBox).toHaveStyle({ width: '22%', height: '100%' });
      expect(fourthBox).toHaveStyle({ width: '22%', height: '100%' });
    });

    it('portfolio', () => {
      const component = render(<Sixth screen="portfolio" changing={false} carouselIndex={0} />);
      const blackBox = component.getByLabelText('sixth-black');
      const firstBox = component.getByLabelText('sixth-first');
      const secondBox = component.getByLabelText('sixth-second');
      const thirdBox = component.getByLabelText('sixth-third');
      const fourthBox = component.getByLabelText('sixth-fourth');

      expect(blackBox).toHaveStyle({ width: '30%', height: '100%' });
      expect(firstBox).toHaveStyle({ width: '22%', height: '100%' });
      expect(secondBox).toHaveStyle({ width: '22%', height: '100%' });
      expect(thirdBox).toHaveStyle({ width: '13%', height: '100%' });
      expect(fourthBox).toHaveStyle({ width: '13%', height: '100%' });
    });

    it('experience', () => {
      const component = render(<Sixth screen="experience" changing={false} carouselIndex={0} />);
      const blackBox = component.getByLabelText('sixth-black');
      const firstBox = component.getByLabelText('sixth-first');
      const secondBox = component.getByLabelText('sixth-second');
      const thirdBox = component.getByLabelText('sixth-third');
      const fourthBox = component.getByLabelText('sixth-fourth');

      expect(blackBox).toHaveStyle({ width: '48%', height: '100%' });
      expect(firstBox).toHaveStyle({ width: '13%', height: '100%' });
      expect(secondBox).toHaveStyle({ width: '13%', height: '100%' });
      expect(thirdBox).toHaveStyle({ width: '13%', height: '100%' });
      expect(fourthBox).toHaveStyle({ width: '13%', height: '100%' });
    });
  });
});
