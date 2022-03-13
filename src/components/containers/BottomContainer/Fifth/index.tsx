import React from 'react';
import { ScreenType } from '../../../templates/main';
import * as Style from './styled';
import SkillBox from '../../../UI/SkillBox';
import Carousel from '../../../UI/Carousel';
import CenterBox from '../../../UI/CenterBox';
import { experiences, portfolios } from '../../../../constants';
import ImageBox from '../../../UI/ImageBox';
import PortfolioBox from '../../../UI/PortfolioBox/index';

interface FifthProps {
  screen: ScreenType;
  changing: boolean;
  carouselIndex: number;
  changeScreen: (screen: ScreenType) => void;
}

function Fifth({ screen, changing, carouselIndex, changeScreen }: FifthProps) {
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
      <Style.Left aria-label="fifth-left" screen={screen} onClick={() => changeScreen('experience')}>
        <Style.Title>{screen === 'experience' || screen === 'portfolio' ? 'exp' : 'experience'}</Style.Title>
      </Style.Left>
      <Style.Middle aria-label="fifth-mid" screen={screen}>
        <Style.MiddleTop>
          {!changing && screen === 'skill' && <SkillBox skills={middleTopSkills} align="row" />}
          {!changing && screen === 'experience' && (
            <Carousel
              items={experiences.map((exp) => exp.firstExplanation)}
              second={3}
              carouselIndex={carouselIndex}
              Component={CenterBox}
            />
          )}
          {!changing && screen === 'portfolio' && (
            <Carousel
              second={3}
              items={portfolios.map((port) => ({
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
          {!changing && screen === 'skill' && <SkillBox skills={middleBottomSkills} align="row" />}
          {!changing && screen === 'experience' && (
            <Carousel
              items={experiences.map((exp) => exp.secondExplanation)}
              second={3}
              carouselIndex={carouselIndex}
              Component={CenterBox}
            />
          )}
          {!changing && screen === 'portfolio' && (
            <Carousel
              second={3}
              items={portfolios.map((port) => port.imgLink)}
              carouselIndex={carouselIndex}
              Component={ImageBox}
            />
          )}
        </Style.MiddleBottom>
      </Style.Middle>
      <Style.Right aria-label="fifth-right" screen={screen} />
    </Style.Container>
  );
}

export default Fifth;
