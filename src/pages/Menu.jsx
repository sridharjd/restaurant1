import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
import './App.css'; 

const Menu = () => {
  
  const galleryItems = [
    { id: 1, title: 'Pasta', image: "images/spicy1.jpg", description: 'Delicious creamy pasta', price:"$50", ratings: "4.5"},
    { id: 2, title: 'Burger', image: "images/spicy1.jpg", description: 'Juicy cheeseburger' , price:"$60", ratings: "4.0"},
    { id: 3, title: 'Pizza', image: "images/spicy1.jpg", description: 'Classic Margherita Pizza' , price:"$70",  ratings: "3.7" },
    { id: 4, title: 'Dessert', image: "images/spicy1.jpg", description: 'Sweet and tasty dessert' , price:"$80" , ratings: "4.5"},
      ];

  return (
    <div className="menu-gallery">
      <h2 className="menu-title">Our Menu</h2>
      <p>Enjoy a wide range of tasty dishes made for everyone to love</p>
      <hr style={{ backgroundColor: '#ff9900', height: '3px', border: 'none' }} />
      <div className="menu-grid">
        {galleryItems.map((item) => (
          <div key={item.id} className="menu-item">
            <img src={item.image} alt={item.title} className="menu-image" />
            <div className="menu-info">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <ul className="menu-info">
                <li className="left-item" >
                  <FavoriteIcon className="menu-info-icon" style={{ color: 'red', fontSize: '30px' }}/>
                </li>
                <li className="right-item">
                  <StarIcon className="menu-info-icon" style={{ color: '#ff9900', fontSize: '30px' }} />
                  {item.ratings}
                </li>
                <li className="left-item" style={{ color: '#ff9900', fontSize: '40px' }}>
                  {item.price}
                </li>
                <li className="right-item">
                  <button className="menu-button">Add to Cart</button>
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
