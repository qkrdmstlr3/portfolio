import React, { useEffect, useRef, useState } from 'react';
import * as Style from './styled';

interface ItemType {
  id: number;
}

interface CarouselExpProps<T> {
  items: (ItemType & T)[];
  second: number;
  Component: ({ children }) => JSX.Element;
  carouselIndex: number;
}

/**
 * It have to get CarouselIndex and second as props
 * It is used to sync with other sliders
 */
function Carousel<T extends object>({ items, second, carouselIndex, Component }: CarouselExpProps<T>) {
  const carouselRef = useRef<HTMLDivElement>();
  const [boxWidth, setBoxWidth] = useState<number>(0);
  const [ulPixel, setUlPixel] = useState<number>(0);
  const [transitionOff, setTransitionOff] = useState<boolean>(true);
  const [firstRendering, setFirstRendering] = useState<boolean>(true);

  const changeXPixelToZero = () => {
    const itemWidth = carouselRef.current.offsetWidth;
    const UlPixel = itemWidth * (items.length + 1);
    setBoxWidth(UlPixel);
    setTransitionOff(true);
  };

  useEffect(() => {
    if (carouselIndex + 1 === items.length) {
      setTimeout(changeXPixelToZero, (second * 1000) / 2);
    }

    const itemWidth = carouselRef.current.offsetWidth;
    const UlPixel = itemWidth * (items.length + 1);
    setBoxWidth(UlPixel - carouselIndex * itemWidth - itemWidth);

    if (firstRendering) {
      setFirstRendering(!firstRendering);
      return;
    }
    setTransitionOff(false);
  }, [carouselIndex]);

  useEffect(() => {
    const itemWidth = carouselRef.current.offsetWidth;
    setUlPixel(itemWidth * (items.length + 1));
  }, []);

  return (
    <Style.CarouselWrapper ref={carouselRef}>
      <Style.CarouselList ulPixel={ulPixel}>
        <Style.Box boxWidth={boxWidth} transitionOff={transitionOff} />
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
