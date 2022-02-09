import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom"
import { useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../data";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ display: "none" })}
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
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
  z-index: 2;

  &:hover {
    opacity: 1;
  }
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.bg};
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  height: 80%;
  @media (min-width: 768px) {
    width: 100%;
    object-fit: contain;
  }
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const BTBORDER = styled.div`
  position: absolute;
  transition: all 0.5s ease;
`

const Button = styled.button`
  padding: 10px;
  font-size: 25px;
  background-color: #fff;
  cursor: pointer;
  border: none;
  position: relative;
  font-weight: bold;
  color: slategray;

  &:hover{
    ${BTBORDER}:nth-of-type(1) {
      width: 100%;
    }

    ${BTBORDER}:nth-of-type(2) {
      height: 100%;
    }

    ${BTBORDER}:nth-of-type(3) {
      width: 100%;
    }

    ${BTBORDER}:nth-of-type(4) {
      height: 100%;
    }
  }

  ${BTBORDER}:nth-of-type(1) {
    top: 0;
    left: 0;
    width: 0;
    height: 0;
    border-top: solid slategray;
  }

  ${BTBORDER}:nth-of-type(2) {
    top: 0;
    right: 0;
    width: 0;
    height: 0;
    border-right: solid slategray;
  }

  ${BTBORDER}:nth-of-type(3) {
    bottom: 0;
    right: 0;
    width: 0;
    height: 0;
    border-bottom: solid slategray;
  }

  ${BTBORDER}:nth-of-type(4) {
    bottom: 0;
    left: 0;
    width: 0;
    height: 0;
    border-left: solid slategray;
  }
`;


const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex} className="123123">
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Link to="/product">
                <Button>
                  <BTBORDER className="btn_border"></BTBORDER>
                  <BTBORDER className="btn_border"></BTBORDER>
                  <BTBORDER className="btn_border"></BTBORDER>
                  <BTBORDER className="btn_border"></BTBORDER>
                  SHOP NOW
                </Button>
              </Link>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
