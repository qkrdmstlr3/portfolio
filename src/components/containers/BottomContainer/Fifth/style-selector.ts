import { css, SerializedStyles } from '@emotion/react';
import { ScreenType } from '../../../../recoil/screen/atom';
import { SCREEN_SIZE } from '../../../../constants/variables';

export const leftSelector: { [screen in ScreenType]: SerializedStyles } = {
  main: css`
    width: ${SCREEN_SIZE.main.fifthLeft.width}%;
    height: ${SCREEN_SIZE.main.fifthLeft.height}%;
  `,
  skill: css`
    width: ${SCREEN_SIZE.skill.fifthLeft.width}%;
    height: ${SCREEN_SIZE.skill.fifthLeft.height}%;
  `,
  contact: css`
    width: ${SCREEN_SIZE.contact.fifthLeft.width}%;
    height: ${SCREEN_SIZE.contact.fifthLeft.height}%;
  `,
  portfolio: css`
    width: ${SCREEN_SIZE.portfolio.fifthLeft.width}%;
    height: ${SCREEN_SIZE.portfolio.fifthLeft.height}%;
  `,
  experience: css`
    width: ${SCREEN_SIZE.experience.fifthLeft.width}%;
    height: ${SCREEN_SIZE.experience.fifthLeft.height}%;
  `,
};

export const middleSelector: { [screen in ScreenType]: SerializedStyles } = {
  main: css`
    width: ${SCREEN_SIZE.main.fifthMiddle.width}%;
    height: ${SCREEN_SIZE.main.fifthMiddle.height}%;
  `,
  skill: css`
    width: ${SCREEN_SIZE.skill.fifthMiddle.width}%;
    height: ${SCREEN_SIZE.skill.fifthMiddle.height}%;
  `,
  contact: css`
    width: ${SCREEN_SIZE.contact.fifthMiddle.width}%;
    height: ${SCREEN_SIZE.contact.fifthMiddle.height}%;
  `,
  portfolio: css`
    width: ${SCREEN_SIZE.portfolio.fifthMiddle.width}%;
    height: ${SCREEN_SIZE.portfolio.fifthMiddle.height}%;
  `,
  experience: css`
    width: ${SCREEN_SIZE.experience.fifthMiddle.width}%;
    height: ${SCREEN_SIZE.experience.fifthMiddle.height}%;
  `,
};

export const rightSelector: { [screen in ScreenType]: SerializedStyles } = {
  main: css`
    width: ${SCREEN_SIZE.main.fifthRight.width}%;
    height: ${SCREEN_SIZE.main.fifthRight.height}%;
  `,
  skill: css`
    width: ${SCREEN_SIZE.skill.fifthRight.width}%;
    height: ${SCREEN_SIZE.skill.fifthRight.height}%;
  `,
  contact: css`
    width: ${SCREEN_SIZE.contact.fifthRight.width}%;
    height: ${SCREEN_SIZE.contact.fifthRight.height}%;
  `,
  portfolio: css`
    width: ${SCREEN_SIZE.portfolio.fifthRight.width}%;
    height: ${SCREEN_SIZE.portfolio.fifthRight.height}%;
  `,
  experience: css`
    width: ${SCREEN_SIZE.experience.fifthRight.width}%;
    height: ${SCREEN_SIZE.experience.fifthRight.height}%;
  `,
};
