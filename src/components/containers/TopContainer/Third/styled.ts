import styled from '@emotion/styled';
import color from '../../../../style/color';
import { ScreenType } from '../../../templates/main/index';
import { topSelector, bottomSelector } from './style-selector';

interface ScreenProps {
  screen: ScreenType;
}

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Top = styled.div<ScreenProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  transition: all 2s linear;
  cursor: pointer;
  color: ${color.white};
  background-color: ${color.red};
  border: 2px solid ${color.black};
  ${(props) => topSelector[props.screen]};
`;

export const Title = styled.h2`
  font-size: 2.4rem;
`;

export const Bottom = styled.div<ScreenProps>`
  transition: all 2s linear;
  border: 2px solid ${color.black};
  ${(props) => bottomSelector[props.screen]};
`;
