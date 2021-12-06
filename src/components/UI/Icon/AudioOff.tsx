import React from 'react';

interface AudioOffIconProps {
  width: number;
  height: number;
  color: string;
}

function AudioOff({ width, height, color }: AudioOffIconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24">
      <path
        fill={color}
        d="M22 1.269l-18.455 22.731-1.545-1.269 3.841-4.731h-1.827v-10h4.986v6.091l2.014-2.463v-3.628l5.365-2.981 4.076-5.019 1.545 1.269zm-10.986 15.926v.805l8.986 5v-16.873l-8.986 11.068z"
      />
    </svg>
  );
}

export default AudioOff;
