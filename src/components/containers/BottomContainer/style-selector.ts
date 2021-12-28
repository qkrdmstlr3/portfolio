import { css, SerializedStyles } from '@emotion/react';
import { ScreenType } from '../../templates/main';

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
    height: 53%;
  `,
  experience: css`
    width: 100%;
    height: 35%;
  `,
};

export const topSelector: { [screen in ScreenType]: SerializedStyles } = {
  main: css`
    width: 100%;
    height: 60%;
  `,
  skill: css`
    width: 100%;
    height: 60%;
  `,
  contact: css`
    width: 100%;
    height: 60%;
  `,
  portfolio: css`
    width: 100%;
    height: 73%;
  `,
  experience: css`
    width: 100%;
    height: 60%;
  `,
};

export const bottomSelector: { [screen in ScreenType]: SerializedStyles } = {
  main: css`
    width: 100%;
    height: 40%;
  `,
  skill: css`
    width: 100%;
    height: 40%;
  `,
  contact: css`
    width: 100%;
    height: 40%;
  `,
  portfolio: css`
    width: 100%;
    height: 27%;
  `,
  experience: css`
    width: 100%;
    height: 40%;
  `,
};
