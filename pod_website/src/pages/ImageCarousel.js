import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import slider from "./images/home-bg.png";

function ImageCarousel({ sliderImg }) {
  return (
    <section id='home-banner'>
      <div className='home-slider-wrapper'>
        <div
          id='carouselExampleIndicators'
          className='carousel slide'
          data-ride='carousel'>
          <div className='carousel-inner'>
            <div className='slider-one carousel-item active'>
              {sliderImg ? (
                <Carousel
                  showThumbs={false}
                  showStatus={false}
                  autoPlay
                  infiniteLoop='true'>
                  {sliderImg.map((e) => {
                    return (
                      <img
                        className='d-block w-100'
                        src={e.image}
                        alt='First slide'
                      />
                    );
                  })}
                </Carousel>
              ) : (
                <div className='home-slider-wrapper'>
                  <div
                    id='carouselExampleIndicators'
                    className='carousel slide'
                    data-ride='carousel'>
                    <div className='carousel-inner'>
                      {/* TODO: Map the data for slider */}
                      <div className='slider-one carousel-item active'>
                        {/* {console.log(props.slider)} */}
                        <img
                          className='d-block w-100'
                          src={slider}
                          alt='First slide'
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ImageCarousel;
