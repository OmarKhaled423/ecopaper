import React, { useState, useEffect } from "react";
import "./Slider.css";

const Slider = ({ images }) => {
  const [index, setIndex] = useState(0);
  const [slidingTime, setSlidingTime] = useState(5000);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, slidingTime);
    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="slider">
      {images.map((image, i) => (
        <div className={`slide ${i === index ? "active" : ""}`} key={image.id}>
          <img src={image.src} alt={image.caption} />
          <p className="image-caption">{image.caption}</p>
        </div>
      ))}
      <div className="dots">
        {images.map((_, i) => (
          <div
            className={`dot ${i === index ? "active" : ""}`}
            onClick={() => {
              setIndex(i);
              setSlidingTime(5000);
            }}
            key={i}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
