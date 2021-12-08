import React from 'react';

interface PlayIconProps {
  color: string;
}

function Play({ color }: PlayIconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path fill={color} d="M3 22v-20l18 10-18 10z" />
    </svg>
  );
}

export default Play;
