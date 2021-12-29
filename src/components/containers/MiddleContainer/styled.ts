import styled from '@emotion/styled';
import color from '../../../style/color';
import { ScreenType } from '../../templates/main';
import { screenSelector } from './style-selector';

interface ContainerProps {
  screen: ScreenType;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: ${color.white};
  font-weight: bold;
  transition: all 2s linear;
  border: 2px solid ${color.black};
  background-color: ${color.blue};
  ${(props) => screenSelector[props.screen]};
`;

export const Explanation = styled.h2`
  font-size: 2.4rem;
`;

export const Name = styled.h1`
  font-size: 6.4rem;
`;
