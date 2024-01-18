// Table.js
import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import CustomCard from './Card';
import AgeGroup from './AgeGroup'; // Import the AgeGroup component
import { useDispatch } from 'react-redux';
import { moveCard } from '../actions/cardActions';

const CustomTable = ({ cards, onEdit, onDelete }) => {
  const dispatch = useDispatch();

  const handleDrop = (cardId, targetAge) => {
    // Dispatch the moveCard action for the entire column when a card is dropped
    const updatedCards = cards.map((card) =>
      card.id === cardId ? { ...card, age: targetAge } : card
    );
    dispatch(moveCard(updatedCards));
  };

  const renderTableCells = (start, end) => {
    const filteredCards = cards.filter((card) => {
      if (end === '+') {
        return card.age >= start;
      } else {
        return card.age >= start && card.age <= end;
      }
    });

    return (
    <TableCell key={`${start}-${end}`}>
      <AgeGroup
        cards={filteredCards}
        onEdit={onEdit}
        onDelete={onDelete}
        onDrop={(cardId, targetAge) => handleDrop(cardId, targetAge)}
      />
    </TableCell>
    );
  };

  const renderTableHeading = (start, end) => {
    return (
      <TableCell key={`${start}-${end}`} align="center">
        Age {start} - {end}
      </TableCell>
    );
  };

  return (
    <TableContainer component={Paper} className="table-responsive">
      <Table className="table table-bordered table-hover">
        <TableHead>
          <TableRow>
            <TableCell>{renderTableHeading(1, 18)}</TableCell>
            <TableCell>{renderTableHeading(19, 25)}</TableCell>
            <TableCell>{renderTableHeading(26, 45)}</TableCell>
            <TableCell>{renderTableHeading(46, '+')}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>{renderTableCells(1, 18)}</TableCell>
            <TableCell>{renderTableCells(19, 25)}</TableCell>
            <TableCell>{renderTableCells(26, 45)}</TableCell>
            <TableCell>{renderTableCells(46, '+')}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      {cards.length === 0 && (
        <Typography variant="body2" align="center" color="textSecondary">
          No records available
        </Typography>
      )}
    </TableContainer>
  );
};

export default CustomTable;
