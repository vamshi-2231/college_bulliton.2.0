import React, { useEffect, useRef } from 'react';
import './Style.css'; // Ensure this path is correct for your project

export default function Header() {
  const hamburgerRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    const hamburger = hamburgerRef.current;
    const mobileMenu = mobileMenuRef.current;
    const header = headerRef.current;

    if (hamburger && mobileMenu && header) {
      // Toggle mobile menu on hamburger click
      const handleHamburgerClick = () => {
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('active');
      };

      // Close mobile menu when a menu item is clicked
      const handleMenuItemClick = (event) => {
        event.preventDefault();
        const targetId = event.target.getAttribute('href').substring(1); // Remove '#' from href
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }

        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
      };

      // Change header background color on scroll
      const handleScroll = () => {
        const scroll_position = window.scrollY;
        if (scroll_position > 250) {
          header.style.backgroundColor = '#29323c';
        } else {
          header.style.backgroundColor = '#545454';
        }
      };

      // Attach event listeners
      hamburger.addEventListener('click', handleHamburgerClick);
      window.addEventListener('scroll', handleScroll);

      // Attach click event to each menu item
      const menuItems = mobileMenu.querySelectorAll('a');
      menuItems.forEach(item => {
        item.addEventListener('click', handleMenuItemClick);
      });

      // Cleanup event listeners on unmount
      return () => {
        hamburger.removeEventListener('click', handleHamburgerClick);
        window.removeEventListener('scroll', handleScroll);
        menuItems.forEach(item => {
          item.removeEventListener('click', handleMenuItemClick);
        });
      };
    }
  }, []);

  return (
    <section id="header">
      <div className="header container" ref={headerRef}>
        <div className="nav-bar">
          <div className="brand">
            <a href="#">
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
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
