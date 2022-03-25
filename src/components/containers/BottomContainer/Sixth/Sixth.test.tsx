/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '../../../../test-utils';
import Sixth from '.';
import useScreen from '../../../../hooks/useScreen';
import { ScreenType } from '../../../../recoil/screen/atom';

jest.mock('../../../../hooks/useScreen.ts');
const changeScreenMock = jest.fn();
const useScreenMock = useScreen as jest.MockedFunction<typeof useScreen>;

const getScreenObj = (currentScreen: ScreenType, changing: boolean) => ({
  screen: { currentScreen, changing },
  changeScreen: changeScreenMock,
});

describe('Component/Container/BottomContainer/Sixth', () => {
  describe('rendering test', () => {
    it('main', () => {
      useScreenMock.mockReturnValue(getScreenObj('main', false));
      const component = render(<Sixth />);
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
      useScreenMock.mockReturnValue(getScreenObj('skill', false));
      const component = render(<Sixth />);
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
      useScreenMock.mockReturnValue(getScreenObj('contact', false));
      const component = render(<Sixth />);
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
      useScreenMock.mockReturnValue(getScreenObj('portfolio', false));
      const component = render(<Sixth />);
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
      useScreenMock.mockReturnValue(getScreenObj('experience', false));
      const component = render(<Sixth />);
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
