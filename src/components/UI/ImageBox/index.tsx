import React from 'react';
import * as Style from './styled';

interface ImageBoxProps {
  children: {
    id: number;
    src: string;
  };
}

function ImageBox({ children }: ImageBoxProps) {
  return <Style.Image src={children.src} />;
}

export default ImageBox;
