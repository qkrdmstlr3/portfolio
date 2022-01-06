/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Fifth from '.';

const changeScreenMock = jest.fn();

describe('Component/Container/FirstContainer/First', () => {
  const carouselIndex = 0;

  describe('rendering test', () => {
    it('main', () => {
      const component = render(
        <Fifth screen="main" changing={false} carouselIndex={carouselIndex} changeScreen={changeScreenMock} />
      );
      const left = component.getByLabelText('fifth-left');
      const mid = component.getByLabelText('fifth-mid');
      const right = component.getByLabelText('fifth-right');

      component.getByText('experience');
      expect(left).toHaveStyle({
        width: '37%',
        height: '100%',
      });
      expect(mid).toHaveStyle({
        width: '40%',
        height: '100%',
      });
      expect(right).toHaveStyle({
        width: '23%',
        height: '100%',
      });
    });

    it('skill', () => {
      const component = render(
        <Fifth screen="skill" changing={false} carouselIndex={carouselIndex} changeScreen={changeScreenMock} />
      );
      const left = component.getByLabelText('fifth-left');
      const mid = component.getByLabelText('fifth-mid');
      const right = component.getByLabelText('fifth-right');

      component.getByText('experience');
      expect(left).toHaveStyle({
        width: '37%',
        height: '100%',
      });
      expect(mid).toHaveStyle({
        width: '48%',
        height: '100%',
      });
      expect(right).toHaveStyle({
        width: '15%',
        height: '100%',
      });
    });

    it('contact', () => {
      const component = render(
        <Fifth screen="contact" changing={false} carouselIndex={carouselIndex} changeScreen={changeScreenMock} />
      );
      const left = component.getByLabelText('fifth-left');
      const mid = component.getByLabelText('fifth-mid');
      const right = component.getByLabelText('fifth-right');

      component.getByText('experience');
      expect(left).toHaveStyle({
        width: '37%',
        height: '100%',
      });
      expect(mid).toHaveStyle({
        width: '40%',
        height: '100%',
      });
      expect(right).toHaveStyle({
        width: '23%',
        height: '100%',
      });
    });

    it('portfolio', () => {
      const component = render(
        <Fifth screen="portfolio" changing={false} carouselIndex={carouselIndex} changeScreen={changeScreenMock} />
      );
      const left = component.getByLabelText('fifth-left');
      const mid = component.getByLabelText('fifth-mid');
      const right = component.getByLabelText('fifth-right');

      component.getByText('exp');
      expect(left).toHaveStyle({
        width: '15%',
        height: '100%',
      });
      expect(mid).toHaveStyle({
        width: '70%',
        height: '100%',
      });
      expect(right).toHaveStyle({
        width: '15%',
        height: '100%',
      });
    });

    it('experience', () => {
      const component = render(
        <Fifth screen="experience" changing={false} carouselIndex={carouselIndex} changeScreen={changeScreenMock} />
      );
      const left = component.getByLabelText('fifth-left');
      const mid = component.getByLabelText('fifth-mid');
      const right = component.getByLabelText('fifth-right');

      component.getByText('exp');
      expect(left).toHaveStyle({
        width: '15%',
        height: '100%',
      });
      expect(mid).toHaveStyle({
        width: '70%',
        height: '100%',
      });
      expect(right).toHaveStyle({
        width: '15%',
        height: '100%',
      });
    });
  });

  it('change screen', () => {
    const component = render(
      <Fifth screen="experience" changing={false} carouselIndex={carouselIndex} changeScreen={changeScreenMock} />
    );

    const fifthLeft = component.getByLabelText('fifth-left');
    fireEvent.click(fifthLeft);
    expect(changeScreenMock).toHaveBeenCalledTimes(1);
    expect(changeScreenMock).toHaveBeenCalledWith('experience');
  });
});
