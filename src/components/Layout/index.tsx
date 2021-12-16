import React from 'react';
import Link from 'gatsby-link';
import { Helmet } from 'react-helmet';
import { map, pipe, toArray } from '@fxts/core';

import HomeAudioIcon from '../UI/AudioIcon';
import GlobalStyle from '../../style/GlobalStyle';
import * as Style from './styled';

interface LayoutProps {
  children: React.ReactNode;
  uri: string;
}

const ROUTES = [
  { path: '/', text: 'HOME', backgroundColor: '#35425E' },
  { path: '/about', text: 'ABOUT', backgroundColor: '#186400' },
  { path: '/portfolio', text: 'PORTFOLIO', backgroundColor: '#999999' },
  { path: '/contact', text: 'CONTACT', backgroundColor: '#AE0000' },
];

function Layout({ children, uri }: LayoutProps) {
  const currentRoute = ROUTES.find((route) => uri === route.path);

  return (
    <>
      <Helmet>
        <title>Shellboy Portfolio</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&display=swap" rel="stylesheet" />
      </Helmet>
      <GlobalStyle backgroundColor={currentRoute && currentRoute.backgroundColor} />
      <Style.Header isHomePage={uri === '/'}>
        <Style.Nav>
          {uri === '/' && <HomeAudioIcon musicLink="/music/test.mp3" />}
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
    </>
  );
}

export default Layout;
