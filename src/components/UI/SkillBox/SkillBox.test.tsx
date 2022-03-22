/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import SkillBox from '.';
import { skills } from '../../../constants/portfolio';

describe('Component/UI/SkillBox', () => {
  describe('rendering test', () => {
    it('row test', () => {
      const component = render(<SkillBox skills={skills} align="row" />);
      const imgs = component.getAllByRole('img');

      imgs.forEach((img, idx) => {
        expect(img).toHaveAttribute('src', skills[idx]);
      });
    });

    it('column test', () => {
      const component = render(<SkillBox skills={skills} align="column" />);
      const imgs = component.getAllByRole('img');

      imgs.forEach((img, idx) => {
        expect(img).toHaveAttribute('src', skills[idx]);
      });
    });
  });
});
