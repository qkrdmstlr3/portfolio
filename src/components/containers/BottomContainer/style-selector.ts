import { css, SerializedStyles } from '@emotion/react';
import { ScreenType } from '../../../recoil/screen/atom';
import { SCREEN_SIZE } from '../../../constants/variables';

export const screenSelector: { [screen in ScreenType]: SerializedStyles } = {
  main: css`
    width: ${SCREEN_SIZE.main.bottomContainer.width}%;
    height: ${SCREEN_SIZE.main.bottomContainer.height}%;
  `,
  skill: css`
    width: ${SCREEN_SIZE.skill.bottomContainer.width}%;
    height: ${SCREEN_SIZE.skill.bottomContainer.height}%;
  `,
  contact: css`
    width: ${SCREEN_SIZE.contact.bottomContainer.width}%;
    height: ${SCREEN_SIZE.contact.bottomContainer.height}%;
  `,
  portfolio: css`
    width: ${SCREEN_SIZE.portfolio.bottomContainer.width}%;
    height: ${SCREEN_SIZE.portfolio.bottomContainer.height}%;
  `,
  experience: css`
    width: ${SCREEN_SIZE.experience.bottomContainer.width}%;
    height: ${SCREEN_SIZE.experience.bottomContainer.height}%;
  `,
};

export const topSelector: { [screen in ScreenType]: SerializedStyles } = {
  main: css`
    width: ${SCREEN_SIZE.main.bottomTop.width}%;
    height: ${SCREEN_SIZE.main.bottomTop.height}%;
  `,
  skill: css`
    width: ${SCREEN_SIZE.skill.bottomTop.width}%;
    height: ${SCREEN_SIZE.skill.bottomTop.height}%;
  `,
  contact: css`
    width: ${SCREEN_SIZE.contact.bottomTop.width}%;
    height: ${SCREEN_SIZE.contact.bottomTop.height}%;
  `,
  portfolio: css`
    width: ${SCREEN_SIZE.portfolio.bottomTop.width}%;
    height: ${SCREEN_SIZE.portfolio.bottomTop.height}%;
  `,
  experience: css`
    width: ${SCREEN_SIZE.experience.bottomTop.width}%;
    height: ${SCREEN_SIZE.experience.bottomTop.height}%;
  `,
};

export const bottomSelector: { [screen in ScreenType]: SerializedStyles } = {
  main: css`
    width: ${SCREEN_SIZE.main.bottomBottom.width}%;
    height: ${SCREEN_SIZE.main.bottomBottom.height}%;
  `,
  skill: css`
    width: ${SCREEN_SIZE.skill.bottomBottom.width}%;
    height: ${SCREEN_SIZE.skill.bottomBottom.height}%;
  `,
  contact: css`
    width: ${SCREEN_SIZE.contact.bottomBottom.width}%;
    height: ${SCREEN_SIZE.contact.bottomBottom.height}%;
  `,
  portfolio: css`
    width: ${SCREEN_SIZE.portfolio.bottomBottom.width}%;
    height: ${SCREEN_SIZE.portfolio.bottomBottom.height}%;
  `,
  experience: css`
    width: ${SCREEN_SIZE.experience.bottomBottom.width}%;
    height: ${SCREEN_SIZE.experience.bottomBottom.height}%;
  `,
};
