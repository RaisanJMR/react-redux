import React from 'react';
import BookContainer from './Components/bookContainer';
import { Provider } from 'react-redux';
import store from './redux/store';
import HooksCakecontainer from './Components/hooksCakecontainer';
import IceCreamContainer from './Components/iceCreamContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BookContainer />
        <HooksCakecontainer />
        <IceCreamContainer/>
      </div>
    </Provider>
  );
}

export default App;
