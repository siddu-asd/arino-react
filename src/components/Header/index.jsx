import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './header.scss';
import Div from '../Div';
import DropDown from './DropDown';

export default function Header({ variant }) {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);

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
      label: 'Our Products',
      submenu: [
        { to: '/products/nexelvr', label: 'NexelVR' },
        { to: '/products/nisaa', label: 'Nisaa' },
        { to: '/products/meditech', label: 'MediTech' }
      ]
    },
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
                      <NavLink to="/products">Our Products</NavLink>
                      <DropDown>
                        <ul>
                          <li>
                            <Link to="/products/nexelvr">NexelVR</Link>
                          </li>
                          <li>
                            <Link to="/products/nisaa">Nisaa</Link>
                          </li>
                          <li>
                            <Link to="/products/meditech">MediTech</Link>
                          </li>
                        </ul>
                      </DropDown>
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
          {menuItems.map((item, idx) => {
            // Handle menu items with submenus
            if (item.submenu) {
              if (item.label === "Our Products") {
                return (
                  <li key={idx} className="mobile-dropdown-item">
                    <div 
                      className="mobile-dropdown-header"
                      onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
                    >
                      <span>{item.label}</span>
                      <span className={`dropdown-arrow ${productsDropdownOpen ? 'open' : ''}`}>▼</span>
                    </div>
                    <ul className={`mobile-dropdown-menu ${productsDropdownOpen ? 'open' : ''}`}>
                      {item.submenu.map((subItem, subIdx) => (
                        <li key={subIdx}>
                          <NavLink 
                            to={subItem.to} 
                            onClick={() => {
                              setMobileMenuOpen(false);
                              setProductsDropdownOpen(false);
                            }}
                          >
                            {subItem.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </li>
                );
              } else if (item.label === "Let's Connect") {
                return [
                  <li key="lets-connect">
                    <NavLink to="/contact" onClick={() => setMobileMenuOpen(false)}>
                      Let's Connect
                    </NavLink>
                  </li>,
                  <li key="join-us">
                    <NavLink to="/career" onClick={() => setMobileMenuOpen(false)}>
                      Join Us
                    </NavLink>
                  </li>
                ];
              }
            }
            return (
              <li key={idx}>
                <NavLink to={item.to} onClick={() => setMobileMenuOpen(false)}>
                  {item.label}
                </NavLink>
              </li>
            );
          })}
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
      
      .mobile-dropdown-item {
        border-bottom: 1px solid rgba(255,255,255,0.1);
      }
      
      .mobile-dropdown-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        color: white;
        font-weight: 600;
        font-size: 20px;
        transition: all 0.3s ease;
      }
      
      .mobile-dropdown-header:hover {
        color: white;
      }
      
      .dropdown-arrow {
        transition: transform 0.3s ease;
        font-size: 12px;
        padding:4px;
      }
      
      .dropdown-arrow.open {
        transform: rotate(180deg);
      }
      
      .mobile-dropdown-menu {
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.3s ease;
        margin: 0 -20px;
        padding: 0 20px;
      }
      
      .mobile-dropdown-menu.open {
        max-height: 200px;
      }
      
      .mobile-dropdown-menu li {
        border-bottom: none;
        padding: 0;
        list-style: none;
        text-align: center;
      }
      
      .mobile-dropdown-menu li a {
        padding: 12px 0;
        color: rgba(255,255,255,0.8);
        font-size: 16px;
        display: block;
        transition: color 0.3s ease;
        text-decoration: none;
        text-align: center;
        justify-content: center;
      }
      
      .mobile-dropdown-menu li a:hover {
        color: white;
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

      /* Fix for header visibility in 1000px-1200px range */
      @media screen and (min-width: 1000px) and (max-width: 1199px) {
        .cs-site_header {
          display: block !important;
          visibility: visible !important;
          opacity: 1 !important;
          position: fixed !important;
          top: 0 !important;
          background-color: #000 !important;
          z-index: 999 !important;
          width: 100% !important;
        }
        
        .cs-main_header {
          display: block !important;
          visibility: visible !important;
        }
        
        .cs-main_header_in {
          display: flex !important;
          visibility: visible !important;
          align-items: center !important;
          justify-content: space-between !important;
          height: 80px !important;
        }
        
        .cs-main_header_left {
          display: flex !important;
          visibility: visible !important;
        }
        
        .cs-main_header_center {
          display: flex !important;
          visibility: visible !important;
          position: relative !important;
        }
        
        .cs-munu_toggle {
          display: inline-block !important;
          visibility: visible !important;
          position: absolute !important;
          right: 0 !important;
          top: 50% !important;
          transform: translateY(-50%) !important;
          color: white !important;
        }
        
        .cs-nav {
          display: none !important;
        }
      }

      /* Additional fix for tablet range */
      @media screen and (min-width: 992px) and (max-width: 1199px) {
        .cs-site_header {
          display: block !important;
          visibility: visible !important;
          opacity: 1 !important;
          position: fixed !important;
          top: 0 !important;
          background-color: #000 !important;
          z-index: 999 !important;
          width: 100% !important;
        }
        
        .cs-main_header {
          display: block !important;
          visibility: visible !important;
        }
        
        .cs-main_header_in {
          display: flex !important;
          visibility: visible !important;
          align-items: center !important;
          justify-content: space-between !important;
          height: 80px !important;
        }
        
        .cs-main_header_left {
          display: flex !important;
          visibility: visible !important;
        }
        
        .cs-main_header_center {
          display: flex !important;
          visibility: visible !important;
          position: relative !important;
        }
        
        .cs-munu_toggle {
          display: inline-block !important;
          visibility: visible !important;
          position: absolute !important;
          right: 0 !important;
          top: 50% !important;
          transform: translateY(-50%) !important;
          color: white !important;
        }
        
        .cs-nav {
          display: none !important;
        }
      }

      /* Ensure header is always visible */
      .cs-site_header {
        display: block !important;
        visibility: visible !important;
        opacity: 1 !important;
      }
      `}</style>
    </>
  );
}
