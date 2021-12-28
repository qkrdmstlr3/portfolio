import React from 'react';
import Fifth from './Fifth';
import Seventh from './Seventh';
import Sixth from './Sixth';
import * as Style from './styled';

function FourthContainer() {
  return (
    <Style.Container>
      <Style.Top>
        <Fifth />
      </Style.Top>
      <Style.Bottom>
        <Sixth />
        <Seventh />
      </Style.Bottom>
    </Style.Container>
  );
}

export default FourthContainer;
