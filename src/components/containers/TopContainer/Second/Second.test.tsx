/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Second from '.';

const changeScreenMock = jest.fn();

describe('Component/Container/TopContainer/Second', () => {
  describe('screen test', () => {
    it('main', () => {
      const component = render(
        <Second screen="main" changing={false} carouselIndex={1} changeScreen={changeScreenMock} />
      );

      const container = component.getByLabelText('second-container');
      expect(container).toHaveStyle({
        width: '100%',
        height: '66%',
      });
    });

    it('skill', () => {
      const component = render(
        <Second screen="skill" changing={false} carouselIndex={1} changeScreen={changeScreenMock} />
      );

      const container = component.getByLabelText('second-container');
      expect(container).toHaveStyle({
        width: '100%',
        height: '83%',
      });
    });

    it('contact', () => {
      const component = render(
        <Second screen="contact" changing={false} carouselIndex={1} changeScreen={changeScreenMock} />
      );

      const container = component.getByLabelText('second-container');
      expect(container).toHaveStyle({
        width: '100%',
        height: '66%',
      });
    });

    it('portfolio', () => {
      const component = render(
        <Second screen="portfolio" changing={false} carouselIndex={1} changeScreen={changeScreenMock} />
      );

      const container = component.getByLabelText('second-container');
      expect(container).toHaveStyle({
        width: '100%',
        height: '66%',
      });
    });

    it('experience', () => {
      const component = render(
        <Second screen="experience" changing={false} carouselIndex={1} changeScreen={changeScreenMock} />
      );

      const container = component.getByLabelText('second-container');
      expect(container).toHaveStyle({
        width: '100%',
        height: '78%',
      });
    });
  });

  it('change screen', () => {
    const component = render(
      <Second screen="experience" changing={false} carouselIndex={1} changeScreen={changeScreenMock} />
    );

    const leftTop = component.getByLabelText('second-left-top');
    fireEvent.click(leftTop);
    expect(changeScreenMock).toHaveBeenCalledTimes(1);
    expect(changeScreenMock).toHaveBeenCalledWith('contact');
  });
});
