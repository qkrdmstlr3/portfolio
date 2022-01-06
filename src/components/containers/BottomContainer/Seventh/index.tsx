import React from 'react';
import * as Style from './styled';
import { ScreenType } from '../../../templates/main';

interface SeventhProps {
  changeScreen: (screen: ScreenType) => void;
}

function Seventh({ changeScreen }: SeventhProps) {
  return (
    <Style.Container>
      <Style.Top aria-label="seventh-top" onClick={() => changeScreen('skill')}>
        <Style.Title>skill</Style.Title>
      </Style.Top>
      <Style.Bottom />
    </Style.Container>
  );
}

export default Seventh;
