import { atom } from 'recoil';

export type ScreenType = 'main' | 'portfolio' | 'skill' | 'contact' | 'experience';

export interface ScreenStateType {
  changing: boolean;
  currentScreen: ScreenType;
}

export const screenState = atom<ScreenStateType>({
  key: 'screenState',
  default: {
    changing: false,
    currentScreen: 'main',
  },
});
