import { BUY_ICECREAM } from './iceCreamTypes';

const initialState = {
  totalNumOfIceCreams: 20,
};

const iceCreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        totalNumOfIceCreams: state.totalNumOfIceCreams - 1,
      };

    default:
      return state;
  }
};

export default iceCreamReducer;
