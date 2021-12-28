import styled from '@emotion/styled';
import { ScreenType } from '../../templates/main';
import { screenSelector, topSelector, bottomSelector } from './style-selector';

interface ScreenProps {
  screen: ScreenType;
}

export const Container = styled.div<ScreenProps>`
  transition: all 2s linear;
  ${(props) => screenSelector[props.screen]};
`;

export const Top = styled.div<ScreenProps>`
  transition: all 2s linear;
  ${(props) => topSelector[props.screen]};
`;

export const Bottom = styled.div<ScreenProps>`
  display: flex;
  transition: all 2s linear;
  ${(props) => bottomSelector[props.screen]};
`;
