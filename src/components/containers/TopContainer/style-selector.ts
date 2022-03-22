import { css, SerializedStyles } from '@emotion/react';
import { ScreenType } from '../../../recoil/screen/atom';

export const screenSelector: { [screen in ScreenType]: SerializedStyles } = {
  main: css`
    width: 100%;
    height: 30%;
  `,
  skill: css`
    width: 100%;
    height: 30%;
  `,
  contact: css`
    width: 100%;
    height: 30%;
  `,
  portfolio: css`
    width: 100%;
    height: 30%;
  `,
  experience: css`
    width: 100%;
    height: 48%;
  `,
};
