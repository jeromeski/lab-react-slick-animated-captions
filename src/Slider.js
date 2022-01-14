import React, { Component } from "react";
import styled from "styled-components";
import Slider from "react-slick";
// import Slideritem from "./SliderItem";

const Container = styled.div`
  background-color: ${(props) => props.color};
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Caption = styled.h1`
  color: black;
`;

const arr = [
  { id: 1, name: "red" },
  { id: 2, name: "green" },
  { id: 3, name: "purple" }
];

class FrontPageSlider extends Component {
  constructor(props) {
    super(props);
    this.sliderRef = React.createRef();
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      autoplay: true,
      afterChange: (idx) => {
        const afterSlideElement = this.sliderRef.current.innerSlider.list.querySelector(
          `[data-index="${idx}"]`
        );
        afterSlideElement.querySelector("h1").classList.add("fadeUpIn");
      },
      beforeChange: (prev, next) => {
        //
        const prevSlideElement = this.sliderRef.current.innerSlider.list.querySelector(
          `[data-index="${prev}"]`
        );
        const nextSlideElement = this.sliderRef.current.innerSlider.list.querySelector(
          `[data-index="${next}"]`
        );

        prevSlideElement.classList.add("fadeUpOut");
      }
    };

    return (
      <Slider {...settings} ref={(ref) => (this.sliderRef.current = ref)}>
        {arr.map((item) => (
          <Container className="item" key={item.id} color={item.name}>
            <Caption>{item.name.toUpperCase()}</Caption>
          </Container>
        ))}
      </Slider>
    );
  }
}

export default FrontPageSlider;
