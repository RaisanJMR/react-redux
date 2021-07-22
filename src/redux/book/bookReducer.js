import { BUY_BOOK } from './bookTypes';
import { SELL_BOOK } from './bookTypes';

const initialBookCount = {
  totalNumOFBooks: 25,
};

const bookReducer = (state = initialBookCount, action) => {
  switch (action.type) {
    case BUY_BOOK:
      return {
        ...state,
        totalNumOFBooks: state.totalNumOFBooks - 1,
      };
    case SELL_BOOK:
      return {
        ...state,
        totalNumOFBooks: state.totalNumOFBooks + 1,
      };
    default:
      return state;
  }
};
export default bookReducer;
