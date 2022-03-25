/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, fireEvent } from '../../../../test-utils';
import Fifth from '.';
import useScreen from '../../../../hooks/useScreen';
import { ScreenType } from '../../../../recoil/screen/atom';

jest.mock('../../../../hooks/useScreen.ts');
const changeScreenMock = jest.fn();
const useScreenMock = useScreen as jest.MockedFunction<typeof useScreen>;

const getScreenObj = (currentScreen: ScreenType, changing: boolean) => ({
  screen: { currentScreen, changing },
  changeScreen: changeScreenMock,
});

describe('Component/Container/FirstContainer/First', () => {
  describe('rendering test', () => {
    it('main', () => {
      useScreenMock.mockReturnValue(getScreenObj('main', false));
      const component = render(<Fifth />);
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
      useScreenMock.mockReturnValue(getScreenObj('skill', false));
      const component = render(<Fifth />);
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
      useScreenMock.mockReturnValue(getScreenObj('contact', false));
      const component = render(<Fifth />);
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
      useScreenMock.mockReturnValue(getScreenObj('portfolio', false));
      const component = render(<Fifth />);
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
      useScreenMock.mockReturnValue(getScreenObj('experience', false));
      const component = render(<Fifth />);
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
    const component = render(<Fifth />);

    const fifthLeft = component.getByLabelText('fifth-left');
    fireEvent.click(fifthLeft);
    expect(changeScreenMock).toHaveBeenCalledTimes(1);
  });
});
