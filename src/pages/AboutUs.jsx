import React from 'react'
import "./App.css"


const AboutUs = () => {
  return (
    <div className="container">

      <div className="image" style={{ flex: 1, textAlign: 'left' }}>
        <img src="images/spicy1.jpg" alt="Spicy dish" />
      </div>

      <div className="text" style={{ flex: 1, textAlign: 'left', paddingLeft: '20px' }}>
        <h1 className="text-head">About us</h1>
        <p className='text p'>ELorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <button className="button">Read More</button>
      </div>
      
    </div>
  )
}

export default AboutUs