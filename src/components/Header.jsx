import React, { useState } from 'react';
import '../styles/Header.css';

const Header = () => {
  // State to keep track of the current slide index
  const [currentSlide, setCurrentSlide] = useState(0);
  // Array of slide objects, each containing a background image, title, and description
  const slides = [
    {
      backgroundImage: 'url("/assets/carousel-1.jpg")',
      title: 'Make A Brighter Future For Your Child',
      description:
        'Empower your childs growth with a nurturing, inspiring foundation for lifelong learning.',
    },
    {
      backgroundImage: 'url("/assets/carousel-2.jpg")',
      title: 'The Best kindergarten School For Your Child',
      description:
        'Our kindergarten fosters joy, curiosity, and essential skills for your childs bright future.',
    },
  ];

  // Function to go to the previous slide
  const handlePrev = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  // Function to go to the next slide
  const handleNext = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  return (
    // Set the background image dynamically based on the current slide
    <header
      className="header"
      style={{ backgroundImage: slides[currentSlide].backgroundImage }}
    >
      <div className="header-content">
        {/* Display the current slide's title */}
        <h1>{slides[currentSlide].title}</h1>
        {/* Display the current slide's description */}
        <p>{slides[currentSlide].description}</p>
        <div className="header-buttons">
          {/* Button to learn more */}
          <button className="learn-more-btn lg:flex rounded-full px-4 py-2 text-md text-white bg-primary  items-center gap-4 hover:bg-lighter">
            Learn More
          </button>
          {/* Button to view classes */}
          <button className="our-classes-btn lg:flex rounded-full px-4 py-2 text-md text-white bg-black  items-center gap-4 hover:bg-lighter">
            Our Classes
          </button>
        </div>
      </div>
      {/* Carousel navigation buttons */}
      <div className="carousel-controls">
        <button className="carousel-prev" onClick={handlePrev}>
          &#8249;
        </button>
        <button className="carousel-next" onClick={handleNext}>
          &#8250;
        </button>
      </div>
    </header>
  );
};

export default Header;
