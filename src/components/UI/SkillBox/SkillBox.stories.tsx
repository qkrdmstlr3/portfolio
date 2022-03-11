import React from 'react';
import SkillBox from '.';

export default {
  title: 'Component/SkillBox',
  component: SkillBox,
};

const skills = [
  'https://techstack-generator.vercel.app/react-icon.svg',
  'https://techstack-generator.vercel.app/redux-icon.svg',
  'https://techstack-generator.vercel.app/gatsby-icon.svg',
];

export const skillColumnBox = () => (
  <div style={{ height: 'calc(var(--vh, 1vh) * 100)' }}>
    <SkillBox skills={skills} align="column" />
  </div>
);

export const skillRowBox = () => <SkillBox skills={skills} align="row" />;
