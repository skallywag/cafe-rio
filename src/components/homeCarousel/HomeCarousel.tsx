import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import burritoHome from "../../assets/homebanner.jpeg";
import carnea from "../../assets/carneasadawebheader.jpeg";
import hiring from "../../assets/NowHiringHomePageWebBanner21800x561.jpeg";
import { BsArrowRightSquareFill } from "react-icons/bs";
import { BsArrowLeftSquareFill } from "react-icons/bs";
import "./HomeCarousel.scss";

interface HomeCarouselProps {}

const HomeCarousel: React.FC<HomeCarouselProps> = () => {
  return (
    <Carousel
      className="homeCarousel"
      showThumbs={false}
      showStatus={false}
      dynamicHeight={true}
      infiniteLoop
      renderArrowPrev={(clickHandler) => {
        return (
          <BsArrowLeftSquareFill
            className="leftArrow"
            size={60}
            onClick={clickHandler}
          />
        );
      }}
      renderArrowNext={(clickHandler) => {
        return (
          <BsArrowRightSquareFill
            className="rightArrow"
            size={60}
            onClick={clickHandler}
          />
        );
      }}
    >
      <img src={carnea} />
      <img src={burritoHome} />
      <img src={hiring} />
    </Carousel>
  );
};

export { HomeCarousel };
