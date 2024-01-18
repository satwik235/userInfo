import { createStore } from 'redux';
import cardReducer from '../reducers/cardReducer';

const store = createStore(cardReducer);

export default store;
