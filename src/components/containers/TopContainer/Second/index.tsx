import React from 'react';
import * as Style from './styled';
import { ScreenType } from '../../../templates/main/index';
import SkillBox from '../../../UI/SkillBox';
import { experiences, portfolios } from '../../../../constants';
import CarouselExp from '../../../UI/CarouselExp';
import TextColumnBox from '../../../UI/TextColumnBox/index';
import ImageBox from '../../../UI/ImageBox';

interface SecondProps {
  screen: ScreenType;
  changing: boolean;
  carouselIndex: number;
  changeScreen: (screen: ScreenType) => void;
}

function Second({ screen, changing, carouselIndex, changeScreen }: SecondProps) {
  // FIXME:
  const middleSkills = [
    'https://techstack-generator.vercel.app/react-icon.svg',
    'https://techstack-generator.vercel.app/redux-icon.svg',
    'https://techstack-generator.vercel.app/gatsby-icon.svg',
  ];
  const rightSkills = [
    'https://techstack-generator.vercel.app/sass-icon.svg',
    'https://techstack-generator.vercel.app/restapi-icon.svg',
    'https://techstack-generator.vercel.app/github-icon.svg',
  ];

  return (
    <Style.Container aria-label="second-container" screen={screen}>
      <Style.Left>
        <Style.LeftTop aria-label="second-left-top" onClick={() => changeScreen('contact')}>
          <Style.Title>contact</Style.Title>
        </Style.LeftTop>
        <Style.LeftBottom>
          {!changing && screen === 'portfolio' && (
            <CarouselExp
              second={3}
              items={portfolios.map((port) => port.logo)}
              carouselIndex={carouselIndex}
              Component={ImageBox}
            />
          )}
        </Style.LeftBottom>
      </Style.Left>
      <Style.Middle>
        {!changing && screen === 'skill' && <SkillBox skills={middleSkills} align="column" />}
        {!changing && screen === 'experience' && (
          <CarouselExp
            second={3}
            items={experiences.map((exp) => exp.startDate.toLocaleDateString().slice(0, 9))}
            carouselIndex={carouselIndex}
            Component={TextColumnBox}
          />
        )}
      </Style.Middle>
      <Style.Right>
        {!changing && screen === 'skill' && <SkillBox skills={rightSkills} align="column" />}
        {!changing && screen === 'experience' && (
          <CarouselExp
            second={3}
            items={experiences.map((exp) => exp.endDate.toLocaleDateString().slice(0, 9))}
            carouselIndex={carouselIndex}
            Component={TextColumnBox}
          />
        )}
      </Style.Right>
    </Style.Container>
  );
}

export default Second;
