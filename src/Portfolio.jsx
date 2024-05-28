import React, { useState } from 'react';

import rpg from './assets/rpg.png';
import frequency from './assets/frequency.png';
import featherfriends from './assets/featherfriends.png';
import pacman from './assets/arduino.png';
const Slideshow = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const slides = [
    {
      src: rpg,
      title: 'Castle Showdown',
      description: 'A text-based RPG I created that utilizes abstract factory and strategy design.', 
      githubLink: 'https://github.com/Avarg116/Text-based-RPG-Game',
      technologies: 'C++ • GoogleTest • Valgrind'
    },
    {
      src: pacman, 
      title: 'Pac-Man Clone',
      description: 'An Arduino game I made based on Pac-Man that utilizes synchronous state machine design.',
      githubLink: 'https://github.com/Avarg116/PAC-MAN-CLONE',
      technologies: 'C++ • Arduino'
    },
    {
      src: frequency,
      title: 'Frequency',
      description: 'A music-centric social app I developed.',
      githubLink: 'https://github.com/Avarg116/Frequency',
      technologies: 'HTML/CSS • JavaScript • React with Expo framework • Firebase'
    },
    {
      src: featherfriends,
      title: 'Feather Friends',
      description: 'A custom bird themed programming language I developed in a team.',
      githubLink: 'https://github.com/CitrusHappy/cs-152-feather-friends?tab=readme-ov-file',
      technologies: 'C • Flex • Bison'
    }
  ];

  const nextSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const getSlideClass = (index) => {
    if (index === slideIndex) return 'slide active-slide';
    return 'slide';
  };

  const slidesToShow = [
    slides[(slideIndex - 1 + slides.length) % slides.length],
    slides[slideIndex],
    slides[(slideIndex + 1) % slides.length],
  ];

  return (
    <section id="experience">
      <div className="titles">
        <h2>Portfolio</h2>
      </div>
      
      <div className="content-container">
        <div className="slideshow-container">
          <a className="prev" onClick={prevSlide}>&#10094;</a>
          {slidesToShow.map((slide, index) => (
            <div className={getSlideClass((slideIndex + index - 1 + slides.length) % slides.length)} key={index}>
              <img src={slide.src} alt={`Slide ${index + 1}`} />
            </div>
          ))}
          <a className="next" onClick={nextSlide}>&#10095;</a>
        </div>
        <div className="project-info">
          <h3>{slides[slideIndex].title}</h3>
          <p>{slides[slideIndex].description}</p>
          <p className="technologies">{slides[slideIndex].technologies}</p>
          <button className="github-btn">
            <a href={slides[slideIndex].githubLink} target="_blank" rel="noopener noreferrer" className="github-link">GitHub</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Slideshow;
