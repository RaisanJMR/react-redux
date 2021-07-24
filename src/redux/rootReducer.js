import { combineReducers } from 'redux';
import bookReducer from './book/bookReducer';
import iceCreamReducer from './iceCream/iceCreamReducer';

const rootReducer = combineReducers({
  book: bookReducer,
  iceCream: iceCreamReducer,
});

export default rootReducer;