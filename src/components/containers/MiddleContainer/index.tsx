import React from 'react';
import { ScreenType } from '../../templates/main';
import * as Style from './styled';
import Carousel from '../../UI/Carousel';
import CenterBox from '../../UI/CenterBox/index';
import { experiences, portfolios } from '../../../constants';

interface MiddleContainerProps {
  screen: ScreenType;
  changing: boolean;
  carouselIndex: number;
}

function MiddleContainer({ screen, carouselIndex, changing }: MiddleContainerProps) {
  return (
    <Style.Container aria-label="middle-container" screen={screen}>
      {(screen === 'main' || screen === 'skill' || screen === 'contact') && (
        <>
          <Style.Explanation>생각을 현실로 구현하는</Style.Explanation>
          <Style.Name>조개소년</Style.Name>
        </>
      )}
      {!changing && screen === 'experience' && (
        <Carousel
          second={3}
          items={experiences.map((exp) => exp.title)}
          carouselIndex={carouselIndex}
          Component={CenterBox}
        />
      )}
      {!changing && screen === 'portfolio' && (
        <Carousel
          second={3}
          items={portfolios.map((exp) => exp.title)}
          carouselIndex={carouselIndex}
          Component={CenterBox}
        />
      )}
    </Style.Container>
  );
}

export default MiddleContainer;
