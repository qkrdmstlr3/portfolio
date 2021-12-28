import React from 'react';
import * as Style from './styled';
import { ScreenType } from '../../../templates/main/index';

interface SecondProps {
  screen: ScreenType;
  changeScreen: (screen: ScreenType) => void;
}

function Second({ screen, changeScreen }: SecondProps) {
  return (
    <Style.Container screen={screen}>
      <Style.Left>
        <Style.LeftTop onClick={() => changeScreen('contact')}>
          <Style.Title>contact</Style.Title>
        </Style.LeftTop>
        <Style.LeftBottom />
      </Style.Left>
      <Style.Middle />
      <Style.Right />
    </Style.Container>
  );
}

export default Second;
