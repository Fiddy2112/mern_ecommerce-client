import styled from "styled-components";
import React, { useState } from "react";
import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import { sliderItems } from "../data";

const SlideContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const SlideArrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #dfe4ea;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 99;
`;

const SlideWrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translate(${(props) => props.slide * -100}vw);
  transition: transform 1s ease;
`;

const Slide = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  background-color: ${(props) => props.bg};
`;
const SlideImg = styled.div`
  flex: 1;
`;

const Img = styled.img`
  height: 80%;
`;

const SlideInfo = styled.div`
  flex: 1;
  padding: 50px;
`;

const SlideTitle = styled.h1`
  font-size: 50px;
  color: #2f3542;
`;
const SlideDesc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 400;
  color: #57606f;
  letter-spacing: 2px;
`;
const SlideButton = styled.button`
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 5px;
  border: 0.5px solid ${(props) => props.color};
  color: ${(props) => props.color};
  background-color: #fff;
  font-size: 16px;
  cursor: pointer;
`;

function Slider() {
  const [slide, setSlide] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlide(slide > 0 ? slide - 1 : 2);
    } else {
      setSlide(slide < 2 ? slide + 1 : 0);
    }
  };
  // console.log(slide);
  return (
    <SlideContainer>
      <SlideArrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlinedIcon />
      </SlideArrow>
      <SlideWrapper slide={slide}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <SlideImg>
              <Img src={item.img} />
            </SlideImg>
            <SlideInfo>
              <SlideTitle>{item.title}</SlideTitle>
              <SlideDesc>{item.desc}</SlideDesc>
              <SlideButton color={item.color}>
                {item.button}
                <ArrowRightOutlinedIcon color={item.color} />
              </SlideButton>
            </SlideInfo>
          </Slide>
        ))}
      </SlideWrapper>
      <SlideArrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlinedIcon />
      </SlideArrow>
    </SlideContainer>
  );
}

export default Slider;
