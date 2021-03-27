import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Link } from "react-router-dom";

// TEMP Images
import cardImage from "../../images/category/service-img-01.png";

function ServiceCard({ serviceImage, serviceName }) {
  return (
    <React.Fragment>
      <div className='col-12 col-sm-12 col-md-4 col-lg-4'>
        <ScrollAnimation animateIn='fadeIn'>
          <Link to='/services' className='service-box-wrap'>
            <div className='service-thumbnail'>
              <img src={serviceImage} alt='' title />
            </div>
            <h2 className='service-name'>{serviceName}</h2>
          </Link>
        </ScrollAnimation>
      </div>
    </React.Fragment>
  );
}

export default ServiceCard;
