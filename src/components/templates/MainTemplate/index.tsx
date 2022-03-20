import React, { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import TopContainer from '../../containers/TopContainer';
import MiddleContainer from '../../containers/MiddleContainer';
import BottomContainer from '../../containers/BottomContainer';
import * as Style from './styled';
import { portfolios, experiences } from '../../../constants/portfolio';
import { SLIDER_SECOND } from '../../../constants/variables';
import useScreen from '../../../hooks/useScreen';
import { carouselIndexState } from '../../../recoil/carousel/atom';

export type ScreenType = 'main' | 'portfolio' | 'skill' | 'contact' | 'experience';

function MainTemplate() {
  const setCarouselIndex = useSetRecoilState(carouselIndexState);
  const { screen } = useScreen({});

  const adjustCarouselIndex = () => {
    if (screen.currentScreen === 'experience') setCarouselIndex((prev) => (prev + 1) % experiences.length);
    else if (screen.currentScreen === 'portfolio') setCarouselIndex((prev) => (prev + 1) % portfolios.length);
  };

  useEffect(() => {
    if (screen.currentScreen !== 'experience' && screen.currentScreen !== 'portfolio') return () => {};
    setCarouselIndex(0);

    const timeout = setInterval(adjustCarouselIndex, SLIDER_SECOND * 1000);
    return () => clearInterval(timeout);
  }, [screen.currentScreen]);

  return (
    <Style.Container>
      <TopContainer />
      <MiddleContainer />
      <BottomContainer />
    </Style.Container>
  );
}

export default MainTemplate;
