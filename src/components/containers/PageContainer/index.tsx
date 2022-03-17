import React, { useEffect } from 'react';
import GlobalStyle from '../../../style/GlobalStyle';
import Helmet from '../../../lib/Helmet';

interface PageLayoutProps {
  children: React.ReactElement;
}

function PageContainer({ children }: PageLayoutProps) {
  const setScreenSize = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };

  useEffect(() => {
    setScreenSize();
  }, []);

  return (
    <>
      <GlobalStyle />
      <Helmet />
      {children}
    </>
  );
}

export default PageContainer;
