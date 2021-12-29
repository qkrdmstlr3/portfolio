import React from 'react';
import { ScreenType } from '../../../templates/main';
import * as Style from './styled';
import SkillBox from '../../../UI/SkillBox';

interface FifthProps {
  screen: ScreenType;
  changing: boolean;
  changeScreen: (screen: ScreenType) => void;
}

function Fifth({ screen, changing, changeScreen }: FifthProps) {
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
      <Style.Left screen={screen} onClick={() => changeScreen('experience')}>
        <Style.Title>experience</Style.Title>
      </Style.Left>
      <Style.Middle screen={screen}>
        <Style.MiddleTop>
          {!changing && screen === 'skill' && <SkillBox skills={middleTopSkills} align="row" />}
        </Style.MiddleTop>
        <Style.MiddleBottom>
          {!changing && screen === 'skill' && <SkillBox skills={middleBottomSkills} align="row" />}
        </Style.MiddleBottom>
      </Style.Middle>
      <Style.Right screen={screen} />
    </Style.Container>
  );
}

export default Fifth;
