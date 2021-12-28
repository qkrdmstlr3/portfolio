import React from 'react';
import * as Style from './styled';
import { ScreenType } from '../../../templates/main/index';

interface ThirdProps {
  changeScreen: (screen: ScreenType) => void;
}

function Third({ changeScreen }: ThirdProps) {
  return (
    <Style.Container>
      <Style.Top onClick={() => changeScreen('portfolio')}>
        <Style.Title>portfolio</Style.Title>
      </Style.Top>
      <Style.Bottom />
    </Style.Container>
  );
}

export default Third;
