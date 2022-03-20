import React from 'react';
import Fifth from './Fifth';
import Seventh from './Seventh';
import Sixth from './Sixth';
import * as Style from './styled';
import useScreen from '../../../hooks/useScreen';

function BottomContainer() {
  const { screen } = useScreen({});

  return (
    <Style.Container screen={screen.currentScreen}>
      <Style.Top screen={screen.currentScreen}>
        <Fifth />
      </Style.Top>
      <Style.Bottom screen={screen.currentScreen}>
        <Sixth />
        <Seventh />
      </Style.Bottom>
    </Style.Container>
  );
}

export default BottomContainer;
