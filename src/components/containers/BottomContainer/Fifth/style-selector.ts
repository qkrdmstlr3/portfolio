import { css, SerializedStyles } from '@emotion/react';
import { ScreenType } from '../../../templates/main';

export const leftSelector: { [screen in ScreenType]: SerializedStyles } = {
  main: css`
    width: 37%;
    height: 100%;
  `,
  skill: css`
    width: 37%;
    height: 100%;
  `,
  contact: css`
    width: 37%;
    height: 100%;
  `,
  portfolio: css`
    width: 15%;
    height: 100%;
  `,
  experience: css`
    width: 15%;
    height: 100%;
  `,
};

export const middleSelector: { [screen in ScreenType]: SerializedStyles } = {
  main: css`
    width: 40%;
    height: 100%;
  `,
  skill: css`
    width: 48%;
    height: 100%;
  `,
  contact: css`
    width: 40%;
    height: 100%;
  `,
  portfolio: css`
    width: 70%;
    height: 100%;
  `,
  experience: css`
    width: 70%;
    height: 100%;
  `,
};

export const rightSelector: { [screen in ScreenType]: SerializedStyles } = {
  main: css`
    width: 23%;
    height: 100%;
  `,
  skill: css`
    width: 15%;
    height: 100%;
  `,
  contact: css`
    width: 23%;
    height: 100%;
  `,
  portfolio: css`
    width: 15%;
    height: 100%;
  `,
  experience: css`
    width: 15%;
    height: 100%;
  `,
};
