import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import ScrollAnimation from "react-animate-on-scroll";

// TEMP Image
import img from "./images/testimonial-01.png";
import img2 from "./images/testimonial-02.png";
import { Link } from "react-router-dom";

function Testimonial({ testimonials }) {
  return (
    <React.Fragment>
      <section id='testimonial'>
        <div className='testimonial-wrapper'>
          <h6 className='common-main-heading'>Testimonial</h6>
          <div className='common-heading-line-white mb-5' />
          <div className='container'>
            <div
              id='carouselExampleIndicators'
              className='carousel slide'
              data-ride='carousel'>
              <div className='carousel-inner'>
                <div className='carousel-item active'>
                  <div className='row justify-content-center'>
                    <div className='col-12 col-sm-12 col-md-5 col-lg-5 p-0'>
                      <ScrollAnimation animateIn='fadeInLeft'>
                        <div className='testimonial-thumbnail'>
                          <Link to={"/"} className='test-thumbnail-inner'>
                            <img src={img} alt title />
                          </Link>
                        </div>
                      </ScrollAnimation>
                    </div>

                    {/* {testimonials ? (
                      <div className='col-12 col-sm-12 col-md-5 col-lg-5 p-0'>
                        <ScrollAnimation animateIn='fadeInRight'>
                          <a href='#' className='testimonial-content'>
                            <h5 className='testimonial-text'>
                              {testimonials["description"]}
                            </h5>
                            <div className='text-right testimonial-main-img'>
                              <img src={testimonials["image"]} alt title />
                            </div>
                            <p className='client-name'>
                              -{testimonials["clientName"]}
                            </p>
                          </a>
                        </ScrollAnimation>
                      </div>
                    ) : (
                      ""
                    )} */}
                    {/* TODO: Map not working */}
                    {testimonials ? (
                      <div className='col-12 col-sm-12 col-md-5 col-lg-5 p-0'>
                        <ScrollAnimation animateIn='fadeInRight'>
                          <Carousel
                            showThumbs={false}
                            showStatus={false}
                            autoPlay
                            infiniteLoop='true'>
                            <Link to={"/"} className='testimonial-content'>
                              <h5 className='testimonial-text'>
                                {testimonials["description"]}
                              </h5>
                              <div className='text-right testimonial-main-img'>
                                <img src={testimonials["image"]} alt title />
                              </div>
                              <p className='client-name'>
                                -{testimonials["clientName"]}
                              </p>
                            </Link>
                          </Carousel>
                        </ScrollAnimation>
                      </div>
                    ) : (
                      " "
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Testimonial;
