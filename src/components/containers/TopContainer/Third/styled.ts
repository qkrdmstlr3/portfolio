import styled from '@emotion/styled';
import { CHANGE_SCREEN_SECOND } from '../../../../constants/variables';
import color from '../../../../style/color';
import { ScreenType } from '../../../../recoil/screen/atom';
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

  cursor: pointer;
  color: ${color.white};
  background-color: ${color.red};
  border: 2px solid ${color.black};
  transition: all ${CHANGE_SCREEN_SECOND}s linear;
  ${(props) => topSelector[props.screen]};
`;

export const Title = styled.h2`
  font-size: 2.4rem;
`;

export const Bottom = styled.div<ScreenProps>`
  border: 2px solid ${color.black};
  transition: all ${CHANGE_SCREEN_SECOND}s linear;
  ${(props) => bottomSelector[props.screen]};
`;
