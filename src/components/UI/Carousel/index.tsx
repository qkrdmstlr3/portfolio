import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import * as Style from './styled';

interface CarouselProps {
  items: any[];
  carouselIndex: number;
  Component: any;
}

function Carousel({ items, carouselIndex, Component }: CarouselProps) {
  const sliderRef = useRef<Slider>();
  const settings = {
    arrows: false,
    // autoplay: true,
    infinite: true,
    slidesToShow: 1,
  };

  useEffect(() => {
    sliderRef.current.slickGoTo(carouselIndex);
  }, [carouselIndex]);

  return (
    <Style.SliderWrapper>
      <Slider {...settings} ref={sliderRef}>
        {items.map((item) => (
          <Component key={item}>{item}</Component>
        ))}
      </Slider>
    </Style.SliderWrapper>
  );
}

export default Carousel;
