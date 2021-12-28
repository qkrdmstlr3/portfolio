import React from 'react';
import TopContainer from '../../containers/TopContainer';
import MiddleContainer from '../../containers/MiddleContainer';
import BottomContainer from '../../containers/BottomContainer';
import * as Style from './styled';

function Main() {
  return (
    <Style.Container>
      <TopContainer />
      <MiddleContainer />
      <BottomContainer />
    </Style.Container>
  );
}

export default Main;
