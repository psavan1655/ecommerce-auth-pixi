import React, { useEffect, useState } from "react";
import "./css/style.css";
import Header from "./user/Components/Header";
import Footer from "./user/Components/Footer";
import ImageCarousel from "./ImageCarousel";
import WhyPod from "./WhyPod";
import Services from "./Services";
import Plans from "./Plans";
import Client from "./Client";
import Testimonial from "./Testimonial";
import DownloadApp from "./DownloadApp";
import Review from "./Review";
import InstaPhoto from "./InstaPhoto";
import AxiosGet from "./AxiosGet";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

function Home() {
  const [slider, setslider] = useState([]);
  const [whypod, setwhypod] = useState();
  const [services, setservices] = useState();
  const [plans, setplans] = useState([]);
  const [testimonials, settestimonials] = useState([]);
  const [clients, setclients] = useState();
  const [instagram, setinstagram] = useState();
  const [downloadApp, setdownloadApp] = useState();
  const [reviews, setreviews] = useState();
  const [loading, setloading] = useState(false);

  const dataFunction = async () => {
    AxiosGet("api/content/home").then((data) => {
      if (data) {
        let sliderParsed = JSON.parse(data[0].slider)["carouselImagesArray"];
        let whypodParsed = JSON.parse(data[0].whyPod)["whyPodArray"];
        let servicesParsed = JSON.parse(data[0].services)["servicesArray"];
        let plansParsed = JSON.parse(data[0].plans)["plansArray"];
        let testimonialsParsed = JSON.parse(data[0].testimonials)[
          "testimonialsArray"
        ];
        let clientsParsed = JSON.parse(data[0].clients)["clientsArray"];

        setslider(sliderParsed);
        setwhypod(whypodParsed);
        setservices(servicesParsed);
        setplans(plansParsed);
        settestimonials(testimonialsParsed);
        setclients(clientsParsed);
        setinstagram(data[0].instagram);
        setdownloadApp(data[0].downloadApp);
        setreviews(data[0].reviews);
        setloading(true);
      } else {
        setslider("");
        setwhypod("");
        setservices("");
        setplans("");
        settestimonials("");
        setclients("");
        setinstagram("");
        setdownloadApp("");
        setreviews("");
      }
    });
  };

  useEffect(() => {
    dataFunction();
  }, []);

  return (
    <React.Fragment>
      {loading ? (
        <React.Fragment>
          <Header />
          <ImageCarousel sliderImg={slider} />
          <WhyPod whypod={whypod} />
          <Services services={services} />
          <Plans plans={plans} />
          <Client clients={clients} />
          <Testimonial testimonials={testimonials[0]} />
          <DownloadApp downloadApp={downloadApp} />
          <Review reviews={reviews} />
          {/* <InstaPhoto insta={instagram} /> */}
          <Footer />
        </React.Fragment>
      ) : (
        <div
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Loader
            type="BallTriangle"
            color="#f8af41"
            height={100}
            width={100}
            timeout={() => loading === true}
          />
        </div>
      )}
    </React.Fragment>
  );
}

export default Home;
