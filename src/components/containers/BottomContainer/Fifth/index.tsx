import React from 'react';
import { useRecoilValue } from 'recoil';
import * as Style from './styled';
import useScreen from '../../../../hooks/useScreen';
import SkillBox from '../../../UI/SkillBox';
import Carousel from '../../../UI/Carousel';
import CenterBox from '../../../UI/CenterBox';
import { experiences, portfolios } from '../../../../constants/portfolio';
import ImageBox from '../../../UI/ImageBox';
import PortfolioBox from '../../../UI/PortfolioBox/index';
import { SLIDER_SECOND } from '../../../../constants/variables';
import { carouselIndexState } from '../../../../recoil/carousel/atom';

function Fifth() {
  const carouselIndex = useRecoilValue(carouselIndexState);
  const { screen, changeScreen } = useScreen({ screenWantedToChange: 'experience' });
  const middleTopSkills = [
    'https://techstack-generator.vercel.app/js-icon.svg',
    'https://techstack-generator.vercel.app/ts-icon.svg',
    'https://techstack-generator.vercel.app/rescript-icon.svg',
  ];
  const middleBottomSkills = [
    'https://techstack-generator.vercel.app/storybook-icon.svg',
    'https://techstack-generator.vercel.app/jest-icon.svg',
    'https://techstack-generator.vercel.app/testinglibrary-icon.svg',
  ];

  return (
    <Style.Container>
      <Style.Left aria-label="fifth-left" screen={screen.currentScreen} onClick={changeScreen}>
        <Style.Title>
          {screen.currentScreen === 'experience' || screen.currentScreen === 'portfolio' ? 'exp' : 'experience'}
        </Style.Title>
      </Style.Left>
      <Style.Middle aria-label="fifth-mid" screen={screen.currentScreen}>
        <Style.MiddleTop>
          {!screen.changing && screen.currentScreen === 'skill' && <SkillBox skills={middleTopSkills} align="row" />}
          {!screen.changing && screen.currentScreen === 'experience' && (
            <Carousel
              items={experiences.map((exp, index) => ({ id: index, text: exp.firstExplanation }))}
              second={SLIDER_SECOND}
              carouselIndex={carouselIndex}
              Component={CenterBox}
            />
          )}
          {!screen.changing && screen.currentScreen === 'portfolio' && (
            <Carousel
              second={SLIDER_SECOND}
              items={portfolios.map((port, index) => ({
                id: index,
                startDate: port.startDate,
                endDate: port.endDate,
                explanation: port.explanation,
              }))}
              carouselIndex={carouselIndex}
              Component={PortfolioBox}
            />
          )}
        </Style.MiddleTop>
        <Style.MiddleBottom>
          {!screen.changing && screen.currentScreen === 'skill' && <SkillBox skills={middleBottomSkills} align="row" />}
          {!screen.changing && screen.currentScreen === 'experience' && (
            <Carousel
              items={experiences.map((exp, index) => ({ id: index, text: exp.secondExplanation }))}
              second={SLIDER_SECOND}
              carouselIndex={carouselIndex}
              Component={CenterBox}
            />
          )}
          {!screen.changing && screen.currentScreen === 'portfolio' && (
            <Carousel
              second={SLIDER_SECOND}
              items={portfolios.map((port, index) => ({ id: index, src: port.imgLink }))}
              carouselIndex={carouselIndex}
              Component={ImageBox}
            />
          )}
        </Style.MiddleBottom>
      </Style.Middle>
      <Style.Right aria-label="fifth-right" screen={screen.currentScreen} />
    </Style.Container>
  );
}

export default Fifth;
