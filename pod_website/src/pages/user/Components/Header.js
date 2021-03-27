import React, { useState, useEffect } from "react";
import PODLogo from "../../images/logo.svg";
import instagramLogo from "../../images/instagram.png";
import facebookLogo from "../../images/facebook.png";
import youtubeLogo from "../../images/youtube.png";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

const currentTab = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#2ecc72" };
  } else {
    return { color: "#FFFFFF" };
  }
};

function Header({ history }) {
  return (
    <header id='header-wrapper'>
      <Navbar
        className='navbar navbar-expand-lg navbar-light bg-light container'
        bg='light'
        expand='lg'>
        <Navbar.Brand>
          <Link to='/' className='navbar-brand'>
            <img src={PODLogo} alt='POD-logo' title='POD-logo' />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarTogglerDemo03'
          aria-controls='navbarTogglerDemo03'
          aria-expanded='false'
          aria-label='Toggle navigation'
        />
        <Navbar.Collapse
          className='collapse navbar-collapse'
          id='navbarTogglerDemo03'>
          <ul className='navbar-nav mr-auto ml-auto mt-2 mt-lg-0'>
            <li className='nav-item'>
              <Link to='/about' className='nav-link'>
                About Us
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/services' className='nav-link'>
                Services
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/whypod' className='nav-link'>
                Why POD
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/contact' className='nav-link'>
                Contact Us
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/plan' className='nav-link'>
                Plans
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/podian' className='nav-link'>
                Podian?
              </Link>
            </li>
          </ul>
          <form className='app-download-btn playstore-btn'>
            {/* <Nav className='playstore-btn '> */}
            <Link
              to={{
                pathname:
                  "https://play.google.com/store/apps/details?id=com.seawindsolution.pod",
              }}
              target='_blank'
              className='btn btn-google mr-1'
              title='Google Play'>
              Google Play
            </Link>
            <Link
              to={{
                pathname:
                  "https://apps.apple.com/in/app/photographer-on-demand/id1503321883",
              }}
              target='_blank'
              className='btn btn-apple'
              title='App Store'>
              App Store
            </Link>
            {/* </Nav> */}
            <Nav className='social-wrapper'>
              <Link
                to={{
                  pathname:
                    "https://www.instagram.com/podphotographerondemand/",
                }}
                target='_blank'>
                <img src={instagramLogo} alt='instagram' title='instagram' />
              </Link>

              <Link
                to={{ pathname: "https://www.facebook.com/podahmedabad/" }}
                target='_blank'>
                <img src={facebookLogo} alt='facebook' title='facebook' />
              </Link>
              <Link
                to={{
                  pathname:
                    "https://www.youtube.com/channel/UC5zesRMn-TnIs_B-sw4IQRw",
                }}
                target='_blank'>
                <img src={youtubeLogo} alt='youtube' title='youtube' />
              </Link>
            </Nav>
          </form>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

export default Header;
