import React from 'react'
import "./App.css"
import spicyImage from '../assets/spicy1.jpg'

const Home = () => {
  return (
    <div className="container">
      <div className="text">
        <h1>Delight in Culinary Perfection at the Heart of the City</h1>
        <p>Embark on the remarkable culinary advanture, indulging in expectional flavours at the lively heart of the city.</p>
        <button className="button">Reservation Now</button>
      </div>
      <div className="image">
        <img src={spicyImage} alt="Spicy dish" />
      </div>
    </div>
  )
}

export default Home