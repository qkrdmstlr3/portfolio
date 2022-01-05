/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import SkillBox from '.';

describe('Component/UI/SkillBox', () => {
  const skills = [
    'https://techstack-generator.vercel.app/react-icon.svg',
    'https://techstack-generator.vercel.app/redux-icon.svg',
    'https://techstack-generator.vercel.app/gatsby-icon.svg',
  ];

  it('rendering test', () => {
    const component = render(<SkillBox skills={skills} align="column" />);
    const imgs = component.getAllByRole('img');
    imgs.forEach((img, idx) => {
      expect(img).toHaveAttribute('src', skills[idx]);
    });
  });
});
