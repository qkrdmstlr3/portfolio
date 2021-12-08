import React from 'react';

interface NextIconProps {
  color: string;
}

function Next({ color }: NextIconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path fill={color} d="M20 22v-20h2v20h-2zm-18 0l16-10-16-10v20z" />
    </svg>
  );
}

export default Next;
