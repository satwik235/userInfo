import React from 'react';
import { Card as MuiCard, CardContent, CardActions, Button } from '@mui/material';
import { useDrag } from 'react-dnd';

const CustomCard = ({ card, onEdit, onDelete }) => {
  const [, drag] = useDrag({
    type: 'CARD',
    item: { id: card.id, type: 'CARD' },
  });

  return (
    <MuiCard className="card" ref={drag}>
      <CardContent>
        <div>Name: {card.name}</div>
        <div>Email: {card.email}</div>
        <div>Phone: {card.phone}</div>
        <div>Age: {card.age}</div>
      </CardContent>
      <CardActions className="card-buttons">
        <Button onClick={() => onEdit(card)}>Edit</Button>
        <Button onClick={() => onDelete(card.id)}>Delete</Button>
      </CardActions>
    </MuiCard>
  );
};

export default CustomCard;