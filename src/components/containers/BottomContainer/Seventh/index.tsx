import React from 'react';
import * as Style from './styled';
import useScreen from '../../../../hooks/useScreen';

function Seventh() {
  const { changeScreen } = useScreen({ screenWantedToChange: 'skill' });

  return (
    <Style.Container>
      <Style.Top aria-label="seventh-top" onClick={changeScreen}>
        <Style.Title>skill</Style.Title>
      </Style.Top>
      <Style.Bottom />
    </Style.Container>
  );
}

export default Seventh;
