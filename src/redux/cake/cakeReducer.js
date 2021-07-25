import { BUY_CAKE } from './cakeTypes';

const initialState = {
  totalcakes: 20,
};

const cakeReducer = (state = initialState, action) => {
  console.log('USER ACTION>>>',action.type);
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        totalcakes: state.totalcakes - 1,
      };
    default:
      return state;
  }
};

export default cakeReducer;
