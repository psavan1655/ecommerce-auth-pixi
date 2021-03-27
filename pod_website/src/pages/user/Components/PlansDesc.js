import React from "react";
import Footer from "./Footer";
import Header from "./Header";

function PlansDesc() {
  return (
    <React.Fragment>
      <Header />

      <section id='ibutton-plans'>
        <div className='ibutton-plans-wrapper'>
          <div className='container'>
            <div>
              <img src='images/white-camera.png' alt title />
            </div>
            <div className='row'>
              <div className='col-12 col-sm-12 col-md-12 col-lg-12'>
                <h2 className='i-b-basic-title'>Basic Plan Includes</h2>
                <h5 className='i-b-inner-title'>
                  We work on hourly basis, please note the below details
                  regarding this plan.
                </h5>
                <div className='i-b-paragraph'>
                  <span> o &nbsp;</span>
                  <p>
                    Hourly Charge( To know the charges go to inquiry now and
                    submit your inquiry.)
                  </p>
                  <br />
                  <span> o &nbsp;</span>
                  <p>One Personal Photographer.</p>
                  <br />
                  <span> o &nbsp;</span>
                  <p>Unlimited Images.</p>
                  <br />
                  <span> o &nbsp;</span>
                  <p>Fast Delivery (Within 48 Working Hours)· </p>
                  <br />
                  <span> o &nbsp;</span>
                  <p>All JPEGs, High Definition Images</p>
                  <br />
                  <span> o &nbsp;</span>
                  <p>
                    All images will be shared via WETRANSFER IN SAME ORDER id
                    <br />
                    and you will get notification on your phone.{" "}
                  </p>
                  <br />
                  <span> o &nbsp;</span>
                  <p>
                    Retouch with basic colour correction will be done for all
                    images being shared.
                  </p>
                  <br />
                  <span> o &nbsp;</span>
                  <p>
                    ZERO ADVANCE PAYMENT WITH “PAS(Payment After Shoot)” option
                    at the
                    <br />
                    time of the Booking.{" "}
                  </p>
                  <br />
                  <div className='mt-2'>
                    <span> • &nbsp;</span>
                    <p>
                      Personal photographer meaning, it is a genre of
                      photography that focuses on
                      <br />
                      yourself, focuses on your personal life experiences,
                      focuses on photographing
                      <br />
                      your loved ones, and other elements of your “boring” and
                      everday life in professional way.{" "}
                    </p>
                    <br />
                  </div>
                </div>
                <h6 className='i-b-sub-title'>PRIVACY &amp; SECURITY:</h6>
                <div className='i-b-paragraph'>
                  <span> o &nbsp;</span>
                  <p>
                    For safety reasons please do not share any of your personal
                    &amp; contact details to photographers
                  </p>
                  <br />
                  <span> o &nbsp;</span>
                  <p>
                    In Case of any shared details, POD would not be responsible
                    for any outcomes.
                  </p>
                  <br />
                </div>
                <h6 className='i-b-sub-title'>TERMS &amp; CONDITIONS:</h6>
                <div className='i-b-paragraph'>
                  <span> o &nbsp;</span>
                  <p>No Refund Policy.</p>
                  <br />
                  <span> o &nbsp;</span>
                  <p>Online payment only.</p>
                  <br />
                  <span> o &nbsp;</span>
                  <p>
                    Cancellation charges 199/- (No charges applicable if the
                    shoot is Rescheduled)
                  </p>
                  <br />
                  <span> o &nbsp;</span>
                  <p>
                    Selection of location is to be done by Client (Outdoor
                    shoot).
                  </p>
                  <br />
                  <span> o &nbsp;</span>
                  <p>
                    In case of bad weather conditions we will reschedule your
                    booking as per suitable date and time.
                  </p>
                  <br />
                  <span> o &nbsp;</span>
                  <p>
                    The team is allowed to leave early if the session is
                    completed before booking timings.
                  </p>
                  <br />
                  <span> o &nbsp;</span>
                  <p>
                    In case of any delay by our photographer additional time
                    will be given to the customers.
                  </p>
                  <br />
                  <span> o &nbsp;</span>
                  <p>
                    As of now customization in not available in theme with props
                    setup.{" "}
                  </p>
                  <br />
                  <span> o &nbsp;</span>
                  <p>
                    POD is not responsible for any location and its permit, on
                    booking or at shoot.
                  </p>
                  <br />
                  <span> o &nbsp;</span>
                  <p>
                    In case of shoot cancellation due to location constraints,
                    client is liable to pay the full booking amount.{" "}
                  </p>
                  <br />
                  <span> o &nbsp;</span>
                  <p>
                    In case of change in location due No-permit or other
                    reasons, additional transportation charges
                    <br /> will be applicable as @149/- (Upto 5kms) @299/- (5Kms
                    to 15Kms).{" "}
                  </p>
                  <br />
                </div>
                <h6 className='i-b-sub-title'>REQUEST:</h6>
                <div className='i-b-paragraph'>
                  <span> o &nbsp;</span>
                  <p>
                    Please offer water/food as per your convenience to your
                    photographer if shoot is of 2 or more hrs.
                    <br /> We want your Personal Photographer to remain healthy
                    in order to serve you better.
                  </p>
                  <br />
                </div>
                <h2 className='i-b-basic-title'>Thank you, Team POD :)</h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </React.Fragment>
  );
}

export default PlansDesc;
