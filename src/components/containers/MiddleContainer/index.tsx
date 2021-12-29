import React from 'react';
import { ScreenType } from '../../templates/main';
import * as Style from './styled';
import Carousel from '../../UI/Carousel';
import CenterBox from '../../UI/CenterBox/index';
import { experiences, portfolios } from '../../../constants';

interface MiddleContainerProps {
  screen: ScreenType;
  changing: boolean;
}

function MiddleContainer({ screen, changing }: MiddleContainerProps) {
  return (
    <Style.Container screen={screen}>
      {(screen === 'main' || screen === 'skill' || screen === 'contact') && (
        <>
          <Style.Explanation>개발을 정말 열심히하는</Style.Explanation>
          <Style.Name>조개소년</Style.Name>
        </>
      )}
      {!changing && screen === 'experience' && (
        <Carousel items={experiences.map((exp) => exp.title)} Component={CenterBox} />
      )}
      {!changing && screen === 'portfolio' && (
        <Carousel items={portfolios.map((exp) => exp.title)} Component={CenterBox} />
      )}
    </Style.Container>
  );
}

export default MiddleContainer;
