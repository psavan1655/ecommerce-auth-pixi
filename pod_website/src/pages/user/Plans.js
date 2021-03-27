import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AxiosGet from "../AxiosGet";

import Footer from "./Components/Footer";
import Header from "./Components/Header";
import MembershipSlider from "./Components/MembershipSlider";
import PlansCard from "./Components/PlansCard";
import MembershipPlan from "./MembershipPlan";
import yellowLine from "../images/planes-yellow-line.png";
import Loader from "react-loader-spinner";

function Plans() {
  const [image, setimage] = useState();
  const [plans, setplans] = useState();
  const [loading, setloading] = useState(false);

  useEffect(() => {
    AxiosGet("api/content/plan").then((data) => {
      if (data) {
        let imageParsed = JSON.parse(data[0].image)["image"];

        let plansParsed = JSON.parse(data[0].plans)["plansArray"];
        setimage(imageParsed);
        setplans(plansParsed);
        setloading(true);
      } else {
        setimage("");
        setplans("");
      }
    });
  }, []);

  return (
    <React.Fragment>
      {loading ? (
        <React.Fragment>
          <Header />
          {image ? (
            <section id='planes'>
              <div className='plans-main-banner'>
                <img src={image[0].image} alt title />
              </div>
              <div className='planes-page-main'>
                <ul
                  className='nav nav-pills mb-3'
                  id='pills-tab'
                  role='tablist'>
                  <li className='nav-item mr-4'>
                    <Link
                      to='/plan'
                      className='nav-link active common-main-heading'
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
                <div className='tab-content' id='pills-tabContent'>
                  <div
                    className='tab-pane fade show active'
                    id='pills-home'
                    role='tabpanel'
                    aria-labelledby='pills-home-tab'>
                    <div className='container h-100'>
                      <div className='row align-items-center'>
                        {plans
                          ? plans.map((e, index) => {
                              if (index <= 3) {
                                return (
                                  <React.Fragment>
                                    <PlansCard
                                      planId={index}
                                      planName={e.planName}
                                      planPrice={e.planPrice}
                                    />
                                  </React.Fragment>
                                );
                              } else {
                                return null;
                              }
                            })
                          : ""}
                      </div>
                      <div className='planes-center-line mb-5'>
                        <img src={yellowLine} alt title />
                      </div>
                      <div className='row justify-content-center'>
                        {plans
                          ? plans.map((e, index) => {
                              if (index > 3) {
                                return (
                                  <React.Fragment>
                                    <PlansCard
                                      planId={index}
                                      planName={e.planName}
                                      planPrice={e.planPrice}
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
                </div>
              </div>
            </section>
          ) : (
            ""
          )}
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

export default Plans;
