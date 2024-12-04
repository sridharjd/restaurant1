import React from 'react';
import './App.css'; // Import your CSS styles

const Gallery = () => {
  // Sample data for the gallery
  const galleryItems = [
    { id: 1,  image: "images/spicy1.jpg"},
    { id: 2,  image: "images/spicy1.jpg"},
    { id: 3,  image: "images/spicy1.jpg" },
    { id: 4,  image: "images/spicy1.jpg" },
    { id: 5,  image: "images/spicy1.jpg" },
    { id: 6,  image: "images/spicy1.jpg" },
  ];

  return (
    <div className="restaurant-gallery">
      <div className="gallery-grid">
        {galleryItems.map((item) => (
          <div key={item.id} className="gallery-item">
            <img src={item.image} alt={item.title} className="gallery-image" />
            <div className="gallery-info">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
