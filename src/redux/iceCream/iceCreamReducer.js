import { BUY_ICECREAM } from './iceCreamTypes';

const initialState = {
  totalIceCream: 25,
};

const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        totalIceCream: state.totalIceCream - 1,
      };
    default:
      return state;
  }
};

export default cakeReducer;
