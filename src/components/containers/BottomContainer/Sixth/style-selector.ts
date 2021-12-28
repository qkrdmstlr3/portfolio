import { css, SerializedStyles } from '@emotion/react';
import { ScreenType } from '../../../templates/main';

export const blackBoxSelector: { [screen in ScreenType]: SerializedStyles } = {
  main: css`
    width: 48%;
    height: 100%;
  `,
  skill: css`
    width: 48%;
    height: 100%;
  `,
  contact: css`
    width: 12%;
    height: 100%;
  `,
  portfolio: css`
    width: 30%;
    height: 100%;
  `,
  experience: css`
    width: 48%;
    height: 100%;
  `,
};

export const frontBoxSelector: { [screen in ScreenType]: SerializedStyles } = {
  main: css`
    width: 13%;
    height: 100%;
  `,
  skill: css`
    width: 13%;
    height: 100%;
  `,
  contact: css`
    width: 22%;
    height: 100%;
  `,
  portfolio: css`
    width: 22%;
    height: 100%;
  `,
  experience: css`
    width: 13%;
    height: 100%;
  `,
};

export const rearBoxSelector: { [screen in ScreenType]: SerializedStyles } = {
  main: css`
    width: 13%;
    height: 100%;
  `,
  skill: css`
    width: 13%;
    height: 100%;
  `,
  contact: css`
    width: 22%;
    height: 100%;
  `,
  portfolio: css`
    width: 13%;
    height: 100%;
  `,
  experience: css`
    width: 13%;
    height: 100%;
  `,
};
