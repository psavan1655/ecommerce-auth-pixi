import React from "react";

import border from "../../images/member-dashed-border-white.png";

function MembershipSlider({ membershipText }) {
  return (
    <React.Fragment>
      <div className='col-12 col-sm-12 col-md-3 col-lg-3 p-0'>
        <div className='member-slider-yellow'>
          <div
            id='member-carousel'
            className='carousel slide'
            data-ride='carousel'>
            <ol className='carousel-indicators'>
              <li
                data-target='#member-carousel'
                data-slide-to={0}
                className='active'
              />
              <li data-target='#member-carousel' data-slide-to={1} />
              <li data-target='#member-carousel' data-slide-to={2} />
            </ol>
            <div className='carousel-inner'>
              <div className='carousel-item active'>
                <div className='member-slider-content'>
                  <h2 className='member-title'>01</h2>
                  <span className='member-white-line'>
                    <img src={border} alt title />
                  </span>
                  <div
                    className='member-bullets-text mt-3 block'
                    dangerouslySetInnerHTML={{ __html: membershipText }}></div>
                </div>
              </div>
              <div className='carousel-item'>
                <div className='member-slider-content'>
                  <h2 className='member-title'>02</h2>
                  <span className='member-white-line'>
                    <img
                      src='images/member-dashed-border-white.png'
                      alt
                      title
                    />
                  </span>
                  <div className='member-bullets-text mt-3'>
                    <p>• Top rated Photographers</p>
                    <p>• Unlimited Photographs</p>
                    <p>
                      • Direct Back Office access (10am to 7pm working hours)
                    </p>
                    <p>• Express Delivery in 24 working hours(10am to 7pm)</p>
                    <p>• Free Basic Retouch</p>
                    <p>• Free data access upto 6 months from booking date</p>
                    <p>• Cashless Booking</p>
                    <p>• First Booking priority </p>
                    <p>• Quick solution for any issues</p>
                    <p>• Easy booking through our app</p>
                    <p>• Zero transportation cost.</p>
                  </div>
                </div>
              </div>
              <div className='carousel-item'>
                <div className='member-slider-content'>
                  <h2 className='member-title'>03</h2>
                  <span className='member-white-line'>
                    <img
                      src='images/member-dashed-border-white.png'
                      alt
                      title
                    />
                  </span>
                  <div className='member-bullets-text mt-3'>
                    <p>• Top rated Photographers</p>
                    <p>• Unlimited Photographs</p>
                    <p>
                      • Direct Back Office access (10am to 7pm working hours)
                    </p>
                    <p>• Express Delivery in 24 working hours(10am to 7pm)</p>
                    <p>• Free Basic Retouch</p>
                    <p>• Free data access upto 6 months from booking date</p>
                    <p>• Cashless Booking</p>
                    <p>• First Booking priority </p>
                    <p>• Quick solution for any issues</p>
                    <p>• Easy booking through our app</p>
                    <p>• Zero transportation cost.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default MembershipSlider;
