import React from 'react';
import useScreen from '../../../hooks/useScreen';
import * as Style from './styled';
import Carousel from '../../UI/Carousel';
import CenterBox from '../../UI/CenterBox/index';
import { experiences, portfolios } from '../../../constants/portfolio';
import { SLIDER_SECOND } from '../../../constants/variables';

interface MiddleContainerProps {
  carouselIndex: number;
}

function MiddleContainer({ carouselIndex }: MiddleContainerProps) {
  const { screen } = useScreen({});

  return (
    <Style.Container aria-label="middle-container" screen={screen.currentScreen}>
      {(screen.currentScreen === 'main' || screen.currentScreen === 'skill' || screen.currentScreen === 'contact') && (
        <>
          <Style.Explanation>생각을 현실로 구현하는</Style.Explanation>
          <Style.Name>조개소년</Style.Name>
        </>
      )}
      {!screen.changing && screen.currentScreen === 'experience' && (
        <Carousel
          second={SLIDER_SECOND}
          items={experiences.map((exp, index) => ({ id: index, text: exp.title }))}
          carouselIndex={carouselIndex}
          Component={CenterBox}
        />
      )}
      {!screen.changing && screen.currentScreen === 'portfolio' && (
        <Carousel
          second={SLIDER_SECOND}
          items={portfolios.map((exp, index) => ({ id: index, text: exp.title }))}
          carouselIndex={carouselIndex}
          Component={CenterBox}
        />
      )}
    </Style.Container>
  );
}

export default MiddleContainer;
