import React from 'react';
import * as Style from './styled';
import * as Icons from './svg';

type IconType = keyof typeof Icons;
interface IconProps {
  icon: IconType;
  color: string;
  size: string;
  href?: string;
}

function Icon({ icon, color, size, href }: IconProps) {
  const SvgIcon = Icons[icon];

  if (href) {
    return (
      <Style.Container size={size}>
        <Style.Href href={href} target="_blank">
          <SvgIcon color={color} />
        </Style.Href>
      </Style.Container>
    );
  }

  return (
    <Style.Container size={size}>
      <SvgIcon color={color} />
    </Style.Container>
  );
}

export default Icon;
