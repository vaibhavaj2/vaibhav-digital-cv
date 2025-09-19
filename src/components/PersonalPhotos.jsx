import React, { useState, useEffect } from 'react';
import './PersonalPhotos.css';

const PersonalPhotos = () => {
  // Sample photos - you can replace these with your actual photo paths
  const photos = [
    {
      src: "/photos/family1.jpg",
      caption: "Family vacation in New Zealand"
    },
    {
      src: "/photos/family2.jpg",
      caption: "Weekend with my beautiful daughters"
    },
    {
      src: "/photos/family3.jpg",
      caption: "Celebrating special moments together"
    },
    {
      src: "/photos/travel1.jpg",
      caption: "Exploring beautiful Auckland"
    },
    {
      src: "/photos/travel2.jpg",
      caption: "Adventures around New Zealand"
    },
    {
      src: "/photos/personal1.jpg",
      caption: "Enjoying life's beautiful moments"
    }
  ];

  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhotoIndex((prevIndex) =>
        prevIndex === photos.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [photos.length]);

  const goToPhoto = (index) => {
    setCurrentPhotoIndex(index);
  };

  const goToPrevious = () => {
    setCurrentPhotoIndex(
      currentPhotoIndex === 0 ? photos.length - 1 : currentPhotoIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentPhotoIndex(
      currentPhotoIndex === photos.length - 1 ? 0 : currentPhotoIndex + 1
    );
  };

  return (
    <section id="personal-photos" className="section personal-photos">
      <div className="container">
        <h2 className="section-title">Personal Moments</h2>
        <p className="section-subtitle">
          A glimpse into my life beyond work - family moments, travels, and cherished memories
        </p>

        <div className="carousel-container">
          <div className="carousel-wrapper">
            <div
              className="carousel-track"
              style={{ transform: `translateX(-${currentPhotoIndex * 100}%)` }}
            >
              {photos.map((photo, index) => (
                <div key={index} className="carousel-slide">
                  <div className="photo-container">
                    <img
                      src={photo.src}
                      alt={photo.caption}
                      className="carousel-image"
                      onError={(e) => {
                        e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Crect width='800' height='600' fill='%23f7fafc'/%3E%3Ctext x='400' y='280' text-anchor='middle' font-family='Arial' font-size='24' fill='%23a0aec0'%3EPhoto Coming Soon%3C/text%3E%3Ctext x='400' y='320' text-anchor='middle' font-family='Arial' font-size='16' fill='%23718096'%3E${photo.caption}%3C/text%3E%3C/svg%3E";
                      }}
                    />
                    <div className="photo-caption">
                      <p>{photo.caption}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button className="carousel-nav prev" onClick={goToPrevious}>
            <span>‹</span>
          </button>
          <button className="carousel-nav next" onClick={goToNext}>
            <span>›</span>
          </button>

          {/* Dots Navigation */}
          <div className="carousel-dots">
            {photos.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentPhotoIndex ? 'active' : ''}`}
                onClick={() => goToPhoto(index)}
              />
            ))}
          </div>
        </div>

        <div className="photo-info">
          <div className="photo-counter">
            {currentPhotoIndex + 1} / {photos.length}
          </div>
          <div className="auto-play-indicator">
            <span className="play-icon">▶</span>
            Auto-playing every 5 seconds
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalPhotos;