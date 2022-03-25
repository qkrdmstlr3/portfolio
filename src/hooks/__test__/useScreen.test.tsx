import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import { RecoilRoot } from 'recoil';
import useScreen from '../useScreen';
import { CHANGE_SCREEN_SECOND } from '../../constants/variables';

const wait = (second: number) => new Promise((res) => setTimeout(() => res(true), second * 1000));

describe('hooks/useScreen', () => {
  it('screen test', () => {
    const { result } = renderHook(() => useScreen({ screenWantedToChange: 'skill' }), {
      wrapper: ({ children }) => <RecoilRoot>{children}</RecoilRoot>,
    });

    expect(result.current.screen.currentScreen).toBe('main');
  });

  it('execute changeScreen', () => {
    const { result } = renderHook(() => useScreen({ screenWantedToChange: 'skill' }), {
      wrapper: ({ children }) => <RecoilRoot>{children}</RecoilRoot>,
    });

    act(() => {
      result.current.changeScreen();
    });

    expect(result.current.screen.currentScreen).toBe('skill');
    expect(result.current.screen.changing).toBeTruthy(); // changing
  });

  it('few secdons after execute changeScreen', async () => {
    const { result } = renderHook(() => useScreen({ screenWantedToChange: 'skill' }), {
      wrapper: ({ children }) => <RecoilRoot>{children}</RecoilRoot>,
    });

    await act(async () => {
      result.current.changeScreen();
      await wait(CHANGE_SCREEN_SECOND + 1);
    });
    expect(result.current.screen.currentScreen).toBe('skill');
    expect(result.current.screen.changing).toBeFalsy(); // changing
  });

  it('execute changeScreen with no screenWantedToChange', () => {
    const { result } = renderHook(() => useScreen({}), {
      wrapper: ({ children }) => <RecoilRoot>{children}</RecoilRoot>,
    });

    act(() => {
      result.current.changeScreen();
    });
    expect(result.current.screen.currentScreen).toBe('main');
  });

  it('changeScreen double click', async () => {
    const { result } = renderHook(() => useScreen({ screenWantedToChange: 'skill' }), {
      wrapper: ({ children }) => <RecoilRoot>{children}</RecoilRoot>,
    });

    act(() => {
      result.current.changeScreen();
    });

    expect(result.current.screen.currentScreen).toBe('skill');

    await act(async () => {
      result.current.changeScreen();
      await wait(CHANGE_SCREEN_SECOND + 1);
    });

    expect(result.current.screen.currentScreen).toBe('main');
  });
});
