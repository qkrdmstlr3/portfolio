import React, { useMemo } from 'react';
import { useRecoilValue } from 'recoil';
import * as Style from './styled';
import useScreen from '../../../../hooks/useScreen';
import { experiences, portfolios, skills } from '../../../../constants/portfolio';
import Carousel from '../../../UI/Carousel';
import ImageBox from '../../../UI/ImageBox';
import { SLIDER_SECOND } from '../../../../constants/variables';
import { carouselIndexState } from '../../../../recoil/carousel/atom';
import Column from './Column';

function Second() {
  const carouselIndex = useRecoilValue(carouselIndexState);
  const { screen, changeScreen } = useScreen({ screenWantedToChange: 'contact' });
  const middleSkills = useMemo(() => skills.slice(0, 3), []);
  const rightSkills = useMemo(() => skills.slice(3, 6), []);

  return (
    <Style.Container aria-label="second-container" screen={screen.currentScreen}>
      <Style.Left>
        <Style.LeftTop aria-label="second-left-top" onClick={changeScreen}>
          <Style.Title>contact</Style.Title>
        </Style.LeftTop>
        <Style.LeftBottom>
          {!screen.changing && screen.currentScreen === 'portfolio' && (
            <Carousel
              second={SLIDER_SECOND}
              items={portfolios.map((port, index) => ({ id: index, src: port.logo }))}
              carouselIndex={carouselIndex}
              Component={ImageBox}
            />
          )}
        </Style.LeftBottom>
      </Style.Left>
      <Column
        screen={screen}
        skills={middleSkills}
        items={experiences.map((exp, index) => ({ id: index, text: exp.startDate.toLocaleDateString().slice(0, 9) }))}
        carouselIndex={carouselIndex}
      />
      <Column
        screen={screen}
        skills={rightSkills}
        items={experiences.map((exp, index) => ({ id: index, text: exp.endDate.toLocaleDateString().slice(0, 9) }))}
        carouselIndex={carouselIndex}
      />
    </Style.Container>
  );
}

export default Second;
