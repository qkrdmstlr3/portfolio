import React, { useEffect, useRef, useLayoutEffect, useState } from 'react';
import CenterBox from '../CenterBox';
import * as Style from './styled';

interface ItemType {
  id: number;
}

interface CarouselExpProps<T> {
  items: (ItemType & T)[];
  second: number;
  carouselIndex: number;
  Component?: ({ children }) => JSX.Element;
}

/**
 * It have to get CarouselIndex and second as props
 * It is used to sync with other sliders
 */
function Carousel<T extends object>({ items, second, carouselIndex, Component = CenterBox }: CarouselExpProps<T>) {
  const carouselRef = useRef<HTMLDivElement>();
  const [ulPixel, setUlPixel] = useState<number>(0);
  const [transitionOff, setTransitionOff] = useState<boolean>(true);

  const changeXPixelToZero = () => {
    setTransitionOff(true);
    setUlPixel(0.1); // 30번째 줄의 if문에 걸리는 것을 방지
  };

  useEffect(() => {
    if (ulPixel === 0) return; // 제일 첫 렌더링 시 무시
    if (carouselIndex + 1 === items.length) {
      setTimeout(changeXPixelToZero, (second * 1000) / 2);
    }

    const itemWidth = carouselRef.current.offsetWidth;
    setUlPixel((carouselIndex + 1) * itemWidth);
    setTransitionOff(false);
  }, [carouselIndex]);

  useLayoutEffect(() => {
    const itemWidth = carouselRef.current.offsetWidth;
    setUlPixel(itemWidth);
  }, []);

  return (
    <Style.CarouselWrapper aria-label="carousel" ref={carouselRef}>
      <Style.CarouselList ulPixel={ulPixel} transitionOff={transitionOff}>
        <Style.CarouselItem>
          <Component>{items[items.length - 1]}</Component>
        </Style.CarouselItem>
        {items.map((item) => (
          <Style.CarouselItem key={item.id}>
            <Component>{item}</Component>
          </Style.CarouselItem>
        ))}
      </Style.CarouselList>
    </Style.CarouselWrapper>
  );
}

export default React.memo(Carousel);
