import React from 'react';
import * as Style from './styled';

interface TextColumnBox {
  children: {
    id: number;
    text: string;
  };
}

function TextColumnBox({ children }: TextColumnBox) {
  return <Style.Container>{children.text}</Style.Container>;
}

export default TextColumnBox;
