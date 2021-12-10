import styled from '@emotion/styled';
import mq from '../../style/mq';

interface HeaderProps {
  isHomePage: boolean;
}

export const Header = styled.header<HeaderProps>`
  display: flex;
  justify-content: space-between;
  position: absolute;
  left: 0;
  right: 0;
  top: ${(props) => (props.isHomePage ? 'calc(50% + 170px)' : '20px')};
  transform: ${(props) => (props.isHomePage ? 'translateY(-50%)' : '20px')};
  color: #f0f0f0;
  transition: all 0.5s linear;
  user-select: none;

  ${mq('md')} {
    top: 20px;
  }
`;

export const Nav = styled.nav`
  margin: 0 auto;
  margin-top: 2rem;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 800px;
`;

export const MenuItem = styled.span`
  font-size: 2.4rem;

  ${mq('md')} {
    font-size: 1.5rem;
  }
`;
