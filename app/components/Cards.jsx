'use client'
import React, { useState } from 'react';
import Modal from 'react-modal';

const Cards = ({ onAddCard }) => {
  const [showForm, setShowForm] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [author, setAuthor] = useState('');
  const [id, setId] = useState(7);

  const openModal = () => {
    setShowForm(true);
  };
  const closeModal = () => {
    setShowForm(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCard = {
      id,
      imageUrl,
      author,
    };
    onAddCard(newCard); // Notify the parent about the new card
    setImageUrl('');
    setAuthor('');
    setId(id + 1);
    setShowForm(false);
  };

  return (
    <div>
      <div className="card">
        <h5 onClick={openModal}>New card</h5>
        <h4>Create a new project</h4>
        <h6>Or try a sample Project</h6>
      </div>

      <Modal
        isOpen={showForm !== false}
        onRequestClose={closeModal}
        contentLabel="card form"
        className="model-container"
        overlayClassName="overlay"
      >
        {showForm && (
          <div className='model'>
            <form onSubmit={handleSubmit}>
              <label>
                Image URL:
                <input
                  type="url"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  required
                />
              </label>
              <label>
                Author:
                <input
                  type="text"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  required
                />
              </label>
              <button type="submit">Submit</button>
            </form>
            <button onClick={closeModal}>Back</button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Cards;
