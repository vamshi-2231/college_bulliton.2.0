import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Style.css'; // Ensure this path is correct for your project

export default function Header() {
  const [isAdmin, setIsAdmin] = useState(false);
  const hamburgerRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const headerRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const hamburger = hamburgerRef.current;
    const mobileMenu = mobileMenuRef.current;
    const header = headerRef.current;

    // Initialize state based on current URL
    setIsAdmin(location.pathname === '/admin');

    if (hamburger && mobileMenu && header) {
      const handleHamburgerClick = () => {
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('active');
      };

      const handleMenuItemClick = (event) => {
        event.preventDefault();
        const targetId = event.target.getAttribute('href').substring(1); // Remove '#' from href

        if (targetId === 'admin') {
          if (!isAdmin) {
            setIsAdmin(true);
            navigate('/admin'); // Navigate to Admin page
          }
        } else if (targetId === 'notadmin') {
          if (isAdmin) {
            setIsAdmin(false);
            navigate('/'); // Navigate to the root page or adjust as needed
          }
        } else {
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
          }
        }

        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
      };

      const handleScroll = () => {
        const scroll_position = window.scrollY;
        if (scroll_position > 250) {
          header.style.backgroundColor = '#29323c';
        } else {
          header.style.backgroundColor = '#545454';
        }
      };

      hamburger.addEventListener('click', handleHamburgerClick);
      window.addEventListener('scroll', handleScroll);

      const menuItems = mobileMenu.querySelectorAll('a');
      menuItems.forEach(item => {
        item.addEventListener('click', handleMenuItemClick);
      });

      return () => {
        hamburger.removeEventListener('click', handleHamburgerClick);
        window.removeEventListener('scroll', handleScroll);
        menuItems.forEach(item => {
          item.removeEventListener('click', handleMenuItemClick);
        });
      };
    }
  }, [isAdmin, navigate, location.pathname]);

  return (
    <section id="header">
      <div className="header container" ref={headerRef}>
        <div className="nav-bar">
          <div className="brand">
            <a href="/">
              <h1><span>C</span>ollege <span>B</span>ulliton</h1>
            </a>
          </div>
          <div className="nav-list">
            <div className="hamburger" ref={hamburgerRef}>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
            <ul className="mobile-menu" ref={mobileMenuRef}>
              <li><a href="#home" data-after="Home">Home</a></li>
              <li><a href="#services" data-after="Services">Services</a></li>
              <li><a href="#projects" data-after="Updates">Updates</a></li>
              <li><a href="#about" data-after="About">About</a></li>
              <li><a href="#contact" data-after="Contact">Contact</a></li>
              <li>
                <a
                  href={isAdmin ? "#notadmin" : "#admin"}
                  data-after={isAdmin ? "NotAdmin" : "Admin"}
                >
                  {isAdmin ? "NotAdmin" : "Admin"}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
