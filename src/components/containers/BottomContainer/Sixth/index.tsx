import React from 'react';
import * as Style from './styled';
import Icon from '../../../UI/Icon';
import color from '../../../../style/color';
import { portfolios } from '../../../../constants/portfolio';
import useScreen from '../../../../hooks/useScreen';

interface SixthProps {
  carouselIndex: number;
}

function Sixth({ carouselIndex }: SixthProps) {
  const { screen } = useScreen({});
  const githubLink =
    screen.currentScreen === 'contact' ? 'https://github.com/qkrdmstlr3' : portfolios[carouselIndex].githubLink;
  const blogLink =
    screen.currentScreen === 'contact' ? 'https://shellboylog.com' : portfolios[carouselIndex].deployLink;
  const linkedinLink = 'https://www.linkedin.com/in/eunsik-park-34a7931b6/';
  const emailLink = 'mailto:qkrdmstlr3@naver.com';

  return (
    <Style.Container>
      <Style.BlackBox aria-label="sixth-black" screen={screen.currentScreen} />
      <Style.FirstBox aria-label="sixth-first" screen={screen.currentScreen}>
        {!screen.changing && (screen.currentScreen === 'contact' || screen.currentScreen === 'portfolio') && (
          <Icon icon="github" color={color.black} size="50%" href={githubLink} />
        )}
      </Style.FirstBox>
      <Style.SecondBox aria-label="sixth-second" screen={screen.currentScreen}>
        {!screen.changing && (screen.currentScreen === 'contact' || screen.currentScreen === 'portfolio') && (
          <Icon icon="blog" color={color.black} size="50%" href={blogLink} />
        )}
      </Style.SecondBox>
      <Style.ThirdBox aria-label="sixth-third" screen={screen.currentScreen}>
        {!screen.changing && screen.currentScreen === 'contact' && (
          <Icon icon="linkedin" color={color.black} size="50%" href={linkedinLink} />
        )}
      </Style.ThirdBox>
      <Style.FourthBox aria-label="sixth-fourth" screen={screen.currentScreen}>
        {!screen.changing && screen.currentScreen === 'contact' && (
          <Icon icon="mail" color={color.black} size="50%" href={emailLink} />
        )}
      </Style.FourthBox>
    </Style.Container>
  );
}

export default Sixth;
