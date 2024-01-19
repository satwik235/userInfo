import React, { useState } from 'react';
import { Button, Container, CssBaseline, Typography } from '@mui/material';
import CustomTable from './components/Table';
import CustomModal from './components/Modal';
import EditModal from './components/EditModal';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import './App.css'; // Make sure to import your custom styles

const App = () => {
  const [cards, setCards] = useState([]); // Local state for cards
  const [isModalOpen, setModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleAddCard = (card) => {
    setCards([...cards, card]);
    setModalOpen(false);
  };

  const handleEditCard = (editedCard) => {
    const updatedCards = cards.map((card) =>
      card.id === editedCard.id ? { ...card, ...editedCard } : card
    );
    setCards(updatedCards);
    setEditModalOpen(false);
  };

  const handleDeleteCard = (cardId) => {
    setEditModalOpen(false)
    const updatedCards = cards.filter((card) => card.id !== cardId);
    setCards(updatedCards);
  };

  const handleAddButtonClick = () => {
    setModalOpen(true);
  };

  const handleEditButtonClick = (card) => {
    setSelectedCard(card);
    setEditModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleEditModalClose = () => {
    setEditModalOpen(false);
    setSelectedCard(null);
  };

  return (
    <Container component="main" maxWidth="lg">
      <CssBaseline />
      <div className="paper">
        <Button variant="contained" color="primary" onClick={handleAddButtonClick}>
          Add
        </Button>
        <DndProvider backend={HTML5Backend}>
          <CustomTable cards={cards} onEdit={handleEditButtonClick} onDelete={handleDeleteCard} />
        </DndProvider>
        {isModalOpen && <CustomModal onClose={handleModalClose} onAdd={handleAddCard} />}
        {isEditModalOpen && (
          <EditModal card={selectedCard} onClose={handleEditModalClose} onEdit={handleEditCard} />
        )}
      </div>
    </Container>
  );
};

export default App;