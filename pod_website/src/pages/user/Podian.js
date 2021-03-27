import React, { useEffect, useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Link } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
// TEMP images
import gstoreLogo from "../images/reg-googleplay-btn.png";
import appstore from "../images/reg-appstore-btn.png";
import podian1 from "../images/podian-02-cameramen.png";
import podian2 from "../images/podian-02-download-bg.png";
import podian3 from "../images/podian-02-bg.png";
import AxiosGet from "../AxiosGet";
import Loader from "react-loader-spinner";

function Podian() {
  const [image, setimage] = useState();
  const [details, setdetails] = useState();
  const [loading, setloading] = useState(false);

  useEffect(() => {
    AxiosGet("api/content/podian").then((data) => {
      if (data) {
        let imageParsed = JSON.parse(data[0].image)["imagesArray"];

        let detailsParsed = JSON.parse(data[0].details)["detailsArray"];
        setimage(imageParsed);
        setdetails(detailsParsed);
        setloading(true);
      } else {
        setimage("");
        setdetails("");
      }
    });
  }, []);

  return (
    <React.Fragment>
      {loading ? (
        <React.Fragment>
          <Header />

          <section id='podian-02'>
            <div className='podian-02-wrapper'>
              <div className='podian-02-bg'>
                {image ? <img src={image[0].image} alt title /> : ""}
              </div>
              <div className='container'>
                <div className='podian-02-inner'>
                  <div className='row align-items-center'>
                    <div className='col-12 col-sm-12 col-md-12 col-lg-4'>
                      <ScrollAnimation animateIn='fadeInLeft'>
                        <div className='podian-first-content'>
                          <h6 className='common-main-heading'>Podian</h6>
                          <div className='common-heading-line-yellow' />
                          {details ? (
                            <div
                              dangerouslySetInnerHTML={{
                                __html: details[0].description,
                              }}></div>
                          ) : (
                            ""
                          )}
                        </div>
                      </ScrollAnimation>
                    </div>
                    <div className='col-12 col-sm-12 col-md-8 col-lg-6'>
                      <ScrollAnimation animateIn='fadeInDown'>
                        <div className='podian-middle-content'>
                          <div className='podian-cameramen-main'>
                            <img src={podian1} alt title />
                          </div>
                          <div className='podian-camera-text'>
                            <h5>
                              POD <span>gives you an opportunity to</span>
                            </h5>
                            <h4>LEAR EARN &amp; EXPLORE</h4>
                          </div>
                        </div>
                      </ScrollAnimation>
                    </div>
                    <div className='col-12 col-sm-12 col-md-4 col-lg-2'>
                      <ScrollAnimation animateIn='fadeInLeft'>
                        <div className='podian-download-inner'>
                          <img
                            className='podian-reg-bg'
                            src={podian2}
                            alt
                            title
                          />
                          <div className='register-content'>
                            <h4>
                              Register
                              <br /> Now
                            </h4>
                            <div className='reg-download-btn-main'>
                              <Link
                                to={{
                                  pathname:
                                    "https://play.google.com/store/apps/details?id=com.seawindsolution.pod",
                                }}
                                target='_blank'
                                className='btn podian-gp-btn mb-1 mt-2'
                                title='Google Play'>
                                <img src={gstoreLogo} />
                              </Link>
                              <Link
                                to={{
                                  pathname:
                                    "https://apps.apple.com/in/app/photographer-on-demand/id1503321883",
                                }}
                                target='_blank'
                                className='btn podian-app-btn'
                                title='App Store'>
                                <img src={appstore} />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </ScrollAnimation>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Footer />
        </React.Fragment>
      ) : (
        <div
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Loader
            type='BallTriangle'
            color='#f8af41'
            height={100}
            width={100}
            timeout={() => loading === true}
          />
        </div>
      )}
    </React.Fragment>
  );
}

export default Podian;
