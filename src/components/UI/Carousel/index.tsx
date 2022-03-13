import React, { useEffect, useRef, useState } from 'react';
import * as Style from './styled';

interface CarouselExpProps {
  items: any[];
  second: number;
  Component: any;
  carouselIndex: number;
}

/**
 * It have to get CarouselIndex and second as props
 * It is used to sync with other sliders
 */
function Carousel({ items, second, carouselIndex, Component }: CarouselExpProps) {
  const sliderRef = useRef<HTMLUListElement>();
  const [xPixel, setXPixel] = useState<number>(0);
  const [transitionOff, setTransitionOff] = useState<boolean>(true);

  const changeXPixelToZero = () => {
    setXPixel(0);
    setTransitionOff(true);
  };

  useEffect(() => {
    if (carouselIndex + 1 === items.length) {
      setTimeout(changeXPixelToZero, (second * 1000) / 2);
    }

    const itemWidth = sliderRef.current.offsetWidth;
    setXPixel(itemWidth * (carouselIndex + 1));
    setTransitionOff(false);
  }, [carouselIndex]);

  return (
    <Style.SliderWrapper>
      <Style.SliderList ref={sliderRef} xPixel={xPixel} transitionOff={transitionOff}>
        {items.map((item) => (
          <Style.SliderItem key={item}>
            <Component>{item}</Component>
          </Style.SliderItem>
        ))}
        <Style.SliderItem>
          <Component>{items[0]}</Component>
        </Style.SliderItem>
      </Style.SliderList>
    </Style.SliderWrapper>
  );
}

export default Carousel;
