import React from 'react';
import AboutPageTemplate from '../components/template/AboutPage';
import { skillList } from '../constants';

function AboutPage() {
  return <AboutPageTemplate skillLinkList={skillList} />;
}

export default AboutPage;
