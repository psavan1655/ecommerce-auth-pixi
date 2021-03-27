import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav =  [
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Home',
    route: '/admin/home',
    icon: <CIcon name="cil-home" customClasses="c-sidebar-nav-icon"/>,
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Carousel',
        to: '/admin/home/carousel',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'WhyPOD',
        to: '/admin/home/whypod'
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Services',
        to: '/admin/home/servicesHome'
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Plans',
        to: '/admin/home/plans',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Client Wrapper',
        to: '/admin/home/clientWrapper',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Testimonial',
        to: '/admin/home/testimonial',
      },
      
      // {
      //   _tag: 'CSidebarNavItem',
      //   name: 'Download App',
      //   to: '/home/downloadApp',
      // },
      
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'About Us',
    to: '/admin/aboutUs',
    icon: <CIcon name="cil-notes" customClasses="c-sidebar-nav-icon"/>,
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Banner',
        to: '/admin/aboutUs/banner',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Text',
        to: '/admin/aboutUs/text',
      },
    ]
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Services',
    route: '/admin/services',
    icon: <CIcon name="cil-settings" customClasses="c-sidebar-nav-icon"/>,
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Banner',
        to: '/admin/services/banner',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Images',
        to: '/admin/services/images',
      },
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Why POD',
    route: '/admin/whyPod',
    icon: <CIcon name="cil-cursor" customClasses="c-sidebar-nav-icon"/>,
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Banner',
        to: '/admin/whyPod/banner',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Carousel',
        to: '/admin/whyPod/carousel',
      },
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Plans',
    route: '/admin/plans',
    icon: <CIcon name="cil-list" customClasses="c-sidebar-nav-icon"/>,
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Banner',
        to: '/admin/plans/banner',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Plans',
        to: '/admin/plans/plans',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Membership Plans',
        to: '/admin/plans/membershipPlans',
      },
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Podian',
    route: '/admin/podian',
    icon: <CIcon name="cil-user" customClasses="c-sidebar-nav-icon"/>,
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Banner',
        to: '/admin/podian/banner',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Content',
        to: '/admin/podian/content',
      },
    ],
  },
  {
    _tag: 'CSidebarNavDivider'
  },
  // {
  //   _tag: 'CSidebarNavTitle',
  //   _children: ['Extras'],
  // },
  // {
  //   _tag: 'CSidebarNavDropdown',
  //   name: 'Pages',
  //   route: '/pages',
  //   icon: 'cil-star',
  //   _children: [
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Login',
  //       to: '/login',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Register',
  //       to: '/register',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Error 404',
  //       to: '/404',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Error 500',
  //       to: '/500',
  //     },
  //   ],
  // },
  {
    _tag: 'CSidebarNavItem',
    name: 'Facebbok',
    to: '/admin/facebook',
    icon: <CIcon name="cib-facebook" customClasses="c-sidebar-nav-icon"/>,
  },
  {
    _tag: 'CSidebarNavDivider',
    className: 'm-2'
  },

  {
    _tag: 'CSidebarNavDivider',
    className: 'm-2'
  }
]

export default _nav
