import React from 'react';
import Fifth from './Fifth';
import Seventh from './Seventh';
import Sixth from './Sixth';
import * as Style from './styled';
import useScreen from '../../../hooks/useScreen';

interface BottomContainerProps {
  carouselIndex: number;
}

function BottomContainer({ carouselIndex }: BottomContainerProps) {
  const { screen } = useScreen({});

  return (
    <Style.Container screen={screen.currentScreen}>
      <Style.Top screen={screen.currentScreen}>
        <Fifth carouselIndex={carouselIndex} />
      </Style.Top>
      <Style.Bottom screen={screen.currentScreen}>
        <Sixth carouselIndex={carouselIndex} />
        <Seventh />
      </Style.Bottom>
    </Style.Container>
  );
}

export default BottomContainer;
