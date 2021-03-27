import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import mobHand from "./images/mobile-hand.png";
import instagramLogo from "./images/instagram.png";
import facebookLogo from "./images/facebook.png";
import youtubeLogo from "./images/youtube.png";
import { Link } from "react-router-dom";

function DownloadApp() {
  return (
    <React.Fragment>
      <section id='download-app'>
        <div className='download-app-wrapper'>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-12 col-sm-12 col-md-5 col-lg-5 p-0 text-right'>
                <ScrollAnimation animateIn='slideInLeft'>
                  <div className='dow-application-image'>
                    <img src={mobHand} alt title />
                  </div>
                </ScrollAnimation>
              </div>
              <div className='col-12 col-sm-12 col-md-5 col-lg-5 p-0'>
                <div className='dow-app-content'>
                  <ScrollAnimation animateIn='slideInRight'>
                    <div className='dow-right-content-text'>
                      <h5>DOWNLOAD OUR NEW</h5>
                      <h3>PHOTOGRAPHER ON DEMAND APP</h3>
                      <p>
                        Book your personal Photographer with all new
                        Photographer
                        <br />
                        On Demand(POD) app.
                      </p>
                    </div>
                    <div className='playstore-btn-footer dow-app-store-btn'>
                      <Link
                        to={{
                          pathname:
                            "https://play.google.com/store/apps/details?id=com.seawindsolution.pod",
                        }}
                        target='_blank'
                        className='btn btn-google mr-3'
                        title='Google Play'>
                        Google Play
                      </Link>
                      <Link
                        to={{
                          pathname:
                            "https://apps.apple.com/in/app/photographer-on-demand/id1503321883",
                        }}
                        target='_blank'
                        className='btn btn-apple'
                        title='App Store'>
                        App Store
                      </Link>
                    </div>
                    <div className='social-wrapper social-wrapper-down-app'>
                      <Link
                        to={{
                          pathname:
                            "https://www.instagram.com/podphotographerondemand/",
                        }}
                        target='_blank'>
                        <img
                          src={instagramLogo}
                          alt='instagram'
                          title='instagram'
                        />
                      </Link>
                      <Link
                        to={{
                          pathname: "https://www.facebook.com/podahmedabad/",
                        }}
                        target='_blank'>
                        <img
                          src={facebookLogo}
                          alt='facebook'
                          title='facebook'
                        />
                      </Link>
                      <Link
                        to={{
                          pathname:
                            "https://www.youtube.com/channel/UC5zesRMn-TnIs_B-sw4IQRw",
                        }}
                        target='_blank'>
                        <img src={youtubeLogo} alt='youtube' title='youtube' />
                      </Link>
                    </div>
                  </ScrollAnimation>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default DownloadApp;
