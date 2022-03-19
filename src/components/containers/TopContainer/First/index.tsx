import React from 'react';
import * as Style from './styled';
import useScreen from '../../../../hooks/useScreen';

function First() {
  const { screen } = useScreen({});

  return (
    <Style.Container aria-label="first-container" screen={screen.currentScreen}>
      <Style.Left />
      <Style.Right />
    </Style.Container>
  );
}

export default First;
