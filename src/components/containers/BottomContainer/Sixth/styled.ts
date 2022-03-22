import styled from '@emotion/styled';
import { CHANGE_SCREEN_SECOND } from '../../../../constants/variables';
import color from '../../../../style/color';
import { ScreenType } from '../../../../recoil/screen/atom';
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
  transition: all ${CHANGE_SCREEN_SECOND}s linear;
  background-color: ${color.black};
  ${(props) => blackBoxSelector[props.screen]};
`;

export const FirstBox = styled.div<ScreenProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid black;
  transition: all ${CHANGE_SCREEN_SECOND}s linear;
  ${(props) => frontBoxSelector[props.screen]};
`;

export const SecondBox = styled.div<ScreenProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid black;
  transition: all ${CHANGE_SCREEN_SECOND}s linear;
  ${(props) => frontBoxSelector[props.screen]};
`;

export const ThirdBox = styled.div<ScreenProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid black;
  transition: all ${CHANGE_SCREEN_SECOND}s linear;
  ${(props) => rearBoxSelector[props.screen]};
`;

export const FourthBox = styled.div<ScreenProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid black;
  transition: all ${CHANGE_SCREEN_SECOND}s linear;
  ${(props) => rearBoxSelector[props.screen]};
`;
