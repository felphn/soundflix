import React from 'react';
import SlickSlider from 'react-slick';
import styled from 'styled-components';

// provavelmente styled responsável pelo exterior do slider
const Container = styled.ul`
    padding: 0;
    margin: 0;
    .slick-prev,
    .slick-next {
        z-index: 50;
        top: 0;
        bottom: 0;
        margin: auto;
        width: 50px;
        height: 50px;
        transform: initial;
        &:before {
            font-size: 50px;
            color: var(--red);
        }
    }

    .slick-prev {
        left: 0px;
    }
    .slick-next {
        right: 16px;
    }
`;

// provavelmente o styled responsável pelo interior do slider
export const SliderItem = styled.li`
    margin-right: 16px;
    img {
        margin: 16px;
        width: 298px;
        height: 197px;
        object-fit: cover;
    }
`;

// slider build
const Slider = ({ children }) => (
  <Container>
    <SlickSlider {...{
      dots: true,
      infinite: true,
      speed: 300,
      centerMode: false,
      variableWidth: true,
      adaptativeHeight: true,
    }}
    >
      {children}
    </SlickSlider>
  </Container>
);

export default Slider;
