import React from 'react';
import * as Style from './styled';
import { ScreenType } from '../../../templates/main/index';
import Icon from '../../../UI/Icon';
import color from '../../../../style/color';

interface SixthProps {
  screen: ScreenType;
  changing: boolean;
}

function Sixth({ screen, changing }: SixthProps) {
  return (
    <Style.Container>
      <Style.BlackBox screen={screen} />
      <Style.FirstBox screen={screen}>
        {!changing && (screen === 'contact' || screen === 'portfolio') && (
          <Icon icon="github" color={color.black} size="50%" />
        )}
      </Style.FirstBox>
      <Style.SecondBox screen={screen}>
        {!changing && (screen === 'contact' || screen === 'portfolio') && (
          <Icon icon="blog" color={color.black} size="50%" />
        )}
      </Style.SecondBox>
      <Style.ThirdBox screen={screen}>
        {!changing && screen === 'contact' && <Icon icon="linkedin" color={color.black} size="50%" />}
      </Style.ThirdBox>
      <Style.FourthBox screen={screen}>
        {!changing && screen === 'contact' && <Icon icon="mail" color={color.black} size="50%" />}
      </Style.FourthBox>
    </Style.Container>
  );
}

export default Sixth;
