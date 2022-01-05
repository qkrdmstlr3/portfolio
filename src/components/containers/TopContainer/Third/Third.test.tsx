/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Third from '.';

const changeScreenMock = jest.fn();

describe('Component/Container/TopContainer/Third', () => {
  describe('screen test', () => {
    it('main', () => {
      const component = render(<Third screen="main" changeScreen={changeScreenMock} />);

      const thirdTop = component.getByLabelText('third-top');
      const thirdBottom = component.getByLabelText('third-bottom');
      expect(thirdTop).toHaveStyle({
        width: '100%',
        height: '65%',
      });
      expect(thirdBottom).toHaveStyle({
        width: '100%',
        height: '35%',
      });
    });

    it('skill', () => {
      const component = render(<Third screen="skill" changeScreen={changeScreenMock} />);

      const thirdTop = component.getByLabelText('third-top');
      const thirdBottom = component.getByLabelText('third-bottom');
      expect(thirdTop).toHaveStyle({
        width: '100%',
        height: '65%',
      });
      expect(thirdBottom).toHaveStyle({
        width: '100%',
        height: '35%',
      });
    });

    it('contact', () => {
      const component = render(<Third screen="contact" changeScreen={changeScreenMock} />);

      const thirdTop = component.getByLabelText('third-top');
      const thirdBottom = component.getByLabelText('third-bottom');
      expect(thirdTop).toHaveStyle({
        width: '100%',
        height: '65%',
      });
      expect(thirdBottom).toHaveStyle({
        width: '100%',
        height: '35%',
      });
    });

    it('portfolio', () => {
      const component = render(<Third screen="portfolio" changeScreen={changeScreenMock} />);

      const thirdTop = component.getByLabelText('third-top');
      const thirdBottom = component.getByLabelText('third-bottom');
      expect(thirdTop).toHaveStyle({
        width: '100%',
        height: '65%',
      });
      expect(thirdBottom).toHaveStyle({
        width: '100%',
        height: '35%',
      });
    });

    it('experience', () => {
      const component = render(<Third screen="experience" changeScreen={changeScreenMock} />);

      const thirdTop = component.getByLabelText('third-top');
      const thirdBottom = component.getByLabelText('third-bottom');
      expect(thirdTop).toHaveStyle({
        width: '100%',
        height: '42%',
      });
      expect(thirdBottom).toHaveStyle({
        width: '100%',
        height: '58%',
      });
    });
  });

  it('change screen', () => {
    const component = render(<Third screen="experience" changeScreen={changeScreenMock} />);

    const top = component.getByLabelText('third-top');
    fireEvent.click(top);
    expect(changeScreenMock).toHaveBeenCalledTimes(1);
    expect(changeScreenMock).toHaveBeenCalledWith('portfolio');
  });
});
