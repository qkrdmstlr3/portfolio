import React from 'react';
import * as Style from './styled';
import { ScreenType } from '../../../templates/main/index';
import SkillBox from '../../../UI/SkillBox';

interface SecondProps {
  screen: ScreenType;
  changing: boolean;
  changeScreen: (screen: ScreenType) => void;
}

function Second({ screen, changing, changeScreen }: SecondProps) {
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
    <Style.Container screen={screen}>
      <Style.Left>
        <Style.LeftTop onClick={() => changeScreen('contact')}>
          <Style.Title>contact</Style.Title>
        </Style.LeftTop>
        <Style.LeftBottom />
      </Style.Left>
      <Style.Middle>
        {!changing && screen === 'skill' && <SkillBox skills={middleSkills} align="column" />}
      </Style.Middle>
      <Style.Right>{!changing && screen === 'skill' && <SkillBox skills={rightSkills} align="column" />}</Style.Right>
    </Style.Container>
  );
}

export default Second;
