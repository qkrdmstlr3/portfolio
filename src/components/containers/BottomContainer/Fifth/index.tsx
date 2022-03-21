// Dependencies
import React, { useMemo } from 'react';
import { useRecoilValue } from 'recoil';
import * as Style from './styled';
import useScreen from '../../../../hooks/useScreen';
// Components
import Row from './Row';
import ImageBox from '../../../UI/ImageBox';
import PortfolioBox from '../../../UI/PortfolioBox/index';
// Variables & Types
import { carouselIndexState } from '../../../../recoil/carousel/atom';
import { experiences, portfolios, skills } from '../../../../constants/portfolio';

function Fifth() {
  const carouselIndex = useRecoilValue(carouselIndexState);
  const { screen, changeScreen } = useScreen({ screenWantedToChange: 'experience' });
  const middleTopSkills = useMemo(() => skills.slice(6, 9), []);
  const middleBottomSkills = useMemo(() => skills.slice(9), []);

  return (
    <Style.Container>
      <Style.Left aria-label="fifth-left" screen={screen.currentScreen} onClick={changeScreen}>
        <Style.Title>
          {screen.currentScreen === 'experience' || screen.currentScreen === 'portfolio' ? 'exp' : 'experience'}
        </Style.Title>
      </Style.Left>
      <Style.Middle aria-label="fifth-mid" screen={screen.currentScreen}>
        <Row
          screen={screen}
          skills={middleTopSkills}
          carouselIndex={carouselIndex}
          fItems={experiences.map((exp, index) => ({ id: index, text: exp.firstExplanation }))}
          sItems={portfolios.map((port, index) => ({
            id: index,
            startDate: port.startDate,
            endDate: port.endDate,
            explanation: port.explanation,
          }))}
          Component={PortfolioBox}
        />
        <Row
          screen={screen}
          skills={middleBottomSkills}
          carouselIndex={carouselIndex}
          fItems={experiences.map((exp, index) => ({ id: index, text: exp.secondExplanation }))}
          sItems={portfolios.map((port, index) => ({ id: index, src: port.imgLink }))}
          Component={ImageBox}
        />
      </Style.Middle>
      <Style.Right aria-label="fifth-right" screen={screen.currentScreen} />
    </Style.Container>
  );
}

export default Fifth;
