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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showMobileSubMenu, setShowMobileSubMenu] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setIsSticky(window.scrollY > 0);
    });
  }, []);

  // Menu items
  const menuItems = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'EXPLORE OUR SPACE' },
    { to: '/service', label: 'What We Offer' },
    { to: '/portfolio', label: 'Our Creation' },
    { to: '/blog', label: 'Our Blogs' },
    {
      label: "Let's Connect",
      submenu: [
        { to: '/contact', label: 'Reach Us' },
        { to: '/career', label: 'Join Us' }
      ]
    }
  ];

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
                {/* Desktop Menu */}
                <div className="cs-nav cs-primary_font cs-medium">
                  <ul className="cs-nav_list">
                    <li>
                      <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                      <NavLink to="/about">EXPLORE OUR SPACE</NavLink>
                    </li>
                    <li>
                      <NavLink to="/service">What We Offer</NavLink>
                    </li>
                    <li>
                      <NavLink to="/portfolio">Our Creation</NavLink>
                    </li>
                    <li>
                      <NavLink to="/blog">Our Blogs</NavLink>
                    </li>
                    <li className="menu-item-has-children">
                      <NavLink to="/contact">Let's Connect</NavLink>
                      <DropDown>
                        <ul>
                          <li>
                            <Link to="/contact">Reach Us</Link>
                          </li>
                          <li>
                            <Link to="/career">Join Us</Link>
                          </li>
                        </ul>
                      </DropDown>
                    </li>
                  </ul>
                </div>
                {/* Hamburger for mobile */}
                <span
                  className="cs-munu_toggle"
                  onClick={() => setMobileMenuOpen(true)}
                >
                  <span></span>
                </span>
              </Div>
            </Div>
          </Div>
        </Div>
      </header>

      {/* Fullscreen Mobile Menu Overlay */}
      <div className={`fullscreen-mobile-menu${mobileMenuOpen ? ' open' : ''}`}>
        <div className="menu-header">
          <Link className="menu-logo" to="/" onClick={() => setMobileMenuOpen(false)}>
            <img src="/images/LOGO.png" alt="Logo" />
          </Link>
          <button className="menu-close" onClick={() => setMobileMenuOpen(false)}>&times;</button>
        </div>
        <ul className="menu-list">
          {menuItems.map((item, idx) =>
            !item.submenu ? (
              <li key={idx}>
                <NavLink to={item.to} onClick={() => setMobileMenuOpen(false)}>
                  {item.label}
                </NavLink>
              </li>
            ) : (
              <li key={idx} className="mobile-submenu-parent">
                <button
                  className="mobile-submenu-toggle"
                  onClick={() => setShowMobileSubMenu((v) => !v)}
                  aria-expanded={showMobileSubMenu}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#fff',
                    fontSize: '1.2rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    width: '100%',
                    textAlign: 'center',
                    marginBottom: showMobileSubMenu ? 0 : 18
                  }}
                >
                  {item.label}
                  <span style={{
                    display: 'inline-block',
                    marginLeft: 8,
                    transform: showMobileSubMenu ? 'rotate(90deg)' : 'rotate(0deg)',
                    transition: 'transform 0.2s'
                  }}>▶</span>
                </button>
                {showMobileSubMenu && (
                  <ul className="mobile-submenu-list" style={{ marginTop: 8 }}>
                    {item.submenu.map((sub, subIdx) => (
                      <li key={subIdx}>
                        <NavLink
                          to={sub.to}
                          onClick={() => setMobileMenuOpen(false)}
                          style={{
                            color: '#fff',
                            fontSize: '1.1rem',
                            fontWeight: 500,
                            padding: '8px 0',
                            display: 'block'
                          }}
                        >
                          {sub.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            )
          )}
        </ul>
        <div className="menu-bottom-info">
          <div style={{fontWeight:600, fontSize:'1.1rem', marginBottom: '6px'}}>Contact Us</div>
          <div>Hyderabad, Telangana, India</div>
          <div style={{fontSize:'0.95rem', marginTop:'4px'}}>hi@raising100x.com</div>
        </div>
      </div>
      {/* Blur background when menu is open */}
      {mobileMenuOpen && <div className="menu-blur-bg"></div>}
      <style>{`
      .fullscreen-mobile-menu {
        opacity: 0;
        pointer-events: none;
        transform: translateX(100%);
        transition: opacity 0.4s cubic-bezier(.4,2,.6,1), transform 0.4s cubic-bezier(.4,2,.6,1);
        animation: slideOutMenu 0.4s forwards;
      }
      .fullscreen-mobile-menu.open {
        opacity: 1;
        pointer-events: auto;
        transform: translateX(0);
        animation: slideInMenu 0.4s forwards;
      }
      @keyframes slideInMenu {
        0% {
          opacity: 0;
          transform: translateX(100%);
        }
        100% {
          opacity: 1;
          transform: translateX(0);
        }
      }
      @keyframes slideOutMenu {
        0% {
          opacity: 1;
          transform: translateX(0);
        }
        100% {
          opacity: 0;
          transform: translateX(100%);
        }
      }
      `}</style>
    </>
  );
}
