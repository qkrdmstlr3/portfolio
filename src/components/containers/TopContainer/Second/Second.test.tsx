/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, fireEvent } from '../../../../test-utils';
import Second from '.';
import useScreen from '../../../../hooks/useScreen';
import { ScreenType } from '../../../../recoil/screen/atom';

jest.mock('../../../../hooks/useScreen.ts');
const changeScreenMock = jest.fn();
const useScreenMock = useScreen as jest.MockedFunction<typeof useScreen>;

const getScreenObj = (currentScreen: ScreenType, changing: boolean) => ({
  screen: { currentScreen, changing },
  changeScreen: changeScreenMock,
});

describe('Component/Container/TopContainer/Second', () => {
  describe('screen test', () => {
    it('main', () => {
      useScreenMock.mockReturnValue(getScreenObj('main', false));
      const component = render(<Second />);

      const container = component.getByLabelText('second-container');
      expect(container).toHaveStyle({
        width: '100%',
        height: '66%',
      });
    });

    it('skill', () => {
      useScreenMock.mockReturnValue(getScreenObj('skill', false));
      const component = render(<Second />);

      const container = component.getByLabelText('second-container');
      expect(container).toHaveStyle({
        width: '100%',
        height: '83%',
      });
    });

    it('contact', () => {
      useScreenMock.mockReturnValue(getScreenObj('contact', false));
      const component = render(<Second />);

      const container = component.getByLabelText('second-container');
      expect(container).toHaveStyle({
        width: '100%',
        height: '66%',
      });
    });

    it('portfolio', () => {
      useScreenMock.mockReturnValue(getScreenObj('portfolio', false));
      const component = render(<Second />);

      const container = component.getByLabelText('second-container');
      expect(container).toHaveStyle({
        width: '100%',
        height: '66%',
      });
    });

    it('experience', () => {
      useScreenMock.mockReturnValue(getScreenObj('experience', false));
      const component = render(<Second />);

      const container = component.getByLabelText('second-container');
      expect(container).toHaveStyle({ width: '100%', height: '78%' });
    });
  });

  it('change screen', () => {
    const component = render(<Second />);

    const leftTop = component.getByLabelText('second-left-top');
    fireEvent.click(leftTop);
    expect(changeScreenMock).toHaveBeenCalledTimes(1);
  });
});
