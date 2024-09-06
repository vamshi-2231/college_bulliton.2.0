// import { useEffect, useRef } from 'react';
// import './Style.css'; // Ensure this path is correct for your project

// const Scripts = () => {
//   const hamburgerRef = useRef(null);
//   const mobileMenuRef = useRef(null);
//   const headerRef = useRef(null);

//   useEffect(() => {
//     const hamburger = hamburgerRef.current;
//     const mobileMenu = mobileMenuRef.current;
//     const header = headerRef.current;

//     if (hamburger && mobileMenu && header) {
//       // Toggle mobile menu on hamburger click
//       const handleHamburgerClick = () => {
//         hamburger.classList.toggle('active');
//         mobileMenu.classList.toggle('active');
//       };

//       // Change header background color on scroll
//       const handleScroll = () => {
//         const scroll_position = window.scrollY;
//         if (scroll_position > 250) {
//           header.style.backgroundColor = '#29323c';
//         } else {
//           header.style.backgroundColor = 'transparent';
//         }
//       };

//       // Attach event listeners
//       hamburger.addEventListener('click', handleHamburgerClick);
//       window.addEventListener('scroll', handleScroll);

//       // Cleanup event listeners on unmount
//       return () => {
//         hamburger.removeEventListener('click', handleHamburgerClick);
//         window.removeEventListener('scroll', handleScroll);
//       };
//     }
//   }, []);

//   return (
//     <div ref={headerRef} id="header">
//       <div className="header">
//         <div className="nav-bar">
//           <div className="nav-list">
//             <div className="hamburger" ref={hamburgerRef}>
//               <div className="bar"></div>
//               <div className="bar"></div>
//               <div className="bar"></div>
//             </div>
//             <ul ref={mobileMenuRef} className="mobile-menu">
//               <li><a href="#home" data-after="Home">Home</a></li>
//               <li><a href="#services" data-after="Services">Services</a></li>
//               <li><a href="#projects" data-after="Updates">Updates</a></li>
//               <li><a href="#about" data-after="About">About</a></li>
//               <li><a href="#contact" data-after="Contact">Contact</a></li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Scripts;
