import React from 'react';
import * as Style from './styled';

interface CenterBoxProps {
  children: {
    id: number;
    text: string;
  };
}

function CenterBox({ children }: CenterBoxProps) {
  return <Style.Container>{children.text}</Style.Container>;
}

export default CenterBox;
