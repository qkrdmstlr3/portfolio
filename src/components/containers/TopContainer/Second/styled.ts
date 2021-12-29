import styled from '@emotion/styled';
import color from '../../../../style/color';
import { ScreenType } from '../../../templates/main';
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
  width: 32%;
  height: 100%;
`;

export const LeftTop = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  cursor: pointer;
  border: 2px solid black;
  background-color: ${color.black};
`;

export const Title = styled.h2`
  color: ${color.white};
  font-size: 2.1rem;
`;

export const LeftBottom = styled.div`
  width: 100%;
  height: 50%;
  border: 2px solid black;
`;

export const Middle = styled.div`
  overflow: hidden;
  width: 36%;
  height: 100%;
  border: 2px solid black;
`;

export const Right = styled.div`
  overflow: hidden;
  width: 37%;
  height: 100%;
  border: 2px solid black;
`;
