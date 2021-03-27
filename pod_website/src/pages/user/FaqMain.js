import React from "react";
import Faq from "./Components/Faq";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import PrivacyPolicy from "./Components/PrivacyPolicy";
import TermsAndCondition from "./Components/TermsAndCondition";

function FaqMain() {
  return (
    <React.Fragment>
      <Header />

      <section id='ibutton-plans'>
        <div className='ibutton-plans-wrapper'>
          <div className='container'>
            <div>
              <img src='images/white-camera.png' alt title />
            </div>
            <div className='row'>
              <div className='col-12 col-sm-12 col-md-12 col-lg-12'>
                <Faq />
                <PrivacyPolicy />
                <TermsAndCondition />
                <h2 className='i-b-basic-title'>Thank you, Team POD :)</h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </React.Fragment>
  );
}

export default FaqMain;
