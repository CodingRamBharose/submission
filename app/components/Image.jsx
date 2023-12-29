'use client'
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

const Image = ({ onSelectImage, cards }) => {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('https://picsum.photos/v2/list?page=1&limit=6');

        if (!response.ok) {
          throw new Error('Failed to fetch images');
        }

        const data = await response.json();
        setImages(data);
      } catch (error) {
        console.error('Error fetching images:', error.message);
        setError('Failed to fetch images');
      }
    };

    fetchImages();
  }, []);

  useEffect(() => {
    if (cards.length > 0) {
      setImages([...images, { id: cards.length, download_url: cards[cards.length - 1].imageUrl, author: cards[cards.length - 1].author }]);
    }
  }, [cards]);

  const deleteImage = (index) => {
    let copyImages = [...images];
    copyImages.splice(index, 1);
    setImages(copyImages);
  }

  const openModal = (image) => {
      setSelectedImage(image);
      onSelectImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      {error ? (
        <p>{error}</p>
      ) : (
        <div className='images'>
          {images.map((image, index) => (
            <div className='image-card' key={image.id}>
              <img
                src={image.download_url}
                alt={`Image by ${image.author}`}
                onClick={() => openModal(image)}
              />
              <button onClick={()=>{deleteImage(index)}}>Delete Image</button>
            </div>
          ))}
        </div>
      )}

      <Modal
        isOpen={selectedImage !== null}
        onRequestClose={closeModal}
        contentLabel="Image Information"
        className='model-container'
        overlayClassName="overlay"
      >
        {selectedImage && (
          <div className='model'>
            <h2>Image Information</h2>
            <p>Author: {selectedImage.author}</p>
            <p>URL: {selectedImage.download_url}</p>
            <button onClick={closeModal}>Back</button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Image;