/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Seventh from '.';
import useScreen from '../../../../hooks/useScreen';
import { ScreenType } from '../../../../recoil/screen/atom';

jest.mock('../../../../hooks/useScreen.ts');
const changeScreenMock = jest.fn();
const useScreenMock = useScreen as jest.MockedFunction<typeof useScreen>;

const getScreenObj = (currentScreen: ScreenType, changing: boolean) => ({
  screen: { currentScreen, changing },
  changeScreen: changeScreenMock,
});

describe('Component/Container/BottomContainer/Seventh', () => {
  it('rendering test', () => {
    useScreenMock.mockReturnValue(getScreenObj('main', false));
    const component = render(<Seventh />);
    component.getByText('skill');
  });

  it('change screen', () => {
    useScreenMock.mockReturnValue(getScreenObj('main', false));
    const component = render(<Seventh />);
    const seventhTop = component.getByLabelText('seventh-top');
    fireEvent.click(seventhTop);
    expect(changeScreenMock).toHaveBeenCalledTimes(1);
  });
});
