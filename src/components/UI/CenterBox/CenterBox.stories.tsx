import React from 'react';
import CenterBox from '.';

export default {
  title: 'Component/CenterBox',
  component: CenterBox,
};

const data = {
  id: 1,
  text: 'centerbox',
};
export const centerBox = () => <CenterBox>{data}</CenterBox>;
