import React from 'react';
import Contact from '../../containers/Contact';
import ExperienceSkill from '../../containers/ExperienceSkill';
import Introduce from '../../containers/Introduce';
import PortfolioExplanation from '../../containers/PortfolioExplanation';
import PortfolioImage from '../../containers/PortfolioImage';
import PortfolioTitle from '../../containers/PortfolioTitle';
import * as Style from './styled';

function Main() {
  return (
    <Style.Container>
      <Contact />
      <ExperienceSkill />
      <Introduce />
      <PortfolioExplanation />
      <PortfolioImage />
      <PortfolioTitle />
    </Style.Container>
  );
}

export default Main;
