"use client"
import { useState } from 'react';
import Image from 'next/image';

export default function Carousel() {
  const [current, setCurrent] = useState(0); // Keep track of the current image
  const images = ['/Welcome.png', '/LogoOne.png', '/LogoTwo.png']; // Replace with your images

  const handleNext = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  const handlePrev = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  return (
    <div className="rounded-full overflow-hidden relative shadow-md transition-all duration-1000">
        <button className="absolute left-0 p-2 top-1/2 transform -translate-y-1/2" onClick={handlePrev}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#FFFFFF">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
        </button>
        <button className="absolute right-0 p-2 top-1/2 transform -translate-y-1/2" onClick={handleNext}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#FFFFFF">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
        </button>
        <Image
            src={images[current]}
            alt="Carousel"
            width={500}
            height={300}
            layout="responsive"
        />
    </div>
  );
}