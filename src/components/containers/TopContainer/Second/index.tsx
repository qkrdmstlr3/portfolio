import React from 'react';
import * as Style from './styled';
import { ScreenType } from '../../../templates/main/index';

interface SecondProps {
  changeScreen: (screen: ScreenType) => void;
}

function Second({ changeScreen }: SecondProps) {
  return (
    <Style.Container>
      <Style.Left>
        <Style.LeftTop>
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
