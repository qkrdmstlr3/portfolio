import React from 'react';
import * as Style from './styled';
import useScreen from '../../../../hooks/useScreen';

function Third() {
  const { screen, changeScreen } = useScreen({ screenWantedToChange: 'portfolio' });

  return (
    <Style.Container>
      <Style.Top aria-label="third-top" screen={screen.currentScreen} onClick={changeScreen}>
        <Style.Title>portfolio</Style.Title>
      </Style.Top>
      <Style.Bottom aria-label="third-bottom" screen={screen.currentScreen} />
    </Style.Container>
  );
}

export default Third;
