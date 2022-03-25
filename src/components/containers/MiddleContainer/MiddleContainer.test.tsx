/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '../../../test-utils';
import MiddleContainer from '.';
import { experiences, portfolios } from '../../../constants/portfolio';
import useScreen from '../../../hooks/useScreen';
import { ScreenType } from '../../../recoil/screen/atom';

jest.mock('../../../hooks/useScreen.ts');
const changeScreenMock = jest.fn();
const useScreenMock = useScreen as jest.MockedFunction<typeof useScreen>;
const carouselIndex = 0;

const getScreenObj = (currentScreen: ScreenType, changing: boolean) => ({
  screen: { currentScreen, changing },
  changeScreen: changeScreenMock,
});

describe('Component/Container/MiddleContainer', () => {
  describe('rendering test', () => {
    it('main', () => {
      useScreenMock.mockReturnValue(getScreenObj('main', false));
      const component = render(<MiddleContainer />);
      const middleContainer = component.getByLabelText('middle-container');

      component.getByText('생각을 현실로 구현하는');
      component.getByText('조개소년');
      expect(middleContainer).toHaveStyle({
        width: '100%',
        height: '35%',
      });
    });

    it('skill', () => {
      useScreenMock.mockReturnValue(getScreenObj('skill', false));
      const component = render(<MiddleContainer />);
      const middleContainer = component.getByLabelText('middle-container');

      component.getByText('생각을 현실로 구현하는');
      component.getByText('조개소년');
      expect(middleContainer).toHaveStyle({
        width: '100%',
        height: '35%',
      });
    });

    it('contact', () => {
      useScreenMock.mockReturnValue(getScreenObj('contact', false));
      const component = render(<MiddleContainer />);
      const middleContainer = component.getByLabelText('middle-container');

      component.getByText('생각을 현실로 구현하는');
      component.getByText('조개소년');
      expect(middleContainer).toHaveStyle({
        width: '100%',
        height: '35%',
      });
    });

    it('portfolio', () => {
      useScreenMock.mockReturnValue(getScreenObj('portfolio', false));
      const component = render(<MiddleContainer />);
      const middleContainer = component.getByLabelText('middle-container');

      component.getAllByText(portfolios[carouselIndex].title);
      expect(middleContainer).toHaveStyle({
        width: '100%',
        height: '17%',
      });
    });

    it('experience', () => {
      useScreenMock.mockReturnValue(getScreenObj('experience', false));
      const component = render(<MiddleContainer />);
      const middleContainer = component.getByLabelText('middle-container');

      component.getAllByText(experiences[carouselIndex].title);
      expect(middleContainer).toHaveStyle({
        width: '100%',
        height: '17%',
      });
    });
  });
});
