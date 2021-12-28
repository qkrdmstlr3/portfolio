import React from 'react';
import * as Style from './styled';
import { ScreenType } from '../../../templates/main/index';

interface SixthProps {
  screen: ScreenType;
}

function Sixth({ screen }: SixthProps) {
  return (
    <Style.Container>
      <Style.BlackBox screen={screen} />
      <Style.FirstBox screen={screen} />
      <Style.SecondBox screen={screen} />
      <Style.ThirdBox screen={screen} />
      <Style.FourthBox screen={screen} />
    </Style.Container>
  );
}

export default Sixth;
