import React from 'react';
import * as Style from './styled';

interface TextColumnBox {
  children: React.ReactElement;
}

function TextColumnBox({ children }: TextColumnBox) {
  return <Style.Container>{children}</Style.Container>;
}

export default TextColumnBox;
