import React from 'react';

interface PrevIconProps {
  color: string;
}

function Prev({ color }: PrevIconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path fill={color} d="M4 2v20h-2v-20h2zm18 0l-16 10 16 10v-20z" />
    </svg>
  );
}

export default Prev;
