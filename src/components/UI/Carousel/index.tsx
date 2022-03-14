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
  const sliderRef = useRef<HTMLDivElement>();
  const [boxWidth, setBoxWidth] = useState<number>(0);
  const [ulPixel, setUlPixel] = useState<number>(0);
  const [transitionOff, setTransitionOff] = useState<boolean>(true);
  const [firstRendering, setFirstRendering] = useState<boolean>(true);

  const changeXPixelToZero = () => {
    const itemWidth = sliderRef.current.offsetWidth;
    const UlPixel = itemWidth * (items.length + 1);
    setBoxWidth(UlPixel);
    setTransitionOff(true);
  };

  useEffect(() => {
    if (carouselIndex + 1 === items.length) {
      setTimeout(changeXPixelToZero, (second * 1000) / 2);
    }

    const itemWidth = sliderRef.current.offsetWidth;
    const UlPixel = itemWidth * (items.length + 1);
    setBoxWidth(UlPixel - carouselIndex * itemWidth - itemWidth);

    if (firstRendering) {
      setFirstRendering(!firstRendering);
      return;
    }
    setTransitionOff(false);
  }, [carouselIndex]);

  useEffect(() => {
    const itemWidth = sliderRef.current.offsetWidth;
    setUlPixel(itemWidth * (items.length + 1));
  }, []);

  return (
    <Style.SliderWrapper ref={sliderRef}>
      <Style.SliderList ulPixel={ulPixel}>
        <Style.Box boxWidth={boxWidth} transitionOff={transitionOff} />
        <Style.SliderItem>
          <Component>{items[items.length - 1]}</Component>
        </Style.SliderItem>
        {items.map((item) => (
          <Style.SliderItem key={JSON.stringify(item)}>
            <Component>{item}</Component>
          </Style.SliderItem>
        ))}
      </Style.SliderList>
    </Style.SliderWrapper>
  );
}

export default React.memo(Carousel);
