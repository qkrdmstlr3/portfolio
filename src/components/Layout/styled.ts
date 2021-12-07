import styled from '@emotion/styled';

interface ContainerProps {
  isNavTop: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: ${(props) => (props.isNavTop ? 'column' : 'column-reverse')};
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  color: #f0f0f0;
`;

export const Nav = styled.nav`
  margin: 0 auto;
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 800px;
`;

export const MenuItem = styled.span`
  font-size: 2.4rem;
`;
