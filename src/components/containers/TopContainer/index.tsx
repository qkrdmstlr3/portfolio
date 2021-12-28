import React from 'react';
import First from './First';
import Second from './Second';
import * as Style from './styled';
import Third from './Third';

function TopContainer() {
  return (
    <Style.Container>
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
