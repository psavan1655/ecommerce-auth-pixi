import React from "react";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

// TEMP Images
import btnBorder from "./images/white-btn-border.png";
import logo from "./images/k-more-yellow.png";
import camera from "./images/plans-camera-icon.png";
import number0 from "./images/01-numbar.png";
import number1 from "./images/02-numbar.png";
import number2 from "./images/03-numbar.png";
import number3 from "./images/04-numbar.png";

function Plans({ plans }) {
  return (
    <React.Fragment>
      <section id='plans'>
        {plans[0] ? (
          <div className='plans-wrapper'>
            <h6 className='common-main-heading'>Plans</h6>
            <div className='common-heading-line-white' />
            <div className='container mb-5'>
              <div className='row'>
                <div className='col-12 col-sm-12 col-md-6 col-lg-3 text-left'>
                  <div className='planes-inner-box'>
                    <ScrollAnimation animateIn='fadeIn'>
                      <Link to={`/plan/0`} className='plans-i-button'>
                        i
                      </Link>

                      <div className='planes-content-main'>
                        <div className='plan-camera-icon mb-3'>
                          <Link
                            to={`/plan/0`}
                            style={{ display: "inline-block" }}>
                            <img src={camera} />
                          </Link>
                        </div>
                        <Link to={`/plan/0`} className='plans-content'>
                          <h4 className='w-75 p-2'>
                            {plans[0].planName}
                            <br />
                            <span>
                              {plans[0].planPrice}
                              <br />
                            </span>
                          </h4>
                        </Link>
                      </div>

                      <div className='number-01'>
                        <img src={number0} />
                      </div>
                    </ScrollAnimation>
                  </div>
                </div>
                <div className='col-12 col-sm-12 col-md-6 col-lg-4 text-left'>
                  <div className='planes-inner-box-02'>
                    <ScrollAnimation animateIn='fadeIn'>
                      <Link to={`/plan/1`} className='plans-i-button'>
                        i
                      </Link>
                      <div className='planes-content-main-02'>
                        <div className='plan-camera-icon mb-3'>
                          <Link
                            to={`/plan/1`}
                            style={{ display: "inline-block" }}>
                            <img src={camera} />
                          </Link>
                          <Link to={`/plan/1`} className='plans-content'>
                            <h4 className='w-75 p-2'>
                              {plans[1].planName}
                              <br />
                              <span>
                                {plans[1].planPrice}
                                <br />
                              </span>
                            </h4>
                          </Link>
                        </div>
                      </div>
                      <div className='number-02'>
                        <img src={number1} />
                      </div>
                    </ScrollAnimation>
                  </div>
                </div>
                <div className='col-12 col-sm-12 col-md-6 col-lg-3 text-left'>
                  <div className='planes-inner-box-02 planbox-mobile-03'>
                    <ScrollAnimation animateIn='fadeIn'>
                      <Link to={`/plan/2`} className='plans-i-button'>
                        i
                      </Link>
                      <div className='number-03'>
                        <img src={number2} />
                      </div>
                      <div className='planes-content-main-02 p-content-03'>
                        <div className='plan-camera-icon mb-3'>
                          <Link
                            to={`/plan/2`}
                            style={{ display: "inline-block" }}>
                            <img src={camera} />
                          </Link>
                          <Link to={`/plan/2`} className='plans-content'>
                            <h4 className='w-75 p-2'>
                              {plans[2].planName}
                              <br />
                              <span>
                                {plans[2].planPrice}
                                <br />
                              </span>
                            </h4>
                          </Link>
                        </div>
                      </div>
                    </ScrollAnimation>
                  </div>
                </div>
                <div className='col-12 col-sm-12 col-md-6 col-lg-2 text-left'>
                  <div className='planes-inner-box-02'>
                    <ScrollAnimation animateIn='fadeIn'>
                      <Link to={`/plan/3`} className='plans-i-button'>
                        i
                      </Link>
                      <div className='planes-content-main-02 p-content-04'>
                        <div className='plan-camera-icon mb-3'>
                          <Link
                            to={`/plan/3`}
                            style={{ display: "inline-block" }}>
                            <img src={camera} />
                          </Link>
                          <Link to={`/plan/3`} className='plans-content'>
                            <h4 className='w-75 p-2'>
                              {plans[3].planName}
                              <br />
                              <span>
                                {plans[3].planPrice}
                                <br />
                              </span>
                            </h4>
                          </Link>
                        </div>
                      </div>
                      <div className='number-04'>
                        <img src={number3} />
                      </div>
                    </ScrollAnimation>
                  </div>
                </div>
              </div>
            </div>
            <Link to={`/plan`} className='black-btn'>
              <img src={logo} className='arrow-btn' /> Know More
              <span className='white-border'>
                <img src={btnBorder} />
              </span>
            </Link>
          </div>
        ) : (
          ""
        )}
      </section>
    </React.Fragment>
  );
}

export default Plans;
