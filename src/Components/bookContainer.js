import React from 'react';
import { connect } from 'react-redux';
import { buyBook, sellBook } from '../redux';

function bookContainer({ totalNumOFBooks, buyBook, sellBook }) {
  return (
    <div>
      <h1>total number of books: {totalNumOFBooks}</h1>
      <button onClick={buyBook}>buy book</button>
      <button onClick={sellBook}>sell book</button>
    </div>
  );
}

// mapStateToProps
const mapStateToProps = (state) => {
  return {
    totalNumOFBooks: state.book.totalNumOFBooks,
  };
};
// mapDispatchToProps
const mapDispatchToProps = (dispatch) => {
  return {
    buyBook: () => dispatch(buyBook()),
    sellBook: () => dispatch(sellBook()),
  };
};
// connect
export default connect(mapStateToProps, mapDispatchToProps)(bookContainer);
