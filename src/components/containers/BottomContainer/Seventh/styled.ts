import styled from '@emotion/styled';
import color from '../../../../style/color';

export const Container = styled.div`
  width: 23%;
  height: 100%;
`;

export const Top = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  border: 2px solid black;
  background-color: ${color.red};
`;

export const Title = styled.h2`
  color: ${color.white};
  font-size: 2.4rem;
`;

export const Bottom = styled.div`
  width: 100%;
  height: 50%;
  border: 2px solid black;
`;
