import React from 'react';
import { ScreenType } from '../../../templates/main';
import * as Style from './styled';

interface FifthProps {
  screen: ScreenType;
  changeScreen: (screen: ScreenType) => void;
}

function Fifth({ screen, changeScreen }: FifthProps) {
  return (
    <Style.Container>
      <Style.Left screen={screen} onClick={() => changeScreen('experience')}>
        <Style.Title>experience</Style.Title>
      </Style.Left>
      <Style.Middle screen={screen}>
        <Style.MiddleTop />
        <Style.MiddleBottom />
      </Style.Middle>
      <Style.Right screen={screen} />
    </Style.Container>
  );
}

export default Fifth;
