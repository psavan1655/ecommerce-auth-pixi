import React from 'react';

//login
const login = React.lazy(()=> import ('./views/pages/login/Login'))
//home components
const Carousel = React.lazy(() => import('./views/pages/Home/Carousel'));
const Testimonial = React.lazy(() => import('./views/pages/Home/Testimonial'));
const ClientWrapper = React.lazy(() => import('./views/pages/Home/ClientWrapper'));
const DownloadApp = React.lazy(() => import('./views/pages/Home/DownloadApp'));
const HomePlans = React.lazy(() => import('./views/pages/Home/Plans'));
const WhyPodHome = React.lazy(() => import('./views/pages/Home/WhyPoD'));
const ServicesHome = React.lazy(() => import('./views/pages/Home/Services'))

//about us components
const AboutUsBanner = React.lazy(() => import('./views/pages/About/AboutUs'));
const AboutUsText = React.lazy(() => import('./views/pages/About/AboutUsText'))

//Services components
const ServiceBanner = React.lazy(() => import('./views/pages/Services/Banner'));
const ServicesImages = React.lazy(() => import('./views/pages/Services/Services'));

//Why POD components
const WhyPodBanner = React.lazy(() => import('./views/pages/WhyPod/Banner'));
const WhyPodCarousel = React.lazy(() => import('./views/pages/WhyPod/Carousel'));

//plans compoenents
const PlansBanner = React.lazy(() => import('./views/pages/Plans/Banner'));
const PlansPlan = React.lazy(() => import('./views/pages/Plans/Plans'));
const PlansMembership = React.lazy(() => import('./views/pages/Plans/MembershipPlans'));

//Podian components
const PodianBanner = React.lazy(() => import('./views/pages/Podian/Banner'));
const PodianContent = React.lazy(() => import('./views/pages/Podian/Content'));

//Facebook
const facebook = React.lazy(()=> import('./views/pages/facebook/facebook'))


//routes
const routes = [
  // { path: '/', exact: true, name: 'Admin' },

  //Login
  // { path: '', name: 'login', compoenent: login},

  //home
  { path: '/home/carousel', name: 'Carousel', component: Carousel},
  { path: '/home/testimonial', name: 'Testimonial', component: Testimonial},
  { path: '/home/clientWrapper', name: 'Client Wrapper', component: ClientWrapper},
  { path: '/home/downloadApp', name: 'Download App', component: DownloadApp},
  { path: '/home/plans', name: 'Plans', component: HomePlans},
  { path: '/home/whypod', name: 'Why Pod', component: WhyPodHome},
  { path: '/home/servicesHome', name: 'Services', component: ServicesHome},

  //about us
  { path: '/aboutUs/banner', name: 'AboutUs', component: AboutUsBanner},
  { path: '/aboutUs/text', name: 'AboutUs', component: AboutUsText},

  //services
  { path: '/services/banner', name: 'Banner', component: ServiceBanner},
  { path: '/services/images', name: 'Service Images', component: ServicesImages},

  //Why Pod?
  { path: '/whyPod/banner', name: 'Banner', component: WhyPodBanner},
  { path: '/whyPod/carousel', name: 'Reasons', component: WhyPodCarousel},

  //Plans
  { path: '/plans/banner', name: 'Banner', component: PlansBanner},
  { path: '/plans/plans', name: 'Plans', component: PlansPlan},
  { path: '/plans/membershipPlans', name: 'Membership Plans', component: PlansMembership},

  //Podian
  { path: '/podian/banner', name: 'Banner', component: PodianBanner},
  { path: '/podian/content', name: 'Content', component: PodianContent},

  //facebook
  { path: '/facebook', name: 'Facebook', component: facebook},

];

export default routes;
