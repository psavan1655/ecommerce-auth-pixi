import React, { useEffect, useState } from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import WhyPodCard from "./Components/WhyPodCard";
import banner from "../images/why-pod-banner.png";
import blackLeftArrow from "../images/black-left-arrow.png";
import blackRightArrow from "../images/black-right-arrow.png";
import AxiosGet from "../AxiosGet";
import Loader from "react-loader-spinner";
import { Carousel } from "react-responsive-carousel";

function WhyPodMain() {
  const [image, setimage] = useState();
  const [details, setdetails] = useState();
  const [loading, setloading] = useState(false);

  useEffect(() => {
    AxiosGet("api/content/whypod").then((data) => {
      if (data) {
        let imageParsed = JSON.parse(data[0].image)["image"];

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
          <section id='why-pod'>
            <div className='whypod-page-banner'>
              <div className='whypod-banner'>
                {image ? <img src={image[0].image} alt title /> : ""}
              </div>
              {/* {details ? console.log(details) : ""} */}
              <div className='container-fluid'>
                <div className='row'>
                  <div className='col-12 col-sm-12 col-md-12 col-lg-12 p-0'>
                    <div className='whypod-carousel-main' id='why-pod-wrapper'>
                      <h6 className='common-main-heading mt-3'>
                        <span className='light-heading'>Why</span> POD?
                      </h6>
                      <div className='common-heading-line-white' />
                      <div
                        id='carouselExampleIndicators'
                        className='carousel slide'
                        data-ride='carousel'>
                        <div className='carousel-inner'>
                          {details ? (
                            <Carousel
                              showThumbs={false}
                              showStatus={false}
                              autoPlay
                              infiniteLoop='true'>
                              {details.map((e, index) => {
                                return (
                                  <WhyPodCard
                                    count={index}
                                    img={e.image}
                                    details={e.detail}
                                  />
                                );
                              })}
                            </Carousel>
                          ) : (
                            ""
                          )}

                          {/* <WhyPodCard />
                      <WhyPodCard />
                      <WhyPodCard />
                      <WhyPodCard />
                      <WhyPodCard />
                      <WhyPodCard />
                      <WhyPodCard />
                      <WhyPodCard />
                      <WhyPodCard />
                      <WhyPodCard />
                      <WhyPodCard />
                      <WhyPodCard /> */}
                        </div>
                      </div>
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

export default WhyPodMain;

// TODO: Implement slider left right functinality
