import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";

// Temp images

function Banner() {
  return (
    <section id='home-banner'>
      <div className='home-slider-wrapper'>
        <div
          id='carouselExampleIndicators'
          className='carousel slide'
          data-ride='carousel'>
          <div className='carousel-inner'>
            <div className='slider-one carousel-item active'>
              <img
                className='d-block w-100'
                src={sliderImg[0]}
                alt='First slide'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;

// TODO: Implement slider left right functinality
