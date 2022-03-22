// Dependencies
import React from 'react';
import { useRecoilValue } from 'recoil';
import * as Style from './styled';
// Hooks
import useScreen from '../../../hooks/useScreen';
// Components
import Carousel from '../../UI/Carousel';
// Constants & Types
import { SLIDER_SECOND } from '../../../constants/variables';
import { experiences, portfolios } from '../../../constants/portfolio';
import { carouselIndexState } from '../../../recoil/carousel/atom';

function MiddleContainer() {
  const carouselIndex = useRecoilValue(carouselIndexState);
  const { screen } = useScreen({});

  const getComponent = () => {
    switch (screen.currentScreen) {
      case 'experience':
      case 'portfolio': {
        const items =
          screen.currentScreen === 'experience'
            ? experiences.map((exp, index) => ({ id: index, text: exp.title }))
            : portfolios.map((exp, index) => ({ id: index, text: exp.title }));
        return !screen.changing && <Carousel second={SLIDER_SECOND} items={items} carouselIndex={carouselIndex} />;
      }
      default:
        return (
          <>
            <Style.Explanation>생각을 현실로 구현하는</Style.Explanation>
            <Style.Name>조개소년</Style.Name>
          </>
        );
    }
  };

  return (
    <Style.Container aria-label="middle-container" screen={screen.currentScreen}>
      {getComponent()}
    </Style.Container>
  );
}

export default MiddleContainer;
