import React, { useState } from 'react';
import TopContainer from '../../containers/TopContainer';
import MiddleContainer from '../../containers/MiddleContainer';
import BottomContainer from '../../containers/BottomContainer';
import * as Style from './styled';

export type ScreenType = 'main' | 'portfolio' | 'skill' | 'contact' | 'experience';

function Main() {
  const [screen] = useState<ScreenType>('main');

  return (
    <Style.Container>
      <TopContainer />
      <MiddleContainer screen={screen} />
      <BottomContainer />
    </Style.Container>
  );
}

export default Main;
