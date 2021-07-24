import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyBook } from '../redux';

function HooksCakecontainer() {
  const totalnumOfBooks = useSelector((state) => state.book.totalNumOFBooks);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>num of books(hooks): {totalnumOfBooks}</h1>
      <button onClick={() => dispatch(buyBook())}>buy cake</button>
    </div>
  );
}

export default HooksCakecontainer;
