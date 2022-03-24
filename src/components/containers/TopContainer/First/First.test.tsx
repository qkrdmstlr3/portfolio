/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '../../../../test-utils';
import First from '.';
import useScreen from '../../../../hooks/useScreen';
import { ScreenType } from '../../../../recoil/screen/atom';

jest.mock('../../../../hooks/useScreen.ts');
const useScreenMock = useScreen as jest.MockedFunction<typeof useScreen>;

const getScreenObj = (currentScreen: ScreenType, changing: boolean) => ({
  screen: { currentScreen, changing },
  changeScreen: () => {},
});

describe('Component/Container/TopContainer/First', () => {
  describe('screen test', () => {
    it('main', () => {
      useScreenMock.mockReturnValue(getScreenObj('main', false));
      const component = render(<First />);

      const container = component.getByLabelText('first-container');
      expect(container).toHaveStyle({
        width: '100%',
        height: '34%',
      });
    });

    it('skill', () => {
      useScreenMock.mockReturnValue(getScreenObj('skill', false));
      const component = render(<First />);

      const container = component.getByLabelText('first-container');
      expect(container).toHaveStyle({
        width: '100%',
        height: '17%',
      });
    });

    it('contact', () => {
      useScreenMock.mockReturnValue(getScreenObj('contact', false));
      const component = render(<First />);

      const container = component.getByLabelText('first-container');
      expect(container).toHaveStyle({
        width: '100%',
        height: '34%',
      });
    });

    it('portfolio', () => {
      useScreenMock.mockReturnValue(getScreenObj('portfolio', false));
      const component = render(<First />);

      const container = component.getByLabelText('first-container');
      expect(container).toHaveStyle({
        width: '100%',
        height: '34%',
      });
    });

    it('experience', () => {
      useScreenMock.mockReturnValue(getScreenObj('experience', false));
      const component = render(<First />);

      const container = component.getByLabelText('first-container');
      expect(container).toHaveStyle({
        width: '100%',
        height: '22%',
      });
    });
  });
});
