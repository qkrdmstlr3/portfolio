import React from 'react';
import * as Style from './styled';
import { ScreenType } from '../../../templates/main/index';
import Icon from '../../../UI/Icon';
import color from '../../../../style/color';
import { portfolios } from '../../../../constants';

interface SixthProps {
  screen: ScreenType;
  changing: boolean;
  carouselIndex: number;
}

function Sixth({ screen, changing, carouselIndex }: SixthProps) {
  const githubLink = screen === 'contact' ? 'https://github.com/qkrdmstlr3' : portfolios[carouselIndex].githubLink;
  const blogLink = screen === 'contact' ? 'https://shellboylog.com' : portfolios[carouselIndex].deployLink;
  const linkedinLink = 'https://www.linkedin.com/in/eunsik-park-34a7931b6/';
  const emailLink = 'mailto:qkrdmstlr3@naver.com';

  return (
    <Style.Container>
      <Style.BlackBox screen={screen} />
      <Style.FirstBox screen={screen}>
        {!changing && (screen === 'contact' || screen === 'portfolio') && (
          <Icon icon="github" color={color.black} size="50%" href={githubLink} />
        )}
      </Style.FirstBox>
      <Style.SecondBox screen={screen}>
        {!changing && (screen === 'contact' || screen === 'portfolio') && (
          <Icon icon="blog" color={color.black} size="50%" href={blogLink} />
        )}
      </Style.SecondBox>
      <Style.ThirdBox screen={screen}>
        {!changing && screen === 'contact' && (
          <Icon icon="linkedin" color={color.black} size="50%" href={linkedinLink} />
        )}
      </Style.ThirdBox>
      <Style.FourthBox screen={screen}>
        {!changing && screen === 'contact' && <Icon icon="mail" color={color.black} size="50%" href={emailLink} />}
      </Style.FourthBox>
    </Style.Container>
  );
}

export default Sixth;
