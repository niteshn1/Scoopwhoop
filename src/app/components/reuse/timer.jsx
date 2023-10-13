"use client";
import React, { useState, useEffect } from "react";
// import { Carousel } from "react-responsive-carousel";

function CarouselWithTimer({ images, interval }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const imageCount = images.length;
    let timerInterval;

    if (!isHovered) {
      timerInterval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imageCount);
      }, interval);
    }

    return () => clearInterval(timerInterval);
  }, [images, interval]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Carousel showThumbs={false} selectedItem={currentIndex}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`
            }`}
          >
            <img
              class="scale-y-50 "
              src={image.src}
              width={100}
              height={100}
              alt={image.alt}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default CarouselWithTimer;
