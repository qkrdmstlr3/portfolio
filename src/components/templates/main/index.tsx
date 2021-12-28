import React, { useState } from 'react';
import TopContainer from '../../containers/TopContainer';
import MiddleContainer from '../../containers/MiddleContainer';
import BottomContainer from '../../containers/BottomContainer';
import * as Style from './styled';

export type ScreenType = 'main' | 'portfolio' | 'skill' | 'contact' | 'experience';

function Main() {
  const [screen, setScreen] = useState<ScreenType>('main');

  const changeScreen = (changedScreen: ScreenType) => {
    setScreen(screen === changedScreen ? 'main' : changedScreen);
  };

  return (
    <Style.Container>
      <TopContainer screen={screen} changeScreen={changeScreen} />
      <MiddleContainer screen={screen} />
      <BottomContainer screen={screen} changeScreen={changeScreen} />
    </Style.Container>
  );
}

export default Main;
