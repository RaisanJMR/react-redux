import { BUY_BOOK, SELL_BOOK } from './bookTypes';

export const buyBook = () => {
  return {
    type: BUY_BOOK,
  };
};
export const sellBook = () => {
  return {
    type: SELL_BOOK,
  };
};
