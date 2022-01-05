import React from 'react';
import * as Style from './styled';
import { ScreenType } from '../../../templates/main/index';

interface ThirdProps {
  screen: ScreenType;
  changeScreen: (screen: ScreenType) => void;
}

function Third({ screen, changeScreen }: ThirdProps) {
  return (
    <Style.Container>
      <Style.Top aria-label="third-top" screen={screen} onClick={() => changeScreen('portfolio')}>
        <Style.Title>portfolio</Style.Title>
      </Style.Top>
      <Style.Bottom aria-label="third-bottom" screen={screen} />
    </Style.Container>
  );
}

export default Third;
