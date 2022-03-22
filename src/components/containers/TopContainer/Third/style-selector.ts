import { css, SerializedStyles } from '@emotion/react';
import { ScreenType } from '../../../../recoil/screen/atom';
import { SCREEN_SIZE } from '../../../../constants/variables';

export const topSelector: { [screen in ScreenType]: SerializedStyles } = {
  main: css`
    width: ${SCREEN_SIZE.main.thirdTop.width}%;
    height: ${SCREEN_SIZE.main.thirdTop.height}%;
  `,
  skill: css`
    width: ${SCREEN_SIZE.skill.thirdTop.width}%;
    height: ${SCREEN_SIZE.skill.thirdTop.height}%;
  `,
  contact: css`
    width: ${SCREEN_SIZE.contact.thirdTop.width}%;
    height: ${SCREEN_SIZE.contact.thirdTop.height}%;
  `,
  portfolio: css`
    width: ${SCREEN_SIZE.portfolio.thirdTop.width}%;
    height: ${SCREEN_SIZE.portfolio.thirdTop.height}%;
  `,
  experience: css`
    width: ${SCREEN_SIZE.experience.thirdTop.width}%;
    height: ${SCREEN_SIZE.experience.thirdTop.height}%;
  `,
};

export const bottomSelector: { [screen in ScreenType]: SerializedStyles } = {
  main: css`
    width: ${SCREEN_SIZE.main.thirdBottom.width}%;
    height: ${SCREEN_SIZE.main.thirdBottom.height}%;
  `,
  skill: css`
    width: ${SCREEN_SIZE.skill.thirdBottom.width}%;
    height: ${SCREEN_SIZE.skill.thirdBottom.height}%;
  `,
  contact: css`
    width: ${SCREEN_SIZE.contact.thirdBottom.width}%;
    height: ${SCREEN_SIZE.contact.thirdBottom.height}%;
  `,
  portfolio: css`
    width: ${SCREEN_SIZE.portfolio.thirdBottom.width}%;
    height: ${SCREEN_SIZE.portfolio.thirdBottom.height}%;
  `,
  experience: css`
    width: ${SCREEN_SIZE.experience.thirdBottom.width}%;
    height: ${SCREEN_SIZE.experience.thirdBottom.height}%;
  `,
};
