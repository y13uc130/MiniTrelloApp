// store/rootReducer.js
import { combineReducers } from 'redux';
import boards from '../services/Boards/BoardsReducers';

const rootReducer = combineReducers({
  boards,
});

export default rootReducer;
