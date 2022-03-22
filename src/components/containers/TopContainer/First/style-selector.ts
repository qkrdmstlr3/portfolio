import { css, SerializedStyles } from '@emotion/react';
import { ScreenType } from '../../../../recoil/screen/atom';
import { SCREEN_SIZE } from '../../../../constants/variables';

export const screenSelector: { [screen in ScreenType]: SerializedStyles } = {
  main: css`
    width: ${SCREEN_SIZE.main.first.width}%;
    height: ${SCREEN_SIZE.main.first.height}%;
  `,
  skill: css`
    width: ${SCREEN_SIZE.skill.first.width}%;
    height: ${SCREEN_SIZE.skill.first.height}%;
  `,
  contact: css`
    width: ${SCREEN_SIZE.contact.first.width}%;
    height: ${SCREEN_SIZE.contact.first.height}%;
  `,
  portfolio: css`
    width: ${SCREEN_SIZE.portfolio.first.width}%;
    height: ${SCREEN_SIZE.portfolio.first.height}%;
  `,
  experience: css`
    width: ${SCREEN_SIZE.experience.first.width}%;
    height: ${SCREEN_SIZE.experience.first.height}%;
  `,
};
