import React, { useState, useEffect } from "react";

import ScrollAnimation from "react-animate-on-scroll";
import logo from "./images/service-img-01.png";
import { Link } from "react-router-dom";
import blackborder from "./images/black-btn-border.png";
import blacktriangle from "./images/k-more-black.png";

function Services({ services }) {
  return (
    <section id='services'>
      {services ? (
        <div className='services-wrapper'>
          <h6 className='common-main-heading'>Services</h6>
          <div className='common-heading-line-yellow' />
          <div className='container'>
            <div className='row'>
              <div className='col-12 col-sm-12 col-md-4 col-lg-4'>
                <ScrollAnimation animateIn='zoomInUp'>
                  <a href='#' className='service-box-wrap'>
                    <div className='service-thumbnail'>
                      <img src={services[0].image} alt='' title />
                    </div>
                  </a>
                  <h2 className='service-name'>{services[0].serviceName}</h2>
                </ScrollAnimation>
              </div>
              <div className='col-12 col-sm-12 col-md-4 col-lg-4'>
                <ScrollAnimation animateIn='zoomInUp'>
                  <a href='#' className='service-box-wrap'>
                    <div className='service-thumbnail'>
                      <img src={services[1].image} alt='' title />
                    </div>
                  </a>
                  <h2 className='service-name'>{services[1].serviceName}</h2>
                </ScrollAnimation>
              </div>
              <div className='col-12 col-sm-12 col-md-4 col-lg-4'>
                <ScrollAnimation animateIn='zoomInUp'>
                  <a href='#' className='service-box-wrap'>
                    <div className='service-thumbnail'>
                      <img src={services[2].image} alt='' title />
                    </div>
                  </a>
                  <h2 className='service-name'>{services[2].serviceName}</h2>
                </ScrollAnimation>
              </div>
            </div>
            <Link to='/services' className='yellow-btn'>
              <img src={blacktriangle} className='arrow-btn' /> Know More{" "}
              <span className='white-border'>
                <img src={blackborder} />
              </span>
            </Link>
          </div>
        </div>
      ) : (
        ""
      )}
    </section>
  );
}

export default Services;

// TODO: Where to link the onClick event for the card
