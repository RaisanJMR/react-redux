import React from 'react';
import store from './redux/store';
import { Provider } from 'react-redux';
import CakeComponent from './Components/CakeComponent';
import IceCreamComponent from './Components/IceCreamComponent';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeComponent />
        <IceCreamComponent />
      </div>
    </Provider>
  );
}

export default App;
