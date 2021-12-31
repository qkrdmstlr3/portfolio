import styled from '@emotion/styled';
import mq from '../../../style/mq';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const Date = styled.span`
  font-size: 2.1rem;
  ${mq('sm')} {
    font-size: 1.2rem;
  }
`;

export const Explanation = styled.h3`
  font-size: 2.4rem;
  ${mq('sm')} {
    font-size: 1.5rem;
  }
`;
