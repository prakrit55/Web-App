import React, { useEffect, useState, useRef } from "react";
import { Link, NavLink } from "react-router";

const images = [
  "https://zekicoders3staticfiles.s3.us-east-1.amazonaws.com/Quote1.png",
  "https://zekicoders3staticfiles.s3.us-east-1.amazonaws.com/Quote2.png",
  "https://zekicoders3staticfiles.s3.us-east-1.amazonaws.com/Quote3.png",
];

const imageLinks = [
  null,
  null,
  "https://forms.office.com/pages/responsepage.aspx?id=3S8oJwtM-026kSKM2D_fcfPzf6t85QhKnD2I3OVUAfhUMTdWVlJZR0IxU0tKSVdZV1RQM0VCMk5MOC4u&route=shorturl",
  "https://epic-u.onlinemanipal.com/users/sign_in",
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const startAutoPlay = () => {
    timeoutRef.current = setInterval(() => {
      nextSlide();
    }, 6000);
  };

  const pauseAutoPlay = () => {
    clearInterval(timeoutRef.current);
  };

  useEffect(() => {
    startAutoPlay();
    return () => pauseAutoPlay();
  }, []);

  return (
    <>
      <div
        className="relative sm:w-full overflow-hidden w-auto "
        onMouseEnter={pauseAutoPlay}
        onMouseLeave={startAutoPlay}
      >
        <div
          className="flex transition-transform duration-700 ease-in-out "
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((src, i) => (
            <div key={i} className="w-full flex-shrink-0 h-full ">
              <picture>
                <source media="(min-width: 640px)" srcSet={src} />
                <img src={images[i]} className=" object-cover w-full" />
              </picture>
            </div>
          ))}
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-5 top-1/2 h-8 w-8 cursor-pointer rounded-full text-white  border-none bg-primary  text-center"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-5 top-1/2 h-8 w-8 cursor-pointer rounded-full text-white bg-primary  text-center"
        >
          ❯
        </button>
        {/* </div> */}

        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`btn border-none btn-xs w-10 h-1.5 rounded-full ${
                index === currentIndex
                  ? "bg-[var(--color-primary)]"
                  : "bg-cyan-500"
              }`}
              onClick={() => goToSlide(index)}
            >
              <div className="w-1 h-1 rounded-full "></div>
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default ImageSlider;
