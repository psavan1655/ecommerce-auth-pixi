import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import AboutUs from "./user/AboutUs";
import Category from "./user/Category";
import WhyPodMain from "./user/WhyPodMain";
import ContactUs from "./user/ContactUs";
import Plans from "./user/Plans";
import MembershipPlan from "./user/MembershipPlan";
import Podian from "./user/Podian";
import FaqMain from "./user/FaqMain";
import PlansDesc from "./user/Components/PlansDesc";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' exact component={AboutUs} />
        <Route path='/services' exact component={Category} />
        <Route path='/whypod' exact component={WhyPodMain} />
        <Route path='/contact' exact component={ContactUs} />
        <Route path='/plan' exact component={Plans} />
        <Route path='/membership' exact component={MembershipPlan} />
        <Route path='/podian' exact component={Podian} />
        <Route path='/faq' exact component={FaqMain} />
        <Route path='/plan/:planId' exact component={PlansDesc} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
