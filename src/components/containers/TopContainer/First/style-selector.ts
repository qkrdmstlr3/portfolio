import { css, SerializedStyles } from '@emotion/react';
import { ScreenType } from '../../../templates/main';

export const screenSelector: { [screen in ScreenType]: SerializedStyles } = {
  main: css`
    width: 100%;
    height: 34%;
  `,
  skill: css`
    width: 100%;
    height: 17%;
  `,
  contact: css`
    width: 100%;
    height: 34%;
  `,
  portfolio: css`
    width: 100%;
    height: 34%;
  `,
  experience: css`
    width: 100%;
    height: 34%;
  `,
};
