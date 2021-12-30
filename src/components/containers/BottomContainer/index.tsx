import React from 'react';
import Fifth from './Fifth';
import Seventh from './Seventh';
import Sixth from './Sixth';
import * as Style from './styled';
import { ScreenType } from '../../templates/main/index';

interface BottomContainerProps {
  screen: ScreenType;
  changing: boolean;
  carouselIndex: number;
  changeScreen: (screen: ScreenType) => void;
}

function BottomContainer({ screen, changing, carouselIndex, changeScreen }: BottomContainerProps) {
  return (
    <Style.Container screen={screen}>
      <Style.Top screen={screen}>
        <Fifth carouselIndex={carouselIndex} changing={changing} screen={screen} changeScreen={changeScreen} />
      </Style.Top>
      <Style.Bottom screen={screen}>
        <Sixth changing={changing} screen={screen} />
        <Seventh changeScreen={changeScreen} />
      </Style.Bottom>
    </Style.Container>
  );
}

export default BottomContainer;
