import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

import MembershipSlider from "./Components/MembershipSlider";

// TEMP Images
import cameraImg from "../images/membership-plan-camera.png";
import logo from "../images/Memberships-plan.png";
import AxiosGet from "../AxiosGet";
import Loader from "react-loader-spinner";

function MembershipPlan() {
  const [image, setimage] = useState();
  const [membershipplan, setmembershipplan] = useState();
  const [loading, setloading] = useState(false);

  useEffect(() => {
    AxiosGet("api/content/plan").then((data) => {
      if (data) {
        let imageParsed = JSON.parse(data[0].image)["image"];
        let membershipplanParsed = JSON.parse(data[0].membershipPlan)[
          "mebmbershiPlansArray"
        ];

        membershipplanParsed
          ? console.log(membershipplanParsed)
          : console.log("TEST");
        setimage(imageParsed);
        setmembershipplan(membershipplanParsed);
        setloading(true);
      } else {
        setimage("");
        setmembershipplan("");
      }
    });
  }, []);

  return (
    <React.Fragment>
      {loading ? (
        <React.Fragment>
          <Header />

          <section id='membership-palns'>
            <div className='membership-banner'>
              {image ? <img src={image[0].image} alt title /> : ""}
            </div>
            <div className='planes-page-main'>
              <ul className='nav nav-pills mb-3' id='pills-tab' role='tablist'>
                <li className='nav-item mr-4'>
                  <Link
                    to='/plan'
                    className='nav-link common-main-heading'
                    id='pills-home-tab'
                    data-toggle='pill'
                    role='tab'
                    aria-controls='pills-home'
                    aria-selected='true'>
                    Plans
                  </Link>
                  <div className='common-heading-line-yellow mb-5' />
                </li>
                <li className='nav-item'>
                  <Link
                    to='/membership'
                    className='nav-link common-main-heading'
                    id='pills-profile-tab'
                    data-toggle='pill'
                    aria-controls='pills-profile'
                    aria-selected='false'>
                    Memberships Plan
                  </Link>
                  <div className='common-heading-line-yellow mb-5' />
                </li>
              </ul>
              <ScrollAnimation animateIn='fadeInUp'>
                <div className='membership-page-main'>
                  <div className='container h-100'>
                    <div className='row align-items-center'>
                      <div className='col-12 col-sm-12 col-md-12 col-lg-5'>
                        <div className='membership-camera-img'>
                          <img src={cameraImg} alt title />
                        </div>
                      </div>
                      <div className='col-12 col-sm-12 col-md-12 col-lg-7'>
                        <div className='row member-slider-wrap'>
                          <div className='col-12 col-sm-12 col-md-1 col-lg-1 p-0'>
                            <div className='benifit-text'>
                              <h3>Membership Benifits</h3>
                            </div>
                          </div>
                          {membershipplan
                            ? membershipplan.map((e, index) => {
                                return (
                                  <React.Fragment>
                                    <MembershipSlider
                                      membershipText={e.content}
                                    />
                                  </React.Fragment>
                                );
                              })
                            : ""}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
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

export default MembershipPlan;
