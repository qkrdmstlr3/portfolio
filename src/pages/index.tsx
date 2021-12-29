import React from 'react';
import MainTemplate from '../components/templates/main';
import Helmet from '../lib/Helmet';
import GlobalStyle from '../style/GlobalStyle';

function IndexPage() {
  return (
    <>
      <Helmet />
      <GlobalStyle />
      <MainTemplate />
    </>
  );
}

export default IndexPage;
