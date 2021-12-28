import styled from '@emotion/styled';
import { ScreenType } from '../../templates/main';
import { screenSelector } from './style-selector';

interface ContainerProps {
  screen: ScreenType;
}

export const Container = styled.div<ContainerProps>`
  display: flex;

  transition: all 2s linear;
  ${(props) => screenSelector[props.screen]};
`;

export const Left = styled.div`
  width: 55%;
  height: 100%;
`;

export const Right = styled.div`
  width: 45%;
  height: 100%;
`;
