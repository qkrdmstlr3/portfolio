import React from 'react';
import { ScreenType } from '../../../templates/main';
import * as Style from './styled';

interface FirstProps {
  screen: ScreenType;
}

function First({ screen }: FirstProps) {
  return (
    <Style.Container screen={screen}>
      <Style.Left />
      <Style.Right />
    </Style.Container>
  );
}

export default First;
