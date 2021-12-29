import React from 'react';
import First from './First';
import Second from './Second';
import * as Style from './styled';
import Third from './Third';
import { ScreenType } from '../../templates/main/index';

interface TopContainerProps {
  screen: ScreenType;
  changing: boolean;
  changeScreen: (screen: ScreenType) => void;
}

function TopContainer({ screen, changing, changeScreen }: TopContainerProps) {
  return (
    <Style.Container screen={screen}>
      <Style.Left>
        <First screen={screen} />
        <Second changing={changing} screen={screen} changeScreen={changeScreen} />
      </Style.Left>
      <Style.Right>
        <Third screen={screen} changeScreen={changeScreen} />
      </Style.Right>
    </Style.Container>
  );
}

export default TopContainer;
