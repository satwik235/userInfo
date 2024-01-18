// Card.js
import React from 'react';
import { Card as MuiCard, CardContent, CardActions, Button } from '@mui/material';
import { useDrag } from 'react-dnd';
import { useDispatch } from 'react-redux';
import { moveCard } from '../actions/cardActions';

const CustomCard = ({ card, onEdit, onDelete, onDrop }) => {
  const dispatch = useDispatch();

  const [, drag] = useDrag({
    type: 'CARD',
    item: { type: 'CARD', card, age: card.age, id: card.id },
  });

  const handleEdit = () => {
    onEdit(card);
  };

  const handleDelete = () => {
    onDelete(card.id);
  };

  const handleDrop = (targetAge) => {
    // Dispatch the moveCard action when a card is dropped
    dispatch(moveCard({ ...card, age: targetAge }));
    onDrop(card.id, targetAge);
  };

  return (
    <MuiCard className="card" ref={(node) => drag(node)} onClick={handleEdit}>
      <CardContent>
        <div>Name: {card.name}</div>
        <div>Email: {card.email}</div>
        <div>Phone: {card.phone}</div>
        <div>Age: {card.age}</div>
      </CardContent>
      <CardActions className="card-buttons">
        <Button onClick={handleEdit}>Edit</Button>
        <Button onClick={handleDelete}>Delete</Button>
      </CardActions>
    </MuiCard>
  );
};

export default CustomCard;
