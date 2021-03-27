import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Link } from "react-router-dom";

function Client({ clients }) {
  return (
    <React.Fragment>
      <section id='client'>
        {clients ? (
          <div className='client-wrapper'>
            <div className='container'>
              <div className='row'>
                <div className='col-12 col-sm-12 col-md-6 col-lg-3 mb-4'>
                  <Link to='/'>
                    <ScrollAnimation animateIn='fadeInDown'>
                      <div className='client-circle'>
                        <img src={clients[0].image} alt title />
                      </div>
                      <div className='client-content-02'>
                        <p>
                          <ScrollAnimation animateIn='fadeInUp'>
                            {clients[0].description}
                          </ScrollAnimation>
                        </p>
                      </div>
                    </ScrollAnimation>
                  </Link>
                </div>
                <div className='col-12 col-sm-12 col-md-6 col-lg-3 mb-4'>
                  <Link to='/'>
                    <ScrollAnimation animateIn='fadeInDown'>
                      <div className='client-circle'>
                        <img src={clients[1].image} alt title />
                      </div>
                      <div className='client-content-02'>
                        <p>
                          <ScrollAnimation animateIn='fadeInUp'>
                            {clients[1].description}
                          </ScrollAnimation>
                        </p>
                      </div>
                    </ScrollAnimation>
                  </Link>
                </div>
                <div className='col-12 col-sm-12 col-md-6 col-lg-3 mb-4'>
                  <Link to='/'>
                    <ScrollAnimation animateIn='fadeInDown'>
                      <div className='client-circle'>
                        <img src={clients[2].image} alt title />
                      </div>
                      <div className='client-content-02'>
                        <p>
                          <ScrollAnimation animateIn='fadeInUp'>
                            {clients[2].description}
                          </ScrollAnimation>
                        </p>
                      </div>
                    </ScrollAnimation>
                  </Link>
                </div>
                <div className='col-12 col-sm-12 col-md-6 col-lg-3 mb-4'>
                  <Link to='/'>
                    <ScrollAnimation animateIn='fadeInDown'>
                      <div className='client-circle'>
                        <img src={clients[3].image} alt title />
                      </div>
                      <div className='client-content-02'>
                        <p>
                          <ScrollAnimation animateIn='fadeInUp'>
                            {clients[3].description}
                          </ScrollAnimation>
                        </p>
                      </div>
                    </ScrollAnimation>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </section>
    </React.Fragment>
  );
}

export default Client;
