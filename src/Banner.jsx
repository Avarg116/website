import React, { useState, useEffect } from 'react';
import birds from './assets/birds.jpg';

const Banner = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = "Alejandro Vargas";

  useEffect(() => {
    let currentIndex = 0;
    let eraseMode = false;

    const typeAndErase = () => {
      setTimeout(() => {
        eraseMode = true;
        setTimeout(() => {
          eraseMode = false;
          currentIndex = 0;
          typeAndErase();
        }, 100);
      }, 10000); //10 seconds after typing before erasing
    };

    typeAndErase();

    const intervalId = setInterval(() => {
      if (!eraseMode && currentIndex < fullText.length) {
        setTypedText(fullText.slice(0, currentIndex + 1) + "|");
        currentIndex++;
      } else if (eraseMode && currentIndex >= 0) {
        setTypedText(fullText.slice(0, currentIndex) + "|");
        currentIndex--;
      }
    }, 100); //Typing speed

    return () => clearInterval(intervalId);
  }, [fullText]);

  return (
    <div className="banner" style={{ backgroundImage: `url(${birds})` }}>
      <h2>{typedText}</h2>
    </div>
  );
};

export default Banner;
