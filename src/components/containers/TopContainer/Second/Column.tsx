// Dependencies
import React from 'react';
import * as Style from './styled';
// Components
import Carousel from '../../../UI/Carousel';
import SkillBox from '../../../UI/SkillBox';
import TextColumnBox from '../../../UI/TextColumnBox';
// Variables & Types
import { ScreenStateType } from '../../../../recoil/screen/atom';
import { SLIDER_SECOND } from '../../../../constants/variables';

interface ColumnProps {
  screen: ScreenStateType;
  skills: string[];
  items: { id: number; [name: string]: string | number }[];
  carouselIndex: number;
}

function Column({ screen, skills, items, carouselIndex }: ColumnProps) {
  return (
    <Style.Column>
      {!screen.changing && screen.currentScreen === 'skill' && <SkillBox skills={skills} align="column" />}
      {!screen.changing && screen.currentScreen === 'experience' && (
        <Carousel second={SLIDER_SECOND} items={items} carouselIndex={carouselIndex} Component={TextColumnBox} />
      )}
    </Style.Column>
  );
}

export default Column;
