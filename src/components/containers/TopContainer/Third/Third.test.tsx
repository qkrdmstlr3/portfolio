/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, fireEvent } from '../../../../test-utils';
import Third from '.';
import useScreen from '../../../../hooks/useScreen';
import { ScreenType } from '../../../../recoil/screen/atom';

jest.mock('../../../../hooks/useScreen.ts');
const changeScreenMock = jest.fn();
const useScreenMock = useScreen as jest.MockedFunction<typeof useScreen>;

const getScreenObj = (currentScreen: ScreenType, changing: boolean) => ({
  screen: { currentScreen, changing },
  changeScreen: changeScreenMock,
});

describe('Component/Container/TopContainer/Third', () => {
  describe('screen test', () => {
    it('main', () => {
      useScreenMock.mockReturnValue(getScreenObj('main', false));
      const component = render(<Third />);

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
      useScreenMock.mockReturnValue(getScreenObj('skill', false));
      const component = render(<Third />);

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
      useScreenMock.mockReturnValue(getScreenObj('contact', false));
      const component = render(<Third />);

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
      useScreenMock.mockReturnValue(getScreenObj('portfolio', false));
      const component = render(<Third />);

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
      useScreenMock.mockReturnValue(getScreenObj('experience', false));
      const component = render(<Third />);

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
    const component = render(<Third />);

    const top = component.getByLabelText('third-top');
    fireEvent.click(top);
    expect(changeScreenMock).toHaveBeenCalledTimes(1);
  });
});
