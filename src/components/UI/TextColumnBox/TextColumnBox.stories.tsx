import React from 'react';
import TextColumnBox from '.';

export default {
  title: 'Component/TextColumnBox',
  component: TextColumnBox,
};

const data = {
  id: 1,
  text: 'text',
};
export const textColumnBox = () => <TextColumnBox>{data}</TextColumnBox>;
