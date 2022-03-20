import React from 'react';
import { useRecoilValue } from 'recoil';
import * as Style from './styled';
import Icon from '../../../UI/Icon';
import color from '../../../../style/color';
import { portfolios, mylink } from '../../../../constants/portfolio';
import useScreen from '../../../../hooks/useScreen';
import { carouselIndexState } from '../../../../recoil/carousel/atom';

function Sixth() {
  const carouselIndex = useRecoilValue(carouselIndexState);
  const { screen } = useScreen({});
  const githubLink = screen.currentScreen === 'contact' ? mylink.github : portfolios[carouselIndex].githubLink;
  const blogLink = screen.currentScreen === 'contact' ? mylink.blog : portfolios[carouselIndex].deployLink;

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
          <Icon icon="linkedin" color={color.black} size="50%" href={mylink.linkedin} />
        )}
      </Style.ThirdBox>
      <Style.FourthBox aria-label="sixth-fourth" screen={screen.currentScreen}>
        {!screen.changing && screen.currentScreen === 'contact' && (
          <Icon icon="mail" color={color.black} size="50%" href={mylink.email} />
        )}
      </Style.FourthBox>
    </Style.Container>
  );
}

export default Sixth;
