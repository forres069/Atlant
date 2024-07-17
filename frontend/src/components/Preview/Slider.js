import React, { useEffect, useState, useRef } from 'react';
import '../../css/preview-styles.css';

const images = [
  'https://ucarecdn.com/58c5906b-eeba-468c-9b5f-fc4d6b14eba1/',
  'https://ucarecdn.com/50ecfa49-1844-4371-b400-d40c38a4bfe2/',
  'https://ucarecdn.com/58c5906b-eeba-468c-9b5f-fc4d6b14eba1/',
  'https://ucarecdn.com/50ecfa49-1844-4371-b400-d40c38a4bfe2/'
];

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slidesRef = useRef(null);
  const slideCount = images.length;
  const autoplayRef = useRef(null);

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, []);

  const startAutoplay = () => {
    autoplayRef.current = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slideCount);
    }, 5000);
  };

  const stopAutoplay = () => {
    clearInterval(autoplayRef.current);
  };

  const resetAutoplay = () => {
    stopAutoplay();
    startAutoplay();
  };

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + slideCount) % slideCount);
    resetAutoplay();
  };

  const handleNextClick = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slideCount);
    resetAutoplay();
  };

  return (
    <div className="slider" ref={slidesRef}>
      <div className="slider__cards">
        {images.map((image, index) => (
          <div
            key={index}
            className={`slider__card ${index === activeIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>
      <div className="slider__bullets">
        {images.map((_, index) => (
          <button
            key={index}
            className={`slider__bullet ${index === activeIndex ? 'active' : ''}`}
            onClick={() => {
              setActiveIndex(index);
              resetAutoplay();
            }}
          />
        ))}
      </div>
      <div className="slider__arrows">
        <button
          className="slider__arrow slider__arrow--prev"
          onClick={handlePrevClick}
          title="Previous slide"
        />
        <div className="navigation__center">
          <svg width="4" height="27" viewBox="0 0 4 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.921875" y="0.558594" width="2.15584" height="25.8701" rx="1.07792" fill="#E6E8EC"/>
          </svg>
        </div>
        <button
          className="slider__arrow slider__arrow--next"
          onClick={handleNextClick}
          title="Next slide"
        />
      </div>
    </div>
  );
};

export default Slider;