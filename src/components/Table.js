import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import CustomCard from './Card';
import AgeGroup from './AgeGroup';
import { useDispatch } from 'react-redux';
import { moveCard, mergeCards } from '../actions/cardActions';

const CustomTable = ({ cards, onEdit, onDelete }) => {
  const dispatch = useDispatch();

  const handleDrop = (cardId, targetAge, targetIndex) => {
    const updatedCards = [...cards];
    const draggedCard = updatedCards.find((card) => card.id === cardId);

    if (draggedCard) {
      updatedCards.splice(targetIndex, 0, { ...draggedCard, age: targetAge });
      dispatch(moveCard(updatedCards));
    }
  };
  const renderTableHeading = (start, end) => {
    return (
      <TableCell key={`${start}-${end}`} align="center">
        Age {start} - {end}
      </TableCell>
    );
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
          onDrop={(cardId, targetAge) => handleDrop(cardId, targetAge, filteredCards.length)}
          mergeCards={mergeCards} 
        />
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
