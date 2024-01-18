import * as actionTypes from '../constants/actionTypes';

const initialState = {
  cards: [],
};

const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_CARD:
      return {
        ...state,
        cards: [...state.cards, action.payload],
      };
    case actionTypes.EDIT_CARD:
      const editedCardIndex = state.cards.findIndex((card) => card.id === action.payload.id);

      if (editedCardIndex !== -1) {
        const updatedCards = [...state.cards];
        updatedCards[editedCardIndex] = action.payload;

        return {
          ...state,
          cards: updatedCards,
        };
      }

      return state;
    case actionTypes.DELETE_CARD:
      const filteredCards = state.cards.filter((card) => card.id !== action.payload);
      return {
        ...state,
        cards: filteredCards,
      };
     

     case actionTypes.MOVE_CARD:
      const updatedCardIndex = state.cards.findIndex((card) => card.id === action.payload.id);

      if (updatedCardIndex !== -1) {
        const updatedCards = [...state.cards];
        updatedCards[updatedCardIndex] = action.payload;

        return {
          ...state,
          cards: updatedCards,
        };
      }

      return state;

    default:
      return state;
  }
};

export default cardReducer;
