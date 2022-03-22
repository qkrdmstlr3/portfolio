import { css, SerializedStyles } from '@emotion/react';
import { ScreenType } from '../../../../recoil/screen/atom';
import { SCREEN_SIZE } from '../../../../constants/variables';

export const screenSelector: { [screen in ScreenType]: SerializedStyles } = {
  main: css`
    width: ${SCREEN_SIZE.main.second.width}%;
    height: ${SCREEN_SIZE.main.second.height}%;
  `,
  skill: css`
    width: ${SCREEN_SIZE.skill.second.width}%;
    height: ${SCREEN_SIZE.skill.second.height}%;
  `,
  contact: css`
    width: ${SCREEN_SIZE.contact.second.width}%;
    height: ${SCREEN_SIZE.contact.second.height}%;
  `,
  portfolio: css`
    width: ${SCREEN_SIZE.portfolio.second.width}%;
    height: ${SCREEN_SIZE.portfolio.second.height}%;
  `,
  experience: css`
    width: ${SCREEN_SIZE.experience.second.width}%;
    height: ${SCREEN_SIZE.experience.second.height}%;
  `,
};
