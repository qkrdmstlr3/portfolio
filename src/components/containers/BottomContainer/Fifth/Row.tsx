// Dependencies
import React from 'react';
import * as Style from './styled';
// Components
import SkillBox from '../../../UI/SkillBox';
import Carousel from '../../../UI/Carousel';
import CenterBox from '../../../UI/CenterBox';
// Variables & Types
import { SLIDER_SECOND } from '../../../../constants/variables';
import { ScreenStateType } from '../../../../recoil/screen/atom';

interface RowProps {
  screen: ScreenStateType;
  skills: string[];
  carouselIndex: number;
  fItems: { id: number; [name: string]: string | number | Date }[];
  sItems: { id: number; [name: string]: string | number | Date }[];
  Component: ({ children }) => JSX.Element;
}

function Row({ screen, skills, carouselIndex, fItems, sItems, Component }: RowProps) {
  const getComponent = () => {
    switch (screen.currentScreen) {
      case 'skill':
        return <SkillBox skills={skills} align="row" />;
      case 'experience':
        return <Carousel items={fItems} second={SLIDER_SECOND} carouselIndex={carouselIndex} Component={CenterBox} />;
      case 'portfolio':
        return <Carousel items={sItems} second={SLIDER_SECOND} carouselIndex={carouselIndex} Component={Component} />;
      default:
        return <></>;
    }
  };

  return <Style.MiddleRow>{!screen.changing && getComponent()}</Style.MiddleRow>;
}

export default Row;
