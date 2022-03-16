import React, { useEffect } from 'react';
import MainTemplate from '../components/templates/MainTemplate';
import Helmet from '../lib/Helmet';
import GlobalStyle from '../style/GlobalStyle';

function IndexPage() {
  const setScreenSize = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };

  useEffect(() => {
    setScreenSize();
  }, []);

  return (
    <>
      <Helmet />
      <GlobalStyle />
      <MainTemplate />
    </>
  );
}

export default IndexPage;
