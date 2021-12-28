import React from 'react';
import { ScreenType } from '../../templates/main';
import * as Style from './styled';

interface MiddleContainerProps {
  screen: ScreenType;
}

function MiddleContainer({ screen }: MiddleContainerProps) {
  return (
    <Style.Container screen={screen}>
      <Style.Explanation>개발을 정말 열심히하는</Style.Explanation>
      <Style.Name>조개소년</Style.Name>
    </Style.Container>
  );
}

export default MiddleContainer;
