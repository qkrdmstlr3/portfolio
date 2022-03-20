import React from 'react';
import First from './First';
import Second from './Second';
import * as Style from './styled';
import Third from './Third';
import useScreen from '../../../hooks/useScreen';

function TopContainer() {
  const { screen } = useScreen({});

  return (
    <Style.Container screen={screen.currentScreen}>
      <Style.Left>
        <First />
        <Second />
      </Style.Left>
      <Style.Right>
        <Third />
      </Style.Right>
    </Style.Container>
  );
}

export default TopContainer;
