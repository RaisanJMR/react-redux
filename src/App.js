import React from 'react';
import BookContainer from './Components/bookContainer';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
       <BookContainer/>
      </div>
    </Provider>
  );
}

export default App;
