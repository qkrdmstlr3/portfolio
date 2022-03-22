import { css, SerializedStyles } from '@emotion/react';
import { ScreenType } from '../../../recoil/screen/atom';
import { SCREEN_SIZE } from '../../../constants/variables';

export const screenSelector: { [screen in ScreenType]: SerializedStyles } = {
  main: css`
    width: ${SCREEN_SIZE.main.middleContainer.width}%;
    height: ${SCREEN_SIZE.main.middleContainer.height}%;
  `,
  skill: css`
    width: ${SCREEN_SIZE.skill.middleContainer.width}%;
    height: ${SCREEN_SIZE.skill.middleContainer.height}%;
  `,
  contact: css`
    width: ${SCREEN_SIZE.contact.middleContainer.width}%;
    height: ${SCREEN_SIZE.contact.middleContainer.height}%;
  `,
  portfolio: css`
    width: ${SCREEN_SIZE.portfolio.middleContainer.width}%;
    height: ${SCREEN_SIZE.portfolio.middleContainer.height}%;
  `,
  experience: css`
    width: ${SCREEN_SIZE.experience.middleContainer.width}%;
    height: ${SCREEN_SIZE.experience.middleContainer.height}%;
  `,
};
