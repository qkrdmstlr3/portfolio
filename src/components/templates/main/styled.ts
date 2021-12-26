import styled from '@emotion/styled';

export const Container = styled.main`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 14fr 9fr;
  grid-template-rows: 70fr 11fr 65fr;
  grid-template-areas:
    'introduce experience-skill'
    'portfolio-title contact'
    'portfolio-explanation portfolio-image';
`;
