import React from 'react';
import Slider from 'react-slick';
import * as Style from './styled';

interface CarouselProps {
  items: string[];
  Component: any;
}

function Carousel({ items, Component }: CarouselProps) {
  const settings = {
    arrows: false,
    autoplay: true,
    infinite: true,
    slidesToShow: 1,
  };

  return (
    <Style.SliderWrapper>
      <Slider {...settings}>
        {items.map((item) => (
          <Component key={item}>{item}</Component>
        ))}
      </Slider>
    </Style.SliderWrapper>
  );
}

export default Carousel;
