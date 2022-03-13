import styled from '@emotion/styled';

interface SliderListProps {
  xPixel: number;
  transitionOff: boolean;
}

export const SliderWrapper = styled.div`
  width: 100%;
  height: 100%;

  overflow: hidden;
  position: relative;
`;

export const SliderList = styled.ul<SliderListProps>`
  display: flex;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  transform: ${(props) => `translateX(-${props.xPixel}px)`};
  transition: ${(props) => (props.transitionOff ? 'none' : `all 1s linear`)};
`;

export const SliderItem = styled.li`
  min-width: 100%;
  height: 100%;
`;
