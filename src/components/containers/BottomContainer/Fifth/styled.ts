import styled from '@emotion/styled';
import color from '../../../../style/color';
import { ScreenType } from '../../../templates/main/index';
import { leftSelector, middleSelector, rightSelector } from './style-selector';

interface ScreenProps {
  screen: ScreenType;
}

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const Left = styled.div<ScreenProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  overflow: hidden;
  border: 2px solid black;
  background-color: ${color.yellow};
  transition: all 2s;
  ${(props) => leftSelector[props.screen]};
`;

export const Title = styled.h2`
  color: ${color.white};
  font-size: 2.4rem;
`;

export const Middle = styled.div<ScreenProps>`
  transition: all 2s;
  ${(props) => middleSelector[props.screen]};
`;

export const MiddleTop = styled.div`
  width: 100%;
  height: 50%;
  border: 2px solid black;
`;

export const MiddleBottom = styled.div`
  width: 100%;
  height: 50%;
  border: 2px solid black;
`;

export const Right = styled.div<ScreenProps>`
  border: 2px solid black;
  transition: all 2s;
  ${(props) => rightSelector[props.screen]};
`;
