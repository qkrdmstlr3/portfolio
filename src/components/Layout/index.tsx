import React from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import { map, pipe, toArray } from '@fxts/core';

import AudioOffIcon from '../UI/Icon/AudioOff';
import GlobalStyle from '../../style/GlobalStyle';
import * as Style from './styled';

interface LayoutProps {
  children: React.ReactNode;
  backgroundColor: string;
  isNavTop?: boolean;
}

const ROUTES = [
  { path: '/', text: 'HOME' },
  { path: '/about', text: 'ABOUT' },
  { path: '/portfolio', text: 'PORTFOLIO' },
  { path: '/contact', text: 'CONTACT' },
];

function Layout({ children, backgroundColor, isNavTop = true }: LayoutProps) {
  return (
    <>
      <Helmet>
        <title>Shellboy Portfolio</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&display=swap" rel="stylesheet" />
      </Helmet>
      <Style.Container isNavTop={isNavTop}>
        <GlobalStyle backgroundColor={backgroundColor} />
        <Style.Header>
          <Style.Nav>
            <AudioOffIcon width={32} height={32} color="white" />
            {pipe(
              ROUTES,
              map((route) => (
                <Style.MenuItem key={route.path}>
                  <Link to={route.path}>{route.text}</Link>
                </Style.MenuItem>
              )),
              toArray
            )}
          </Style.Nav>
        </Style.Header>
        {children}
      </Style.Container>
    </>
  );
}

export default Layout;
