import React from 'react';
import * as Style from './styled';

function HomePage(props) {
  return (
    <Style.Container>
      <Style.Title>Shellboy</Style.Title>
      <Style.TapeImage src="/cassettetape.svg" alt="cassettetape" />
    </Style.Container>
  );
}

export default HomePage;
