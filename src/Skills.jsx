import React from 'react';
import CPLUSPLUS from './assets/CPLUSPLUS.png';
import python from './assets/python.png';
import javascript from './assets/javascript.png';
import HTML from './assets/HTML.png';
import CSS from './assets/CSS.png';
import nodejs from './assets/nodejs.png';
import git from './assets/git.png';
import react from './assets/react.png';

import arduinologo from './assets/arduinologo.png';
import mongodb from './assets/mongodb.png';

import courseworkPDF from './assets/coursework.pdf';

function Skills() {
  const gridItemsTop = [
    
    { src: CPLUSPLUS, alt: 'C++', name: 'C++' },
    { src: python, alt: 'Python', name: 'Python' },
    { src: javascript, alt: 'JavaScript', name: 'JavaScript' },
    { src: HTML, alt: 'HTML', name: 'HTML' },
    { src: CSS, alt: 'CSS', name: 'CSS' },
   
  ];
  const openPDF = () => {
    window.open(courseworkPDF, '_blank');
  };
  
  const gridItemsBottom = [
    
    { src: git, alt: 'Git', name: 'Git' },
    { src: react, alt: 'React', name: 'React' },
    { src: nodejs, alt: 'Node.js', name: 'Node.js' },
    { src: mongodb, alt: 'MongoDB', name: 'MongoDB' },
    { src: arduinologo, alt: 'arduinologo', name: 'Arduino' },

  ];



  return (
    <main>
      <section id="education">
        <div className="titles">
          <h2>Education</h2>
      
        </div>
    
        <div className="education1">
          <ul>
            <strong>B.S. Computer Science</strong> - <em>University of California, Riverside</em> (2020 - 2024)
          </ul>
          <div className="button-container">

<button className="github-btn" onClick={openPDF}>Coursework</button>

</div>
        </div>
  
        
        <div className="titles">
          <h2>Skills</h2>
        </div>
        <div className="skills">
          <div className="grid-container2">
            {gridItemsTop.map((item, index) => (
              <div key={index} className="grid-item2">
                <div className="grid-item-content">
                  <img src={item.src} alt={item.alt} />
                  <p>{item.name}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="grid-container2">
            
            {gridItemsBottom.map((item, index) => (
              
              <div key={index} className="grid-item2">
                <div className="grid-item-content">
                  
                  <img src={item.src} alt={item.alt} />
                  <p>{item.name}</p>
                </div>
              </div>
              
            ))}
               
          </div>
      
        </div>
       
      </section>
  
    
    </main>
  );
}

export default Skills;
