import styled from '@emotion/styled';

interface SliderListProps {
  ulPixel: number;
}

interface BoxProps {
  boxWidth: number;
  transitionOff: boolean;
}

export const CarouselWrapper = styled.div`
  width: 100%;
  height: 100%;

  overflow: hidden;
  position: relative;
`;

export const CarouselList = styled.div<SliderListProps>`
  display: flex;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 0;
  left: -${(props) => props.ulPixel}px;
  height: 100%;
  width: 100%;
`;

export const CarouselItem = styled.div`
  min-width: 100%;
  height: 100%;
`;

export const Box = styled.div<BoxProps>`
  height: 100%;
  min-width: ${(props) => props.boxWidth}px;
  transition: ${(props) => (props.transitionOff ? 'none' : `all 1s linear`)};
`;
