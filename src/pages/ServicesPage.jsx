import React from 'react';

export default function ServicesPage() {
  return (
    <section id="services">
      <div className="services container">
        <div className="service-top">
          <h1 className="section-title">Serv<span>i</span>ces</h1>
          <p>
            Our application’s main focus is to develop communication between students and management. 
            As a team, we collected data regarding application development to ensure the best user experience. 
            The communication platform aims to establish a connection between students, management, and alumni. 
            Our goal is to make information accessible to the end user or student. 
            Management's goal is to ensure the integrity of communication to prevent clashes or misuse of information. 
            The information may include:
          </p>
        </div>
        <div className="service-bottom">
          <div className="service-item">
            <div className="icon"><img src="https://img.icons8.com/bubbles/100/000000/services.png" alt="Time Schedules Icon" /></div>
            <h2>Time-Schedules</h2>
            <a href="https://drive.google.com/drive/folders/1rgRZPa1llk4ZH4B_tD925khwmSiWzl2W?usp=sharing" className="cta">View</a>
          </div>
          <div className="service-item">
            <div className="icon"><img src="https://img.icons8.com/bubbles/100/000000/services.png" alt="College Events Icon" /></div>
            <h2>College-Events</h2>
            <a href="https://drive.google.com/drive/folders/1kPcVjQVSsClw_lemSGKdT27nlJ2V6A8I?usp=sharing" className="cta">View</a>
          </div>
          <div className="service-item">
            <div className="icon"><img src="https://img.icons8.com/bubbles/100/000000/services.png" alt="College Sports Icon" /></div>
            <h2>College-Sports</h2>
            <a href="https://drive.google.com/drive/folders/1j_cPMjkrsBfGpCPzSJLOC_MHxgU0Wp08?usp=sharing" className="cta">View</a>
          </div>
          <div className="service-item">
            <div className="icon"><img src="https://img.icons8.com/bubbles/100/000000/services.png" alt="Student Notes Icon" /></div>
            <h2>Student-Notes</h2>
            <a href="https://drive.google.com/drive/folders/1NpuqW0V-DXiANOsT4tcyp8NeWA741OUS?usp=sharing" className="cta">View</a>
          </div>
        </div>
      </div>
    </section>
  );
}
