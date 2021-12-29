import React from 'react';
import * as Style from './styled';
import * as Icons from './svg';

type IconType = keyof typeof Icons;
interface IconProps {
  icon: IconType;
  color: string;
  size: string;
}

function Icon({ icon, color, size }: IconProps) {
  const SvgIcon = Icons[icon];

  return (
    <Style.Container size={size}>
      <SvgIcon color={color} />
    </Style.Container>
  );
}

export default Icon;
