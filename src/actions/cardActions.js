import * as actionTypes from '../constants/actionTypes';

export const addCard = (card) => ({
  type: actionTypes.ADD_CARD,
  payload: card,
});

export const editCard = (card) => ({
  type: actionTypes.EDIT_CARD,
  payload: card,
});

export const deleteCard = (cardId) => ({
  type: actionTypes.DELETE_CARD,
  payload: cardId,
});

export const moveCard = (card) => ({
  type: actionTypes.MOVE_CARD,
  payload: card,
});