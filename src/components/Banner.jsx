import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

function Banner() {
  const bannerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      bannerRef.current, 
      { opacity: 0 }, 
      { opacity: 1, duration: 1 }
    );

    gsap.fromTo(
      titleRef.current, 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 1, delay: 0.5 }
    );

    gsap.fromTo(
      subtitleRef.current, 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 1, delay: 1 }
    );
  }, []);

  return (
    <div 
      ref={bannerRef}
      className="relative bg-cover bg-center h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] rounded-lg shadow-xl mt-8" 
      style={{ backgroundImage: 'url(https://www.shutterstock.com/image-vector/black-friday-sale-banner-shopping-600nw-2545954505.jpg)' }}
    >
      <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div> 
      
      <div className="absolute bottom-0 left-0 right-0 text-center p-6">
        <h2 
          ref={titleRef}
          className="text-2xl md:text-3xl font-bold text-yellow-400"
        >
          Welcome to Smile Shop 🛍️
        </h2>
        <p 
          ref={subtitleRef}
          className="mt-2 text-gray-300 text-sm md:text-base"
        >
          Find your favorite products with ease and style!
        </p>
      </div>
    </div>
  );
}

export default Banner;
