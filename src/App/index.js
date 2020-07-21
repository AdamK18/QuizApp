import React from 'react';
import Home from '../screens/Home'
import QuestionManager from '../screens/QuestionManager'
import store from '../redux/store'
import {Provider} from 'react-redux'
import {BrowserRouter, Route} from 'react-router-dom'
import './styles.css';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Route exact path='/' component={Home}/>
          <Route path='/questionmanager' component={QuestionManager}/>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
