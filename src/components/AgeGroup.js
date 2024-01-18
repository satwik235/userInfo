// AgeGroup.js
import React from 'react';
import { useDrop } from 'react-dnd';
import CustomCard from './Card';

const AgeGroup = ({ cards, onEdit, onDelete, onDrop }) => {
  const [, drop] = useDrop({
    accept: 'CARD',
    drop: (item) => onDrop(item.id, item.age),
  });

  return (
    <div ref={drop}>
      {cards.map((card) => (
        <CustomCard key={card.id} card={card} onEdit={onEdit} onDelete={onDelete} onDrop={onDrop} />
      ))}
    </div>
  );
};

export default AgeGroup;
