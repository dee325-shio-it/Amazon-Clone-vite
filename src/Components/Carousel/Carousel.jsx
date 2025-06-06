// carousel.jsx

import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { img } from "./img/data";
import classes from "./Carousel.module.css";

function CarouselEffect() {
  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
      >
        {img.map((imageItemLink, index) => (
          <img src={imageItemLink} alt={`slide-${index}`} key={index} />
        ))}
      </Carousel>

      <div className={classes.hero_img}></div>
    </div>
  );
}

export default CarouselEffect;


