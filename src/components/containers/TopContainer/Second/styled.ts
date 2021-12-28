import styled from '@emotion/styled';
import color from '../../../../style/color';

export const Container = styled.div`
  width: 100%;
  height: 66%;
  display: flex;
`;

export const Left = styled.div`
  width: 32%;
  height: 100%;
`;

export const LeftTop = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  border: 1px solid black;
  background-color: ${color.black};
`;

export const Title = styled.h2`
  color: ${color.white};
  font-size: 2.4rem;
`;

export const LeftBottom = styled.div`
  width: 100%;
  height: 50%;
  border: 1px solid black;
`;

export const Middle = styled.div`
  width: 36%;
  height: 100%;
  border: 1px solid black;
`;

export const Right = styled.div`
  width: 37%;
  height: 100%;
  border: 1px solid black;
`;
