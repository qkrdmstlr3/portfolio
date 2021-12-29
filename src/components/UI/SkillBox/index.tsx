import React from 'react';
import * as Style from './styled';

export type AlignType = 'row' | 'column';
interface SkillBoxProps {
  skills: string[];
  align: AlignType;
}

function SkillBox({ skills, align }: SkillBoxProps) {
  return (
    <Style.Container align={align}>
      {skills.map((skill) => (
        <Style.Image key={skill} align={align} src={skill} />
      ))}
    </Style.Container>
  );
}

export default SkillBox;
