import React, { useState, useEffect } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import AxiosGet from "../AxiosGet";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

function AboutUs() {
  const [banner, setbanner] = useState();
  const [aboutText, setaboutText] = useState();
  const [loading, setloading] = useState(false);

  useEffect(() => {
    AxiosGet("api/content/about").then((data) => {
      if (data) {
        let bannerParsed = JSON.parse(data[0].image)["imageArray"];
        let aboutTextParsed = JSON.parse(data[0].text)["textArray"];
        setbanner(bannerParsed);
        setaboutText(aboutTextParsed);
        setloading(true);
      } else {
        setbanner("");
        setaboutText("");
      }
    });
  }, []);

  return (
    <React.Fragment>
      {loading ? (
        <React.Fragment>
          <Header />
          <section id='about-us'>
            {banner && aboutText ? (
              <div className='about-us-wrapper'>
                <div className='about-us-banner'>
                  <img src={banner[0].image} alt title />
                </div>
                <div className='container'>
                  <div className='row'>
                    <div className='col-12 col-sm-12 col-md-12 col-lg-12'>
                      <ScrollAnimation animateIn='fadeInDown'>
                        <div className='about-us-content'>
                          <div className='dotted-border'>
                            <div className='about-yellow-wrap'>
                              <p>{aboutText[0].aboutText}</p>
                            </div>
                          </div>
                        </div>
                      </ScrollAnimation>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
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

export default AboutUs;
