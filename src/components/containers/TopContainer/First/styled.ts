import styled from '@emotion/styled';
import { ScreenType } from '../../../templates/main/index';
import { screenSelector } from './style-selector';

interface ContainerProps {
  screen: ScreenType;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  transition: all 2s;
  ${(props) => screenSelector[props.screen]};
`;

export const Left = styled.div`
  width: 68%;
  height: 100%;
  border: 2px solid black;
`;

export const Right = styled.div`
  width: 37%;
  height: 100%;
  border: 2px solid black;
`;
