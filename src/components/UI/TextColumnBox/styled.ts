import styled from '@emotion/styled';
import mq from '../../../style/mq';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.4rem;
  writing-mode: tb-rl;
  text-orientation: upright;

  ${mq('sm')} {
    font-size: 1.8rem;
  }
`;
