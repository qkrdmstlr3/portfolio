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
      <Style.FrontBox aria-label="sixth-first" screen={screen.currentScreen}>
        {!screen.changing && (screen.currentScreen === 'contact' || screen.currentScreen === 'portfolio') && (
          <Icon icon="github" color={color.black} size="50%" href={githubLink} />
        )}
      </Style.FrontBox>
      <Style.FrontBox aria-label="sixth-second" screen={screen.currentScreen}>
        {!screen.changing && (screen.currentScreen === 'contact' || screen.currentScreen === 'portfolio') && (
          <Icon icon="blog" color={color.black} size="50%" href={blogLink} />
        )}
      </Style.FrontBox>
      <Style.RearBox aria-label="sixth-third" screen={screen.currentScreen}>
        {!screen.changing && screen.currentScreen === 'contact' && (
          <Icon icon="linkedin" color={color.black} size="50%" href={mylink.linkedin} />
        )}
      </Style.RearBox>
      <Style.RearBox aria-label="sixth-fourth" screen={screen.currentScreen}>
        {!screen.changing && screen.currentScreen === 'contact' && (
          <Icon icon="mail" color={color.black} size="50%" href={mylink.email} />
        )}
      </Style.RearBox>
    </Style.Container>
  );
}

export default Sixth;
