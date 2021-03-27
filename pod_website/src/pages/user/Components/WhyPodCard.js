import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import logo from "../../images/pod-icon-01.png";

function WhyPodCard({ count, img, details }) {
  const cardColor =
    count % 2 == 0 ? "pod-slider-content-yellow" : "pod-slider-content-black";

  return (
    <React.Fragment>
      <div className='carousel-item active' id='slide-one-whypod'>
        <div className='whypod-inner-wrapper-yellow'>
          <ScrollAnimation animateIn='fadeInDown'>
            <div className='row h-100 justify-content-center align-items-center'>
              <div className='col-12 col-sm-12 col-md-4 col-lg-4 text-center'>
                <div id='hex1' className='hexagon-wrapper'>
                  <span className='shadow-overlay' />
                  <div id='color1' className='hexagon'>
                    {img ? (
                      <img className='hexagon-img' src={img} />
                    ) : (
                      <img className='hexagon-img' src={logo} />
                    )}
                  </div>
                </div>
              </div>
              <div className='col-12 col-sm-12 col-md-8 col-lg-8 pr-0'>
                <div className='pod-content-title-01'>
                  <h5>
                    <span>BEST</span>
                    <br /> AFFORDABLE <br />
                    <span style={{ textAlign: "right", display: "block" }}>
                      PRICE
                    </span>
                  </h5>
                </div>
                {/* TODO: Add Card color here */}
                <div className={cardColor}>
                  <div className='col-12  w-100 p-3'>
                    <p>{details}</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </React.Fragment>
  );
}

export default WhyPodCard;
