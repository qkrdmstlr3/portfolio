import styled from '@emotion/styled';

interface SliderListProps {
  ulPixel: number;
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
  transition: ${(props) => (props.transitionOff ? 'none' : `all 1s linear`)};
`;

export const CarouselItem = styled.div`
  min-width: 100%;
  height: 100%;
`;
