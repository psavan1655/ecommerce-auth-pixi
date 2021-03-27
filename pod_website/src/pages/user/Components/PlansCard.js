import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Link } from "react-router-dom";
import cameraLogo from "../../images/plans-camera-icon.png";

function PlansCard({ planId, planName, planPrice }) {
  return (
    <React.Fragment>
      <div className='col-12 col-sm-12 col-md-3 col-lg-3 text-center mb-4'>
        <ScrollAnimation animateIn='zoomIn'>
          <div className='planes-border'>
            <div className='row align-items-center'>
              <div className='col-12 col-sm-12 col-md-4 col-lg-4 text-right pr-0'>
                <Link
                  to={`/plan/${planId}`}
                  className='planes-camera-icon mt-3'>
                  <img src={cameraLogo} alt title />
                </Link>
              </div>
              <div className='col-12 col-sm-12 col-md-8 col-lg-8 text-left'>
                <div className='planes-text-main'>
                  <Link to={`/plan/${planId}`}>
                    {planName}
                    <br />
                    {planPrice}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </React.Fragment>
  );
}

export default PlansCard;
