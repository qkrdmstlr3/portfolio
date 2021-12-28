import styled from '@emotion/styled';
import color from '../../../../style/color';
import { ScreenType } from '../../../templates/main';
import { blackBoxSelector, frontBoxSelector, rearBoxSelector } from './style-selector';

interface ScreenProps {
  screen: ScreenType;
}

export const Container = styled.div`
  width: 77%;
  height: 100%;
  display: flex;
`;

export const BlackBox = styled.div<ScreenProps>`
  border: 2px solid black;
  transition: all 2s;
  background-color: ${color.black};
  ${(props) => blackBoxSelector[props.screen]};
`;

export const FirstBox = styled.div<ScreenProps>`
  border: 2px solid black;
  transition: all 2s;
  ${(props) => frontBoxSelector[props.screen]};
`;

export const SecondBox = styled.div<ScreenProps>`
  border: 2px solid black;
  transition: all 2s;
  ${(props) => frontBoxSelector[props.screen]};
`;

export const ThirdBox = styled.div<ScreenProps>`
  border: 2px solid black;
  transition: all 2s;
  ${(props) => rearBoxSelector[props.screen]};
`;

export const FourthBox = styled.div<ScreenProps>`
  border: 2px solid black;
  transition: all 2s;
  ${(props) => rearBoxSelector[props.screen]};
`;
