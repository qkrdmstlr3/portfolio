import React, { useMemo } from 'react';
import { useRecoilValue } from 'recoil';
import * as Style from './styled';
import useScreen from '../../../../hooks/useScreen';
import SkillBox from '../../../UI/SkillBox';
import { experiences, portfolios, skills } from '../../../../constants/portfolio';
import Carousel from '../../../UI/Carousel';
import TextColumnBox from '../../../UI/TextColumnBox/index';
import ImageBox from '../../../UI/ImageBox';
import { SLIDER_SECOND } from '../../../../constants/variables';
import { carouselIndexState } from '../../../../recoil/carousel/atom';

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
      <Style.Middle>
        {!screen.changing && screen.currentScreen === 'skill' && <SkillBox skills={middleSkills} align="column" />}
        {!screen.changing && screen.currentScreen === 'experience' && (
          <Carousel
            second={SLIDER_SECOND}
            items={experiences.map((exp, index) => ({
              id: index,
              text: exp.startDate.toLocaleDateString().slice(0, 9),
            }))}
            carouselIndex={carouselIndex}
            Component={TextColumnBox}
          />
        )}
      </Style.Middle>
      <Style.Right>
        {!screen.changing && screen.currentScreen === 'skill' && <SkillBox skills={rightSkills} align="column" />}
        {!screen.changing && screen.currentScreen === 'experience' && (
          <Carousel
            second={SLIDER_SECOND}
            items={experiences.map((exp, index) => ({ id: index, text: exp.endDate.toLocaleDateString().slice(0, 9) }))}
            carouselIndex={carouselIndex}
            Component={TextColumnBox}
          />
        )}
      </Style.Right>
    </Style.Container>
  );
}

export default Second;
