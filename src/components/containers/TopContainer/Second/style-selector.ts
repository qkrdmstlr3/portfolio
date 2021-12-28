import { css, SerializedStyles } from '@emotion/react';
import { ScreenType } from '../../../templates/main';

export const screenSelector: { [screen in ScreenType]: SerializedStyles } = {
  main: css`
    width: 100%;
    height: 66%;
  `,
  skill: css`
    width: 100%;
    height: 83%;
  `,
  contact: css`
    width: 100%;
    height: 66%;
  `,
  portfolio: css`
    width: 100%;
    height: 66%;
  `,
  experience: css`
    width: 100%;
    height: 78%;
  `,
};
