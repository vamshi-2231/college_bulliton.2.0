import React from 'react'

export default function AboutPage() {
  return (
    <section id="about">
        <div className="about container">
        <div className="col-left">
            <div className="about-img">
              <img src="./img/img-24.png" alt="img"></img>
            </div>
          </div>
          <div className="col-right">
            <h1 className="section-title">About <span>College</span></h1>
            <h2></h2>
            <p>Vaagdevi College of Engineering is an AICTE approved autonomous college, putting significant efforts to help students with internship opportunities. AICTE & Internshala recognised several colleges contributing to such efforts for students in the National Level Internship Day hosted at AICTE headquarters, New Delhi. It was an honour to have participated in the National Level Internship Day and be recognised and awarded for helping students find internship opportunities. We are immensely proud to announce that we secured All India 186th rank out of 2830 top engineering colleges that participated in the event. Our internships guidance programmes help our students gain immense exposure and learn industry-specific skills, enabling them to land their dream jobs. The VCE college administration, including faculties, have always played essential roles in preparing our students for their future jobs.</p>
            <a href="https://www.vaagdevi.edu.in/" className="cta">For more info</a>
          </div>
        </div>
  </section>
  )
}
