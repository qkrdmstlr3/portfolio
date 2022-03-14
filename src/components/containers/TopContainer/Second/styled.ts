import styled from '@emotion/styled';
import mq from '../../../../style/mq';
import color from '../../../../style/color';
import { ScreenType } from '../../../templates/main';
import { screenSelector } from './style-selector';
import { CHANGE_SCREEN_SECOND } from '../../../../constants/variables';

interface ContainerProps {
  screen: ScreenType;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  transition: all ${CHANGE_SCREEN_SECOND}s linear;
  ${(props) => screenSelector[props.screen]};
`;

export const Left = styled.div`
  width: 32%;
  height: 100%;
  overflow: hidden;
`;

export const LeftTop = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  border: 2px solid black;
  background-color: ${color.black};
`;

export const Title = styled.h2`
  color: ${color.white};
  font-size: 2.1rem;

  ${mq('sm')} {
    font-size: 1.2rem;
  }
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
