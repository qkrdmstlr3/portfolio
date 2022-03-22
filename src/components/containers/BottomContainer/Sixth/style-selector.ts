import { css, SerializedStyles } from '@emotion/react';
import { ScreenType } from '../../../../recoil/screen/atom';
import { SCREEN_SIZE } from '../../../../constants/variables';

export const blackBoxSelector: { [screen in ScreenType]: SerializedStyles } = {
  main: css`
    width: ${SCREEN_SIZE.main.sixthBlackBox.width}%;
    height: ${SCREEN_SIZE.main.sixthBlackBox.height}%;
  `,
  skill: css`
    width: ${SCREEN_SIZE.skill.sixthBlackBox.width}%;
    height: ${SCREEN_SIZE.skill.sixthBlackBox.height}%;
  `,
  contact: css`
    width: ${SCREEN_SIZE.contact.sixthBlackBox.width}%;
    height: ${SCREEN_SIZE.contact.sixthBlackBox.height}%;
  `,
  portfolio: css`
    width: ${SCREEN_SIZE.portfolio.sixthBlackBox.width}%;
    height: ${SCREEN_SIZE.portfolio.sixthBlackBox.height}%;
  `,
  experience: css`
    width: ${SCREEN_SIZE.experience.sixthBlackBox.width}%;
    height: ${SCREEN_SIZE.experience.sixthBlackBox.height}%;
  `,
};

export const frontBoxSelector: { [screen in ScreenType]: SerializedStyles } = {
  main: css`
    width: ${SCREEN_SIZE.main.sixthFrontBox.width}%;
    height: ${SCREEN_SIZE.main.sixthFrontBox.height}%;
  `,
  skill: css`
    width: ${SCREEN_SIZE.skill.sixthFrontBox.width}%;
    height: ${SCREEN_SIZE.skill.sixthFrontBox.height}%;
  `,
  contact: css`
    width: ${SCREEN_SIZE.contact.sixthFrontBox.width}%;
    height: ${SCREEN_SIZE.contact.sixthFrontBox.height}%;
  `,
  portfolio: css`
    width: ${SCREEN_SIZE.portfolio.sixthFrontBox.width}%;
    height: ${SCREEN_SIZE.portfolio.sixthFrontBox.height}%;
  `,
  experience: css`
    width: ${SCREEN_SIZE.experience.sixthFrontBox.width}%;
    height: ${SCREEN_SIZE.experience.sixthFrontBox.height}%;
  `,
};

export const rearBoxSelector: { [screen in ScreenType]: SerializedStyles } = {
  main: css`
    width: ${SCREEN_SIZE.main.sixthRearBox.width}%;
    height: ${SCREEN_SIZE.main.sixthRearBox.height}%;
  `,
  skill: css`
    width: ${SCREEN_SIZE.skill.sixthRearBox.width}%;
    height: ${SCREEN_SIZE.skill.sixthRearBox.height}%;
  `,
  contact: css`
    width: ${SCREEN_SIZE.contact.sixthRearBox.width}%;
    height: ${SCREEN_SIZE.contact.sixthRearBox.height}%;
  `,
  portfolio: css`
    width: ${SCREEN_SIZE.portfolio.sixthRearBox.width}%;
    height: ${SCREEN_SIZE.portfolio.sixthRearBox.height}%;
  `,
  experience: css`
    width: ${SCREEN_SIZE.experience.sixthRearBox.width}%;
    height: ${SCREEN_SIZE.experience.sixthRearBox.height}%;
  `,
};
