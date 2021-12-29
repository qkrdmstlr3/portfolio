import React from 'react';
import * as Style from './styled';

interface CenterBoxProps {
  children: React.ReactElement;
}

function CenterBox({ children }: CenterBoxProps) {
  return <Style.Container>{children}</Style.Container>;
}

export default CenterBox;
