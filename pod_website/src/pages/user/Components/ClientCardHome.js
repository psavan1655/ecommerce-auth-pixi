import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Link } from "react-router-dom";

// TEMP Image
import logo from "../../images/client-img-01.png";

function ClientCardHome() {
  return (
    <React.Fragment>
      <div className='col-12 col-sm-12 col-md-6 col-lg-3 mb-4'>
        <Link to='/'>
          <ScrollAnimation animateIn='fadeInDown'>
            <div className='client-circle'>
              <img src={logo} alt title />
            </div>
            <div className='client-content-02'>
              <p>
                <ScrollAnimation animateIn='fadeInUp'>
                  10 k +<br />
                  Happy&amp;Satisfied
                  <br />
                  Clients
                </ScrollAnimation>
              </p>
            </div>
          </ScrollAnimation>
        </Link>
      </div>
    </React.Fragment>
  );
}

export default ClientCardHome;
