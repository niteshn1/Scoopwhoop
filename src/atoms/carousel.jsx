import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CarouselWithTimer from "/src/app/components/reuse/timer.jsx";

function CSR1() {
  const images = [
    {
      src: "https://wp.scoopwhoop.com/wp-content/uploads/2022/08/3.png",
      alt: "Image 1",
    },
    {
      src: "https://wp.scoopwhoop.com/wp-content/uploads/2022/08/2.png",
      alt: "Image 2",
    },
    {
      src: "https://wp.scoopwhoop.com/wp-content/uploads/2022/08/6-3.png",
      alt: "Image 3",
    },
    {
      src: "https://wp.scoopwhoop.com/wp-content/uploads/2022/08/3.png",
      alt: "Image 4",
    },
  ];

  return (
    <div>
      <CarouselWithTimer images={images} interval={10000} />
    </div>
  );
}

export default CSR1;
