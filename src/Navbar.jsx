import React, { useEffect, useState } from 'react';


function Navbar() {
  const [activeSection, setActiveSection] = useState('');

  const handleClick = (event, sectionId) => {
    event.preventDefault();
    setActiveSection(sectionId);
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let currentActive = '';

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const offset = window.innerHeight / 3;

        if (rect.top < offset && rect.bottom > offset) {
          currentActive = section.id;
        }
      });

      if (currentActive !== activeSection) {
        setActiveSection(currentActive);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeSection]);

  return (
    <header>
      <nav>
        <ul>
          <li>
            <a
              href="#about"
              className={activeSection === 'about' ? 'nav-item active' : 'nav-item'}
              onClick={(e) => handleClick(e, 'about')}
            >
              About Me
            </a>
          </li>
          <li>
            <a
              href="#education"
              className={activeSection === 'education' ? 'nav-item active' : 'nav-item'}
              onClick={(e) => handleClick(e, 'education')}
            >
              Education/Skills
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className={activeSection === 'experience' ? 'nav-item active' : 'nav-item'}
              onClick={(e) => handleClick(e, 'experience')}
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="#interests"
              className={activeSection === 'interests' ? 'nav-item active' : 'nav-item'}
              onClick={(e) => handleClick(e, 'interests')}
            >
              Interests
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={activeSection === 'contact' ? 'nav-item active' : 'nav-item'}
              onClick={(e) => handleClick(e, 'contact')}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
