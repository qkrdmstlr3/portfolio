import React from 'react';
import * as Style from './styled';

interface TextColumnBox {
  children: string;
}

function TextColumnBox({ children }: TextColumnBox) {
  return <Style.Container>{children}</Style.Container>;
}

export default TextColumnBox;
