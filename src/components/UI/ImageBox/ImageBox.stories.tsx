import React from 'react';
import ImageBox from '.';

export default {
  title: 'Component/ImageBox',
  component: ImageBox,
};

const data = {
  id: 1,
  src: 'https://techstack-generator.vercel.app/react-icon.svg',
};
export const imageBox = () => <ImageBox>{data}</ImageBox>;
