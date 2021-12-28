import React from 'react';
import Fifth from './Fifth';
import Seventh from './Seventh';
import Sixth from './Sixth';
import * as Style from './styled';
import { ScreenType } from '../../templates/main/index';

interface BottomContainerProps {
  screen: ScreenType;
  changeScreen: (screen: ScreenType) => void;
}

function BottomContainer({ screen, changeScreen }: BottomContainerProps) {
  return (
    <Style.Container>
      <Style.Top>
        <Fifth screen={screen} changeScreen={changeScreen} />
      </Style.Top>
      <Style.Bottom>
        <Sixth screen={screen} />
        <Seventh changeScreen={changeScreen} />
      </Style.Bottom>
    </Style.Container>
  );
}

export default BottomContainer;
