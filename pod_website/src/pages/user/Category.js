import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ServiceCard from "./Components/ServiceCard";

// TEMP IMAGES
import AxiosGet from "../AxiosGet";
import Loader from "react-loader-spinner";

function Category() {
  const [image, setimage] = useState();
  const [services, setservices] = useState();
  const [loading, setloading] = useState(false);

  useEffect(() => {
    AxiosGet("api/content/service").then((data) => {
      if (data) {
        let imageParsed = JSON.parse(data[0].image)["image"];
        let servicesParsed = JSON.parse(data[0].service1)["servicesArray"];
        setimage(imageParsed);
        setservices(servicesParsed);
        setloading(true);
      } else {
        setimage("");
        setservices("");
      }
    });
  }, []);

  return (
    <React.Fragment>
      {loading ? (
        <React.Fragment>
          <Header />
          {console.log(services)}
          <section id='category-banner'>
            <div className='category-banner-wrapper'>
              {image ? <img src={image[0].image} alt title /> : ""}
            </div>
            <div className='category-main'>
              <h6 className='common-main-heading'>Services</h6>
              <div className='common-heading-line-yellow' />
              <div className='container'>
                <div className='row'>
                  {services
                    ? services.map((e, index) => {
                        if (index <= 2) {
                          return (
                            <React.Fragment>
                              <ServiceCard
                                serviceName={e.serviceName}
                                serviceImage={e.image}
                              />
                            </React.Fragment>
                          );
                        } else {
                          return null;
                        }
                      })
                    : ""}
                </div>
              </div>
            </div>
            <div className='category-yellow'>
              <div className='container'>
                <div className='row'>
                  {services
                    ? services.map((e, index) => {
                        if (index > 2 && index <= 5) {
                          return (
                            <React.Fragment>
                              <ServiceCard
                                serviceName={e.serviceName}
                                serviceImage={e.image}
                              />
                            </React.Fragment>
                          );
                        } else {
                          return null;
                        }
                      })
                    : ""}
                </div>
              </div>
            </div>
            <div className='category-white'>
              <div className='container'>
                <div className='row'>
                  {services
                    ? services.map((e, index) => {
                        if (index > 5 && index <= 8) {
                          return (
                            <React.Fragment>
                              <ServiceCard
                                serviceName={e.serviceName}
                                serviceImage={e.image}
                              />
                            </React.Fragment>
                          );
                        } else {
                          return null;
                        }
                      })
                    : ""}
                </div>
              </div>
            </div>
            <div className='category-yellow'>
              <div className='container'>
                <div className='row'>
                  {services
                    ? services.map((e, index) => {
                        if (index > 8 && index <= 11) {
                          return (
                            <React.Fragment>
                              <ServiceCard
                                serviceName={e.serviceName}
                                serviceImage={e.image}
                              />
                            </React.Fragment>
                          );
                        } else {
                          return null;
                        }
                      })
                    : ""}
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

export default Category;

// TODO: CSS not working properly for equally spaced cards
