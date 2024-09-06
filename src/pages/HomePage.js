import React from 'react';

export default function HomePage() {
  // Function to handle smooth scroll to the 'Projects' section
  const scrollToUpdates = (event) => {
    event.preventDefault(); // Prevent the default link behavior
    const targetElement = document.getElementById('projects');
    
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home">
      <div className="home container">
        <div>
          <h1>VAAGDEVI <span></span></h1>
          <h1>COLLEGE OF<span></span></h1>
          <h1>ENGINEERING<span></span></h1>
          <a href="#projects" type="button" className="cta" onClick={scrollToUpdates}>
            Click for updates
          </a>
        </div>
      </div>
    </section>
  );
}
