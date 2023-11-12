import React, { useState } from 'react';
import './Slider.css';



const Slider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slider-container">
      <button className="slider-button" onClick={goToPreviousImage}>
        Previous
      </button>
      <img
        className="slider-image"
        src={images[currentImageIndex]}
        alt="Slider"
        width="666"
        height="444"
      />
      <button className="slider-button" onClick={goToNextImage} >
        Next
      </button>
    </div>
  );
};

export default Slider;
