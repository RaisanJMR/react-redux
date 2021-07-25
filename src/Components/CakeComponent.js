import React from 'react';
import { buyCake } from '../redux';
import { useSelector, useDispatch } from 'react-redux';

function CakeComponent() {
  const totalcakes = useSelector((state) => state.cake.totalcakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>total number of cakes: {totalcakes}</h1>
      <button onClick={() => dispatch(buyCake())}>buy cake</button>
    </div>
  );
}

export default CakeComponent;
