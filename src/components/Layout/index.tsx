import React from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import { map, pipe, toArray } from '@fxts/core';

import AudioOffIcon from '../UI/Icon/AudioOff';
import GlobalStyle from '../../style/GlobalStyle';
import * as Style from './styled';

interface LayoutProps {
  children: React.ReactNode;
  path: string;
}

const ROUTES = [
  { path: '/', text: 'HOME', backgroundColor: '#35425E' },
  { path: '/about/', text: 'ABOUT', backgroundColor: '#186400' },
  { path: '/portfolio/', text: 'PORTFOLIO', backgroundColor: '#999999' },
  { path: '/contact/', text: 'CONTACT', backgroundColor: '#AE0000' },
];

function Layout({ children, path }: LayoutProps) {
  return (
    <>
      <Helmet>
        <title>Shellboy Portfolio</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&display=swap" rel="stylesheet" />
      </Helmet>
      <Style.Container isNavTop={false}>
        <GlobalStyle backgroundColor={ROUTES.find((route) => route.path === path).backgroundColor} />
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
