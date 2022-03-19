import React, { useEffect, useState } from 'react';
import TopContainer from '../../containers/TopContainer';
import MiddleContainer from '../../containers/MiddleContainer';
import BottomContainer from '../../containers/BottomContainer';
import * as Style from './styled';
import { portfolios, experiences } from '../../../constants/portfolio';
import { SLIDER_SECOND } from '../../../constants/variables';

export type ScreenType = 'main' | 'portfolio' | 'skill' | 'contact' | 'experience';

function MainTemplate() {
  const [carouselIndex, setCarouselIndex] = useState<number>(0);
  const [screen, setScreen] = useState<ScreenType>('main');

  useEffect(() => {
    setCarouselIndex(0);
    const timeout = setInterval(() => {
      if (screen === 'experience') setCarouselIndex((prev) => (prev + 1) % experiences.length);
      else if (screen === 'portfolio') setCarouselIndex((prev) => (prev + 1) % portfolios.length);
    }, SLIDER_SECOND * 1000);

    return () => clearInterval(timeout);
  }, [screen]);

  return (
    <Style.Container>
      <TopContainer carouselIndex={carouselIndex} />
      <MiddleContainer carouselIndex={carouselIndex} />
      <BottomContainer carouselIndex={carouselIndex} />
    </Style.Container>
  );
}

export default MainTemplate;
