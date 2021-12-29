import React from 'react';
import * as Style from './styled';

interface ImageBoxProps {
  children: string;
}

function ImageBox({ children }: ImageBoxProps) {
  return <Style.Image src={children} />;
}

export default ImageBox;
