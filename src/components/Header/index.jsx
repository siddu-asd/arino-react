import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import SocialWidget from '../Widget/SocialWidget';
import Newsletter from '../Widget/Newsletter';
import './header.scss';
import ContactInfoWidget from '../Widget/ContactInfoWidget';
import Div from '../Div';
import DropDown from './DropDown';

export default function Header({ variant }) {
  const [isSticky, setIsSticky] = useState(false);
  const [sideHeaderToggle, setSideHeaderToggle] = useState(false);
  const [mobileToggle, setMobileToggle] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    });
  }, []);

  return (
    <>
      <header
        className={`cs-site_header cs-style1 text-uppercase ${variant ? variant : ''
          } cs-sticky_header ${isSticky ? 'cs-sticky_header_active' : ''}`}
      >
        <Div className="cs-main_header">
          <Div className="container">
            <Div className="cs-main_header_in">
              <Div className="cs-main_header_left">
                <Link className="cs-site_branding" to="/">
                  <img src="/images/LOGO.png" alt="Logo" />
                </Link>
              </Div>
              <Div className="cs-main_header_center">
                <Div className="cs-nav cs-primary_font cs-medium">
                  <ul
                    className="cs-nav_list"
                    style={{ display: `${mobileToggle ? 'block' : 'none'}` }}
                  >
                    <li>
                      <NavLink to="/" onClick={() => setMobileToggle(false)}>
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/about" onClick={() => setMobileToggle(false)}>
                        EXPLORE OUR SPACE
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/service" onClick={() => setMobileToggle(false)}>
                        What We Offer
                      </NavLink>
                    </li>

                    {/* Updated Portfolio with Dropdown */}
                    <li >
                      <NavLink to="/portfolio" onClick={() => setMobileToggle(false)}>
                        Our Creation
                      </NavLink>
                   
                    </li>

                    <li>
                      <NavLink to="/blog" onClick={() => setMobileToggle(false)}>
                        Our Blogs
                      </NavLink>
                    </li>

                    {/* Contact Dropdown */}
                    <li className="menu-item-has-children">
                      <NavLink to="/contact" onClick={() => setMobileToggle(false)}>
                        Let's Connect
                      </NavLink>
                      <DropDown>
                        <ul>
                          <li>
                            <Link to="/contact" onClick={() => setMobileToggle(false)}>
                              Reach Us
                            </Link>
                          </li>
                          {/* <li>
                            <Link to="/faq" onClick={() => setMobileToggle(false)}>
                              FAQ
                            </Link>
                          </li> */}
                          <li>
                            <Link to="/career" onClick={() => setMobileToggle(false)}>
                              Join Us
                            </Link>
                          </li>
                        </ul>
                      </DropDown>
                    </li>
                  </ul>

                  {/* Mobile Menu Toggle */}
                  <span
                    className={
                      mobileToggle
                        ? 'cs-munu_toggle cs-toggle_active'
                        : 'cs-munu_toggle'
                    }
                    onClick={() => setMobileToggle(!mobileToggle)}
                  >
                    <span></span>
                  </span>
                </Div>
              </Div>

              {/* <Div className="cs-main_header_right">
                <Div className="cs-toolbox">
                  <span
                    className="cs-icon_btn"
                    onClick={() => setSideHeaderToggle(!sideHeaderToggle)}
                  >
                    <span className="cs-icon_btn_in">
                      <span />
                      <span />
                      <span />
                      <span />
                    </span>
                  </span>
                </Div>
              </Div> */}
            </Div>
          </Div>
        </Div>
      </header>

      {/* Side Header */}
      <Div className={sideHeaderToggle ? 'cs-side_header active' : 'cs-side_header'}>
        <button className="cs-close" onClick={() => setSideHeaderToggle(!sideHeaderToggle)} />
        <Div className="cs-side_header_overlay" onClick={() => setSideHeaderToggle(!sideHeaderToggle)} />
        <Div className="cs-side_header_in">
          <Div className="cs-side_header_shape" />
          <Link className="cs-site_branding" to="/">
            <img src="/images/LOGO.png" alt="Logo" />
          </Link>
          <Div className="cs-side_header_box">
            <h2 className="cs-side_header_heading">
              Reach the creative force to make it happen
              .
            </h2>
          </Div>
          <Div className="cs-side_header_box">
            <ContactInfoWidget title="Contact Us" withIcon />
          </Div>
          <Div className="cs-side_header_box">
            <Newsletter
              title="Subscribe"
              subtitle="Bringing a revolutionary change in the field of branding, marketing, tech and AI ."
              placeholder="example@gmail.com"
            />
          </Div>
          <Div className="cs-side_header_box">
            <SocialWidget />
          </Div>
        </Div>
      </Div>
    </>
  );
}
