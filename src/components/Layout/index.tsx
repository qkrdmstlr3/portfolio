import React from 'react';
import { Link } from 'gatsby';
import { map, pipe, toArray } from '@fxts/core';

import AudioOffIcon from '../UI/Icon/AudioOff';
import GlobalStyle from '../../style/GlobalStyle';
import * as Style from './styled';

interface LayoutProps {
  children: React.ReactNode;
  backgroundColor: string;
}

const ROUTES = [
  { path: '/', text: 'HOME' },
  { path: '/about', text: 'ABOUT' },
  { path: '/portfolio', text: 'PORTFOLIO' },
  { path: '/contact', text: 'CONTACT' },
];

function Layout({ children, backgroundColor }: LayoutProps) {
  return (
    <>
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
    </>
  );
}

export default Layout;
