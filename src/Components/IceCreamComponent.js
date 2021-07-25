import React from 'react';
import { buyIceCream } from '../redux';
import { useSelector, useDispatch } from 'react-redux';

function IceCreamComponent() {
  const totalIceCream = useSelector((state) => state.iceCream.totalIceCream);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>total number of iceCream: {totalIceCream}</h1>
      <button onClick={() => dispatch(buyIceCream())}>buy icecream</button>
    </div>
  );
}
export default IceCreamComponent;
