import React, { useState, useEffect } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Link } from "react-router-dom";

//TODO: Data import for slider images
// import { getWhyPod } from '<Call GET request and get data>'

// TEMP Image
import yellowBtn from "./images/k-more-yellow.png";
import whiteBtn from "./images/white-btn-border.png";

function WhyPod({ whypod }) {
  return (
    <section id='whypod'>
      <div className='whypod-wrapper'>
        <h6 className='common-main-heading'>
          <span className='light-heading'>Why</span> POD
        </h6>
        <ScrollAnimation animateIn='fadeInDown'>
          <div className='common-heading-line-white' />
          <div className='container'>
            <div className='row'>
              <div className='col-12 col-sm-12 col-md-6 col-lg-3 text-right pod-service-one'>
                <Link to={"/whypod"} id='hex1' className='hexagon-wrapper'>
                  <span className='shadow-overlay' />
                  <div id='color1' className='hexagon'>
                    {whypod ? (
                      <img className='hexagon-img' src={whypod[0].image} />
                    ) : (
                      ""
                    )}
                  </div>
                </Link>
                <Link to={"/whypod"} className='pod-service-content'>
                  <span className='straight-line' />
                  <span className='horizontal-line-01' />
                  <h5 className='circle-alphbet'>A</h5>
                  <div className='pod-content-01'>
                    {whypod ? (
                      <p
                        className='pod-light-text'
                        dangerouslySetInnerHTML={{
                          __html: whypod[0].content,
                        }}></p>
                    ) : (
                      ""
                    )}
                  </div>
                </Link>
              </div>
              <div className='col-12 col-sm-12 col-md-6 col-lg-3 text-right pod-service-two'>
                <Link to={"/whypod"} className='pod-service-content'>
                  <span className='straight-line-02' />
                  <span className='horizontal-line-02' />
                  <h5 className='circle-alphbet'>B</h5>
                  <div className='pod-content-02'>
                    {whypod ? (
                      <p
                        className='pod-light-text'
                        dangerouslySetInnerHTML={{
                          __html: whypod[1].content,
                        }}></p>
                    ) : (
                      ""
                    )}
                  </div>
                </Link>
                <Link to={"/whypod"} id='hex1' className='hexagon-wrapper'>
                  <span className='shadow-overlay' />
                  <div id='color1' className='hexagon'>
                    {whypod ? (
                      <img className='hexagon-img' src={whypod[1].image} />
                    ) : (
                      ""
                    )}
                  </div>
                </Link>
              </div>
              <div className='col-12 col-sm-12 col-md-6 col-lg-3 text-center pod-service-three'>
                <Link to={"/whypod"} id='hex1' className='hexagon-wrapper'>
                  <span className='shadow-overlay' />
                  <div id='color1' className='hexagon'>
                    {whypod ? (
                      <img className='hexagon-img' src={whypod[2].image} />
                    ) : (
                      ""
                    )}
                  </div>
                </Link>
                <Link to={"/whypod"} className='pod-service-content'>
                  <span className='straight-line-03' />
                  <span className='horizontal-line-03' />
                  <h5 className='circle-alphbet'>C</h5>
                  <div className='pod-content-03'>
                    {whypod ? (
                      <p
                        className='pod-light-text'
                        dangerouslySetInnerHTML={{
                          __html: whypod[2].content,
                        }}></p>
                    ) : (
                      ""
                    )}
                  </div>
                </Link>
              </div>
              {/* <div className='col-12 col-sm-12 col-md-6 col-lg-3 text-right pod-service-four'>
                <a
                  href='why-pod.html#why-pod-wrapper'
                  className='pod-service-content'>
                  <span className='straight-line-04' />
                  <span className='horizontal-line-04' />
                  <h5 className='circle-alphbet'>D</h5>
                  <div className='pod-content-02'>
                    {whypod ? (
                      <p
                        className='pod-light-text'
                        dangerouslySetInnerHTML={{
                          __html: whypod[3].content,
                        }}></p>
                    ) : (
                      ""
                    )}
                  </div>
                </a>
                <a
                  href='why-pod.html#why-pod-wrapper'
                  id='hex1'
                  className='hexagon-wrapper'>
                  <span className='shadow-overlay' />
                  <div id='color1' className='hexagon'>
                    {whypod ? (
                      <img className='hexagon-img' src={whypod[3].image} />
                    ) : (
                      ""
                    )}
                  </div>
                </a>
              </div>
             */}
            </div>
            <Link to={"/whypod"} className='black-btn'>
            <img src={yellowBtn} className='arrow-btn' /> Know More{" "}
              <span className='white-border'>
                <img src={whiteBtn} />
              </span>
            </Link>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}

export default WhyPod;
