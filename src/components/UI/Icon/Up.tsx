import React from 'react';

interface UpIconProps {
  color: string;
}

function Up({ color }: UpIconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path fill={color} d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z" />
    </svg>
  );
}

export default Up;
