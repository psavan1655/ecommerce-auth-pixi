import React from "react";

// Image import
import instagramLogo from "../../images/instagram.png";
import facebookLogo from "../../images/facebook.png";
import youtubeLogo from "../../images/youtube.png";
import instagramFooter from "../../images/insta-footer.svg";
import phoneFooter from "../../images/phone-footer.svg";
import mailFooter from "../../images/mail-footer.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className='container'>
        <div className='row'>
          <div className='col-6 col-sm-12 col-md-3 col-lg-2 footer-bottom-link'>
            <h2 className='footer-link-title'>Information</h2>
            <ul>
              <li>
                <Link to='/about'>About Us</Link>
              </li>
              <li>
                <Link to='/faq'>FAQ</Link>
              </li>
              <li>
                <Link to='/faq'>T&amp;C</Link>
              </li>
              <li>
                <Link to='/faq'>Privacy Policy</Link>
              </li>
            </ul>
          </div>
          <div className='col-6 col-sm-12 col-md-3 col-lg-2 footer-bottom-link'>
            <h2 className='footer-link-title'>Social</h2>
            <ul>
              <li>
                <Link
                  to={{ pathname: "https://www.facebook.com/podahmedabad/" }}
                  target='_blank'>
                  Facebook
                </Link>
              </li>
              <li>
                <Link
                  to={{
                    pathname:
                      "https://www.instagram.com/podphotographerondemand/",
                  }}
                  target='_blank'>
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  to={{
                    pathname:
                      "https://www.youtube.com/channel/UC5zesRMn-TnIs_B-sw4IQRw",
                  }}
                  target='_blank'>
                  Twitter
                </Link>
              </li>
            </ul>
          </div>
          <div className='col-12 col-sm-12 col-md-6 col-lg-4'>
            <h3 className='footer-download-title'>DOWNLOAD OUR MOBILE APP</h3>
            <div className='playstore-btn-footer'>
              <Link
                to={{
                  pathname:
                    "https://play.google.com/store/apps/details?id=com.seawindsolution.pod",
                }}
                target='_blank'
                className='btn btn-google mr-3'
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
            </div>
            <div className='social-wrapper social-wrapper-footer'>
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
            </div>
          </div>
        </div>
        <div className='row justify-content-end'>
          <div className='col-12 col-sm-12 col-md-6 col-lg-8'>
            <div className='footer-contact-wrapper'>
              <ul>
                <li>
                  <span className='contact-link-icon'>
                    <img src={instagramFooter} alt='' title />
                  </span>
                  <Link to='/'>POD (photographerondemand)</Link>
                </li>
                <li>
                  <span className='contact-link-icon'>
                    <img src={phoneFooter} alt='' title />
                  </span>
                  <Link to='/'> +91 7069999737</Link>
                </li>
                <li>
                  <span className='contact-link-icon'>
                    <img src={mailFooter} alt='' title />
                  </span>
                  <a href='mailto:photographerondemand.in@gmail.com?subject=photographerondemand.in@gmail.com'>
                    photographerondemand.in@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
