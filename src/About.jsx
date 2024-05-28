import React from 'react';
import myImage from './assets/me.jpg';
import github from './assets/github-logo.png';
import linkedin from './assets/linkedin-logo.png';
import resumePdf from './assets/resume.pdf';


const About = () => {
  const openResume = () => {
    window.open(resumePdf, '_blank');
  };

  return (
    <section id="about">
   
      <div className="content">
        <div className="about">
          <img src={myImage} alt="My Photo" className="profile-image" />
          <div className="titles">
            <h2>About Me</h2>
          </div>
          <div className="about-text">
            <p>
            Hi! Welcome to my website.
            My name is Alejandro Vargas and I am currently a 4th year Computer Science student @ UCR.
            My primary focus is on back-end development as I enjoy designing and enhancing robust applications.
            
            </p>
            <div className="info">
              <a href="https://github.com/Avarg116" target="_blank" rel="noopener noreferrer">
                <img className="small-image" src={github} alt="GitHub logo" />
              </a>
              <a href="https://linkedin.com/in/alejandro-vargas-802a281b8/" target="_blank" rel="noopener noreferrer">
                <img className="small-image" src={linkedin} alt="LinkedIn logo" />
              </a>
            </div>
            <div className="button-container">
              <button onClick={openResume} className="github-btn">
                Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
