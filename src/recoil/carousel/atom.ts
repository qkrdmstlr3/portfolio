import { atom } from 'recoil';

export const carouselIndexState = atom<number>({
  key: 'carouselIndexState',
  default: 0,
});
