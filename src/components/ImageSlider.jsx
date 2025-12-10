import React, { useEffect, useRef, useState } from "react";

export default function ImageSlider({ images = [], interval = 5000 }) {
  const [index, setIndex] = useState(0);
  const timer = useRef(null);
  const paused = useRef(false);

  useEffect(() => {
    if (!images || images.length < 2) return;
    start();
    return () => stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [images]);

  function start() {
    stop();
    timer.current = setInterval(() => {
      if (!paused.current) setIndex((i) => (i + 1) % images.length);
    }, interval);
  }
  function stop() {
    if (timer.current) clearInterval(timer.current);
  }
  function go(i) {
    setIndex(((i % images.length) + images.length) % images.length);
  }
  if (!images || images.length === 0) return null;

  return (
    <div
      className="hero-slider absolute inset-0 z-0"
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
    >
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`slide-${i}`}
          className={`hero-slide absolute inset-0 w-full h-full object-cover transition-opacity duration-800 ${i === index ? "opacity-100 scale-100" : "opacity-0 scale-105"}`}
          draggable={false}
          style={{ willChange: "opacity, transform" }}
        />
      ))}

      {/* left / right arrows */}
      <button
        className="hero-arrow hero-arrow-left"
        aria-label="Previous slide"
        onClick={() => {
          go(index - 1);
          start();
        }}
      >
        ‹
      </button>
      <button
        className="hero-arrow hero-arrow-right"
        aria-label="Next slide"
        onClick={() => {
          go(index + 1);
          start();
        }}
      >
        ›
      </button>

      {/* dots */}
      <div className="hero-dots absolute left-1/2 transform -translate-x-1/2 bottom-8 flex gap-2 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            className={`hero-dot rounded-full ${i === index ? "hero-dot-active" : ""}`}
            onClick={() => {
              go(i);
              start();
            }}
          />
        ))}
      </div>
    </div>
  );
}