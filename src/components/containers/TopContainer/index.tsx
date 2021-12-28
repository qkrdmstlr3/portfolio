import React from 'react';
import First from './First';
import Second from './Second';
import * as Style from './styled';
import Third from './Third';
import { ScreenType } from '../../templates/main/index';

interface TopContainerProps {
  screen: ScreenType;
  changeScreen: (screen: ScreenType) => void;
}

function TopContainer({ screen, changeScreen }: TopContainerProps) {
  return (
    <Style.Container screen={screen}>
      <Style.Left>
        <First screen={screen} />
        <Second changeScreen={changeScreen} />
      </Style.Left>
      <Style.Right>
        <Third changeScreen={changeScreen} />
      </Style.Right>
    </Style.Container>
  );
}

export default TopContainer;
