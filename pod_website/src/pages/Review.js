import React from "react";
import { Link } from "react-router-dom";

function Review() {
  return (
    <React.Fragment>
      <section id='review'>
        <div className='review-wrapper'>
          <Link to={"/"} className='common-main-heading clickable-heading'>
            Reviews
          </Link>

          <div className='common-heading-line-white mb-5' />
          <div className='container'>
            <div className='row justify-content-center pt-3'>
              <div className='col-12 col-sm-12 col-md-3 col-lg-3 text-center'>
                <div className='rating-counter'>
                  <a href='#testimonial' className='rating-num'>
                    4.35
                  </a>
                  <div className='rating'>
                    <span className='fa fa-star fill-rating' />
                    <span className='fa fa-star fill-rating' />
                    <span className='fa fa-star fill-rating' />
                    <span className='fa fa-star fill-rating' />
                    <span className='fa fa-star' />
                  </div>
                  <p className='total-rating'>68 total</p>
                </div>
              </div>
              <div className='col-12 col-sm-12 col-md-6 col-lg-6 text-center'>
                <div className='row rating-desc'>
                  <div className='col-1 col-xs-3 col-md-1 text-right'>5</div>
                  <div className='col-11 col-xs-8 col-md-11'>
                    <div className='progress progress-striped progress-bar-05'>
                      <div
                        className='progress-bar'
                        role='progressbar'
                        aria-valuenow={20}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "80%" }}>
                        <span className='sr-only'>80%</span>
                      </div>
                    </div>
                  </div>
                  {/* end 5 */}
                  <div className='col-1 col-xs-3 col-md-1 text-right'>4</div>
                  <div className='col-11 col-xs-8 col-md-11'>
                    <div className='progress progress-bar-04'>
                      <div
                        className='progress-bar'
                        role='progressbar'
                        aria-valuenow={20}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "6%" }}>
                        <span className='sr-only'>60%</span>
                      </div>
                    </div>
                  </div>
                  {/* end 4 */}
                  <div className='col-1 col-xs-3 col-md-1 text-right'>3</div>
                  <div className='col-11 col-xs-8 col-md-11'>
                    <div className='progress progress-bar-03'>
                      <div
                        className='progress-bar'
                        role='progressbar'
                        aria-valuenow={20}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "2%" }}>
                        <span className='sr-only'>40%</span>
                      </div>
                    </div>
                  </div>
                  {/* end 3 */}
                  <div className='col-1 col-xs-3 col-md-1 text-right'>2</div>
                  <div className='col-11 col-xs-8 col-md-11'>
                    <div className='progress progress-bar-02'>
                      <div
                        className='progress-bar'
                        role='progressbar'
                        aria-valuenow={20}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "3%" }}>
                        <span className='sr-only'>20%</span>
                      </div>
                    </div>
                  </div>
                  {/* end 2 */}
                  <div className='col-1 col-xs-3 col-md-1 text-right'>1</div>
                  <div className='col-11 col-xs-8 col-md-11'>
                    <div className='progress progress-bar-01'>
                      <div
                        className='progress-bar'
                        role='progressbar'
                        aria-valuenow={80}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "10%" }}>
                        <span className='sr-only'>15%</span>
                      </div>
                    </div>
                  </div>
                  {/* end 1 */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Review;
