import React from 'react';
import './App.css';
import Home from './components/Home/Home'
import store from './redux/store'
import {Provider} from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Home></Home>
      </div>
    </Provider>
  );
}

export default App;
