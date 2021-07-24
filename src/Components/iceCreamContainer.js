import React from 'react';
import { connect } from 'react-redux';
import { buyIceCream } from '../redux';

function iceCreamContainer({ totalNumOfIceCreams, buyIceCream }) {
  return (
    <div>
      <h1>total number of iceCream: {totalNumOfIceCreams}</h1>
      <button onClick={buyIceCream}>buy iceCream</button>
    </div>
  );
}

// mapStateToProps
const mapStateToProps = (state) => {
  return {
    totalNumOfIceCreams: state.iceCream.totalNumOfIceCreams,
  };
};
// mapDispatchToProps
const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
  };
};
// connect
export default connect(mapStateToProps, mapDispatchToProps)(iceCreamContainer);
