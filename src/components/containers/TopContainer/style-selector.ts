import { css, SerializedStyles } from '@emotion/react';
import { ScreenType } from '../../../recoil/screen/atom';
import { SCREEN_SIZE } from '../../../constants/variables';

export const screenSelector: { [screen in ScreenType]: SerializedStyles } = {
  main: css`
    width: ${SCREEN_SIZE.main.topContainer.width}%;
    height: ${SCREEN_SIZE.main.topContainer.height}%;
  `,
  skill: css`
    width: ${SCREEN_SIZE.skill.topContainer.width}%;
    height: ${SCREEN_SIZE.skill.topContainer.height}%;
  `,
  contact: css`
    width: ${SCREEN_SIZE.contact.topContainer.width}%;
    height: ${SCREEN_SIZE.contact.topContainer.height}%;
  `,
  portfolio: css`
    width: ${SCREEN_SIZE.portfolio.topContainer.width}%;
    height: ${SCREEN_SIZE.portfolio.topContainer.height}%;
  `,
  experience: css`
    width: ${SCREEN_SIZE.experience.topContainer.width}%;
    height: ${SCREEN_SIZE.experience.topContainer.height}%;
  `,
};
