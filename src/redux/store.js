import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// import bookReducer from './book/bookReducer';
// import iceCreamReducer from './iceCream/iceCreamReducer';
import logger from 'redux-logger';
import rootReducer from './rootReducer';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger))
);

export default store;
