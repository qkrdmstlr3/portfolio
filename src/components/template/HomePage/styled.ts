import styled from '@emotion/styled';
import mq from '../../../style/mq';

export const Container = styled.main`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 6.4rem;
  color: #f0f0f0;

  ${mq('md')} {
    font-size: 4rem;
  }
`;

export const TapeImage = styled.img`
  display: block;
  margin: 0 auto;
  padding: 2rem 1rem 0 1rem;
  max-width: 800px;
`;
