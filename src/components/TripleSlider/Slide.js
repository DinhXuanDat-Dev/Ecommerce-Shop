import React from "react";
// import { StackedCarouselSlideProps } from "react-stacked-center-carousel";
import "./TripleSlide.css";

export const Slide = React.memo(function (StackedCarouselSlideProps) {
  const {
    data,
    dataIndex,
    isCenterSlide,
    swipeTo,
    slideIndex
  } = StackedCarouselSlideProps;

  const coverImage = data[dataIndex].image;
  const text = data[dataIndex].text;

  console.log(coverImage);
  return (
    <div className="card-card" draggable={false}>
      <div className={`cover fill ${isCenterSlide ? "off" : "on"}`}>
        <div
          className="card-overlay fill"
          onClick={() => {
            if (!isCenterSlide) swipeTo(slideIndex);
          }}
        />
      </div>
      <div className="detail fill">
        <div className="discription">
          <img
            style={{ width: 430, height: 240 }}
            alt="j"
            className="cover-image"
            src={coverImage}
          />
          <p className="slide-text">{text}</p>
        </div>
      </div>
    </div>
  );
});
