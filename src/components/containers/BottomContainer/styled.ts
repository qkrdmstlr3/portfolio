import styled from '@emotion/styled';
import { CHANGE_SCREEN_SECOND } from '../../../constants/variables';
import { ScreenType } from '../../templates/main';
import { screenSelector, topSelector, bottomSelector } from './style-selector';

interface ScreenProps {
  screen: ScreenType;
}

export const Container = styled.div<ScreenProps>`
  transition: all ${CHANGE_SCREEN_SECOND}s linear;
  ${(props) => screenSelector[props.screen]};
`;

export const Top = styled.div<ScreenProps>`
  transition: all ${CHANGE_SCREEN_SECOND}s linear;
  ${(props) => topSelector[props.screen]};
`;

export const Bottom = styled.div<ScreenProps>`
  display: flex;
  transition: all ${CHANGE_SCREEN_SECOND}s linear;
  ${(props) => bottomSelector[props.screen]};
`;
