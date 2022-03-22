import { css, SerializedStyles } from '@emotion/react';
import { ScreenType } from '../../../../recoil/screen/atom';

export const topSelector: { [screen in ScreenType]: SerializedStyles } = {
  main: css`
    width: 100%;
    height: 65%;
  `,
  skill: css`
    width: 100%;
    height: 65%;
  `,
  contact: css`
    width: 100%;
    height: 65%;
  `,
  portfolio: css`
    width: 100%;
    height: 65%;
  `,
  experience: css`
    width: 100%;
    height: 42%;
  `,
};

export const bottomSelector: { [screen in ScreenType]: SerializedStyles } = {
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
    height: 35%;
  `,
  experience: css`
    width: 100%;
    height: 58%;
  `,
};
