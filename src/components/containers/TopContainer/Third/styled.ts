import styled from '@emotion/styled';
import color from '../../../../style/color';

export const Container = styled.div`
  border: 1px solid black;
  width: 100%;
  height: 100%;
`;

export const Top = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  color: ${color.white};
  background-color: ${color.red};
  border: 1px solid ${color.black};
`;

export const Title = styled.h2`
  font-size: 2.4rem;
`;

export const Bottom = styled.div`
  width: 100%;
  height: calc(100% - 200px);
  border: 1px solid ${color.black};
`;
