import React, { useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import './App.css';

const AGE_GROUPS = ['1-18', '19-25', '25-45', '45+'];

const Card = ({ id, age, group, onCardDrop }) => {
  const [, drag] = useDrag({
    type: 'CARD',
    item: { id, age, group },
  });

  const [, drop] = useDrop({
    accept: 'CARD',
    drop: (item) => onCardDrop(item.id, group),
  });

  return (
    <div ref={(node) => drag(drop(node))} className="card">
      <p>{`ID: ${id}`}</p>
      <p>{`Age: ${age}`}</p>
      <p>{`Group: ${group}`}</p>
    </div>
  );
};

const App = () => {
  const [cards, setCards] = useState([
    { id: 1, age: 15, group: '1-18' },
    { id: 2, age: 22, group: '19-25' },
    { id: 3, age: 30, group: '25-45' },
    { id: 4, age: 50, group: '45+' },
  ]);

  const handleCardDrop = (cardId, newGroup) => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === cardId ? { ...card, group: newGroup } : card
      )
    );
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        {AGE_GROUPS.map((group) => (
          <div key={group} className="age-group">
            <h2>{group}</h2>
            <div className="cards-container">
              {cards
                .filter((card) => card.group === group)
                .map((card) => (
                  <Card
                    key={card.id}
                    id={card.id}
                    age={card.age}
                    group={card.group}
                    onCardDrop={handleCardDrop}
                  />
                ))}
            </div>
          </div>
        ))}
      </div>
    </DndProvider>
  );
};

export default App;
