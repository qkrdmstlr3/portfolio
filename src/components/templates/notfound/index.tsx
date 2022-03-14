import React from 'react';
import { Link } from 'gatsby';
import * as Style from './styled';

function NotFound() {
  return (
    <Style.Container>
      <Link to="/">
        <Style.Title>포르폴리오</Style.Title>로 돌아가기
      </Link>
    </Style.Container>
  );
}

export default NotFound;
