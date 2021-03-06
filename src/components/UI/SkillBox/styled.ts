import styled from '@emotion/styled';
import { AlignType } from '.';

interface ContainerProps {
  align: AlignType;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: ${(props) => props.align};
  align-items: center;
  justify-content: space-around;
`;

export const Image = styled.img<ContainerProps>`
  width: ${(props) => (props.align === 'row' ? '25%' : 'auto')};
  height: ${(props) => (props.align === 'row' ? 'auto' : '25%')};
`;
