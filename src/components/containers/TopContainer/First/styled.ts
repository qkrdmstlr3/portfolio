import styled from '@emotion/styled';
import { CHANGE_SCREEN_SECOND } from '../../../../constants/variables';
import { ScreenType } from '../../../../recoil/screen/atom';
import { screenSelector } from './style-selector';

interface ContainerProps {
  screen: ScreenType;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  transition: all ${CHANGE_SCREEN_SECOND}s linear;
  ${(props) => screenSelector[props.screen]};
`;

export const Left = styled.div`
  width: 65%;
  height: 100%;
  border: 2px solid black;
`;

export const Right = styled.div`
  width: 35%;
  height: 100%;
  border: 2px solid black;
`;
