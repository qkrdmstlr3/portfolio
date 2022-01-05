/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import First from '.';

describe('Component/Container/TopContainer/First', () => {
  describe('screen test', () => {
    it('main', () => {
      const component = render(<First screen="main" />);

      const container = component.getByLabelText('first-container');
      expect(container).toHaveStyle({
        width: '100%',
        height: '34%',
      });
    });

    it('skill', () => {
      const component = render(<First screen="skill" />);

      const container = component.getByLabelText('first-container');
      expect(container).toHaveStyle({
        width: '100%',
        height: '17%',
      });
    });

    it('contact', () => {
      const component = render(<First screen="contact" />);

      const container = component.getByLabelText('first-container');
      expect(container).toHaveStyle({
        width: '100%',
        height: '34%',
      });
    });

    it('portfolio', () => {
      const component = render(<First screen="portfolio" />);

      const container = component.getByLabelText('first-container');
      expect(container).toHaveStyle({
        width: '100%',
        height: '34%',
      });
    });

    it('experience', () => {
      const component = render(<First screen="experience" />);

      const container = component.getByLabelText('first-container');
      expect(container).toHaveStyle({
        width: '100%',
        height: '22%',
      });
    });
  });
});
