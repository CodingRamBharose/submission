'use client'
import React, { useState } from 'react';
import Cards from '../components/Cards.jsx';
import Image from '../components/Image.jsx';

const Main = ({activeLink}) => {
  const [cards, setCards] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);


  // Function to handle adding a new card
  const handleAddCard = (newCard) => {
    setCards([...cards, newCard]);
  };

  // Function to handle selecting an image
  const handleSelectImage = (image) => {
    setSelectedImage(image);
  };


  return (
    <>
      <div className="main">
        <div className="navbar">
          <div className="navcontainer">
            <div className="nav-content">
              <div className="nav-content-first">
                <h5>Free Trial</h5>
                <h5>|</h5>
                <p>2days left</p>
              </div>
              <div className="nav-content-second active">
                <h5>Entend free trial</h5>
              </div>
            </div>
            <div className="nav-image">
              <img src="/owner3.png" alt="image" />
            </div>
          </div>
        </div>
        <div className="mainInfo">
          <div className="Name">
            <h2>{activeLink}</h2>
          </div>
          <Image onSelectImage={handleSelectImage} cards={cards} />
          <Cards onAddCard={handleAddCard} />
        </div>
      </div>
    </>
  );
};

export default Main;
