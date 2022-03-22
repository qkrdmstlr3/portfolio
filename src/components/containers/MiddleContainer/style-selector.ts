import { css, SerializedStyles } from '@emotion/react';
import { ScreenType } from '../../../recoil/screen/atom';

export const screenSelector: { [screen in ScreenType]: SerializedStyles } = {
  main: css`
    width: 100%;
    height: 35%;
  `,
  skill: css`
    width: 100%;
    height: 35%;
  `,
  contact: css`
    width: 100%;
    height: 35%;
  `,
  portfolio: css`
    width: 100%;
    height: 17%;
  `,
  experience: css`
    width: 100%;
    height: 17%;
  `,
};
